'use strict'

const patterns = require("./lib/pattern");
const RegexPattern = require("./lib/.");

class Regex {

    static OP = {
        GLOBAL: 'g',
        CASE_INSENSITIVE: 'i',
        MULTILINE: 'm'
    }

    static valid(statement = "", pattern = null, options = {}) {
        if (pattern) {
            return new RegexPattern(statement, pattern, options).validate();
        }
    }

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