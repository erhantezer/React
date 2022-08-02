import firebase from "./firebase";
import { getDatabase,onValue,push, ref, remove, set, update  } from "firebase/database";
import { useEffect, useState } from "react";
import Toastify from "./toastify"



//? Firebase Bilgi ekleme
export const AddUser = (info) => {
  //? firebase database açtık
    const db = getDatabase(firebase);

   //? kendi database ımı açtım 
    const userRef = ref(db,"users/");

  //? açtığım database mi newUserRef değişken içine push ettim
    const newUserRef = push(userRef);

  //? newUserRef adında  içinde key value olan obje oluşturduk yani set ettik
    set(newUserRef, {
        username:info.username,
        phone:info.phone,
        gender:info.gender
    });
}

//? Bilgi Çağırma
export const useFetch = () => {
//? eger bilgi gelmezse yada geç gelirse diye  state oluşturduk
    const [isLoading, setIsLoading] = useState();

//? eklenen bilgileri  Liste haline getirmek için state tanımladık
    const [contactList, setContactList] = useState();

  //? useEffect masrifetiyle  firebase den sürekli çağrılmasını engelledik
    useEffect(() => {
      const db = getDatabase(firebase);
      const userRef = ref(db, "users/");
      onValue(userRef, (snapshot) => {
        const data =snapshot.val();
        const userArray = []
        for (let id in data){
          //? data içerisindeki eleman sayılarını for in ile oluşturup useArray boş array içerisini örenek 0 . eleman data içerisindeki bütün elemanları açıp ıd ye göre içerisine attık
            userArray.push({id, ...data[id]})
        }
        setContactList(userArray)
        setIsLoading(false)
      })
    
     
    }, [])
    return {isLoading, contactList}
    
}

//? silme 
export const DeleteUser=(id)=>{
  const db = getDatabase(firebase);
  remove(ref(db,"users/"+id));
  Toastify("Deleted Successfully")
}

export const UpdateUser=(info)=>{
  const db = getDatabase(firebase);
  const updates={}
  updates["users/"+info.id]=info

  return update(ref(db),updates)

}