function getBotResponse(input) {


  //função só  para testar as respostas falta fazer a conexao com o banco de dados + função de userMsg=DbMSG return match else return 
    if (input == "Olá") {
        return "Olá, como posso lhe ajudar?";

    } else {
        return "Não entendi, poderia reformular por gentileza? :)";
    }
}


$(function () {

    $("#Enviar").click(
        function () {

            var mensagem = $("#mensagem").val();
            var hipc = "HiperCliente: ";
            var hipct = "HiperChat: ";

            var stringUrl = "api/Chat";

            $.ajax({
                type: "POST",
                url: stringUrl,
                async: false,
                data: { mensagem: mensagem },

                success: function (data) {

                    $("#displaymensagem").append(hipc + mensagem + "\n");
                    $("#displaymensagem").append(hipct + data.resposta + "\n");

                    $("#mensagem").val("")
                }
            });


        }
    );

});

