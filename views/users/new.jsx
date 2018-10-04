var React = require('react');

class NewUser extends React.Component {
  render() {
    return (
      <div>
        <h1>New User - Register</h1>
        <form action="/users" method="POST">
            <p>
                name: <input type="text" name="name" />
            </p>
            <p>
                password: <input type="text" name="password" />
            </p>
            <input type="submit"/>
        </form>
      </div>
    );
  }
}

module.exports = NewUser;