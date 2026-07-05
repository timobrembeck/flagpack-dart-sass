const sass = require("sass");
const path = require("path");
const fs = require("fs");
const pathToFlagStyles = path.join(__dirname, "../src/");

exports.compile = function (input, output) {
  try {
    const result = sass.compile(path.join(pathToFlagStyles, input + ".scss"), {
      style: "compressed",
    });
    fs.writeFileSync(
      path.join(__dirname, "../dist/", output + ".css"),
      result.css,
    );
    console.log("File written to: ", pathToFlagStyles);
  } catch (err) {
    console.error(err.message ?? err);
    process.exitCode = 1;
  }
};
