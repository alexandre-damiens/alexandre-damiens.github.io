window.addEventListener('load', function() {
  var images = document.getElementsByTagName('img');
  for (var i = 0; i < images.length; i++) {
    var img = images[i];
    if (!img.src) {
      img.src = img.getAttribute('data-src');
    }
  }
});