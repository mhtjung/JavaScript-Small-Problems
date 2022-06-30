class Application {
  constructor() {
    this.form = document.querySelector('form');
    this.nameInput = document.querySelector('#staff-name')
    this.emailInput = document.querySelector('#staff-email')
    this.bindEvent();
  }

  bindEvent() {
    this.form.addEventListener('submit', async event => {
      event.preventDefault();
      const data = this.retrieveFormData()
      const payload = JSON.stringify(data);
      try {
        let response = await this.makeRequest('POST', '/api/staff_members', payload);
        response = JSON.parse(response);
        alert(`The staff member: was ${data.name} created with an id of ${response.id}`)
      } catch(error) {
        alert(error.message);
      }
    })
  }
  retrieveFormData() {
    return {
      name: this.nameInput.value,
      email: this.emailInput.value,
    }
  }

  makeRequest(method, url, payload) {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open(method, url);
      request.setRequestHeader('Content-Type', 'application/json');
      request.onload = () => {
        if (request.status >= 200 && request.status < 300) {
          resolve(request.response);
        } else {
          reject({
            message: request.response,
            status: request.status,
            statusText: request.statusText,
          })
        }
      }

      request.onerror = () => {
        reject({
          status: request.status,
          statusText: request.statusText,
        })
      }
      request.send(payload)
    })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const APP = new Application();
})