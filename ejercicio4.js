// Realiza operaciones aritméticas básicas y muestra el mayor resultado
let numeroA=Number(-5);
let numeroB=Number(-10);
let suma=numeroA + numeroB;
let resta=numeroA -numeroB;
let multiplicacion= numeroA*numeroB;
if(multiplicacion>suma && multiplicacion > resta){
    console.log(`la multiplicacion es el mayor ${multiplicacion}`);
}else{
    if(suma>multiplicacion && suma>resta){
        console.log(`La suma es el mayor resultado${suma}`);
   }else{
    if(resta>multiplicacion && resta>suma){
        console.log(`La resta es el mayor resultado ${resta}`);
    }
   }
    
}
