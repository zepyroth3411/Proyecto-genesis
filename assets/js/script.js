document.addEventListener("DOMContentLoaded", () => {
    // Manejo de navegación
    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            sections.forEach(section => {
                section.classList.add("hidden");
            });

            const targetId = link.getAttribute("href").replace("#", "");
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.remove("hidden");
                targetSection.classList.add("block");
            }
        });
    });

    // Manejo de tarjetas expandibles
    document.addEventListener("click", (event) => {
        // Abrir tarjeta
        if (event.target.closest(".card")) {
            const card = event.target.closest(".card");
            const fullscreenCard = card.nextElementSibling;
            if (fullscreenCard) {
                fullscreenCard.classList.remove("scale-0");
                fullscreenCard.classList.add("scale-100");
                document.body.style.overflow = "hidden"; // Desactiva el scroll del fondo
            }
        }

        // Cerrar tarjeta
        if (event.target.closest(".fullscreen-card")) {
            const fullscreenCard = event.target.closest(".fullscreen-card");
            if (fullscreenCard && !event.target.closest("button")) { // Ignora clicks en el botón cerrar
                fullscreenCard.classList.remove("scale-100");
                fullscreenCard.classList.add("scale-0");
                document.body.style.overflow = ""; // Reactiva el scroll del fondo
            }
        }

        // Botón de cerrar
        if (event.target.matches(".fullscreen-card button")) {
            const fullscreenCard = event.target.closest(".fullscreen-card");
            if (fullscreenCard) {
                fullscreenCard.classList.remove("scale-100");
                fullscreenCard.classList.add("scale-0");
                document.body.style.overflow = ""; // Reactiva el scroll del fondo
            }
        }
    });
});

setTimeout(() => {
    const button = document.getElementById('submit-button');
    button.disabled = false;
    button.classList.remove('bg-gray-400', 'text-gray-200', 'cursor-not-allowed');
    button.classList.add('bg-blue-500', 'text-white', 'hover:bg-blue-600');
}, 3000);

document.addEventListener("DOMContentLoaded", () => {
    const commandButtons = document.querySelectorAll(".command-btn");
    const commandHistory = document.getElementById("command-history");

    commandButtons.forEach(button => {
        button.addEventListener("click", () => {
            const command = button.getAttribute("data-command");

            // Crea un nuevo elemento de lista
            const listItem = document.createElement("li");
            listItem.textContent = `Comando ejecutado: ${command}`;

            // Añade el nuevo comando al historial
            commandHistory.appendChild(listItem);

            // Asegura que el historial muestre el último comando
            commandHistory.scrollTop = commandHistory.scrollHeight;
        });
    });
});