let nickHero = "Lucasexe"
let expHero = 15999
let matrizMedalhas = ["Rank Ferro", "Rank Bronze", "Rank Prata", "Rank Ouro", "Rank Platina", "Rank Diamante", "Rank Ascendente", "Rank Imortal", "Rank Radiante"]
let i = 0

if (expHero <= 1000){
    console.log(`Parabéns nobre heroi, o exp apresentado por ${nickHero} é de ${matrizMedalhas[i]}`)
} else if (expHero >= 1001 && expHero <= 2000){
    i+=1
    console.log(`Parabéns nobre heroi, o exp apresentado por ${nickHero} é de ${matrizMedalhas[i]}`)
} else if (expHero >= 2001 && expHero <= 5000){
    i+=2
    console.log(`Parabéns nobre heroi, o exp apresentado por ${nickHero} é de ${matrizMedalhas[i]}`)
} else if (expHero >= 5001 && expHero <= 8000){
    i+=3
    console.log(`Parabéns nobre heroi, o exp apresentado por ${nickHero} é de ${matrizMedalhas[i]}`)
} else if (expHero >= 8001 && expHero <= 9000){
    i+=4
    console.log(`Parabéns nobre heroi, o exp apresentado por ${nickHero} é de ${matrizMedalhas[i]}`)
} else if (expHero >= 9001 && expHero <= 10000){
    i+=5
    console.log(`Parabéns nobre heroi, o exp apresentado por ${nickHero} é de ${matrizMedalhas[i]}`)
} else if (expHero >= 10001 && expHero <= 11000){
    i+=6
    console.log(`Parabéns nobre heroi, o exp apresentado por ${nickHero} é de ${matrizMedalhas[i]}`)
} else if (expHero >= 11001 && expHero <= 15000){
    i+=7
    console.log(`Parabéns nobre heroi, o exp apresentado por ${nickHero} é de ${matrizMedalhas[i]}`)
} else if (expHero >= 15001){
    i+=8
    console.log(`Parabéns nobre heroi, o exp apresentado por ${nickHero} é de ${matrizMedalhas[i]}`)
} else {
    console.log("Seu heroi é inexistente! crie um e inicie sua jornada")
}