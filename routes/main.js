const noAuthRoutes = ["/user/verify"];
const user = require('../services/user');
const _ = require('lodash');



module.exports = (router) => {
    router.use(function (request, response, next) {
        try {
            // if (_.includes(noAuthRoutes, request.path)) {
                // if (_.includes(noAuthRoutes, request.path)) {
            require('./api/api')(router);
                next();
            // } else if (!_.isEmpty(request.header('authorization'))) {
            //     user.verify(request.header('x-user')).then((mResponse) => {
            //         require('./api/api')(router);
            //         next();
            //     }).catch((error) => {
            //         response.status(400).send({
            //             description: error.description,
            //             status: error.status
            //         });
            //     });
            // } else {
            //     response.status(400).send({
            //         description: 'Bad Request - Mandatory Headers Missing',
            //         status: '400'
            //     });
            // }
        }
        catch (error) {
            response.status(500).send({
                description: "Something went wrong - Server Error",
                status: "500"
            });
        }
    });
}
