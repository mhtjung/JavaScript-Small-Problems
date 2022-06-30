function delegateEvent(parentElement, selector, eventType, callback) {
  if (parentElement) {
    parentElement.addEventListener(eventType, (event) => {
      let validNodes = Array.from(parentElement.querySelectorAll(selector));
      if (validNodes.includes(event.target)) {
        callback(event);
      }
    })
    return true;
  }
}