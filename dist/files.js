"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.write = exports.read = void 0;
var fs = require("fs");
var path = require("path");
exports.read = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path.join(__dirname, "..", fileName), function (error, data) {
            if (error)
                return reject(error);
            resolve(data.toString());
        });
    });
};
exports.write = function (fileName, data) {
    return new Promise(function (resolve, reject) {
        fs.writeFile(path.join(__dirname, "..", "icons", fileName), data, function (error) {
            if (error)
                return reject(error);
            resolve();
        });
    });
};
