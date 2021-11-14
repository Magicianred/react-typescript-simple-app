/**
 * ErrorMessage Model definition
 * @class ErrorMessage
 * @property {string} field
 * @property {string} message
 */
class ErrorMessage {
    field: string;
    message: string;

    constructor(field: string, message: string) {
        this.field = field;
        this.message = message;
    }
}

export default ErrorMessage;