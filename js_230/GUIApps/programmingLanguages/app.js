const languages = [
  {
    name: 'Ruby',
    description: 'Ruby is a dynamic, reflective, object-oriented, ' +
    'general-purpose programming language. It was designed and developed in the mid-1990s ' +
    'by Yukihiro Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, ' +
    'Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, ' +
    'including functional, object-oriented, and imperative. It also has a dynamic type ' +
    'system and automatic memory management.'
  },

  {
    name: 'JavaScript',
    description: 'JavaScript is a high-level, dynamic, untyped, and interpreted ' +
    'programming language. It has been standardized in the ECMAScript language ' +
    'specification. Alongside HTML and CSS, JavaScript is one of the three core ' +
    'technologies of World Wide Web content production; the majority of websites employ ' +
    'it, and all modern Web browsers support it without the need for plug-ins. JavaScript ' +
    'is prototype-based with first-class functions, making it a multi-paradigm language, ' +
    'supporting object-oriented, imperative, and functional programming styles.'
  },

  {
    name: 'Lisp',
    description: 'Lisp (historically, LISP) is a family of computer programming languages ' +
    'with a long history and a distinctive, fully parenthesized prefix notation. ' +
    'Originally specified in 1958, Lisp is the second-oldest high-level programming ' +
    'language in widespread use today. Only Fortran is older, by one year. Lisp has changed ' +
    'since its early days, and many dialects have existed over its history. Today, the best '+
    'known general-purpose Lisp dialects are Common Lisp and Scheme.'
  },

  { name: 'C++',
    description: "This is a shorter description"
  }
];

class App {
  constructor() {
    this.textContainer = document.querySelector('#text-container')
    this.initialRender()
    this.bindEvents()
  }

  bindEvents() {
    this.textContainer.addEventListener('click', this.buttonHandler.bind(this));
  }

  buttonHandler(event) {
    // If a button is clicked, change the 'p' tag's text content to the whole 
    if (event.target.value === 'Show More') {
      let button = event.target;
      button.textContent = 'Show Less'
      button.value = 'Show Less'
      let p = event.target.parentNode.querySelector('p')
      let key = p.parentNode.getAttribute("id")
      let langText = languages.find(obj => obj.name === key).description;
      p.textContent = langText
    } else if (event.target.value === 'Show Less') {
      let button = event.target;
      button.textContent = 'Show More'
      button.value = 'Show More'
      let p = event.target.parentNode.querySelector('p');
      let key = p.parentNode.querySelector('h1').textContent;
      let langText = this.shortText(languages.find(obj => obj.name === key).description);
      p.textContent = langText;
    }
  }

  initialRender() {
    languages.forEach(langObj => {
      let langDiv = this.createDivContent(langObj)
      this.textContainer.appendChild(langDiv);
    })
  }

  createDivContent(langObj) {
    let name = langObj.name;
    let text = langObj.description;
    let button;
    if (text.length > 120) {
      text = this.shortText(text);
      button = document.createElement('button');
      button.textContent = 'Show More';
      button.value = 'Show More';
    }
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    h1.textContent = name;
    div.appendChild(h1);

    let p = document.createElement('p');
    p.textContent = text;
    div.appendChild(p);
    if (button) div.appendChild(button);
    div.setAttribute('id', name)
    return div;
  }

  shortText(someText) {
    return someText.slice(0, 139) + "..."
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const application = new App();
})