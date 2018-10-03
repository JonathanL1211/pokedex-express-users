var React = require("react");

class Catch extends React.Component {
  render() {

    console.log('THIS.PROPS FOR CATCH: ', this.props);
    //let actionUrl = '/users/' +

    return (
      <html>
        <head />
        <body>
          <form className="user-form" method="POST" action="/users">
            <div className="user-attribute">
              User ID:<input name="user_id" type="text" />
            </div>
            <br />
            <div className="user-attribute">
              Pokemon ID<input name="pokemon_id" type="text" />
            </div>
            <br/>
            <input type="submit" value="Submit" />
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Catch;
