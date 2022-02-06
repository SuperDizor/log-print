class Print {
    static print(text, type, colorSelected) {

        var cNormal = "";
        var cReset = "\x1b[0m";
    
        if (colorSelected === undefined) var color = cNormal;
        if (colorSelected === 'red') var color = "\x1b[31m";
        if (colorSelected === 'blue') var color = "\x1b[34m";
        if (colorSelected === 'yellow') var color = "\x1b[33m";
        if (colorSelected === 'green') var color = "\x1b[32m";
        if (colorSelected === 'cyan') var color = "\x1b[36m";
        if (colorSelected === 'magenta') var color = "\x1b[35m";

        if (type === 'info') var typeColor = "\x1b[32m";
        if (type === 'debug') var typeColor = "\x1b[36m";
        if (type === 'error') var typeColor = "\x1b[31m";
        if (type === 'warn') var typeColor = "\x1b[33m";

        var timestamp = new Date().toLocaleDateString() + "|" + new Date().toLocaleTimeString();

        if (type !== 'info' && type !== 'debug' && type !== 'error' && type !== 'warn') {
            // without type
            console.log(timestamp + " " + color + text + cReset);
        } else {
            // with type
            console.log(timestamp + typeColor + " [" + type.toUpperCase() + "] " + cReset + color + text + cReset);
        }
      }
}

module.exports = Print;
