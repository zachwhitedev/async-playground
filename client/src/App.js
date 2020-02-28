import React, { useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const thing = 'apple';
      const samedata = await axios.get('/showusers');
      const samedata1 = await axios.get('/showusers');
      const samedata2 = await axios.get('/showusers');
      Promise.all([samedata, samedata1, samedata2]).then(function(results) {
        console.log(results); // this logs all the promise results to the console as a single array of 3 objects, and only when all have completed
    }, function(err) {
        console.log(err);
    });
    }
    fetchData();
  })
  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
