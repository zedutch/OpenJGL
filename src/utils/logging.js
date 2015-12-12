function Log(){}

Log.error = function (message, source) {
    log(message, source, LogLevel.ERROR);
};

Log.info = function (message, source) {
    log(message, source, LogLevel.INFO);
};

Log.log = function (message, source) {
    log(message, source, LogLevel.LOG);
};

Log.debug = function (message, source) {
    log(message, source, LogLevel.DEBUG);
};

Log.warning = function (message, source) {
    log(message, source, LogLevel.WARNING);
};

function log(message, source, logLevel) {
    if (typeof source === 'undefined') {
        throw new InvalidArgumentError("source", "You must provide a source when logging a message!");
    }
    if (typeof logLevel === 'undefined') {
        logLevel = LogLevel.INFO;
    } else if (typeof logLevel !== 'string') {
        throw new InvalidArgumentError("logLevel", "The logging level can either be null or a value from the LogLevel enum. Was: " + (typeof logLevel));
    }

    var MAX_SOURCE_LENGTH = 25;

    var d = new Date();
    var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds();
    var padding = "";
    var sLength = source.toString().length;

    if (sLength > MAX_SOURCE_LENGTH) {
        var source = source.toString().substr(0, MAX_SOURCE_LENGTH - 4) + "... ";
    } else {
        for (var i = 0; i < MAX_SOURCE_LENGTH - sLength; i++) {
            padding += " ";
        }
    }

    var logMessage = source + padding + "[" + time + "]\t" + message;

    switch (logLevel) {
    case LogLevel.ERROR:
        console.error(logMessage);
        break;
    case LogLevel.INFO:
        console.info(logMessage);
        break;
    case LogLevel.LOG:
        console.log(logMessage);
        break;
    case LogLevel.DEBUG:
        console.debug(logMessage);
        break;
    case LogLevel.WARNING:
        console.warn(logMessage);
        break;
    default:
        throw new InvalidArgumentError("logLevel", "Invalid log level: " + logLevel);
    }
}

LogLevel = Object.freeze({
    ERROR: "error",
    INFO: "info",
    LOG: "log",
    DEBUG: "debug",
    WARNING: "warning"
});