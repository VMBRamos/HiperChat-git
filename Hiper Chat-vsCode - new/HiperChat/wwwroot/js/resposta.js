
function getBotResponse(input) {


    //função só  para testar as respostas falta fazer a conexao com o banco de dados + função de userMsg=DbMSG return match else return 
    if (input == "Olá") {
        return "Olá, como posso lhe ajudar?";

    } else {
        return "Não entendi, poderia reformular por gentileza? :)";
    }
}

/*
 *  
 * FUNÇÕES ABAIXO DEU PAU, PRECISO VERIFICAR COMO DAR O POST PRA CONECTAR COM O  [HttpPost("api/Chat")] NO CONTROLLER
 * 
 * 
 * function getBotResponse(input) {

   var mensagem = $("#textInput").val();
   var stringUrl = "api/Chat";

    $.ajax({
                type: "POST",
                url: stringUrl,
                async: false,
                data: { mensagem: mensagem },

                success: function (data)

                $("#chatbox").append(data.resposta);



$(function () {

    $("#Enviar").click(
        function () {

            var mensagem = $("#mensagem").val();
           
            var stringUrl = "api/Chat";

            $.ajax({
                type: "POST",
                url: stringUrl,
                async: false,
                data: { mensagem: mensagem },

                success: function (data) {

                    $("#displaymensagem").append(data.resposta + "\n");

                    $("#mensagem").val("")
                }
            });


        }
    );

});


*/

