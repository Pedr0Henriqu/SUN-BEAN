function opcao1() {
  texto.innerHTML = `<p>
  1. Se você não possui uma conta, <a target="_blank" class="active" href="../Cadastro/cadastro.html"> Cadastre-se!</a><br>
  2. Depois de ter criado sua conta, realize o <a target="_blank" class="active" href="../Login/login.html"> Login </a><br>
  4. Cadastre a sua plantação na página <a target="_blank" class="active" href="../Plantações/plantacoes.html"> Plantações</a>! Assim teremos as informações necessárias para elaborar o seu pacote de sensores :) <br>
  5. Entre em <a href="../Login/login.htl" class="active">contato</a> solicitando a instalação dos sensores na(s) plantação(ões) cadastrada(as). <br>
  6. Confira a informação de suporte sobre o <a class="active" onclick="opcao3()"> Pagamento </a>
  </p>`;

}
function opcao2() {
  texto.innerHTML = `<p> Um usuário primário é o criador da conta. Ele pode designar uma quantidade de pessoas que também podem ter
  acesso ao conteúdo <br> do interior de seu login. Assim, na página de <a target="_blank" class="active" href="../Acesso/acesso.html"><b>Acesso</a></b>, 
  o usuário primário pode cadastrar seus usuários secundários.</p>`;
}

function opcao3() {
  texto.innerHTML = `<p> Após <a target="_blank" class="active" href="../Plantações/plantacoes.html"> cadastrar a sua plantação</a>, entre em <a href="../Login/login.htl" class="active">contato</a> solicitando a instalação de sensores na plantação recém cadastrada. <br>
  Com isso, montaremos o seu pacote de sensores e enviaremos um orçamento junto a um link para pagamento :)`;
}