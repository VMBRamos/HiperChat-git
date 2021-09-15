// função para expandir e fechar o chat, verificar se consigo fazer isso com um Hover para dimunir o tamanho que está ocupando atualmente
//a webpage
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

//aqui eu declaro a hora pq sim, achei legal colocar a hora no primeiro envio de msg
function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    //if concatenando as horas < 10 p/ deixar o visual melhor ex:05:19 AM

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// função para a primeira mensagem
function firstBotMessage() {
   

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// recebe a resposta e processa
//chamar essa função na API 
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}


//Recebe o texto do input e processa 
function getResponse() {
    let userText = $("#textInput").val();

    //tratativa se o usuário tentar enviar sem nenhum contexto no input ele     
    if (userText == "") {
        return;
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //defini um tempo de resposta para o usuário entender que a msg está sendo processada
    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}


// Trata o envio de mensagem via botao --- com esse send verificar se possivel adicionar a função de API
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

}

function sendButton() {
    getResponse();
}


// Enter para enviar a mensagem -- 13=key code pro enter
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});


