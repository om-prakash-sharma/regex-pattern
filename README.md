# Regex-pattern
This regex-pattern is used to ***match***, ***validate*** and **extract data** from string using **Regex Pattern**.

## Key Features

 - collections of pre-defined regex pattern for common validations
 - test regex patterns
 - extract data from string using custom or pre-defined regex patterns
 - more features coming soon 😊

## Installation

   To install using npm

    $ npm install validate-regex
   
   To install using yarn

    $ yarn add validate-regex

## Usage 
To match or validate text/string, use **valid** function
```js

    const { Regex, patterns } = require("validate-regex");
    const  OP = Regex.OP;
    
    // To validate number only
    const  isValidNumber = Regex.valid("124", patterns.NUMBER);
    
    // To validate email address
    const  isValidEmail = Regex.valid("dev@xyz.io", patterns.EMAIL, { flags: [OP.CASE_INSENSITIVE] });
    
    // To validate boolean value
    const  isBoolean = Regex.valid("abc", patterns.BOOLEAN);
    
   ``` 
    
To extract matched data/value from string or text, use **groups** function
```js

    const { Regex, patterns } = require("validate-regex");
    const  OP = Regex.OP;
    
    // To extract digit and decimal value from number
    const { digit, decimal } = Regex.groups("124.56", patterns.NUMBER);
    // output : digit = 124, decimal = .56
    
    // To extract email address value
    const { email, domain } = Regex.groups("dev@xyz.io", patterns.EMAIL, { flags: [OP.CASE_INSENSITIVE] });
    // output : email = dev, domain = xyz.io
    