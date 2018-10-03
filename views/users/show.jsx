var React = require("react");

class Show extends React.Component {
  render() {
    console.log('THIS.PROPS: ', this.props);
    const pokeList = this.props.assoc.map(pokemon => {
        return <li>{pokemon.name}</li>
    })
    return (
      <html>
        <head />
        <body>
          <h1>Welcome to Pokedex</h1>
          <ul>
              {pokeList}
          </ul>
        </body>
      </html>
    );
  }
}

module.exports = Show;

/*<ul>
            {this.props.pokemon.map(pokemon => (
              <li key={pokemon.id}>
                {pokemon.name}
              </li>
            ))}
          </ul>
          )
          */