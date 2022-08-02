import { useState } from 'react';
import { ToastContainer} from 'react-toastify';
import './App.css';
import Contacts from './components/contact/Contacts';
import FormComponent from './components/form/FormComponent';
import { AddUser, UpdateUser } from './utils/functions';

const initialValue = {username:"", phone:"", gender:""}

function App() {
  const [info, setInfo] = useState(initialValue);
  const [isAdd,setIsAdd]=useState("ADD")
  
//? SADECE FORM İŞLEMİNİ BURDA YAPTIK
  const handleSubmit = (e) => {
   e.preventDefault();
   if(info.id){
    UpdateUser(info)
  }
  else{
    AddUser(info)
  }
  setInfo(initialValue);
  setIsAdd("ADD")
  }


  //? EDİT OLAYI YENİ BİR İNFO DEĞERİ OLUŞTURMAK VE BUNU FORMA AKTARMAKTIR
  const editUser=(id,username,phone,gender)=>{
    setIsAdd("UPDATE")
    setInfo({id,username,phone,gender})
  }

  return (
    <div className="App">
      <FormComponent info={info} setInfo={setInfo} handleSubmit={handleSubmit} isAdd={isAdd}/>
      <Contacts editUser={editUser}/>
      <ToastContainer/>
    </div>
  );
}

export default App;
