let exchangeRates      = document.getElementById( "exchangeRates"      );
let exchangeRatesTitle = document.getElementById( "exchangeRatesTitle" );
let monedas            = document.getElementById( "exchangeMonedas"    );
let comisiones         = document.getElementById( "exchangeComisiones" );
let exchangeRightArrow = document.getElementById( "exchangeRightArrow" );
let exchangeLefttArrow = document.getElementById( "exchangeLeftArrow"  );

const showComisiones = () => {
    monedas.style.opacity       = "0";
    monedas.style.transform     = "translateX(-30vw)"
    comisiones.style.display    = "flex";
    monedas.style.position      = "absolute";
    monedas.style.zIndex        = "1";
    comisiones.style.zIndex     = "2";
    ( window.innerHeight < 700 ) 
        ? exchangeRatesTitle.scrollIntoView()
        : exchangeRates.scrollIntoView();
    setTimeout(
        () => {
            comisiones.style.transform  = "none";
            comisiones.style.opacity    = "1";
        }
        , 0
    )
}

const showMonedas = () => {
    comisiones.style.visibility = "hidden";
    monedas.style.display       = "flex";
    comisiones.style.display    = "none";
    monedas.style.visibility    = "visible"
}

exchangeRightArrow.addEventListener( "click" , showComisiones );
exchangeLefttArrow.addEventListener( "click" , showMonedas    );