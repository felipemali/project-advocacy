// document.getElementById("goToPage1").addEventListener("click", function () {
//   window.location.href = "page1.html";
// });

// document.getElementById("goToPage2").addEventListener("click", function () {
//   window.location.href = "page2.html";
// });

const elementoImg = document.querySelector(".index-main-container-img");
const elementoArea = document.querySelectorAll(".area");

const observer = new IntersectionObserver(
  function (entries) {
    console.log("caiu");
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("appear");
        observer.unobserve(entry.target); // Parar de observar o elemento após a animação ser ativada
      } else {
        entry.target.classList.remove("appear");
      }
    });
  },
  {
    root: null, // Observar a interseção com a viewport do navegador
    rootMargin: "0px", // Nenhuma margem adicional
    threshold: 0.5, // Determinar se o elemento está 50% ou mais visível na viewport
  }
);

observer.observe(elementoImg);
observer.observe(elementoArea);
