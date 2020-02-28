const axios = require('axios');

const requests = [
  {
    name: 'request 1',
    url: 'https://api.basketball-stats-api.com/showusers'
  },
  {
    name: 'request 2',
    url: 'https://api.basketball-stats-api.com/showusers'
  },
  {
    name: 'request 3',
    url: 'https://api.basketball-stats-api.com/showusers'
  }
];

let promises = [];

for (let i = 0; i < requests.length; i++) {
  promises.push(axios.get(requests[i].url));
}

Promise.all(promises) // returns only once all 3 promises have resolved successfully...
  .then(values => console.log(values[1].data)) // log the data of the second promise's response
  .catch(err => console.log(err));

// optionally, this has the same effect a lines 24-27:

// axios
//   .all(promises)
//   .then(values => console.log(values[1].data))
//   .catch(err => console.log(err));

// to run this module, "node promisefactory" at project root
