document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la página al enviar el formulario

    // Obtener los valores del formulario
    
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;

    // Almacenar los datos en el almacenamiento local (localStorage)
    
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('apellido', apellido);
    localStorage.setItem('telefono', telefono);
    localStorage.setItem('email', email);
    localStorage.setItem('asunto', asunto);
    localStorage.setItem('mensaje', mensaje);

    
    window.location.href = 'datos.html';
});