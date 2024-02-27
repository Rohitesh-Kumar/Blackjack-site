function addEmailToList() {
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value;

    // Validate email input
    if (!email || !validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    let emails = JSON.parse(localStorage.getItem('emails')) || [];
    emails.push(email); // Add the new email to the array
    localStorage.setItem('emails', JSON.stringify(emails)); // Update localStorage

    emailInput.value = ''; // Clear the input field
    displayEmails(); // Refresh the displayed list
    alert("Thank You For Subscribing G !")
}
function displayEmails() {
    const emailList = JSON.parse(localStorage.getItem('emails')) || [];
    console.log(emailList);
}

function validateEmail(email) {
    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return pattern.test(email);
}