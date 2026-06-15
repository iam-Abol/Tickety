import { CustomError } from "./custom-error";

export class NoteFoundError extends CustomError {
  statusCode = 404;
  constructor() {
    super("Route not found.");
    Object.setPrototypeOf(this, NoteFoundError.prototype);
  }
  serializeErrors() {
    return [{ message: "Not Found" }];
  }
}
