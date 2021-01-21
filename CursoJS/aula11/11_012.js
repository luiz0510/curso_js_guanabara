var hora = 

console.log(`Agora sao extamente ${hora} horas`)

if ( hora <= 12){
    console.log('Bom dia!!!')
} else if ( hora <= 18){
    
    console.log('Boa tarde!!')
} else if (hora > 24 || hora < 5) {
    console.log('Boa madrugada')
} else {
console.log('Boa noite!!!')
}