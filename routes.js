var reRoute = (app,pool) => {
    const usersControllerFunction = require('./controllers/users')(pool);

    app.get('/users/new', usersControllerFunction.newUser);
}

module.exports = reRoute;