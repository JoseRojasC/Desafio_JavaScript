document.addEventListener('DOMContentLoaded', function() {
   
    const precio = 79990;

    const precioSpan = document.querySelector(".precio-inicial");
    const cantidadSpan = document.querySelector('.cantidad');
    const valorTotalSpan = document.querySelector('.valor-total');
    const incrementarBtn = document.querySelectorAll('button')[0];
    const decrementarBtn = document.querySelectorAll('button')[1];


    precioSpan.innerHTML = precio;


    let cantidad = 0;
    let total = 0;

    function actualizarTotal() {
        total = precio * cantidad;
        valorTotalSpan.textContent = total;
    }

    incrementarBtn.addEventListener('click', function() {
        cantidad++;
        cantidadSpan.textContent = cantidad;
        actualizarTotal();
    });

    decrementarBtn.addEventListener('click', function() {
        if (cantidad > 0) {
            cantidad--;
            cantidadSpan.textContent = cantidad;
            actualizarTotal();
        }
    });

    actualizarTotal();
});