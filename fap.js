const readline = require('readline-sync')

const biblioteca = []

function CADASTRAR(){
 const nome = readline.question(String('Titulo livro: '))
 const autor = readline.question(String('Autor: '))
 const genero = readline.question(String('Genero: '))
 const descricao = readline.question(String('Descricao do livro: '))
 const dataPubli = readline.question(Date('Data de publicação do livro: '))
  const livros = {
    nome,
    autor,
    genero,
    descricao,
    dataPubli
  }
  biblioteca.push(livros)
  console.log("Livro cadastrado com sucesso!");
}

function LISTAR(){
  if(biblioteca.length === 0){
    console.log('Biblioteca vazia. :( ')
    console.log('Adcione um livro. :) ')

  }else{
    console.log(biblioteca)
  }
}

function EXCLUIR(){
  //metodo .splice 
  const indice = readline.question('informe o indice que deseja remover. ') 
   console.log(`Removendo o [${indice}]`)
   //testando se o indicie existe no banco de dados
   if(indice === '' || indice < 0 || indice >= biblioteca.length){
       console.log('Indice invalido')
   }
   const remove = biblioteca.splice(indice,1)
   console.log('Item removido')
   console.log('Lista atualizada')
}
 
function ALTERAR(){
    //mudar itens do cadastro
    const alterIndicie = readline.question('Informe o indicie que deseja alterar. ')
    const campo = readline.question(`inform o campo que seseja fazer a alteração, (nome,autor,genero,descricao,dataPubli)`)
    const novoInfo = readline.question(`Informe o iteim novo para p ${campo}`)
    
    if (alterIndicie >= 0 && alterIndicie < biblioteca.length) {
      biblioteca[alterIndicie][campo] = novoInfo;
      console.log('Registro alterado com sucesso.');
      console.log('Indicie alterando com sucesso.')
      console.log('biblioteca alterada com sucesso.')
  } else {
      console.log('Índice inválido.');
  }
}

function menu(){
  console.log('---------MENU---------')
  console.log('1-CADASTRAR')
  console.log('2-LISTAR')
  console.log('3-EXCLUIR')
  console.log('4-ALTERAR')
  console.log('5-SAIR...')
  console.log('----------------------')
    const opc = readline.question('Escolha a opcao desejada')
     console.log(opc)

  switch (opc){
    case '1':
        CADASTRAR()
        menu()
        break
    case '2':
        LISTAR()
        menu()
        break 
    case '3':
       EXCLUIR()
       menu()
       break
    case '4':
       ALTERAR()
       menu()
       break
    case '5':
       console.log('Saindo...')
       break         
  }

}

menu()