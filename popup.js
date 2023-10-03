document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginBtn').addEventListener('click', function () {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        // Send data to background script
        chrome.runtime.sendMessage({ action: 'sendData', email: email, password: password });
    });
});
