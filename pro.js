



const element = document.querySelector(".animate");  // Assuming you're selecting an element with class 'animate'
const text = element.innerHTML; 
element.innerHTML = "";  // Clear the text to begin typing

let index = 0;

function type() {
    if (index < text.length) {
        element.innerHTML += text.charAt(index);  // Append one letter at a time
        index++;
        setTimeout(type, 30);  // Continue typing with a delay of 150ms
    } else {
        // After finishing, reset and loop the typing effect after a pause
        setTimeout(() => {
            element.innerHTML = "";  // Clear the text to start again
            index = 0;               // Reset index
            type();                   // Restart typing
        }, 2000); // 2-second pause before restarting the typing effect
    }
}

// Start the typing effect
type();











 