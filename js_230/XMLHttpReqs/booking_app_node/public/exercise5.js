/*
Step 1)
  Retrieve all dates with booked schedules.
  Create LIs for each date on the page;

Step 2)
  Add an event listener to the ul 'schedule-list'
    When a click is detected, use event.target to find identify the li
    Check if the LI has children and if the child UL has a class of 'hidden';
      If it has children, but the child isn't "hidden", make it "hidden"
    Otherwise: 
      Make a request to /api/bookings/:date
        Upon resolution, create a ul  
          For each array returned
            Create an li  
            join with " | "
            Append LI to the above UL
        Append the UL to the event.target node
*/

class Application {
  constructor() {
    this.schedList = document.querySelector('#schedule-list')
    this.populateList();

    this.bindEvents();
  }

  bindEvents() {
    this.schedList.addEventListener('click', this.handleClick.bind(this));
  }

  async handleClick(event) {
    if (!event.target.tagName === 'LI') { return }
    let parentLi = event.target;
    let date = parentLi.dataset.date;
    if (parentLi.firstElementChild) {
      parentLi.firstElementChild.classList.toggle('hidden');
      return;
    }

    const schedules = await this.makeRequest('GET', `/api/bookings/${date}`)
    const innerUl = document.createElement('ul');
    schedules.forEach(schedule => {
      let li = document.createElement('li');
      li.textContent = schedule.join(' | ');
      innerUl.appendChild(li);
    })
    parentLi.appendChild(innerUl);

  }

  async populateList() {
    const dates = await this.makeRequest('GET', '/api/bookings')
    dates.forEach(date => {
      let li = document.createElement('li');
      li.textContent = date;
      li.setAttribute('data-date', date)
      this.schedList.appendChild(li);
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
})