// Registrar plugin GSAP
gsap.registerPlugin(ScrollTrigger);

// Animación 1: Entrada del Hero
gsap.from(".hero-title", {
  duration: 1.2,
  y: -50,
  opacity: 0,
  ease: "bounce.out"
});

// Animación 2: Aparición de Servicios al hacer scroll
gsap.from(".service-card", {
  scrollTrigger: {
    trigger: "#servicios",
    start: "top 80%"
  },
  duration: 1,
  y: 50,
  opacity: 0,
  stagger: 0.3
});

// Animación 3: Animación de iconos de tecnologías al hacer scroll
gsap.from(".tech-icons i", {
  scrollTrigger: {
    trigger: "#tecnologias",
    start: "top 85%"
  },
  duration: 0.8,
  scale: 0,
  opacity: 0,
  stagger: 0.2
});

// Interacción JS: Calculadora modificando elemento por ID
function calcularCosto() {
  const cantidadInput = document.getElementById("paginas").value;
  const precioPorPagina = 800;
  const cantidad = parseInt(cantidadInput) || 0;
  const costoTotal = cantidad * precioPorPagina;

  // Modificación del DOM mediante su ID
  document.getElementById("resultado").textContent = `$${costoTotal.toLocaleString()}`;
}