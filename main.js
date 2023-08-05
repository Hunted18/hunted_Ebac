$(document).ready(function () {
    const $form = $("#cadastroForm");
    const $itemInput = $("#itemInput");
    const $listaItens = $("#listaItens");

    $form.on("submit", function (event) {
        event.preventDefault();
        const newItemText = $itemInput.val().trim();

        if (newItemText === "") {
            alert("digite um item válido.");
            return;
        }

        const $newItem = $("<li>").text(newItemText);

        $newItem.on("click", function () {
            $(this).css("text-decoration", "line-through");
        });

        $listaItens.append($newItem);
        $itemInput.val("");
    });
});







