function retrieveSchedules() {
  const request = new XMLHttpRequest();

  // Be sure to change your host and port number accordingly
  request.open('GET','http://localhost:3000/api/schedules')
  request.timeout = 5000;
  request.responseType = 'json';

  request.addEventListener('load', event => {
    const schedules = request.response;
    let uniqueStaff = []
    schedules.forEach(schedule => {
      if (!uniqueStaff.includes(schedule.staff_id)) {
        uniqueStaff.push(schedule.staff_id)
      } 
    });
    let staffSchedCount = uniqueStaff.reduce((acc, curr) => (acc[curr] = 0, acc), {})
    schedules.forEach(schedule => { 
      if (uniqueStaff.includes(schedule.staff_id)) {
        staffSchedCount[schedule.staff_id] += 1
      }
    });
    let result = []
    Object.keys(staffSchedCount).forEach(key => {
      result.push(`staff ${key} : ${staffSchedCount[key]}`)
    })
    alert(result.join("\n"));
  })

  request.addEventListener('timeout', event => {
    alert('It is taking longer than usual, please try again later.')
  });

  request.addEventListener('loadend', event => {
    alert('The request has completed.');
  });
 request.send();
}

function formDataToJson(formData) {
  const json = {};
  for (const pair of formData.entries()) {
    json[pair[0]] = pair[1];
  }
  return json
}

function addStaffMember(event) {
  event.preventDefault();
  const form = event.currentTarget;
  let data = new FormData(event.currentTarget);
  const json = JSON.stringify(formDataToJson(data));
  const request = new XMLHttpRequest();
  request.open('POST', form.action);
  request.setRequestHeader('Content-Type', 'application/json');

  request.addEventListener('load', () => {
    if (request.status === 201) {
      let data = JSON.parse(request.response);
      alert(`The staff members was added with an id of ${data.id}`)
      form.reset();
    }
    if (request.status === 400) {
      alert(request.response);
    }
  })

  request.addEventListener('error', () => {
    alert(request.responseText);
  })

  request.send(json);
}

document.addEventListener("DOMContentLoaded", () => {
  let retrieveSchedulesBtn = document.querySelector('#exercise1');
  retrieveSchedulesBtn.addEventListener('click', retrieveSchedules);

  // Place 'submit' event listener on the form element
  let addStaffForm = document.querySelector('#add-staff');
  addStaffForm.addEventListener('submit', addStaffMember);
})