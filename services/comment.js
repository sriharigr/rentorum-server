const dao = require("../dao/comment");


module.exports.save = (object) => {
    return new Promise((resolve, reject) => {
        try {
            dao.save(object).then((response) => {
                resolve({
                    data: {
                        commentId: response._id
                    },
                    description: 'Comment Saved Successfully',
                    status: 200
                });
            }).catch((error) => {
                reject({
                    data: {},
                    description: error.description ? error.description : 'Failed to Save',
                    status: 400
                });
            });
        } catch (error) {
            reject({
                data: {},
                description: error.message ? error.message : 'Unable to save',
                status: 400
            });
        }
    });
}

module.exports.addReply = (commentId, replyId) => {
    return new Promise((resolve, reject) => {
        try {
            var updateQuery = {
                $push : {
                    replies : replyId
                }
            };
            dao.update(commentId, updateQuery).then((response) => {
                console.log('Comment Updated Successfully');
                resolve({
                    data: {},
                    description: 'Comment Updated Successfully',
                    status: 200
                });
            }).catch((error) => {
                console.log("ERRROR ", JSON.stringify(error));
                reject({
                    data: {},
                    description: error.description ? error.description : 'Failed to Save',
                    status: 400
                });
            })
        } catch (error) {
            reject({
                data: {},
                description: error.message ? error.message : 'Unable to save',
                status: 400
            });
        }
    });
}