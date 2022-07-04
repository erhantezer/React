import React from 'react';
import Header from '../components/Header';
import ShowTasks from '../components/ShowTasks';
import starterData from '../helper/starterData'

const Home = () => {

  return (
    <div>
      <Header/>
      <ShowTasks/>
    </div>
  );
  
};

export default Home;
