let monedas            = document.getElementById( "exchangeMonedas"    );
let comisiones         = document.getElementById( "exchangeComisiones" );
let exchangeRightArrow = document.getElementById( "exchangeRightArrow" );
let exchangeLefttArrow = document.getElementById( "exchangeLeftArrow"  );

const showComisiones = () => {
    monedas.style.visibility    = "hidden";
    comisiones.style.display    = "flex";
    monedas.style.display       = "none";
    comisiones.style.visibility = "visible";
}

const showMonedas = () => {
    comisiones.style.visibility = "hidden";
    monedas.style.display       = "flex";
    comisiones.style.display    = "none";
    monedas.style.visibility    = "visible"
}

exchangeRightArrow.addEventListener( "click" , showComisiones );
exchangeLefttArrow.addEventListener( "click" , showMonedas    );