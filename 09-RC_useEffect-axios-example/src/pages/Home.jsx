import AddTutorial from '../components/AddTutorial';
import TutorialList from '../components/TutorialList';
import axios from 'axios';
import {useState, useEffect } from 'react';


const Home = () => {
const [tutorials, setTutorials] = useState()


const url = "https://cw-axios-example.herokuapp.com/api/tutorials";
 
const getTutorials = async () => {
  try{
    const {data} = await axios.get(url);
    setTutorials(data);
  }catch(error){
    console.log(error);
  }
  
};

//!  sadece component mount olduğunda istek yapar
useEffect(() => {
getTutorials()
},[])


//! Post (create)
const addTutorial = async (tutorial) => {
  try{
    await axios.post(url,tutorial)
  }catch(error){
    console.log(error);
  }
  getTutorials()
}

const deleteTutorial = () => {

}
  return (
    <>
      <AddTutorial addTutorial={addTutorial}/>
      <TutorialList tutorials ={tutorials} deleteTutorial={deleteTutorial}/>
    </>
  );
};

export default Home;
