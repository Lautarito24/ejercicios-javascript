//Convierte una temperatura dada en grados Celsius a grados Fahrenheit y determina si la temperatura en Fahrenheit es alta, baja o moderada
let celsius =Number(10);
let fahrenheit= celsius*1.8 + 32;

if(fahrenheit>85){
    console.log(`la temperatura es alta`)
}else{
    if(fahrenheit>32){
        console.log(`la temperatura es baja`)
    }else{
        console.log(`ingrese bien la temperatura`)
    }
}
