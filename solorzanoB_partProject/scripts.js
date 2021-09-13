const cat1 = 89900; 
const cat2 = 45616; 
const cat3 = 96960; 
const cat4 = 3288; 
const cat5 = 89500; 
const cat6 = 1000;
const cat7 = 2400;  


const generaConsulta = (ubicacion, inmueble, minHabit, maxHabit, minPrecio, maxPrecio) => {
    ubicacion = document.getElementById(`ubicacion`).value;
    inmueble = document.getElementById(`tipo-inmuebles`).value;
    minHabit = document.getElementById(`num-habit-min`).value;
    maxHabit = document.getElementById(`num-habit-max`).value;
    minPrecio = document.getElementById(`precio-min`).value;
    maxPrecio = document.getElementById(`precio-max`).value;

    let msj = ``
    let precio = 0

    if(ubicacion === `Seleccionar` || inmueble === `Seleccionar` || minHabit === `Sin mínimo` || maxHabit === `Sin máximo` || minPrecio === `Sin precio` || maxPrecio === `Sin precio`){
        msj = `Todos los campso deben estar llenos para efectuar la consulta`
    } else if(ubicacion==='Santo Domingo' && inmueble==='Casa' && Number(minHabit)>=1 && Number(maxHabit)<=3 && Number(minPrecio)>=1 && Number(maxPrecio)<=90000){
        msj = `Excelente Casa de venta en Santo Domingo por: `
        precio = cat1;
    } else if(ubicacion==='Santo Domingo' && inmueble==='Local Comercial' || inmueble==='Oficina Comercial'&& Number(minHabit)>=1 && Number(maxHabit)<=1 && Number(minPrecio)>=1 && Number(maxPrecio)<=50000){
        msj = `Excelente Inmueble para rentar por: `
        precio = cat2;
    } else if(ubicacion==='Pichincha' && inmueble==='Suite' && Number(minHabit)>=1 && Number(maxHabit)<=3 && Number(minPrecio)>=1 && Number(maxPrecio)<=100000){
        msj = `Excelente Suite para comprar por: `
        precio = cat3;
    } else if(ubicacion==='Pichincha' && inmueble==='Local Comercial' || inmueble==='Oficina Comercial' && Number(minHabit)>=1 && Number(maxHabit)<=3 && Number(minPrecio)>=1 && Number(maxPrecio)<=5000){
        msj = `Excelente Inmueble (Departamente}o) para rentar por: `
        precio = cat4;
    } else if(ubicacion==='Guayas' && inmueble==='Casa' && Number(minHabit)>=1 && Number(maxHabit)<=4 && Number(minPrecio)>=1 && Number(maxPrecio)<=90000){
        msj = `Excelente Casa de venta por: `
        precio = cat5;
    } else if(ubicacion==='Guayas' && inmueble==='Departamento' && Number(minHabit)>=1 && Number(maxHabit)<=3 && Number(minPrecio)>=1 && Number(maxPrecio)<=5000){
        msj = `Exelente Inmueble (Departamento) para rentar por: `
        precio = cat6;
    } else if(ubicacion==='Guayas' && inmueble==='Casa' && Number(minHabit)>=1 && Number(maxHabit)>=5 && Number(minPrecio)>=1 && Number(maxPrecio)<=5000){
        msj = `Exelente Inmueble (Casa) para rentar por: `
        precio = cat7;
    } else {
        msj = 'Lo sentimos no tenemos lo que esta buscando';
    }

    const cuota = document.getElementById(`cuota`)

    if(precio !== 0){
        cuota.innerHTML = `<div> 
        <span>${msj}</span>
        <span>${precio}</span>
        </div>`
    } else{
        cuota.innerHTML = `<div> 
        <span>${msj}</span>
        </div>`
    }
}
