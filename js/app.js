function onDragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function onDragOver(event) {
    event.stopPropagation();
}

function OnDragLeave(event){
    event.preventDefault();
}

function OnDragOver(event) {
    event.preventDefault();
}

function OnDrop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
    ValoresCarrinho();
}

function ValoresCarrinho() {
    var vlrTotal = 0;
    var qtdProdutos = 0;
    $("#checkout").find("article").each(function () {
        var qtd = parseInt($(this).find("input[name='qtde']").val());
        var preco = $(this).find("input[name='valor']").val();
        var totUnit = qtd * preco;
        qtdProdutos = qtdProdutos + qtd;
        vlrTotal = vlrTotal + totUnit;
    })

    $("#vlrTotal").html(vlrTotal);
    $("#qtdProdutos").html(qtdProdutos);
}