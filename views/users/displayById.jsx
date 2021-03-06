var React = require("react");

class Display extends React.Component {
  render() {
    //console.log('THIS.PROPS in Display: ', this.props);
    const userQuote = this.props.assoc[0].user_id;
    //console.log('Userquote: ', userQuote);
    const userHeader = 'List of pokemon that User ' + userQuote + ' caught: ';
    const pokeList = this.props.assoc.map(pokemon => {
        return <option>{pokemon.name}</option>
    })
    return (
      <html>
        <head />
        <body>
          <h1> {userHeader}</h1>
          <form>
            <select>
              {pokeList}
            </select>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Display;

