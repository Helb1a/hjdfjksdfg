var notas = [10,9,8,5,6,10,7,5,1];
var soma = 0, media = 0;
var i;

function setup() {
  createCanvas(400, 400);
  
  for(i=0;i<9;i++){
    console.log(soma);
    soma = soma + notas[i];
  }
  media = soma/9;
  console.log("media = "+media);
}

function draw() {
  background(150);
}