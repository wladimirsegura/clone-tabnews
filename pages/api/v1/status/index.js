function status(request, response) {
  response
    .status(200)
    .json({ chave: "テストAlunos do curso.dev sao acima da media" });
}

export default status;
