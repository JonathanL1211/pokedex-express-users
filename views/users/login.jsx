var React = require('react');

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form action="/users/status" method="POST">
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

module.exports = Login;