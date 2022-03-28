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

const showBothCards = () => {
    if ( screen.width >= 600 ) {
        comisiones.style.position   = "static";
        comisiones.style.transform  = "none";
        comisiones.style.opacity    = "1";
        monedas.style.position      = "static";
        monedas.style.transform     = "none";
        monedas.style.opacity       = "1";
    }
    else {
        showMonedas();
    }
}

exchangeRightArrow.addEventListener( "click" , showComisiones  );
exchangeLefttArrow.addEventListener( "click" , showMonedas     );
screen.orientation.onchange = showBothCards ;

//FAQ SECTION
let questionA      = document.getElementById( "questionA"     );
let questionB      = document.getElementById( "questionB"     );
let questionC      = document.getElementById( "questionC"     );
let questionD      = document.getElementById( "questionD"     );
let answerA        = document.getElementById( "answerA"       );
let answerB        = document.getElementById( "answerB"       );
let answerC        = document.getElementById( "answerC"       );
let answerD        = document.getElementById( "answerD"       );
let answerArrowA   = document.getElementById( "answerArrowA" );
let answerArrowB   = document.getElementById( "answerArrowB"  );
let answerArrowC   = document.getElementById( "answerArrowC"  );
let answerArrowD   = document.getElementById( "answerArrowD"  );

const showAnswers = ( answer , answerArrow ) => {
    if ( answer.style.display == "block" ) {
        answer.style.display         = "none";
        answerArrow.style.transform  = "none";
    }
    else {
        answer.style.display         = "block";
        answerArrow.style.transform  = "rotate(180deg)";
    }
}

const showAnswerA = () => { showAnswers ( answerA , answerArrowA ); }
const showAnswerB = () => { showAnswers ( answerB , answerArrowB ); }
const showAnswerC = () => { showAnswers ( answerC , answerArrowC ); }
const showAnswerD = () => { showAnswers ( answerD , answerArrowD ); }

questionA.addEventListener( "click" , showAnswerA );
questionB.addEventListener( "click" , showAnswerB );
questionC.addEventListener( "click" , showAnswerC );
questionD.addEventListener( "click" , showAnswerD );