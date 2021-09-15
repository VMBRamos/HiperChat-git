
$(function getBotResponse(input)  {

    $("#buttonSendText").click(
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
