// const navbarToggle = document.querySelector('.navbar-toggle');
// const navbarMenu = document.querySelector('.navbar-menu');
// const title = document.querySelector('.show');

// navbarToggle.addEventListener('click', function() {
//   this.classList.toggle('open');
//   navbarMenu.classList.toggle('open');
//   navbarMenu.classList.toggle('hide');
//   title.classList.toggle('hide');
// });
// const navbarToggle = document.querySelector('.navbar-toggle');
// const navbarMenu = document.querySelector('.navbar');
// const title = document.querySelector('.show');

// navbarToggle.addEventListener('click', () => {
//   navbarMenu.classList.toggle('hide');
//   title.classList.toggle('hide');
// });
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }