/*
Populate Dropdown
  First, get a map of staff ids to names
  Then get a list of schedules.
  For each schedule,
    Set the 'select' element's value to the schedule-id
    Set the textContent to have "staffMap[schedule.staff-id | date | time"

*/

class Application {
  constructor() {    
    this.scheduleForm = document.querySelector('#add-schedule');
    this.studentForm = document.querySelector('#add-student');

    this.populateDropdown();
  }

  async getStaff() {
    let staff = await this.makeRequest('GET', '/api/staff_members',)
    const staffMap = new Map();
    staff.forEach(staffObj => staffMap[staffObj.id] = staffObj.name)
    return staffMap;
  }

  async populateDropdown() {
    const staffMap = await this.getStaff();
    const schedules = await this.makeRequest('GET', '/api/schedules')
    console.log(staffMap);
    console.log(schedules);
    // const dropdown = this.scheduleForm.querySelector("select");
    // schedules.forEach(schedObj => {
    //   let select = document.createElement('select');
    //   select.value = schedObj.id;
    //   let textContent = `${staffMap[schedObj.staff_id]} | ${schedObj.date} | ${schedObj.time}`
    // })
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
}

document.addEventListener('DOMContentLoaded', () => {
  const application = new Application();
});