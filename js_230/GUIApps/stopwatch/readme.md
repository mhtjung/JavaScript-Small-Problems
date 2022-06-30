Create a stopwatch application

Specs:
1. Timer 
  The stopwatch timer should have four 2-digit counters:
  1. hours (0-99)
  2. minutes (0-59)
  3. seconds (00-59)
  4. centiseconds (0-99)

All counters should use a leading zero when the corresponding time value is less than 10.

The controls:

1. The stopwatch should have the following controls:
  1. A start/stop button
    - When the user clicks the start button:
      - The text on the start button changes to Stop.
      - The timer starts running the centi-seconds counter;
        - When the seconds centiseconds counter reaches 100, it resets to zero and the next counter starts incrementing.

    - When the user clicks the stop button:
      - The timer stops
      - The button text changes to Start.

  2. A reset button
    - When the user clicks the Reset button
      - The timer stops running if it is already running.
      - The timer resets all counters to 00.


UI
1. Two divs
  - "#watch-container"
    - 'p' elements for hours, minutes, seconds, centiseconds;

  - "#button-container"

Functionality
1. Create a stopwatch object that stores the properties
  1. hours, minutes, seconds, centiseconds.
  2. the "stopped" state of the stopwatch

2. Contains the following methods
  1. "start" (this should call the "incrementCentiSec" method))
    - Sets an interval that
      - increments the this.centiseconds property every 10ms
      - updates the html of the page
    - When the 'this.centiseconds' property == 100
      - reset it to 0 and call the increment seconds method
  2. Increment (hours, minutes, seconds)
   - gets invoked by the next 'smallest' time count method (lol im inarticulate)
   - When called
    - updates it's relevant object property
    - updates the html of the page
  
  3. Button click handler
    - Behaves differently based on the value of the button (updated in this method as well)
      - If the button value is 'start'
        - Calls the "incrementCentiSec" method
        - Changes the button's value/textContent to 'stop'
      - If the button value is 'stop'
        - Clears the interval used by "incrementCentiSec"
        - Changes the button's value/textContent to 'start'

  4. Reset button handler
    - Clears the interval used by 'incrementCentiSec'
    - Resets all count values to 0
    - Updates the page's html to reflect the new values
    - Updates the button to have a value/textContent of "start"
