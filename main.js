document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const valorCampoA = document.getElementById("campo-a").value;
    const valorCampoB = document.getElementById("campo-b").value;

    const numeroA = parseFloat(valorCampoA);
    const numeroB = parseFloat(valorCampoB);

    if (isNaN(numeroA) || isNaN(numeroB)) {
        document.querySelector(".message").textContent = "Por favor, digite valores numéricos válidos em ambos os campos.";
    } else if (numeroB > numeroA) {
        document.querySelector(".message").textContent = "Formulário válido! Número B é maior que número A.";
    } else {
        document.querySelector(".message").textContent = "Formulário inválido! Número B deve ser maior que número A.";
    }
});