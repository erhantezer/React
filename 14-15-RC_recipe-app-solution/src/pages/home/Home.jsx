import HomeStyle from './Home.style'
import axios from 'axios';
import Header from '../../components/header/Header'
import { useEffect, useState } from 'react';
const Home = () => {
const APP_ID ="f6edb9f6";
const APP_KEY ="4ab957a75da653a00a88eb87864b8139";

const mealType=["Breakfast","Lunch","Dinner","Snack","Teatime"]
const [query, setQuery] = useState("");
const [selectedMeal, setSelectedMeal] = useState("");
const [recipes, setRecipes] = useState("");


const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

const getData = async() => {
  try {
    const {data} = await axios.get(url);
  setRecipes(data.hits)
  } catch (error) {
    console.log(error);
  }
  
}


  return (
    <div>
      <Header setQuery={setQuery} setSelectedMeal={setSelectedMeal} mealType={mealType} getData={getData}/>
    </div>
  )
}

export default Home