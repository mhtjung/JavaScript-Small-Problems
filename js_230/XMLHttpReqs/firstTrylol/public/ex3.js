

class App {
  constructor() {
    this.formCount = 0;
    this.staffInfo = this.getStaffInfo();
    this.formContainer = document.querySelector('#form-container')
    this.addFormBtn = document.querySelector('#more-forms');
    this.submitBtn = document.querySelector('#submit-btn')
    this.bindEvents();
  }

  bindEvents() {
    this.addFormBtn.addEventListener('click', this.createForm.bind(this));
    this.submitBtn.addEventListener('click', this.handleSubmit.bind(this));
  }

  handleSubmit(event) {
    event.preventDefault();
    const request = new XMLHttpRequest;
    request.open('POST', 'http://localhost:3000/api/schedules');
    request.setRequestHeader('Content-Type', 'application/json');
    request.addEventListener('load', () => {
      if (request.status === 201) {
        Array.from(document.forms).forEach(form => form.reset());
      } 
      alert(request.responseText)
    })
    const json = this.getFormData();
    request.send(json);
  }

  getFormData() {
    const data = {schedules: [],}

    for (let i = 1; i <= this.formCount; i++ ) {
      const form = document.querySelector(`#form-${i}`);
      data.schedules.push(this.formToJson(form));
    }

    const json = JSON.stringify(data);
    return json;
  }
  
  formToJson(formElement) {
    const formData = new FormData(formElement);
    const obj = {};
    formData.forEach((value, key) => obj[key] = value);
    return obj;
  }

  addScheduleHandler() {
    
  }
 
  generateStaffDropdown() {
    const dropdown = document.createElement('select');
    dropdown.classList.add('staff_dropdown')
    this.staffInfo.forEach(staff => {
      let option = document.createElement('option');
      option.textContent = staff.name;
      option.value = Number(staff.id);
      dropdown.appendChild(option);
    });
    return dropdown;
  }

  getStaffInfo() {
    let request = new XMLHttpRequest();
    request.open('GET', '/api/staff_members');
    request.responseType = 'json';
    request.addEventListener('load', () => {
      if (request.status === 200) {
        this.staffInfo = request.response
        this.createForm();
      } else {
        alert('Could not retrieve staff information!')
      }
    });
    console.log('retrieving staff data');
    request.send();
  }  

  createForm() {
    this.formCount += 1
    let formId = `form-${this.formCount}`;
    const form = document.createElement('form');
    form.id = formId

    // let staffDiv = document.createElement('div');
    let staffLabel = document.createElement('label');
    let staffInputId = `staff-${this.formCount}`
    staffLabel.setAttribute('for', staffInputId)
    staffLabel.textContent = 'Staff Member: ';
    let dropdown = this.generateStaffDropdown();
    dropdown.setAttribute('id', staffInputId)
    dropdown.setAttribute('name', 'staff_id')
    form.appendChild(staffLabel);
    form.appendChild(dropdown);
    // form.appendChild(staffDiv);

    // let dateDiv = document.createElement('div');
    let dateLabel = document.createElement('label');
    let dateInputId = `date-${this.formCount}`
    dateLabel.setAttribute('for', dateInputId);
    dateLabel.textContent = 'Date: ';
    let dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date')
    dateInput.setAttribute('name', 'date')
    dateInput.setAttribute('id', dateInputId)
    form.appendChild(dateLabel);
    form.appendChild(dateInput);
    // form.appendChild(dateDiv);
    
    // let timeDiv = document.createElement('div');
    let timeLabel = document.createElement('label');
    let timeInputId = `time-${this.formCount}`
    timeLabel.setAttribute('for', timeInputId);
    timeLabel.textContent = 'Time: ';
    let timeInput = document.createElement('input');
    timeInput.setAttribute('type', 'time');
    timeInput.setAttribute('name', 'time')
    timeInput.setAttribute('id', timeInputId);
    form.appendChild(timeLabel);
    form.appendChild(timeInput);
    // form.appendChild(timeDiv);

    this.formContainer.appendChild(form);
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const application = new App();
  this.app = application;
});