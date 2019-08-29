// @Author - Srihari Goutham G R

const _ = require('lodash');

const postService = require("../../services/post");
const replyService = require("../../services/reply");
const commentService = require("../../services/comment");

const postCrtAttributes = ["content"];  //create-post
const postSrchAttributes = ["_id"]; //search-post
const postUpdAttributes = ["content", "postId"]; //update-post
const commentUpdAttributes = ["content", "commentId"]; //update-reply

const LIMIT = process.env.LIMIT || 20;
const PAGE_SIZE = 20;
const ORDER_BY = process.env.ORDER_BY || {
    lastUpdatedDateAndTime: -1
};

module.exports = (router) => {
    router.route("/post")
        .post((req, res) => {
            var createdBy = req.header('X-USER');
            try {
                let body = _.pick(req.body, postCrtAttributes);
                body.createdBy = createdBy.toLowerCase();
                postService.save(body).then((response) => {
                    res.status(200).send({
                        status: "200",
                        description: response.description,
                        data: response.data
                    });
                }).catch((error) => {
                    res.status(400).send({
                        status: "400",
                        description: error.description || error.message,
                        data: {}
                    });
                });
            } catch (error) {
                response.status = "400";
                response.data = error;
                response.description = "Something went wrong. Try again later!";
                res.status(400).send(response);
            }
        })
        .get((req, res, next) => {
            try {
                let createdBy = req.header('X-USER');
                let query = _.pick(req.query, postSrchAttributes);
                // query.createdBy = createdBy.toLowerCase();
                postService.getMany(query).then((response) => {
                    res.status(200).send({
                        data: response.data,
                        description: response.description,
                        status: 200
                    });
                }).catch((error) => {
                    res.status(400).send({
                        status: "400",
                        description: error.description || error.message,
                        data: {}
                    });
                });
            } catch (error) {
                res.status(500).send({
                    description: "Something went wrong - Server Error",
                    status: "500"
                });
            }
        });
    router.route("/post/:postId/comment")
        .post((req, res) => {
            var createdBy = req.header('X-USER');
            try {
                let body = _.pick(req.body, postUpdAttributes);
                body.createdBy = createdBy;
                commentService.save(body).then((cmtSvResp) => {
                    postService.addComment(req.params.postId, cmtSvResp.data.commentId).then((response) => {
                        res.status(200).send({
                            status: "200",
                            description: cmtSvResp.description,
                            data: cmtSvResp.data
                        });
                    }).catch((error) => {
                        res.status(400).send({
                            status: "400",
                            description: 'Failed to save Comment',
                            data: {}
                        });
                    })
                }).catch((error) => {
                    res.status(400).send({
                        status: "400",
                        description: error.description || error.message,
                        data: {}
                    });
                });
            } catch (error) {
                res.status(500).send({
                    description: "Something went wrong - Server Error",
                    status: "500"
                });
            }
        })
        .get((req, res, next) => {
            try {
                let createdBy = req.header('X-USER');
                let query = _.pick(req.query, postSrchAttributes);
                postService.getOne(query).then((response) => {
                    res.status(200).send({
                        data: response.data,
                        description: response.description,
                        status: 200
                    });
                }).catch((error) => {
                    res.status(400).send({
                        status: "400",
                        description: error.description || error.message,
                        data: {}
                    });
                });
            } catch (error) {
                res.status(500).send({
                    description: "Something went wrong - Server Error",
                    status: "500"
                });
            }
        });
    router.route("/post/comment/:commentId/reply")
        .post((req, res) => {
            var createdBy = req.header('X-USER');
            try {
                let body = _.pick(req.body, commentUpdAttributes);
                body.createdBy = createdBy;
                replyService.save(body).then((rplSrvResp) => {
                    commentService.addReply(req.params.commentId, rplSrvResp.data.replyId).then((response) => {
                        res.status(200).send({
                            status: "200",
                            description: rplSrvResp.description,
                            data: rplSrvResp.data
                        });
                    }).catch((error) => {
                        res.status(400).send({
                            status: "400",
                            description: 'Failed to save Reply',
                            data: {}
                        });
                    })
                }).catch((error) => {
                    res.status(400).send({
                        status: "400",
                        description: error.description || error.message,
                        data: {}
                    });
                });
            } catch (error) {
                res.status(500).send({
                    description: "Something went wrong - Server Error",
                    status: "500"
                });
            }
        });
};

