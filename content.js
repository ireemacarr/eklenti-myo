// Fetch content from the news page
fetch('https://tby.ardahan.edu.tr/tr/news')
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Extract the news items (update with correct selector)
    const newsItems = doc.querySelectorAll('.news-item'); // Replace with correct class
    let newsText = '';
    newsItems.forEach(item => {
      const title = item.querySelector('.title-class').innerText; // Replace with correct class
      const date = item.querySelector('.date-class').innerText;  // Replace with correct class
      const description = item.querySelector('.description-class').innerText; // Replace with correct class
      newsText += `${title} - ${date}\n${description}\n\n`;
    });

    // Send the news content to the popup
    chrome.runtime.sendMessage({ news: newsText });
  })
  .catch(error => console.error('Error fetching the news:', error));
