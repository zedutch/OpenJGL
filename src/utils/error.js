/**
 * Creates a new "Invalid Argument" error.
 * 
 * @param {string} argument The name of the argument that's invalid.
 * @param {string} message  A message to clarify what is invalid about the argument.
 */
function InvalidArgumentError(argument, message) {
    "use strict";
    this.name = "InvalidArgumentError";
    this.message = "Error for field '" + argument + "': " + message;
}

InvalidArgumentError.prototype = Error.prototype;

/**
 * Creates a new generic OJGL error.
 * 
 * @param {string} message A message describing what caused this error to be thrown.
 */
function OJGLError(message) {
    "use strict";
    this.name = "OJGLError";
    this.message = message;
}

OJGLError.prototype = Error.prototype;