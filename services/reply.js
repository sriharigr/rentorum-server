const dao = require("../dao/reply");


module.exports.save = (object) => {
    return new Promise((resolve, reject) => {
        try {
            dao.save(object).then((response) => {
                resolve({
                    data: {
                        replyId: response._id
                    },
                    description: 'Reply Saved Successfully',
                    status: 200
                });
            }).catch((error) => {
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





