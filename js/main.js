
// Boton On / Off

let tvEncendida = false;

// Toggle

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

function cambiarCanal(canal){
    if(!tvEncendida) return;
const screen = document.getElementById('screen');
const canalNumero = document.getElementById('canalNumero');
const fecha =new Date().toLocaleDateString();
}



