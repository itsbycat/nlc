const fs = require("fs")

fs.readFile("./input.txt", "utf-8", (err, data) => {
    if (err) throw err;

    table = JSON.parse(data)

    Object.keys(table).forEach(element => {
        loc = []
        file = element + ".json"
        loc = table[element]
        fs.writeFileSync(`./nade_helper_data/${file}`, JSON.stringify(loc, null, 2))
    });
})