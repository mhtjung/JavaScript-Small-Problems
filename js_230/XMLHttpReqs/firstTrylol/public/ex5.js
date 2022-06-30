class Application {
  constructor() {
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
    try {
      let response = await this.sendScheduleForm(event)
      alert(response)
    } catch(error) {
      alert(error);
    }
  }
  makeRequest(method, url, payload = undefined) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.responseType = 'json';
      xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status <= 300) {
          resolve(xhr.response);
        } else {
          reject({
            response: xhr.response,
            status: xhr.status,
            statusText: xhr.statusText,
          });
        }
      });
      xhr.send(payload);
    })
  }
  sendScheduleForm(event = null, data = null) {
    if (event) event.preventDefault();
    if (!data) { 
      data = JSON.stringify(this.retrieveFormData())
    };
    return this.makeRequest('POST', '/api/bookings')
  }
  retrieveFormData() {
    return {
      id: this.scheduleDropdown.value,
      student_email: this.emailInput.value,
    }
  }
  sendNewStudentForm() {
    let data = this.retrieveStudentFormData();
    let json = JSON.stringify(data);
    this.makeRequest('POST', '/api/students', json)
    .then(response => alert(response))
    .then(_ => this.sendScheduleForm())
    .then(response => alert(response))
    .catch(xhrStatus => alert(xhrStatus));
  }
  retrieveStudentFormData() {
    let email = document.querySelector('#new-student-email').value;
    let name = document.querySelector('#new-student-name').value;
    let booking_sequence = document.querySelector('#booking-sequence').value;

    return {email, name, booking_sequence};
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
    const STAFF = {}
    let staffArray = await this.makeRequest('GET', 'api/staff_members')
    staffArray.forEach(staffObj => {
      STAFF[staffObj.id] = staffObj.name;
    })
    return STAFF
  }
  async populateDropdowns() {
    const staffObj = await this.getStaff();
    let schedules = await this.makeRequest('GET', 'api/schedules');
    schedules = schedules.filter(schedule => !schedule.student_email);
    schedules.forEach(schedule => {
      let option = document.createElement('option');
      option.setAttribute('data-sched-id', schedule.id)
      option.setAttribute('value', schedule.id)
      let text = `${staffObj[schedule.staff_id]} | ${schedule.date} | ${schedule.time}`
      option.textContent = text;
      this.scheduleDropdown.appendChild(option);
    })
  }
  



}

document.addEventListener('DOMContentLoaded', () => {
  const App = new Application();
});