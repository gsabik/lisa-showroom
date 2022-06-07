import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDy5N-Qfy4oSe5VwmpeEYrfz9Y1u9ZtTWA",
  authDomain: "lisa-showroom.firebaseapp.com",
  projectId: "lisa-showroom",
  storageBucket: "lisa-showroom.appspot.com",
  messagingSenderId: "277055848697",
  appId: "1:277055848697:web:70097ed242f301c3862228"
}

const app = initializeApp(firebaseConfig)
export const db =  getFirestore(app)