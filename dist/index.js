"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var files_1 = require("./files");
var widths_1 = require("./widths");
var colors = require("./colors.json");
var templates = [];
var leftMargin = function (code) {
    var totalWidth = 128;
    var width = 0;
    code.split("").forEach(function (character) {
        character = character.toUpperCase();
        if (widths_1.widths[character])
            width += widths_1.widths[character];
    });
    return Math.floor((totalWidth - width) / 2);
};
console.log("Generating " + Object.keys(colors).length + " icons...");
files_1.read("one-color.svg")
    .then(function (oneColor) { return templates.push(oneColor); })
    .then(function () { return files_1.read("two-colors.svg"); })
    .then(function (twoColors) { return templates.push(twoColors); })
    .then(function () { return files_1.read("three-colors.svg"); })
    .then(function (threeColors) { return templates.push(threeColors); })
    .then(function () { return Object.keys(colors); })
    .then(function (keys) {
    return keys.map(function (code) {
        return files_1.write(code + ".svg", templates[colors[code].length ? colors[code].length - 1 : 1]
            .replace("LANGUAGE_CODE", code.toUpperCase())
            .replace("x=\"20\"", "x=\"" + leftMargin(code) + "\"")
            .replace("COLOR_1", colors[code].length ? colors[code][0] : "#2980b9")
            .replace("COLOR_2", colors[code][1])
            .replace("COLOR_3", colors[code][2]));
    });
})
    .then(function (promises) { return Promise.all(promises); })
    .then(function () { return console.log("Icons are generated!"); })
    .catch(function (error) { return console.log("Error", error); })
    .then(function () { return process.exit(); });
