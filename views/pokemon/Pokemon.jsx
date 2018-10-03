var React = require("react");

class Pokemon extends React.Component {
  render() {
    console.log('THIS.PROPS for pokemon: ', this.props);
    const mapPokemon = this.props.pokemon.map(pokemon =>{
        return <li>{pokemon.name}</li>
    });
    return (
      <html>
        <head />
        <body>
          <div>
            <ul className="pokemon-list">
              <p>List of name who had captured this pokemon: {mapPokemon}</p>
            </ul>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Pokemon;
