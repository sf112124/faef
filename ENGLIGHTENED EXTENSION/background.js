const quotes = [
  "Nothing is real.",
  "Reality is an illusion.",
  "The world is a lie.",
  "Life is a dream.",
  "We are just a simulation.",
  "There is no truth.",
  "Perception is everything.",
  "Everything is a construct.",
  "Existence is subjective."
];

chrome.tabs.onCreated.addListener(function(tab) {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  console.log(chrome.notifications); // Log the chrome.notifications object to console
  
  chrome.notifications.create({
    type: "basic",
    title: "Reality Reminder",
    message: quote,
    iconUrl: "icon.png"
  }, function(notificationId) {
    // Send message to content.js with notification ID and quote
    chrome.tabs.sendMessage(tab.id, {reminder: "Reality is an Illusion", notificationId: notificationId, quote: quote});
  });
});
