
// Boton On / Off

let tvEncendida = false;

function toggleTv() {
    tvEncendida = !tvEncendida;

    const screen = document.getElementById('screen');
    const canalNumero = document.getElementById('canalNumero');
    if (tvEncendida) {
        screen.classList.remove('off');
        screen.classList.add('basicScreen');
        canalNumero.textContent = '';

    } else {
        screen.className = 'basicScreen off';
        canalNumero.textContent = '';
    }
}

// Cambiar el canal de tv-fecha-numero canal
//innerHtml = para modificar elementos del html, añadir movidas desde el js.

function cambiarCanal(canal) {
    if (!tvEncendida) return;
    const screen = document.getElementById('screen');
    const canalNumero = document.getElementById('canalNumero');
    const fecha = new Date().toLocaleDateString();
    screen.className = 'basicScreen';
    canalNumero.innerHTML = `Canal ${canal} ${fecha}`;
    screen.classList.add(`canal${canal}`);

}
document.getElementById('onOff').addEventListener('click', toggleTv);


// CANALES CAMBIO (recordatorio: .querySelectorAll--> para usar selectores del CSS e identificar los elementos.)
const canales = document.querySelectorAll('.btn:not(.onOff)');

//.btn:not(.onOff) ----> es una pseudoclase que excluye a los selectores que tienen la clase onOff

canales.forEach((boton) => {
    boton.addEventListener('click', function () {
        if (!tvEncendida) return;
        const canal = this.id.replace('canal', '');
        cambiarCanal(canal);
    });
});


//fallito """"importante""""""": cuando enciende debería quedarse en el canal donde se quedo la última vez.

//volumen si me da tiempo, cosa que dudo.



