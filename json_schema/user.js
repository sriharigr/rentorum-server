var userModelSchema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
    "properties": {
      "username": {
        "type": "string",
        "minLength": 3,
        "maxLength": 50,
        "pattern": "^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$",
        "message": {
          "required": "Username is required",
          "minLength": "Username does not meet minimum length of 3",
          "maxLength": "Username exceeds maximum length of 50",
          "pattern": "Username can contain Only Alphabets / Only Single Space between words"
        }
      },
      "createdDateAndTime": {
        "type": "string",
        "format": "date-time"
      }
    },
    "required": [
      "username"
    ]
  };
export const schema = userModelSchema;