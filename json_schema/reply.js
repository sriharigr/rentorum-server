var replyModelSchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
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
    },
    "required": [
        "content"
    ]
};
export const schema = replyModelSchema;