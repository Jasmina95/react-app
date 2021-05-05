// CRUD operations

import axios from "axios";
// define URL data is requested from
const apiUrl = "http://localhost:5000";
const headers = {
  // What are we sending?
  "Content-Type": "application/json",
  // What are we receiving?
  "Accept": "application/json"
};

// create operation
/* 
path we are refering to (courses or students);
data is json data we are sending;
callback is a function that will return data to us
*/
const insert = (path, data, callback) => {
  axios
    .post(`${apiUrl}/${path}`, data, { headers })
    .then(response => callback(response.data))
    .catch(reason => {
      console.log(reason);
      callback(false);
    });
};

// read operations
const list = (path, callback) => {
  axios
    .get(`${apiUrl}/${path}`, { headers })
    .then(response => callback(response.data))
    .catch(reason => {
      console.log(reason);
      callback(false);
    });
};

const read = (path, id, callback) => {
  axios
    .get(`${apiUrl}/${path}/${id}`, { headers })
    .then(response => callback(response.data))
    .catch(reason => {
      console.log(reason);
      callback(false);
    });
};

// update operation
const update = (path, id, data, callback) => {
  axios
    .put(`${apiUrl}/${path}/${id}`, data, { headers })
    .then(response => callback(response.data))
    .catch(reason => {
      console.log(reason);
      callback(false);
    });
};

// delete operation
const remove = (path, id, callback) => {
  axios
    .delete(`${apiUrl}/${path}/${id}`, { headers })
    .then(response => callback(response.data))
    .catch(reason => {
      console.log(reason);
      callback(false);
    });
};

export { insert, list, read, update, remove };
