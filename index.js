'use strict'

const patterns = require("./pattern");

class RegPattern {

    static OP = {
        GLOBAL: 'g',
        CASE_INSENSITIVE: 'i',
        MULTILINE: 'm'
    }

    constructor(statement = "", pattern = null, options = {}) {
        this.statement = statement;
        this.pattern = pattern;
        this.flag = "g";
        if (options.flags && Array.isArray(options.flags) && options.flags.length) {
            this.flag = Array.from(new Set(options.flags)).join("");
        }
        this.debug = options.debug || false;
    }

    validate() {
        try {
            if (this.pattern) {
                return new RegExp(this.pattern, this.flag).test(this.statement);
            }
            return false;
        } catch (error) {
            logs(error, true);
            return false;
        }
    }

    groups() {
        let output = {};
        try {
            if (this.pattern) {
                const regexObj = new RegExp(this.pattern, this.flag);
                const result = regexObj.exec(this.statement);
                if (result && result.groups) {
                    return result.groups;
                }
            }
        } catch (error) {
            logs(error, true);
        }
        return output
    }

    logs(msg = "", isError = false) {
        if (this.debug && msg) {
            if (isError) {
                console.error("regex-pkg error> ", msg && msg.message ? msg.message : msg);
            } else {
                console.info("regex-pkg > ", msg);
            }
        }
    }
}

module.exports = {
    patterns,
    RegPattern
};