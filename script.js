var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "60px";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;
  const toggleModeButton = document.getElementById('toggleModeButton');

  toggleModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Salve a preferência do usuário no modo local storage, se necessário
    localStorage.setItem('darkModeEnabled', body.classList.contains('dark-mode'));
  });

  // Verifique se o usuário já tinha o modo escuro ativado
  const darkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';
  if (darkModeEnabled) {
    body.classList.add('dark-mode');
  }
});

function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}