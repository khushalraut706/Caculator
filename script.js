let screen = document.getElementById('screen');

    // Function to append the clicked button to the screen
    function appendToScreen(value) {
      screen.value += value;
    }

    // Function to clear the screen
    function clearScreen() {
      screen.value = '';
    }

    // Function to calculate the result
    function calculate() {
      try {
        screen.value = eval(screen.value);
      } catch (e) {
        screen.value = 'Error';
      }
    }

    // Keyboard support for calculator
    document.addEventListener('keydown', (event) => {
      if (event.key >= '0' && event.key <= '9') {
        appendToScreen(event.key);
      } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
        appendToScreen(event.key);
      } else if (event.key === 'Enter') {
        calculate();
      } else if (event.key === 'Escape') {
        clearScreen();
      }
    });