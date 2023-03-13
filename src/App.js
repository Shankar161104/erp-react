
import { useState, useEffect} from 'react';
import './App.css';
import { db } from './firebase-config';
import{ collection, getDocs } from "firebase/firestore"; 




function App() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([]); 
  const usercollectionRef = collection(db,"users")
  
  useEffect(() => {
    
    const getdata = async() =>{
      const Data = await getDocs(usercollectionRef);
      setData(Data.docs.map((doc) => ({...doc.Data, id: doc.id})));



    };

    getdata();
  }, []);
 
  return <div className="App">
    <div class="menubar">
        <ul>
            <li>Home</li>
            <li>about</li>
            <li>inventory status
               <div class="submenu">
                
                <ul>
                    <li><a href="#">live status</a></li>
                    <li><a href="#">monthly status</a></li>
                    <li><a href="#">forecast</a></li>
                
                </ul>

               </div> 
            </li>
            <li><a href="#">safety stock</a> </li>
        </ul>
    </div>
  </div>;
  
  

  
}

export default App;
