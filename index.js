const inquirer = require('inquirer')
const calc = require('./calc')

inquirer.prompt([
  {
    name: 'n1',
    message: 'Digite o valor de n1'
  },
  {
    name: 'n2',
    message: 'Digite o valor de n2'
  },
  {
    type: 'list',
    name: 'opcao',
    message: 'Escolha uma operação: ',
    choices: ['soma', 'subtração', 'multiplicação', 'divisão']
  }
]).then((answers) => {
  let n1 = parseFloat(answers.n1)
  let n2 = parseFloat(answers.n2)
  let opcao = answers.opcao

  switch(opcao){
    case 'soma': calc.soma(n1, n2)
    break
    case 'subtração': calc.subtracao(n1,n2)
    break
    case 'multiplicação': calc.multiplicacao(n1,n2)
    break
    case 'divisão': calc.divisao(n1,n2)
    break
    default:
      console.log('Entrada inválida. Escolha uma operação.')
  }
}).catch((err)=> console.log(err))