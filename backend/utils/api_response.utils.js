class api_response {
    constructor(statuscode, message = "success", data) {
        this.statuscode = statuscode;                  // HTTP status code (e.g., 200, 201)
        this.message = message;                        // Response message
        this.data = data;                              // Payload data
        this.success = statuscode >= 200 && statuscode < 400; // Indicates success based on status code
    }
}

export { api_response };