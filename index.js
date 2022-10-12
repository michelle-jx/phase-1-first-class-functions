const { spy } = require("chai");

function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function callback() {}
}

function returnsAnAnonymousFunction() {
    return () => {}
}