let uemail = document.getElementById('inputEmail');
let pwd = document.getElementById('inputPassword');
let submit = document.querySelector('.btn-signin');

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.action === 'sendDataToContent') {
            // Received data from background script
            var email = request.email;
            var password = request.password;

            // Do something with the data in the content script
            // For simplicity, let's just log it
            console.log('Received data in content script:', email, password);

            // Update the values only if the elements exist
            if (uemail && pwd) {
                uemail.value = email;
                pwd.value = password;

                // Click the submit button after a delay
                setTimeout(() => {
                    if (submit) {
                        submit.click();
                    } else {
                        console.error('Submit button not found.');
                    }
                }, 5000);
            } else {
                console.error('Email or password input elements not found.');
            }
        }
    }
);
