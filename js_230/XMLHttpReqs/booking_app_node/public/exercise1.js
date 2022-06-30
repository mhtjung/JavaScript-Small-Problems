document.addEventListener('DOMContentLoaded', () => {
  
  function makeRequest(method, url, payload = null) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open(method, url);
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response);
        } else {
          reject({
            status: xhr.status,
            statusText: xhr.statusText
          });
        }
      }
      xhr.onerror = () => {
        reject({
          status: xhr.status,
          statusText: xhr.statusText,
        })
      }
      xhr.ontimeout = () => {
        alert("The request has timed out - please try again!")
      }
      xhr.timeout = 5000;
      xhr.send();
    });
  }
  
  let button = document.querySelector('button');
  button.addEventListener('click', async event => { 
    let response = await makeRequest('GET', '/api/schedules');
    alert(response);
  }
)
})