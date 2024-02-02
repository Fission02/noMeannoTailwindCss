document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector('.navbar ul');
    const supportAndAboutLinks = ['supportindex.html', 'aboutusindex.html'];

    navbar.addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            const href = event.target.getAttribute('href');
            console.log(`Clicked on: ${event.target.textContent}`);

            if (supportAndAboutLinks.includes(href)) {
                window.location.href = href;
            }
        }
    });

    // Example: Add a click event listener to each box for demonstration
    const boxes = document.querySelectorAll('.relative.cursor-pointer, .cursor-pointer.border');
    boxes.forEach(box => {
        box.addEventListener('click', function () {
            const boxText = box.querySelector('h3').innerText;
            alert(`Box clicked! You can customize this for ${boxText}`);
        });
    });

    // Example: Add a click event listener to each navigation link
    const navLinks = document.querySelectorAll('.footer-navigation a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            alert(`Navigating to: ${link.href}`);
        });
    });

    // Example: Add a click event listener to the "Sign Up" button
    const signUpButton = document.getElementById('signUpBtn');
    signUpButton.addEventListener('click', function () {
        alert('Sign Up button clicked!');
        // Add your desired functionality here
    });
});
