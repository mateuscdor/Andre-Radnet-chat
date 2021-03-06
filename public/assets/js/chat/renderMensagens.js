import { executarAudioRecebimento } from "./executarAudioRecebimento.js";
import RetornarNumero from "./retornarNumero.js";

export function renderMessage(message, origem, numero, tipo) {
  //fazer o template da mensagem

  /*
  let data = {
    dia: moment(message.data).format("DD"),
    mes: moment(message.data).format("MM"),
    ano: moment(message.data).format("YYYY"),
    hora: moment(message.data).format("HH"),
    minutos: moment(message.data).format("mm"),
  };
  */

  let dataNomal = moment(message.data).format("DD/MM/YYYY HH:mm");
  /*
  let dataMensagem = moment({
    year: data.ano,
    month: data.mes - 1,
    day: data.dia,
    hour: data.hora,
    minute: data.minutos,
  }).fromNow();
  */

  if (tipo == "interna") {
    let templateYou = `
    <div class='d-flex flex-column align-items-end m-3'>
        <div class='d-flex flex-row-reverse align-items-start justify-content-start opcoes-conversa'>
            <div class='text-wrap text-end' style="background-color: #a7a7a0;border-radius: 10px;padding:  4px 16px 16px 16px;text-align: justify; ">
          <span style="font-size:12px;color:white;">De: ${message.author}</span><br>
          <strong> ${message.message}</strong><br>
                <sub style="font-size:10px;color:white;">mensagem interna</sub>
            </div>
            <div class='botoes'>
                <div class='dropdown'>
                    <i class='fas fa-ellipsis-v dropdown-toggle ms-2 me-2 text-light'
                        data-bs-toggle='dropdown' id='dropdownMenuButton1' aria-expanded='false'></i>

                    <ul class='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                        <li class="copiar_message"><i class='fas fa-copy ms-3'></i> Copiar</li>
                        <li class="responser_message"><i class='fas fa-reply ms-3'></i> Responder</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class='me-3 ms-3' style='max-width: 50%;'>
            <span class='text-light' style='margin-top:-10px'><i
            class='fas fa-check pe-2'></i><small>${dataNomal} </small></span>
        </div>
    </div>
`;

    let templeteOther = `
            <div class='d-flex flex-column align-items-start m-3'>
            
                <div class='d-flex align-items-start justify-content-start opcoes-conversa'>
                <div class='text-wrap text-start' style="background-color: #a7a7a0;border-radius: 10px;padding: 16px;text-align: justify; ">
                <span style="font-size:12px;color:white;">De: ${message.author}</span><br>
                       <strong> ${message.message}</strong><br>
                        <sub style="font-size:10px">mensagem interna</sub>
                    </div>
                    <div class='botoes'>

                        <div class='dropdown'>
                            <i class='fas fa-ellipsis-v dropdown-toggle ms-2 me-2 text-light'
                                data-bs-toggle='dropdown' id='dropdownMenuButton1' aria-expanded='false'></i>

                            <ul class='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                                <li class="copiar_message link-bg"><i class='fas fa-copy ms-3'></i> Copiar</li>
                                <li class="responser_message link-bg"><i class='fas fa-reply ms-3'></i> Responder</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class='me-3 ms-3' style='max-width: 50%;'>
                    <span class='text-light' style='margin-top:-10px'><i class='fas fa-check pe-2'></i> <small>${dataNomal} </small></span>
                </div>
            </div>
`;
    if (message.author == numero) {
      $(".mensagens-chat").append(templateYou);
    } else {
      $(".mensagens-chat").append(templeteOther);
    }
  } else {
    let templateYou = `
    <div class='d-flex flex-column align-items-end m-3'>
           <div class='d-flex flex-row-reverse align-items-start justify-content-start opcoes-conversa'>
            <div class='fundo-text text-wrap text-end'>
            <sub style="font-size:10px;">De: ${message.author}</sub><br>
                <strong>${message.message}</strong>
            </div>
            <div class='botoes'>
                <div class='dropdown'>
                    <i class='fas fa-ellipsis-v dropdown-toggle ms-2 me-2 text-light'
                        data-bs-toggle='dropdown' id='dropdownMenuButton1' aria-expanded='false'></i>

                    <ul class='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                        <li class="copiar_message"><i class='fas fa-copy ms-3'></i> Copiar</li>
                        <li class="responser_message"><i class='fas fa-reply ms-3'></i> Responder</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class='me-3 ms-3' style='max-width: 50%;'>
            <span class='text-light' style='margin-top:-10px'><i
            class='fas fa-check  pe-2'></i><small>${dataNomal} </small></span>
        </div>
    </div>
`;

    let templeteOther = `
            <div class='d-flex flex-column align-items-start m-3'>
                    <div class='d-flex align-items-start justify-content-start opcoes-conversa'>
                    <div class='fundo-text text-wrap text-start'>
                    <sub style="font-size:10px;">De: ${message.author}</sub><br>
                    <strong>${message.message}</strong>
                    </div>
                    <div class='botoes'>

                        <div class='dropdown'>
                            <i class='fas fa-ellipsis-v dropdown-toggle ms-2 me-2 text-light'
                                data-bs-toggle='dropdown' id='dropdownMenuButton1' aria-expanded='false'></i>

                            <ul class='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                                <li class="copiar_message link-bg"><i class='fas fa-copy ms-3'></i> Copiar</li>
                                <li class="responser_message link-bg"><i class='fas fa-reply ms-3'></i> Responder</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class='me-3 ms-3' style='max-width: 50%;'>
                    <span class='text-light' style='margin-top:-10px'><i class='fas fa-check pe-2'></i> <small>${dataNomal} </small> </span>
                </div>
            </div>
`;

    if (message.author == numero) {
      $(".mensagens-chat").append(templateYou);
    } else {
      $(".mensagens-chat").append(templeteOther);
    }
  }

  var objDiv = document.getElementById("back-chat");
  objDiv.scrollTop = objDiv.scrollHeight;

  if (origem == "wppMessage") {
    executarAudioRecebimento();
  }
}
