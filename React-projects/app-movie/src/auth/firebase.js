import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,

} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBzHp3M349pdG_CfgdTp1DPetATuIC-kRI",
    authDomain: "react-firebase-43904.firebaseapp.com",
    projectId: "react-firebase-43904",
    storageBucket: "react-firebase-43904.appspot.com",
    messagingSenderId: "45323005435",
    appId: "1:45323005435:web:66eb7fb8b8b2da244cef5e"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);


  export const createUser = async (email, password, navigate) =>{
    try {
      let userCredential = await createUserWithEmailAndPassword(
      auth, 
      email, 
      password
      );
      navigate("/")
      console.log(userCredential);
    } catch (error) {
      console.log(error);
    }
}


export const signIn = async (email, password, navigate) => {
try {
  let userCredential = await signInWithEmailAndPassword(
  auth, 
  email, 
  password
  )
  navigate("/");
  console.log(userCredential);
} catch (error) {
  console.log(error);
}
}
 
 
    
    
   
 
 


