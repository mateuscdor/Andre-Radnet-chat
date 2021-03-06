import { renderResponder } from "./renderResponder.js";

export function responderMensagem() {
  document.querySelectorAll(".responser_message").forEach((item) => {
    item.addEventListener("click", function () {
      const div = $(".responder");
      div.empty();

      renderResponder(
        $(this.parentNode.parentNode.parentNode.parentNode.children[0])
          .text()
          .trim()
      );

      let fechar = document.querySelector(".fechar-resposta");
      fechar.addEventListener("click", function () {
        const div = $(".responder");
        div.empty();
      });
    });
  });
}
