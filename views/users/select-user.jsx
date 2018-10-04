var React = require("react");

class selectUser extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <form method="POST" action="/">
            <div>
              user ID: <input name="id" type="text" />
            </div>
            <input type="submit" value="Submit" />
            </form>
        </body>
      </html>
    );
  }
}

module.exports = selectUser;
