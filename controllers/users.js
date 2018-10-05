var sha256 = require('js-sha256');

const userNew = (request, response) => {
  response.render('users/new');
}


module.exports = (pool) =>{
    return {
        newUser: userNew
    }
}