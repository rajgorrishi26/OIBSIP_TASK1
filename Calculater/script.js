// function appendToResult(value) {
//     document.getElementById('result').value += value;
//   }
  
//   function clearResult() {
//     document.getElementById('result').value = '';
//   }
  
//   function calculate() {
//     const result = document.getElementById('result').value;
//     let calculatedResult = '';
  
//     try {
//       calculatedResult = eval(result);
//     } catch (error) {
//       calculatedResult = 'Error';
//     }
  
//     document.getElementById('result').value = calculatedResult;
//   }
  


  // Add event listeners to capture keyboard input
document.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
  const key = event.key;

  // Check if the key is a number, operator, or equals sign
  if (/[0-9+\-*/.=]/.test(key)) {
    event.preventDefault(); // Prevent the default behavior of the keypress

    // Append the key value to the result
    appendToResult(key);
  } else if (key === 'Enter') {
    event.preventDefault(); // Prevent the default behavior of the Enter key

    // Calculate the result
    calculate();
  } else if (key === 'Escape') {
    event.preventDefault(); // Prevent the default behavior of the Escape key

    // Clear the result
    clearResult();
  }
}

function appendToResult(value) {
  document.getElementById('result').value += value;
}

function clearResult() {
  document.getElementById('result').value = '';
}

function calculate() {
  const result = document.getElementById('result').value;
  let calculatedResult = '';

  try {
    calculatedResult = eval(result);
  } catch (error) {
    calculatedResult = 'Error';
  }

  document.getElementById('result').value = calculatedResult;
}




// Add event listeners to capture keyboard input
document.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
  const key = event.key;

  // Check if the key is a number, operator, equals sign, backspace, Enter, or Escape
  if (/[0-9+\-*/.=]/.test(key)) {
    event.preventDefault(); // Prevent the default behavior of the keypress

    // Append the key value to the result
    appendToResult(key);
  } else if (key === 'Enter') {
    event.preventDefault(); // Prevent the default behavior of the Enter key

    // Calculate the result
    calculate();
  } else if (key === 'Escape') {
    event.preventDefault(); // Prevent the default behavior of the Escape key

    // Clear the result
    clearResult();
  } else if (key === 'Backspace') {
    event.preventDefault(); // Prevent the default behavior of the Backspace key

    // Remove the last character from the result
    removeLastCharacter();
  }
}

function appendToResult(value) {
  document.getElementById('result').value += value;
}

function clearResult() {
  document.getElementById('result').value = '';
}

function removeLastCharacter() {
  const result = document.getElementById('result').value;
  document.getElementById('result').value = result.slice(0, -1);
}

function calculate() {
  const result = document.getElementById('result').value;
  let calculatedResult = '';

  try {
    calculatedResult = eval(result);
  } catch (error) {
    calculatedResult = 'Error';
  }

  document.getElementById('result').value = calculatedResult;
}


 
    function appendToResult(value) {
      document.getElementById('result').value += value;
    }
    
    function clearResult() {
      document.getElementById('result').value = '';
    }
    
    function removeLastCharacter() {
      const result = document.getElementById('result').value;
      document.getElementById('result').value = result.slice(0, -1);
    }
    
    function calculate() {
      const result = document.getElementById('result').value;
      let calculatedResult = '';
    
      try {
        calculatedResult = eval(result);
      } catch (error) {
        calculatedResult = 'Error';
      }
    
      document.getElementById('result').value = calculatedResult;
    }
    
    // Add event listeners to capture keyboard input
    document.addEventListener('keydown', handleKeyDown);
    
    function handleKeyDown(event) {
      const key = event.key;
    
      // Check if the key is a number, operator, equals sign, backspace, Enter, or Escape
      if (/[0-9+\-*/.=]/.test(key)) {
        event.preventDefault(); // Prevent the default behavior of the keypress
    
        // Append the key value to the result
        appendToResult(key);
      } else if (key === 'Enter') {
        event.preventDefault(); // Prevent the default behavior of the Enter key
    
        // Calculate the result
        calculate();
      } else if (key === 'Escape') {
        event.preventDefault(); // Prevent the default behavior of the Escape key
    
        // Clear the result
        clearResult();
      } else if (key === 'Backspace') {
        event.preventDefault(); // Prevent the default behavior of the Backspace key
    
        // Remove the last character from the result
        removeLastCharacter();
      }
    }

