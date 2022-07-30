import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyCl3n9q_PwoAa5MQBK-R-LJr_7eYofmEtc",
    authDomain: "contact-db-50063.firebaseapp.com",
    databaseURL: "https://contact-db-50063-default-rtdb.firebaseio.com",
    projectId: "contact-db-50063",
    storageBucket: "contact-db-50063.appspot.com",
    messagingSenderId: "304778150564",
    appId: "1:304778150564:web:4f0ca0ddec265892051c31",
    measurementId: "G-JM2461MPYM"
  };

  
  // Initialize Firebase
  const firebase= initializeApp(firebaseConfig);
  // const database = getDatabase(app);
  export default firebase;