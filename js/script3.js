let contadorPrecio=0;
let acumuladorPrecio=0;
let productos=0;
let precio=0;

while(true){
    let productos=prompt('Ingrese productos:'); 
    if (productos!=='Q'){
        let precio=parseInt(prompt('Ingrese precio:'));
        contadorPrecio++;
        acumuladorPrecio+=precio;
        console.log(productos+' '+precio);
    }else{
        alert('Acabó el registro')
        break; 
    }
    console.log('Cantidad de producto:'+contadorPrecio)
    console.log('Precio Acumulado:'+acumuladorPrecio)
    console.log(('Promedio:'+acumuladorPrecio/contadorPrecio))
}


    
    


