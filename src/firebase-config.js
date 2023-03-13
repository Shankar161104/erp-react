import { initializeApp } from "firebase/app";
import{ getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDRHQl0j3ZWapC3jsnHnCIYMoPZtBw3w_Y",
    authDomain: "erp-implementation-dabec.firebaseapp.com",
    projectId: "erp-implementation-dabec",
    storageBucket: "erp-implementation-dabec.appspot.com",
    messagingSenderId: "776060632635",
    appId: "1:776060632635:web:9efe68741a5fcbc0c8261e",
    measurementId: "G-C63L5WVLSR"
  };

  const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app);