const fs = require("fs");
const calc = require("./calc");
fs.readFile("input.txt", { encoding: "utf8", flag: "r" }, function (err, data){
    if (err) return console.error(err);
    else
    {
        let result = 0;
        const lines = data.split(/\r?\n/);

        for (let i = 0; i < lines.length; i += 3) {
        result = calc(lines[i], lines[i + 1], lines[i + 2]);
        console.log(result);
        result = result.toString() + "\n";
        fs.writeFile("output.txt", result, { flag: "a+" }, function (err) {
            if (err) throw err;
          });
        }
    }
});