const canva = document.querySelector("#primeiraTela");
const pencill = canva.getContext("2d");

function corDoQuadrante(){
    pencill.fillStyle="Darkgreen";
    pencill.fillRect(0, 0, 900, 600);
}
corDoQuadrante();

function desenhaQuadranteX(){
    for(let quadranteY=5; quadranteY<600; quadranteY+=40){
        pencill.fillStyle="green";
        pencill.fillRect(0, quadranteY, 900, 20);
        quadranteY+=10
    }
}
desenhaQuadranteX();

function desenhaQuadranteY(){
    for(let quadrante=20; quadrante<900; quadrante+=40){
        pencill.fillStyle="green";
        pencill.fillRect(quadrante, 0, 20, 600); 
        quadrante+=10;
    }
}
desenhaQuadranteY();

//function desenhaMaca(){
//    let quantidadeMaca=0;
//   while(quantidadeMaca <= 10){
//        pencill.beginPath();
//        pencill.fillStyle="red";
//        x=Math.round(Math.random()*900);
//        y=Math.round(Math.random()*600);
//        pencill.arc(x, y, 10, 0, 2 * Math.PI);
//        pencill.fill();
//        quantidadeMaca++;
//    }

//}
//desenhaMaca();



