//Calcula el precio final de un producto aplicando un descuento basado en su precio inicial
let productoA=80;
let productoB=80;
let productoC=45;
if(productoA>100){
    let descuento=(productoA*10)/100;
    let precioFinal= productoA - descuento;
    console.log(`Precio final con descuento del %10 es ${precioFinal}`)
}else{
    if(productoA>50){
    let descuentoB=(productoA*5)/100;
    let precioFinalB= productoA - descuentoB;
    console.log(`Precio final con descuento del %5 es ${precioFinalB}`)
    }else{
        if(productoA<50)
            console.log(`Precio final sin descuento ${productoA}`)
    }
}