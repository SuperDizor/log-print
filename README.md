# log-print
Simple log system with colors, timestamp and type

![alt text](https://i.imgur.com/1pdcJLg.png)

## Using example
```js
const log = require("./lib/print");

log.print("info-blue", "info", "blue");
log.print("debug-blue", "debug", "blue");
log.print("warn-blue", "warn", "blue");
log.print("error-blue", "error", "blue");

```

### Arguments 
- `text`  - text
- `type` - info, debug, warn, error
- `color` - red, blue, yellow, green, cyan, magenta
