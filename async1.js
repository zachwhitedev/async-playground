const axios = require('axios');

const functionWithManyPromises = async () => {
    const res1 = await axios.get('https://api.basketball-stats-api.com/showusers')
    const res2 = await axios.get('https://api.basketball-stats-api.com/showusers')
    const res3 = await axios.get('https://api.basketball-stats-api.com/showusers')
    const res4 = await axios.get('https://api.basketball-stats-api.com/showusers')
    const res5 = await axios.get('https://api.basketball-stats-api.com/showusers')
    const res6 = await axios.get('https://api.basketball-stats-api.com/showusers')

    console.log(res4.data);
}

functionWithManyPromises();

// works like a charm. 
// You can console.log the data of any of the 'res' and the data will always show up, just how you want it, no error.

// see async2.js for an expanded example