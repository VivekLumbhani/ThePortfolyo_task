// Root.js
import React, { useEffect, useState, createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export const DataContext = createContext(""); // Export DataContext here

const Root = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    // Fetch data from API
    fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  console.log("data value "+JSON.stringify(data));
  return (

      <DataContext.Provider value={data}>
        <App />
      </DataContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
