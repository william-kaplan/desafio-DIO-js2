function rankeada(vitoria, derrota) {
  let saldoRank = vitoria - derrota;
  return saldoRank;
}

saldoRank = rankeada(101, 0);

let nivel;

if (saldoRank <= 10) {
  nivel = "Ferro";
} else if (saldoRank <= 20) {
  nivel = "Bronze";
} else if (saldoRank <= 50) {
  nivel = "Prata";
} else if (saldoRank <= 80) {
  nivel = "Ouro";
} else if (saldoRank <= 90) {
  nivel = "Diamante";
} else if (saldoRank <= 100) {
  nivel = "Lendário";
} else {
  nivel = "Imortal";
}

console.log(
  "O Herói tem de saldo de " +
    saldoRank +
    " vitórias, e está no nível de " +
    nivel
);
