import React, {useEffect} from "react";


function sendDataToServer(data) {
  const url = 'https://reqres.in/api/users';

  const options = {
    method: 'POST', // Метод запроса
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  fetch(url, options)
    .then(response => {
      if (response.ok) {
        console.log('Data sent successfully');
      } else {
        throw new Error('Data sending failed');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function Fetch() {
  useEffect(() => {
    const data = {name: 'Dany', age: 15};
    sendDataToServer(data);
    console.log(data)
  }, []);

  return (
    <div>
      <h1>Fetch</h1>
    </div>
  )
}

export default Fetch