document.addEventListener("DOMContentLoaded", function(e) { 
    console.log("The DOM has loaded") 
    let text = document.querySelector('p')
    text.innerHTML = 'This is really cool!'
} );