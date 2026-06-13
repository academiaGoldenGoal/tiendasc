function expandir(id) {
    const panels = document.querySelectorAll('.panel');
    const seleccionado = document.getElementById(id);

    panels.forEach(p => {
        if (p === seleccionado) {
            p.classList.toggle('expandido');
        } else {
            // Oculta las otras secciones si una está expandida
            p.style.display = p.style.display === 'none' ? 'flex' : 'none';
        }
    });
}