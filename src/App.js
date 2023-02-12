import { useEffect, useState } from 'react';
import './App.css';
import Flip from './Flip';
import SearchedRecipesComponent from './SearchedRecipesComponent';

function App() {

const API_ID = `554997de`;  
const API_KEY = `cd004ad3bfa23c3ed3c06361eb4a1590`;

const [search, setSearch] = useState('');
const [wordSubmit, setWordSumbit] = useState('raspberry');
const [searchedRecipes, setSearchedRecipes] = useState([]);


useEffect(() => {
  const getRecipe = async() => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmit}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await response.json();
    console.log(data.hits)
    setSearchedRecipes(data.hits)
  }
  getRecipe()
}, [wordSubmit])


const myRecipeSearch = (e) => {
  setSearch(e.target.value)
  console.log(e.target.value)
}

const submitName = (e) => {
  e.preventDefault();
  setWordSumbit(search)
}


  return (
    <div className="App">
      <div className='intro'>

      <div className='container'>
        <h1>WORLD RECIPES</h1>
        <h2 className='header-h2'>It is a large library of over 2 million recipes from around the world.</h2>
      </div>

      <div className='container'>
        <form onSubmit={submitName}>
        <input className='search' placeholder='Search by main ingredient to find your favourite recipe'
        onChange={myRecipeSearch} value={search}>
        </input>
        </form>
      </div>

      </div> 

      <Flip/>

      <div className='recipes-container'>
        {searchedRecipes.map(element => (
          <SearchedRecipesComponent 
          id={element}
          label={element.recipe.label} 
          image={element.recipe.image}
          ingredients={element.recipe.ingredientLines}
          calories={element.recipe.calories}
          weight={element.recipe.totalWeight}
          fat={element.recipe.totalNutrients.FAT.quantity}
          protein={element.recipe.totalNutrients.PROCNT.quantity}
          carbohydrates={element.recipe.totalNutrients.CHOCDF.quantity}/>
        ))}
    
      </div>
      
    </div>
  );
}

export default App;
