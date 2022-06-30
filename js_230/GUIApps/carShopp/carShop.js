const cars = [
  { make: 'Honda', image: './images/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000 },
  { make: 'Honda', image: './images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
  { make: 'Toyota', image: './images/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
  { make: 'Toyota', image: './images/toyota-corrolla-2016.jpg', model: 'Corolla', year: 2016, price: 15000 },
  { make: 'Suzuki', image: './images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
  { make: 'Audi', image: './images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
  { make: 'Audi', image: './images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
];

/* Modify the select elements so that when
    an option is selected, the rest of the options are filtered accordingly.

  Algo
  1. Add event listener for the 'change' event to the select dropdowns.
  2. Within the callback for the above event listener
    - Get the current filter data to base the dropdowns off of
    - Pass the filter object from above to get
*/

class Application {
  constructor(carData) {
    this.carData = carData;
    this.filterContainer = document.querySelector('#filter-container');
    this.displayContainer = document.querySelector("#display-container");
    this.filteredCarData = carData;
    this.createInitialDropdowns();
    this.renderCars();
    this.bindEvents();
  }

  bindEvents() {
    let button = document.querySelector('#filter-button');
    button.addEventListener('click', this.handleButtonClick.bind(this));

    this.filterContainer.addEventListener('change', this.handleSelectChange.bind(this));
  }

  handleSelectChange(event) {
    event.stopPropagation();
    let selectedId = event.target.getAttribute('id');
    if (event.target.value !== 'All') {
      let selectedDropdown = document.querySelector(`#${selectedId}`);
      selectedDropdown.setAttribute("selected", true)
      let validCars = this.filterCars();
      let dropdownTitles = ['year', 'make', 'model', 'price'].filter(title => 
        title !== selectedId && document.querySelector(`#${title}`).getAttribute('selected') !== 'true'
      );
      dropdownTitles.forEach(key => this.generateOptions(key, validCars))
    } else {
      let defaultValues = this.uniqueValues(selectedId, this.carData);
      let selectedDropdown = document.querySelector(`#${selectedId}`);
      
      while (selectedDropdown.firstChild) { selectedDropdown.removeChild(selectedDropdown.firstChild)}
      
      let allOption = document.createElement('option');
      allOption.textContent = 'All';
      allOption.value = 'All';
      selectedDropdown.appendChild(allOption);

      defaultValues.forEach(value => {
        let option = document.createElement('option');
        option.textContent = value;
        option.value = value;
        selectedDropdown.appendChild(option);
      });

    }
  }

  handleButtonClick() {
    this.filteredCarData = this.filterCars();
    this.renderCars();
  }

  getFilterData() {
    let dropdowns = Array.from(document.querySelectorAll('select'));
    let filterObj = {};
    dropdowns.forEach(element => {
      if (element.value !== 'All') {
        let id = element.getAttribute('id');
        if (id === 'year' || id === 'price') {
          filterObj[id] = Number(element.value);
        } else {
          filterObj[id] = element.value;
        }
      }
    })
    return filterObj    
  }

  filterCars() {
    let filterObj = this.getFilterData();
    let filterKeys = Object.keys(filterObj);
    let result = []
    this.carData.forEach(car => {
      if (filterKeys.every(filterKey => {
        return filterObj[filterKey] == car[filterKey]
      })) {
        result.push(car)
      }
    })
    return result;
  };

  renderCars() {
    let filteredHTML = document.createElement('div');
    filteredHTML.setAttribute('id', 'filtered-cars')
    this.filteredCarData.forEach(carObj => {
      let carDiv = document.createElement('div');
      
      let pInfo = document.createElement('p');
      pInfo.textContent = [carObj.year, carObj.make, carObj.model].join(' ');
      
      let pPrice = document.createElement('p');
      pPrice.textContent = `$${carObj.price}.00`;

      let img = document.createElement('img');
      img.setAttribute('src', carObj.image);
      
      [img, pInfo, pPrice].forEach(el => carDiv.appendChild(el));

      filteredHTML.appendChild(carDiv);
    });
    if (document.querySelector('#filtered-cars')) {
      let oldHTML = document.querySelector('#filtered-cars')
      this.displayContainer.replaceChild(filteredHTML, oldHTML)
    } else {
      this.displayContainer.appendChild(filteredHTML);
    };
  }

  uniqueValues(key, objArray) {
    let values = [];
    objArray.forEach(carObj => {
      if (!values.includes(carObj[key])) {
        values.push(carObj[key]);
      }
    })
    return values;
  }

  createInitialDropdowns() {
    ['year', 'make', 'model', 'price'].forEach(key => this.generateOptions(key, this.carData));
  }

  generateOptions(key, carArr) {
    let uniqueValues = this.uniqueValues(key, carArr);
    let selectMenu = document.querySelector(`#${key}`);
    while (selectMenu.firstChild) { selectMenu.removeChild(selectMenu.firstChild)};
    let selectTitle = document.createElement('option');
    selectTitle.value = 'All';
    selectTitle.textContent = 'All'; //key[0].toUpperCase() + key.slice(1);
    selectMenu.appendChild(selectTitle);
    uniqueValues.forEach(value => {
      let option = document.createElement('option');
      option.value = value;
      option.textContent = value;
      selectMenu.appendChild(option);
    })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new Application(cars)
})
