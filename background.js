chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.action === 'sendData') {
            // Received data from popup
            var email = request.email;
            var password = request.password;

            // Do something with the data, e.g., store it or process it

            // Send data to content script
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                var activeTab = tabs[0];
                chrome.tabs.sendMessage(activeTab.id, { action: 'sendDataToContent', email: email, password: password });
            });
        }
    }
);
