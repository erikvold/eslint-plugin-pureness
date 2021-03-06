"use strict";

var treatAsArray = require('./utils').treatAsArray;

module.exports = function (filename, masks) {
    filename = filename.toLowerCase();

    return treatAsArray(masks)
        .map(function (mask) {
            return mask && mask.toLowerCase();
        })
        .some(function (mask) {
            return mask && (mask === '*' || filename.indexOf(mask) > -1);
        });
};
