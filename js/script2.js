var categoria;
var tipo;
var proveedor;
var costo;
var precio;

proveedor=prompt('Elija el Proveedor [P1:Intipalka-P2:Tacama]:');
categoria=prompt('Elija la Categoria de vino [T:Tinto-B:Blanco]:');
tipo=prompt('Elija el tipo de vino [S:Seco-M:Semiseco-D:Dulce]:');

if(proveedor=='P1'){
    switch(categoria){
        case 'T':
            switch(tipo){
                case 'S':
                    costo=100*0.15;
                break;
                case 'M':
                    costo=100*0.10;
                break;
                case 'D':
                    costo=100*0.05;
                break;
                default:
                alert('No existe')
            }
            alert('Proveedor: '+proveedor+'\n'+'Categoria: '+categoria+'\n'+'Tipo: '+tipo+'\n'+'Precio: '+costo + ' soles')
        break;
        case 'B':
            switch(tipo){
                case 'S':
                    costo=80*0.15;
                break;
                case 'M':
                    costo=80*0.10;
                break;
                case 'D':
                    costo=80*0.05;
                break;
                default:
                alert('No existe')
            }
            alert('Proveedor: '+proveedor+'\n'+'Categoria: '+categoria+'\n'+'Tipo: '+tipo+'\n'+'Precio: '+costo+ ' soles')
        break;
        default:
        alert('No existe')
    }  

}else if (proveedor=='P2'){
        switch(categoria){
        case 'T':
            switch(tipo){
                case 'S':
                    precio=200*0.20;
                break;
                case 'M':
                    precio=200*0.10;
                break;
                case 'D':
                    precio=200*0.08;
                break;
                default:
                alert('No existe')
            }
            alert('Proveedor: '+proveedor+'\n'+'Categoria: '+categoria+'\n'+'Tipo: '+tipo+'\n'+'Precio: '+precio+ ' soles')
        break;
        case 'B':
            switch(tipo){
                case 'S':
                    precio=120*0.20;
                break;
                case 'M':
                    precio=120*0.10;
                break;
                case 'D':
                    precio=120*0.08;
                break;
                default:
                alert('No existe')
            }
            alert('Proveedor: '+proveedor+'\n'+'Categoria: '+categoria+'\n'+'Tipo: '+tipo+'\n'+'Precio: '+precio+' soles')
        break;
        default:
        alert('No exite')
    }

}else{
    alert('No existe')
}