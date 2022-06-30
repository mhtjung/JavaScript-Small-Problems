/* Given the HTML/CSS, implement JS code that does the following

1. When the suer clicks on a navigation link (articles 1- 4)
  The browser scrolls to that article in the <main> element
    and adds the 'highlight' class to it.
  If another element already has the highlight class, the browser removes the class from that element.

2. When the user clicks on an article element or any of its child elements
  The browser adds the highlight class to it.
    If another element already has the highlight class, the browser removes the class from that element. 

3. When the user clicks anywhere else on the page, the browser adds the highlight class to the `main` element.
If another element already has the `highlight` class, the browser removes the class from that element.

*/

document.addEventListener('DOMContentLoaded', () => {
  const Main = document.querySelector('main');
  const Header = document.querySelector('header');
  const Articles = document.querySelectorAll('article')
  
  Header.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      let referenceId = event.target.getAttribute('href');
      let elementToHighlight = document.querySelector(referenceId);
      removeHighlights();
      elementToHighlight.scrollIntoView();
      elementToHighlight.classList.add('highlight')
    }
  });

  Main.addEventListener('click', (event) => {
    let element = event.target;
    removeHighlights()
    if (element.tagName === 'ARTICLE' || Array.from(Articles).some(node => node.contains(event.target))) {
      element.classList.add('highlight');
    } else {
      Main.classList.add('highlight');
    }
  });

  function removeHighlights() {
    let highlightedElements = document.querySelectorAll('.highlight');
    highlightedElements.forEach(el => el.classList.remove('highlight'))
  };
})
