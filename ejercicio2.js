//Calcula el Índice de Masa Corporal (IMC) de una persona y clasifica el resultado.
let pesoKg=Number(65);
let alturaM=Number(1.70);
let imc=pesoKg/alturaM**2;

if(imc< 18.5){
    console.log(`Bajo peso`)
}else{
    if(imc<24.9){
        console.log(`Peso Normal`)
    }else{
        if(imc<29.9){
            console.log(`Sobrepeso`)
        }else{
            if(imc>=30){
                console.log(`Obesidad`)
            }else{
                console.log(`ingrese bien los datos`)
            }
        }
    }
}