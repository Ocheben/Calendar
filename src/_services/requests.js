const apiCall = (method, url, data) => {
  const opts = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  };
  return fetch(url, opts).then(res => res.json())
    .then(response => response)
    .catch(error => error);
};

export default apiCall;
