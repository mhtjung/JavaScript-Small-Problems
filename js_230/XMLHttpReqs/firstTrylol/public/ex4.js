class Application {
  constructor() {
    // this.populateDropdowns();
    this.staff = {}
    this.scheduleDropdown = document.querySelector('#schedule-dropdown');
    this.emailInput = document.querySelector('#sched-student-email');
    this.form = document.querySelector('form');
    this.populateDropdowns();

    this.bindEvents();
  }

  bindEvents() {
    this.form.addEventListener('submit', this.handleSubmit.bind(this)); 
  }

  async handleSubmit(event) {
    let sendSchedPromise = this.sendScheduleForm(event);
    sendSchedPromise
    .then( response => alert(response))
    .catch( errorMessage => {
      alert(errorMessage)
      let sequence = errorMessage.slice(-6);
      this.createAddStudentForm(sequence);
    })
  }

  sendNewStudentForm() {
    let data = this.retrieveStudentFormData();
    let json = JSON.stringify(data);

    let request = new XMLHttpRequest();
    request.open('POST', '/api/students');
    request.setRequestHeader('Content-Type', 'application/json');
    request.addEventListener('load', () => {
      if (request.status === 201) {
        alert(request.response);
        this.sendScheduleForm()
      } else {
        alert(request.response);
      }
    })
    request.send(json);
  }

  retrieveStudentFormData() {
    let email = document.querySelector('#new-student-email').value;
    let name = document.querySelector('#new-student-name').value;
    let booking_sequence = document.querySelector('#booking-sequence').value;

    return {email, name, booking_sequence};
  }

  retrieveFormData() {
    let scheduleId = this.scheduleDropdown.value;
    let email = this.emailInput.value;
    return {
      id: scheduleId,
      student_email: email,
    }
  }

  sendScheduleForm(event = null, data = null) {
    if (event) event.preventDefault();
    if (!data) { 
      data = JSON.stringify(this.retrieveFormData())
    };
    return new Promise((resolve, reject) => {      
      let request = new XMLHttpRequest();
      request.open('POST', '/api/bookings')
      request.setRequestHeader('Content-Type', 'application/json');
      request.addEventListener('load', () => {
        if (request.status === 204) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      })
      request.send(data);
    });
  }

  createAddStudentForm(bookingSequence) {
    let form = document.createElement('form');
    form.id = 'add-new-student'
    let fieldset = document.createElement('fieldset');
    let emailLabel = document.createElement('label');
    emailLabel.textContent = "Email: "
    let emailInput = document.createElement('input')
    emailInput.id = 'new-student-email'
    emailInput.type = 'email';
    emailInput.value = this.emailInput.value;
    fieldset.appendChild(emailLabel);
    fieldset.appendChild(emailInput);

    let nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name: '
    let nameInput = document.createElement('input');
    nameInput.id = 'new-student-name'
    nameInput.type = 'text';
    nameInput.name = 'name';
    fieldset.appendChild(nameLabel);
    fieldset.appendChild(nameInput);
    
    let sequenceLabel = document.createElement('label');
    sequenceLabel.textContent = 'Booking Sequence: '
    let sequenceInput = document.createElement('input');
    sequenceInput.id = 'booking-sequence'
    sequenceInput.type ='text';
    sequenceInput.name ='booking-sequence'
    sequenceInput.value = bookingSequence;
    fieldset.appendChild(sequenceLabel);
    fieldset.appendChild(sequenceInput);

    let submitBtn = document.createElement('input');
    submitBtn.type = 'submit';
    fieldset.appendChild(submitBtn);
    form.appendChild(fieldset);
    form.addEventListener('submit', event => {
      event.preventDefault();
      this.sendNewStudentForm()
    })
    document.body.appendChild(form);
  }

  async getStaff() {
    let staffArray = await this.makeRequest('GET', 'api/staff_members')
    staffArray.forEach(staffObj => {
      this.staff[staffObj.id] = staffObj.name;
    })
  }

  async populateDropdowns() {
    await this.getStaff();
    let schedules = await this.makeRequest('GET', 'api/schedules');
    schedules = schedules.filter(schedule => !schedule.student_email);
    schedules.forEach(schedule => {
      let option = document.createElement('option');
      option.setAttribute('data-sched-id', schedule.id)
      option.setAttribute('value', schedule.id)
      let text = `${this.staff[schedule.staff_id]} | ${schedule.date} | ${schedule.time}`
      option.textContent = text;
      this.scheduleDropdown.appendChild(option);
    })
  }
  
  makeRequest(method, url, payload = undefined) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.responseType = 'json';
      xhr.addEventListener('load', () => {
        let status = xhr.status;
        if (status === 200) {
          resolve(xhr.response);
        } else {
          reject(status);
        }
      });
      xhr.send(payload);
    })
  }


}

document.addEventListener('DOMContentLoaded', () => {
  const App = new Application();
});