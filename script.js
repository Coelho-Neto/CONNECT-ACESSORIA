// ===== MENU MOBILE =====
const botaoMenuMobile = document.getElementById("botaoMenuMobile");
const menuSite = document.getElementById("menuSite");

botaoMenuMobile.addEventListener("click", () => {
  menuSite.classList.toggle("ativo");
});

document.querySelectorAll(".menu-site a").forEach((link) => {
  link.addEventListener("click", () => {
    menuSite.classList.remove("ativo");
  });
});

// ===== ANIMAÇÃO AO ROLAR A PÁGINA =====
const elementosAnimados = document.querySelectorAll(".animacao-aparecer");

const observadorAnimacao = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("ativo");
    }
  });
}, {
  threshold: 0.15
});

elementosAnimados.forEach((elemento) => observadorAnimacao.observe(elemento));

// ===== CONTADORES =====
const contadoresResultado = document.querySelectorAll(".contador-resultado");
const secaoResultados = document.getElementById("resultados");

let contadoresJaIniciados = false;

const iniciarContadores = () => {
  contadoresResultado.forEach((contador) => {
    const valorFinal = +contador.getAttribute("data-alvo");
    let valorAtual = 0;
    const incremento = Math.max(1, Math.ceil(valorFinal / 80));

    const atualizarContador = () => {
      valorAtual += incremento;

      if (valorAtual >= valorFinal) {
        contador.innerText = valorFinal + "%";
      } else {
        contador.innerText = valorAtual + "%";
        requestAnimationFrame(atualizarContador);
      }
    };

    atualizarContador();
  });
};

const observadorContadores = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting && !contadoresJaIniciados) {
      contadoresJaIniciados = true;
      iniciarContadores();
    }
  });
}, {
  threshold: 0.3
});

observadorContadores.observe(secaoResultados);

// ===== FAQ =====
const itensFaq = document.querySelectorAll(".item-faq");

itensFaq.forEach((itemFaq) => {
  const perguntaFaq = itemFaq.querySelector(".pergunta-faq");

  perguntaFaq.addEventListener("click", () => {
    itemFaq.classList.toggle("ativo");
  });
});