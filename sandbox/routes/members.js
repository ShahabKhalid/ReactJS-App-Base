const membersData = require('../../playground/members');

const routes = (app) => {
    app.route('/members')
    .get((req, res, next) => {
        res.jsonp(membersData);
    })
}

module.exports = routes;