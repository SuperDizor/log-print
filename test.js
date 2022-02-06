const log = require("./lib/print");

log.print("info-blue", "info", "blue");
log.print("debug-blue", "debug", "blue");
log.print("warn-blue", "warn", "blue");
log.print("error-blue", "error", "blue");

log.print("info-nocolor", "info");
log.print("debug-nocolor", "debug");
log.print("warn-nocolor", "warn");
log.print("error-nocolor", "error");

log.print("blue-color", "blue");