class api_error extends Error {
  constructor(
    statuscode,
    message = "An error occurred while processing your request",
    error = [],
    stack = ""
  ) {
    super(message);
    this.statuscode = statuscode;      // HTTP status code (e.g., 404, 500)
    this.message = message;            // Error message
    this.data = null;                  // Optional data (default: null)
    this.success = false;              // Indicates failure
    this.error = error;                // Additional error details

    if (stack) {
      this.stack = stack;              // Custom stack trace if provided
    } else {
      Error.captureStackTrace(this, this.constructor); // Default stack trace
    }
  }
}

export { api_error };