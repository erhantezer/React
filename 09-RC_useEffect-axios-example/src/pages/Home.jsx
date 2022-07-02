import AddTutorial from '../components/AddTutorial';
import TutorialList from '../components/TutorialList';
import axios from 'axios';
import {useState, useEffect } from 'react';


const Home = () => {
const [tutorials, setTutorials] = useState()


const url = "https://cw-axios-example.herokuapp.com/api/tutorials";
 
const getTutorials = async () => {
 const {data} = await axios.get(url);
 setTutorials(data);
 
};

//!  sadece component mount olduğunda istek yapar
useEffect(() => {
getTutorials()
},[])


  return (
    <>
      <AddTutorial />
      <TutorialList />
    </>
  );
};

export default Home;
