const axios = require('axios');

const functionWithManyPromises = async () => {
  const res1 = await axios.get(
    'https://api.basketball-stats-api.com/showusers'
  );
  const res2 = await axios.get(
    'https://api.basketball-stats-api.com/showusers'
  );
  const res3 = await axios.get(
    'https://api.basketball-stats-api.com/showusers'
  );
  const res4 = await axios.get(
    'https://api.basketball-stats-api.com/showusers'
  );
  const res5 = await axios.get(
    'https://api.basketball-stats-api.com/showusers'
  );
  const res6 = await axios.get(
    'https://api.basketball-stats-api.com/showusers'
  );
  const res7 = await axios.get(
    'https://api.basketball-stats-api.com/showusers'
  );
  const res8 = await axios.get(
    'https://api.basketball-stats-api.com/showusers'
  );

  function somethingNested() {
    console.log(res3.data, res7.data);
  }

  somethingNested();
};

functionWithManyPromises();

// works like a charm. doesn't matter if it's nested, it will still wait and return.
