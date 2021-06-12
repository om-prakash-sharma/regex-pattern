'use strict';

class RegexPattern {

    constructor(statement = "", pattern = null, options = {}) {
        this.statement = statement;
        this.pattern = pattern;
        this.flag = "g";
        if (options.flags && Array.isArray(options.flags) && options.flags.length) {
            this.flag = Array.from(new Set([...options.flags, 'g'])).join("");
        }
        this.debug = options.debug || false;
    }

    /**
     * Method to validate string/text with regex pattern.
     *
     * @returns {boolean} return true if string match with pattern.
     */
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

    /**
     * Method to extract group/specfic data from string using regex pattern.
     *
     * @returns {Object} return object with matched group/pattern data in object.
     */
    getAvailableGroups() {
        let output = {};
        try {
            if (this.pattern) {
                const regexObj = new RegExp(this.pattern, this.flag);
                const result = regexObj.exec(this.statement);
                if (result && result.groups) {
                    return Object.assign({}, result.groups);
                }
            }
        } catch (error) {
            logs(error, true);
        }
        return output
    }

    /**
     * Method to enable/disable debug logs .
     *
     * @param {string} msg - Text/string that we want to log in console.
     * @param {boolean} [isError=false] - Error flag if true then use console.error else console.log.
     * @returns 
     */
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

module.exports = RegexPattern;