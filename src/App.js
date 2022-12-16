import {Component} from 'react';
import CardList from "./components/CardList/CardList.jsx";
import './App.css';

import SearchBox from "./components/SearchBar/SearchBox.jsx"

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
      
    }
  
  };

  componentDidMount() {
    let pokemonArrayComplete = []
    const findPokemon = () => {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=200.")
      .then((res) => res.json())
      .then((pokemonArray) => {
        
        pokemonArray.results.forEach((pokemon) => {
          fetchPokemonData(pokemon.url)})
        })
    } ;
    findPokemon()

    const fetchPokemonData = (pokemon) => {
      fetch(pokemon)
      .then((response) => response.json())
      .then((pokeData) => {
        pokemonArrayComplete.push(pokeData)
        return this.setState({monsters: pokemonArrayComplete, searchField: ""})
      })
    }  
  }
    
  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase()
    this.setState(() => {
      return {searchField}
    });
  }
  
  render() {
    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    });
    return (
      <div className="App">
          <h1 className="app-title">Pokemon Rolodex</h1>
          <SearchBox onChangeHandler={onSearchChange} placeholder="Search Monsters" className="search-box"/>
          <CardList monsters={filteredMonsters}/>
      </div>
  );
  }};


export default App;
