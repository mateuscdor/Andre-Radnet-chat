export function removerNotificacao(ip_servidor, origemDestino) {
  var settings = {
    url: `${ip_servidor}/removerNotificacao?fone=${origemDestino}`,
    method: "POST",
    timeout: 0,
    async: false,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}
