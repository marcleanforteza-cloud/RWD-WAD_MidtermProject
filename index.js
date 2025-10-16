//For index.html
document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("login-btn");

  loginBtn.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "main.html";
  });
});

//For main.html
document.addEventListener("DOMContentLoaded", function () {
  const instructors = document.getElementById("instructors");
  const schedules = document.getElementById("schedules");
  const authors = document.getElementById("authors");

  instructors.addEventListener("click", function () {
    window.location.href = "instructor.html";
  });

  schedules.addEventListener("click", function () {
    window.location.href = "schedule.html";
  });

  authors.addEventListener("click", function () {
    window.location.href = "authors.html";
  });
});

//For schedule.html
document.addEventListener("DOMContentLoaded", function () {
  const act1 = document.getElementById("act1");
  const act2 = document.getElementById("act2");
  const bab1 = document.getElementById("bab1");
  const bab2 = document.getElementById("bab2");
  const bab3 = document.getElementById("bab3");
  const bab4 = document.getElementById("bab4");
  const bsa1 = document.getElementById("bsa1");
  const bsa2 = document.getElementById("bsa2");
  const bsa3 = document.getElementById("bsa3");
  const bsa4 = document.getElementById("bsa4");
  const bsais1 = document.getElementById("bsais1");
  const bsais2 = document.getElementById("bsais2");
  const bsais3 = document.getElementById("bsais3");
  const bsais4 = document.getElementById("bsais4");
  const bsis1 = document.getElementById("bsis1");
  const bsis2 = document.getElementById("bsis2");
  const bsis3 = document.getElementById("bsis3");
  const bsis4 = document.getElementById("bsis4");
  const bssw1 = document.getElementById("bssw1");
  const bssw2 = document.getElementById("bssw2");
  const bssw3 = document.getElementById("bssw3");
  const bssw4 = document.getElementById("bssw4");

  act1.addEventListener("click", function () {
    window.location.href = "act1.html";
  });
  act2.addEventListener("click", function () {
    window.location.href = "act2.html";
  });

  bab1.addEventListener("click", function () {
    window.location.href = "BAB-1.html";
  });
  bab2.addEventListener("click", function () {
    window.location.href = "BAB-2.html";
  });
  bab3.addEventListener("click", function () {
    window.location.href = "BAB-3.html";
  });
  bab4.addEventListener("click", function () {
    window.location.href = "BAB-4.html";
  });

  bsa1.addEventListener("click", function () {
    window.location.href = "bsa1.html";
  });
  bsa2.addEventListener("click", function () {
    window.location.href = "bsa2.html";
  });
  bsa3.addEventListener("click", function () {
    window.location.href = "bsa3.html";
  });
  bsa4.addEventListener("click", function () {
    window.location.href = "bsa4.html";
  });
  bsais1.addEventListener("click", function () {
    window.location.href = "bsais1.html";
  });
  bsais2.addEventListener("click", function () {
    window.location.href = "bsais2.html";
  });
  bsais3.addEventListener("click", function () {
    window.location.href = "bsais3.html";
  });
  bsais4.addEventListener("click", function () {
    window.location.href = "bsais4.html";
  });
    bsis1.addEventListener("click", function () {
    window.location.href = "bsis1.html";
  });
  bsis2.addEventListener("click", function () {
    window.location.href = "bsis2.html";
  });
  bsis3.addEventListener("click", function () {
    window.location.href = "bsis3.html";
  });
  bsis4.addEventListener("click", function () {
    window.location.href = "bsis4.html";
  });
  bssw1.addEventListener("click", function () {
    window.location.href = "SW-1.html";
  });
  bssw2.addEventListener("click", function () {
    window.location.href = "SW-2.html";
  });
  bssw3.addEventListener("click", function () {
    window.location.href = "SW-3.html";
  });
  bssw4.addEventListener("click", function () {
    window.location.href = "SW-4.html";
  });
});

//For home buttons below each page
const homeButtons = document.querySelectorAll("#homebtn1, #homebtn2");

homeButtons.forEach(button => {
  button.addEventListener("click", () => {
    window.location.href = "main.html";
  });
});
