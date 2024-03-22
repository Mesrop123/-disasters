document.getElementById('mobile-menu').addEventListener('click', function() {
    var menu = document.querySelector('.menu');
    if (menu.style.display === 'flex') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'flex';
    }
  });
  