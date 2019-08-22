'use strict';

const dao = require("../dao/post");
// const postQueryAttr = [""]

module.exports.save = (object) => {
    return new Promise((resolve, reject) => {
        try {
            object.createdDateAndTime = object.lastUpdatedDateAndTime = new Date().toISOString();
            dao.save(object).then((response) => {
                resolve({
                    data: {
                        postId: response._id
                    },
                    description: 'Post Saved Successfully',
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
module.exports.getComments = (postId) => {
    return new Promise((resolve, reject) => {
        try {
            console.log('The Post Id is ', postId);
            var populate = {
                path: 'comments',
                model: 'comment'
            };
            var sortBy = { lastUpdatedDateAndTime: -1 };
            dao.getMany(postId, populate, sortBy).then((response) => {
                resolve({
                    data: {},
                    description: 'Post Updated Successfully',
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

module.exports.addComment = (postId, commentId) => {
    return new Promise((resolve, reject) => {
        try {
            console.log('The Comment Id is ', commentId);
            var updateQuery = {
                $push: {
                    comments: commentId
                }
            };
            dao.update(postId, updateQuery).then((response) => {
                resolve({
                    data: {},
                    description: 'Post Updated Successfully',
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

module.exports.getMany = (query, sortBy) => {
    return new Promise((resolve, reject) => {
        try {
            console.log('Inside post service get()');
            sortBy = { lastUpdatedDateAndTime: -1 };
            dao.getMany(query, sortBy).then((response) => {
                resolve({
                    data: response,
                    description: 'Posts Fetched Successfully',
                    status: 200
                });
            }).catch((error) => {
                reject({
                    data: {},
                    description: error.description ? error.description : 'Failed to Fetch Posts',
                    status: 400
                });
            })
        } catch (error) {
            console.log('Inside post service get() try catch error ', JSON.stringify(error));
            reject({
                data: {},
                description: error.message ? error.message : 'Failed to Fetch Posts',
                status: 400
            });
        }
    });
}
module.exports.getOne = (query) => {
    return new Promise((resolve, reject) => {
        try {
            var populate = {
                path: 'comments',
                model: 'comment',
                populate: {
                    path: 'replies',
                    model: 'reply'
                }
            };
            console.log('in get one')
            dao.get(query, populate).then((response) => {
                resolve({
                    data: response,
                    description: 'Posts Fetched Successfully',
                    status: 200
                });
            }).catch((error) => {
                reject({
                    data: {},
                    description: error.description ? error.description : 'Failed to Fetch Posts',
                    status: 400
                });
            })
        } catch (error) {
            console.log('Inside post service get() try catch error ', JSON.stringify(error));
            reject({
                data: {},
                description: error.message ? error.message : 'Failed to Fetch Posts',
                status: 400
            });
        }
    });
}