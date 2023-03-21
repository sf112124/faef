chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.reminder) {
    const notificationId = request.notificationId;
    const quote = request.quote;
    const textBox = document.createElement("input");
    const notificationBox = document.createElement("div");
    
    textBox.setAttribute("type", "text");
    textBox.setAttribute("value", quote);
    textBox.style.display = "block";
    textBox.style.margin = "0 auto";
    
    notificationBox.style.display = "flex";
    notificationBox.style.justifyContent = "center";
    notificationBox.style.alignItems = "center";
    notificationBox.style.width = "100%";
    notificationBox.style.height = "100%";
    notificationBox.style.background = "#fff";
    notificationBox.style.border = "1px solid #ccc";
    notificationBox.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
    notificationBox.style.position = "fixed";
    notificationBox.style.top = "0";
    notificationBox.style.left = "0";
    notificationBox.style.zIndex = "9999";
    
    notificationBox.appendChild(textBox);
    document.body.appendChild(notificationBox);

    chrome.notifications.clear(notificationId);

    notificationBox.onclick = function() {
      chrome.windows.create({
        url: "chrome://newtab",
        focused: true
      });
    }
  }
});
