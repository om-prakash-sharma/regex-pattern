'use strict'

const { patterns, Regex } = require("../index");
const OP = Regex.OP;

const validateData = () => {
    // to validate 
    const isValidNumber = Regex.valid("124", patterns.NUMBER);
    const isValidEmail = Regex.valid("dev@xyz.io", patterns.EMAIL, { flags: [OP.CASE_INSENSITIVE] });
    const isBoolean = Regex.valid("abc", patterns.BOOLEAN);

    console.log('> regex-pattern | test.js | : isValidNumber > ', isValidNumber);
    console.log('> regex-pattern | test.js | : isValidEmail > ', isValidEmail);
    console.log('> regex-pattern | test.js | : isBoolean > ', isBoolean);

    // to extract data
    const { digit, decimal } = Regex.groups("124.56", patterns.NUMBER);
    const { email, domain } = Regex.groups("dev@xyz.io", patterns.EMAIL, { flags: [OP.CASE_INSENSITIVE] });

    console.log('> regex-pattern | test.js | digit & decimal > ', digit, decimal);
    console.log('> regex-pattern | test.js | email & domain > ', email, domain);
}

validateData();