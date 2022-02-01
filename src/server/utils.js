const crypto = require('crypto');
const EventEmitter = require('events');

function coerce(val) {
    if (val instanceof Error) {
        return val.stack || val.message;
    }
    return val;
}


const formatters = {
    o:function (v) {
        try {
            return JSON.stringify(v);
        } catch (error) {
            return '[UnexpectedJSONParseError]: ' + error.message;
        }
    },
    O:function (v) {
        try {
            return JSON.stringify(v);
        } catch (error) {
            return '[UnexpectedJSONParseError]: ' + error.message;
        }
    },
    j: function (v) {
        try {
            return JSON.stringify(v);
        } catch (error) {
            return '[UnexpectedJSONParseError]: ' + error.message;
        }
    }
};

function createDebugger(logFn) {

    function debug(...args) {
        // // Disabled?
        // if (!debug.enabled) {
        //     return;
        // }

        const self = debug;

        // // Set `diff` timestamp
        // const curr = Number(new Date());
        // const ms = curr - (prevTime || curr);
        // self.diff = ms;
        // self.prev = prevTime;
        // self.curr = curr;
        // prevTime = curr;

        args[0] = coerce(args[0]);

        if (typeof args[0] !== 'string') {
            // Anything else let's inspect with %O
            args.unshift('%O');
        }

        // Apply any `formatters` transformations
        let index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            // If we encounter an escaped % then don't increase the array index
            if (match === '%%') {
                return '%';
            }
            index++;
            const formatter = formatters[format];
            if (typeof formatter === 'function') {
                const val = args[index];
                match = formatter.call(self, val);

                // Now we need to remove `args[index]` since it's inlined in the `format`
                args.splice(index, 1);
                index--;
            }
            return match;
        });

		logFn.apply(self, args);
    }

    return debug;
}

module.exports = { createDebugger, crypto, EventEmitter } ;