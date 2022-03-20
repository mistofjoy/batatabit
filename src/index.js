let exchangeRates      = document.getElementById( "exchangeRates"      );
let exchangeRatesTitle = document.getElementById( "exchangeRatesTitle" );
let monedas            = document.getElementById( "exchangeMonedas"    );
let comisiones         = document.getElementById( "exchangeComisiones" );
let exchangeRightArrow = document.getElementById( "exchangeRightArrow" );
let exchangeLefttArrow = document.getElementById( "exchangeLeftArrow"  );

const showComisiones = () => {
    monedas.style.opacity       = "0";
    monedas.style.transform     = "translateX(-30vw)"
    comisiones.style.position   = "static";
    monedas.style.position      = "absolute";
    monedas.style.zIndex        = "1";
    comisiones.style.zIndex     = "2";
    /*
    // For some reason, this transition often shifts the vertical scroll a little... This was a measure for correcting that, but it got unnecessary as I added more sections.
    // I'll leave it here for further reference.
    ( window.innerHeight < 700 ) 
        ? exchangeRatesTitle.scrollIntoView()
        : exchangeRates.scrollIntoView();
    */
    setTimeout(
        () => {
            comisiones.style.transform  = "none";
            comisiones.style.opacity    = "1";
        }
        , 0
    )
}

const showMonedas = () => {
    comisiones.style.opacity       = "0";
    comisiones.style.transform     = "translateX(30vw)"
    monedas.style.position         = "static";
    comisiones.style.position      = "absolute";
    comisiones.style.zIndex        = "1";
    monedas.style.zIndex           = "2";
    /*
    // For some reason, this transition often shifts the vertical scroll a little... This was a measure for correcting that, but it got unnecessary as I added more sections.
    // I'll leave it here for further reference.
    ( window.innerHeight < 700 ) 
        ? exchangeRatesTitle.scrollIntoView()
        : exchangeRates.scrollIntoView();
    */
    setTimeout(
        () => {
            monedas.style.transform  = "none";
            monedas.style.opacity    = "1";
        }
        , 0
    )
}

exchangeRightArrow.addEventListener( "click" , showComisiones );
exchangeLefttArrow.addEventListener( "click" , showMonedas    );