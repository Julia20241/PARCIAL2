function mostrarPopUp() {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'sweet-alert-styles.css'; // Ruta de tus estilos CSS

    // Añadir el elemento link al head del documento
    document.head.appendChild(link);

    Swal.fire({
        title: 'Si estás interesado, diligencia tus datos:',
        html:
        '<div style="display:flex;">' +
        '<div style="flex:1;">' +
        '<img src="/Imágenes/image_1_removebg_preview_1.png" style="width:100%;">' +
        '</div>' +
        '<div style="flex:2; padding-left:10px;">' +
        '<input id="swal-input1" class="swal2-input" placeholder="Nombre y apellidos">' +
        '<input id="swal-input2" class="swal2-input" placeholder="Numero de identificacion">' +
        '<input id="swal-input3" class="swal2-input" placeholder="Numero de celular">' +
        '<input id="swal-input4" class="swal2-input" placeholder="Correo electrónico">' +
        '</div>' +
        '</div>',
        showCancelButton: false, // Aquí desactivamos el botón de cancelar
        confirmButtonText: 'Enviar',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            // Obtiene los valores de los inputs
            var nombre = document.getElementById('swal-input1').value;
            var identificacion = document.getElementById('swal-input2').value;
            var celular = document.getElementById('swal-input3').value;
            var correo = document.getElementById('swal-input4').value;
            console.log("Nombre y apellidos:", nombre);
            console.log("Numero de identificacion:", identificacion);
            console.log("Numero de celular:", celular);
            console.log("Correo electrónico:", correo);
        }
    });
    
}

// Agregar event listener al botón de reserva
document.addEventListener("DOMContentLoaded", function() {
    var botonesReserva = document.querySelectorAll("#boton-reservar");
    botonesReserva.forEach(function(boton) {
        boton.addEventListener("click", function() {
            mostrarPopUp();
        });
    });
});

