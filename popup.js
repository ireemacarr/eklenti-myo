chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  document.getElementById('news').innerText = request.news;
});
