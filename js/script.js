
function setActiveStyleSheet(title) {
    var links = document.querySelectorAll('link[rel*="stylesheet"]');
    var i = links.length;
    while (links[--i-1]) {
      links[i].disabled = links[i].getAttribute('title') !== title;

    }
    
  }