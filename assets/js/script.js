// Espera a que el DOM esté completamente cargado.
document.addEventListener("DOMContentLoaded", () => {
    // Obtén los enlaces de la barra de navegación
    const navLinks = document.querySelectorAll("nav a");
    // Obtén todas las secciones
    const sections = document.querySelectorAll("section");

    // Añade un event listener a cada enlace
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Previene el comportamiento predeterminado del enlace

            // Oculta todas las secciones
            sections.forEach(section => {
                section.classList.add("hidden");
            });

            // Muestra la sección correspondiente al enlace
            const targetId = link.getAttribute("href").replace("#", ""); // Obtiene el ID del enlace
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.remove("hidden");
                targetSection.classList.add("block"); // Asegura que se haga visible
            }
        });
    });
});
