let valorCompra = parseFloat(prompt("Digite o valor de compra do produto:"));

let percentualLucro = (valorCompra < 20) ? 0.45 : 0.30;
let valorVenda = valorCompra * (1 + percentualLucro);

alert(valor);
