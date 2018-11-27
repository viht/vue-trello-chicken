import axios from 'axios';

const API_URL = 'https://beta.todoist.com';

function getURL() {
  return `${API_URL}/API/v8/tasks`;
}

const config = {
  headers: {
    'Authorization': 'Bearer 5b74091b265a13e129b88e6231d663da124fd26d',
    'Content-Type': 'application/json',
  },
};

export default {
  get: () => axios.get(
    getURL(),
    config,
  ),

  create: data => axios.post(
    getURL(),
    data,
    config,
  ),

  edit: (data, id) => axios.post(
    `${getURL()}/${id}`,
    data,
    config,
  ),

  delete: id => axios.delete(
    `${getURL()}/${id}`,
    config,
  ),
};
