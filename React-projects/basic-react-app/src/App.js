import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import data from './util/data';
import './scss/App.scss';



const App = () => {
  console.log(data);
  return (
    <div>
     <Header/>
     <Card data={data}/>
     <Footer/>

    </div>
  )
}

export default App