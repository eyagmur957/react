// app.js

import axios from 'axios';

async function getData(userId) {
  try {
    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

    const { id, name, username, email, address, phone, website, company } = userResponse.data;
    const mergedData = {
      id,
      name,
      username,
      email,
      address,
      phone,
      website,
      company,
      posts: postsResponse.data,
    };

    return mergedData;
  } catch (error) {
    console.error("Error while fetching data:", error);
    throw error;
  }
}

export default getData;

// app.js (devamı)

import getData from './getData';

async function main() {
  try {
    const userId = 1;
    const result = await getData(userId);
    console.log(result);
  } catch (error) {
    console.error("Error in main:", error);
  }
}

main();
