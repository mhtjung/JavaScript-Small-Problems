/*
Populate Dropdown
  First, get a map of staff ids to names
  Then get a list of schedules.
  For each schedule,
    Set the 'select' element's value to the schedule-id
    Set the textContent to have "staffMap[schedule.staff-id | date | time"


If an error is caught,
provide the student form;

if the student form sends correctly, send the schedule form request again.

*/

class Application {
  constructor() {    
    this.scheduleForm = document.querySelector('#add-schedule');
    this.studentForm = document.querySelector('#add-student');
    this.bindEvents();
    this.populateDropdown();
  }

  bindEvents() {
    this.scheduleForm.addEventListener('submit', this.bookSchedule.bind(this));
    this.studentForm.addEventListener('submit', this.addStudent.bind(this));
  }

  async addStudent(event) {
    event.preventDefault();
    let formData = new FormData(this.studentForm);
    let data = this.formDataToJson(formData);
    let json = JSON.stringify(data);
    try {
      let response = await this.makeRequest('POST', '/api/students', json, 'text')
      alert(response)
      await this.bookSchedule();
      this.studentForm.style.visibility = 'hidden';
      Array.from(document.forms).forEach(form => form.reset());
    } catch(error) {
      alert(error.message);
    }
  }

  async bookSchedule(event) {
    if (event) event.preventDefault();
    let formData = new FormData(this.scheduleForm);
    let data = this.formDataToJson(formData);
    let json = JSON.stringify(data);
    console.log(json);
    try {
      await this.makeRequest('POST', '/api/bookings', json, 'text')
      alert('Schedule Booked!');
    } catch(error) {
      if (error.message.includes('Student')) {
        let booking_sequence = error.message.slice(-6)
        this.studentForm.querySelector('#booking_sequence').value = booking_sequence
        this.studentForm.querySelector('#new_student_email').value = document.querySelector('#student_email').value;
        this.studentForm.style.visibility = 'visible';
        alert(error.message);
      } else {
        alert(error.message);
      }
    }
  }


  async getStaff() {
    let staff = await this.makeRequest('GET', '/api/staff_members',)
    const STAFF_MAP = new Map();
    staff.forEach(staffObj => STAFF_MAP[staffObj.id] = staffObj.name)
    return STAFF_MAP;
  }

  async getSchedules() {
    let schedules = await (this.makeRequest('GET', '/api/schedules'))
    schedules = schedules.filter(schedObj => !schedObj.student_email)
    return schedules;
  }

  async populateDropdown() {
    const STAFF_MAP = await this.getStaff();
    const SCHEDULES =  await this.getSchedules();

    const DROPDOWN = this.scheduleForm.querySelector("select");
    while (DROPDOWN.firstChild) { DROPDOWN.removeChild(DROPDOWN.firstChild)}
    
    SCHEDULES.forEach(schedObj => {
      let option = document.createElement('option');
      option.value = schedObj.id;
      let textContent = `${STAFF_MAP[schedObj.staff_id]} | ${schedObj.date} | ${schedObj.time}`
      option.textContent = textContent;
      DROPDOWN.appendChild(option);
    })
  }

  makeRequest(method, url, payload = null, responseType = 'json') {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open(method, url);
      request.setRequestHeader('Content-Type', 'application/json');
      request.responseType = responseType
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
  
  formDataToJson(formData) {
    const json = {};
    for (const pair of formData.entries()) {
      json[pair[0]] = pair[1];
    }
    return json;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const application = new Application();
});