const funcoes = require("../funcoes/funcoes");
const Logados = require("../models/logados");
const session = require("express-session");
require("dotenv").config();

module.exports = (app) => {
  app.get("/logout", async function (req, res) {
    funcoes.logout();
    let logado = await funcoes.retornarUsuarioLogado();
    console.log(logado);
    Logados.mudarStatus({ status: "desconectado" }, logado[0].nome);
    res.redirect("/");
  });

  app.post("/conectar", async function (req, res) {
    let QrCode = await funcoes.conectar(req.query.sessao, req.query.fone);
    res.status(200).json(QrCode);
  });
};
