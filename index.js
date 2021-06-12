'use strict';

const patterns = require("./lib/pattern");
const RegexPattern = require("./lib/.");

class Regex {

    /* 
    * List of flags for regex.
    */
    static OP = {
        GLOBAL: 'g',
        CASE_INSENSITIVE: 'i',
        MULTILINE: 'm'
    }

    /**
     * Method to validate string/text with regex pattern.
     *
     * @param {string} statement text/string that we want to check, EX: 124.
     * @param {string} pattern regex pattern, EX: patterns.NUMBER.
     * @param {Object} options options to set flags, enable/disable debug mode.
     * @returns {boolean} return true if string match with pattern.
     */
    static valid(statement = "", pattern = null, options = {}) {
        if (pattern) {
            return new RegexPattern(statement, pattern, options).validate();
        }
    }

    /**
     * Method to extract groups/data from string/text using given regex pattern.
     *
     * @param {string} statement text/string that we want to check, EX: dev@xyz.io.
     * @param {string} pattern regex pattern, EX: patterns.NUMBER.
     * @param {Object} options options to set flags, enable/disable debug mode.
     * @returns {Object} return matched data in object format. Ex : {key:value}.
     */
    static groups(statement = "", pattern = null, options = {}) {
        if (pattern) {
            return new RegexPattern(statement, pattern, options).getAvailableGroups();
        }
    }
}

module.exports = {
    patterns,
    Regex
};