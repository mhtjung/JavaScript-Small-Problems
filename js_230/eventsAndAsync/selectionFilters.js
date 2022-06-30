/* Write some JS code that updates the options on one dropdown when the selection in the other dropdown changes.

For example, when the user chooses an option under classifications, the items in the Animals dropdown should change accordingly.

Use the lookup tables below to see which animals and classifications go together.

Add the event listener to the form element, and choose the appropriate action based on the target.
*/

document.addEventListener('DOMContentLoaded', () => {
  const Form = document.querySelector('form');
  Form.addEventListener('change', (event) => {
    if (event.target.id === 'animal-classifications' && event.target.value !== 'Classifications') {
      let newValues = filterAnimals(event.target.value);
      let newOptions = createNewOptions(newValues, 'animals');  
      Form.replaceChild(newOptions, document.querySelector('#animals'));
    } else if (event.target.id === 'animals' && event.target.value !== 'Animals') {
      let newValues = filterClasses(event.target.value);
      let newOptions = createNewOptions(newValues, 'animal-classifications');
      Form.replaceChild(newOptions, document.querySelector('#animal-classifications'));
    }
  });

  const Button = document.querySelector('button');
  Button.addEventListener('click', (event) => {
    event.preventDefault();
    let newClasses = createNewOptions(filterClasses(), 'animal-classifications');
    let newAnimals = createNewOptions(filterAnimals(), 'animals');
    Form.replaceChild(newClasses, document.querySelector('#animal-classifications'));
    Form.replaceChild(newAnimals, document.querySelector('#animals'));
  })
})

function filterAnimals(filterKey) {
  let filterMap = {
    'Vertebrate': ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
    'Warm-blooded': ['Bear', 'Whale', 'Ostrich'],
    'Cold-blooded': ['Salmon', 'Turtle'],
    'Mammal': ['Bear', 'Whale'],
    'Bird': ['Ostrich'],
  }
  if (filterKey){
    return filterMap[filterKey]
  }
  return ['Animals', 'Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich']
}

function filterClasses(filterKey) {
  let filterMap = {
    'Bear': ['Vertebrate', 'Warm-blooded', 'Mammal'],
    'Turtle' : ['Vertebrate', 'Cold-blooded'],
    'Whale' : ['Vertebrate', 'Warm-blooded', 'Mammal'],
    'Salmon' : ['Verebrate', 'Cold-blooded'],
    'Ostrich' : ['Vertebrate', 'Warm-blooded', 'Bird']
  }
  if (filterKey) {
    return filterMap[filterKey]
  }
  return ['Classifications', 'Vertebrate', 'Warm-blooded', 'Cold-blooded', 'Mammal', 'Bird']
}

function createNewOptions(optionArr, id) {
  let newDropdown = document.createElement('select');
  optionArr.forEach(opt => {
    let option = document.createElement('option')
    option.value = opt;
    option.textContent = opt;
    newDropdown.appendChild(option)
  })
  newDropdown.id = id
  return newDropdown;
}