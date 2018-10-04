var React = require('react');

class NewUser extends React.Component {
  render() {
    return (
      <div>
        <h1>New User - Register</h1>
        <h2>Please enter your desired username and password</h2>
        <form action="/users" method="POST">
            <p>
                Name: <input type="text" name="name" />
            </p>
            <p>
                Password: <input type="text" name="password" />
            </p>
            <input type="submit"/>
        </form>
      </div>
    );
  }
}

module.exports = NewUser;