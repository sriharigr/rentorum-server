var postModelSchema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "content": {
      "type": "string",
      "minLength": 1,
      "maxLength": 1000,
      "message": {
        "required": "Content is required",
        "minLength": "Content does not meet minimum length of 1",
        "maxLength": "Content exceeds maximum length of 1000"
      }
    },
    "comments": {
      "type": "array",
      "properties": {
        "content": {
          "type": "string",
          "minLength": 1,
          "maxLength": 750,
          "message": {
            "required": "Content is required",
            "minLength": "Content does not meet minimum length of 1",
            "maxLength": "Content exceeds maximum length of 750"
          }
        },
        "replies": {
          "type": "array",
          "properties": {
            "content": {
              "type": "string",
              "minLength": 1,
              "maxLength": 500,
              "message": {
                "required": "Content is required",
                "minLength": "Content does not meet minimum length of 1",
                "maxLength": "Content exceeds maximum length of 500"
              }
            },
            "createdDateAndTime": {
              "type": "string",
              "format": "date-time"
            },
            "createdBy": {
              "type": "string"
            },
            "lastUpdatedDateAndTime": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "createdDateAndTime": {
          "type": "string",
          "format": "date-time"
        },
        "createdBy": {
          "type": "string"
        },
        "lastUpdatedDateAndTime": {
          "type": "string",
          "format": "date-time"
        }
      }
    },
    "createdDateAndTime": {
      "type": "string",
      "format": "date-time"
    },
    "createdBy": {
      "type": "string"
    },
    "lastUpdatedDateAndTime": {
      "type": "string",
      "format": "date-time"
    }

  },
  "required": [
    "content"
  ]
};
module.exports.schema = postModelSchema;