function mostrarFormulario() {
    const figura = document.getElementById('figura').value;
    const formulario = document.getElementById('formulario');
    const inputs = document.getElementById('inputs');
    const imagenFigura = document.getElementById('imagenFigura');

    formulario.style.display = 'block';
    inputs.innerHTML = '';
    imagenFigura.src = '';

    switch(figura) {
        case 'circulo':
            imagenFigura.src = 'Figuras/circulo.png';
            inputs.innerHTML = '<label for="radio">Radio:</label><input type="number" id="radio" placeholder="Radio">';
            break;
        case 'cuadrado':
            imagenFigura.src = 'Figuras/Cuadrado.png';
            inputs.innerHTML = '<label for="lado">Lado:</label><input type="number" id="lado" placeholder="Lado">';
            break;
        case 'triangulo':
            imagenFigura.src = 'Figuras/Triangulo.png';
            inputs.innerHTML = '<label for="base">Base:</label><input type="number" id="base" placeholder="Base"><br><label for="altura">Altura:</label><input type="number" id="altura" placeholder="Altura">';
            break;
        default:
            formulario.style.display = 'none';
            break;
    }
}

function calcularArea() {
    const figura = document.getElementById('figura').value;
    let resultado = '';

    switch(figura) {
        case 'circulo':
            const radio = document.getElementById('radio').value;
            resultado = `El área del círculo es: ${(Math.PI * Math.pow(radio, 2)).toFixed(2)}`;
            break;
        case 'cuadrado':
            const lado = document.getElementById('lado').value;
            resultado = `El área del cuadrado es: ${(Math.pow(lado, 2))}`;
            break;
        case 'triangulo':
            const base = document.getElementById('base').value;
            const altura = document.getElementById('altura').value;
            resultado = `El área del triángulo es: ${((base * altura) / 2)}`;
            break;
        default:
            resultado = 'Por favor selecciona una figura y proporciona los datos necesarios.';
            break;
    }

    document.getElementById('resultado').innerText = resultado;
}
