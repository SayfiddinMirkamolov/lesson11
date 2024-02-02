// SMART BACKTOP //////
window.addEventListener('scroll', function () {
  toggleBacktop();
});

let backtop = document.getElementById('backtop');

function toggleBacktop() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.style.bottom = '20px';
  } else {
    backtop.style.bottom = '-50px';
  }
}

// RESPONSIVE NAVBAR //////
function toggleNavbar() {
  document.getElementById('navbar-responsive').classList.toggle('open');
}

document.getElementById('menu-btn').addEventListener('click', toggleNavbar);

// PASSWORD SHOW HIDE
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function () {
  const type =
    password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  this.classList.toggle('bi-eye');
});
