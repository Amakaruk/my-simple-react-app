// src/App.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from './firebaseConfig';

function App() {
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "texts"));
      const textsArray = querySnapshot.docs.map(doc => doc.data().text);
      setTexts(textsArray);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>List of Texts</h1>
      <ul>
        {texts.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
