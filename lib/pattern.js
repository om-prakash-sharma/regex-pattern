'use strict'

const patterns = {
    EMAIL: /^(?<email>[a-z0-9\.\-\_]+)\@(?<domain>[a-z0-9\-\_]+\.[a-z]+)$/,
    NUMBER: /^(?<digit>\d+)(?<decimal>\.\d+)?$/,
    NUMBER_INT: /^(?<digit>\d+)$/,
    NUMBER_DECIMAL: /^(?<digit>\d+)?(?<decimal>\.\d+)$/,
    BOOLEAN: /^(0)|(1)|(true|false)$/,
    LOWER_CASE: /^[a-z-_\d\s]+$/,
    UPPER_CASE: /^[A-Z-_\d\s]+$/,
}

module.exports = patterns;