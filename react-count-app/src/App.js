import React, {useEffect,useState,useCallback,useRef} from "react";
import './App.css';
import Recipe from "./Recipe";




function App() {
  const APP_ID = "07aaa121";
  const APP_KEY = "2c5ac31ea4792a4b9b485eb7b9bd2947";
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [search,setSearch] = useState("");
  const [query,setQuery] = useState("chicken");
  const [recipes,setRecipes] = useState([]);

const getRecipes = useCallback(async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);
},[query]);
const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch("");
};

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    getRecipes();
  }, [query,getRecipes]);

  return (
    <div className="App">
      <form onSubmit={getSearch}>
        <input ref={inputRef}type="text" value={search} onChange={updateSearch}/>
        <button type="submit">Search</button>
      </form>
      <div>
        {recipes.map(recipe => (
          <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}/>
        ))}
      </div>
    </div>
  )
};




export default App;
