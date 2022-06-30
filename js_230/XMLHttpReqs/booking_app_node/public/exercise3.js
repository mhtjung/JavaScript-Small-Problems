class Application {
  constructor() {
    this.populateFirstDropdown();
    this.addFormsBtn = document.querySelector('#add-schedules-btn');
    this.submitBtn = document.querySelector('#submit-btn');
    this.bindEvents();
  }

  bindEvents() {
    this.addFormsBtn.addEventListener('click', event => {
      event.preventDefault();
      this.duplicateForm();
    })

    this.submitBtn.addEventListener('click', this.handleSubmit.bind(this));
  }

  async handleSubmit(event) {
    event.preventDefault();
    let data = this.collectFormData();
    let json = JSON.stringify(data);
    try {
      let response = await this.makeRequest('POST', '/api/schedules', json, 'text')
      alert(response);
      Array.from(document.forms).forEach(form => form.reset());
    } catch(error) {
      alert(error.message);
    }
  }

  collectFormData() {
    let obj = { schedules: [] }
    let forms = Array.from(document.forms);
    forms.forEach(form => {
      let formData = new FormData(form);
      let json = this.formDataToJson(formData);
      obj.schedules.push(json);
    });
    return obj
  }

  formDataToJson(formData) {
    const json = {};
    for (const pair of formData.entries()) {
      json[pair[0]] = pair[1];
    }
    return json;
  }

  duplicateForm() {
    let form = document.querySelector('div').firstElementChild;
    let copy = form.cloneNode(true);
    copy.reset();
    document.querySelector('div').appendChild(copy);
  }

  async populateFirstDropdown() {
    let dropdown = document.querySelector('select')
    let options = await this.createStaffOptions()  
    options.forEach(option => dropdown.appendChild(option));
  }

  async createStaffOptions() {
    let options = [];
    let staffInfo = await this.getStaffInfo();
    staffInfo.forEach(staffer => {
      let option = document.createElement('option');
      option.textContent = staffer.name;
      option.value = staffer.id;
      options.push(option);
    })
    return options;
  }

  async getStaffInfo() {
    try {
      let response = await this.makeRequest('GET', '/api/staff_members') 
      return response
    } catch(error) {
      alert(error.message);
    }
  }

  makeRequest(method, url, payload = null, responseType = 'json') {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open(method, url);
      request.setRequestHeader('Content-Type', 'application/json');
      request.responseType = responseType;
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
          message: request.response,
          status: request.status,
          statusText: request.statusText,
        })
      }
      request.send(payload);
    })
  }

}

document.addEventListener('DOMContentLoaded', () => {
  const app = new Application();
})