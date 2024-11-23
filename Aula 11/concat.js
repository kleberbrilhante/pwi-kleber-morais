let msg = "hello"
let nmbr = 3

console.log(msg, "para os", nmbr, "alunos da sala")
console.log(msg, "para os", nmbr , "alunos da sala")
console.log(`${msg}para os ${nmbr} alunos da sala`)
let msgFinal = msg.concat(' para os ', nmbr, ' alunos da sala')
console.log(msgFinal) 
console.log(msg)
console.log(`${msg} para todos os alunos`)
console.log(`Só veio ${nmbr} alunos na sala`)