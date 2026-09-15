/* Apre e chiude il menu sui dispositivi mobili
   La classe "aperto" viene aggiunta e tolta al menu, che il CSS mostra o nasconde, e al pulsante, le cui tre righe si trasformano in una X
   I link vengono messi in ascolto del click per richiudere il pannello da solo dopo che l'utente ha scelto una sezione */

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", function () {
    menu.classList.toggle("aperto");
    hamburger.classList.toggle("aperto");
});

const linkMenu = menu.querySelectorAll("a");

linkMenu.forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("aperto");
        hamburger.classList.remove("aperto");
    });
});

/* Fa salire da 0 tutti gli elementi con classe "conta" fino al valore scritto nel loro attributo data-fine */
const contatori = document.querySelectorAll(".conta");
const durata = 2000;

/* Anima un singolo numero.
   Ogni fotogramma calcola quanto tempo è passato dall'inizio e lo trasforma in un avanzamento da 0 a 1 
   La formula "morbido" applica una curva di rallentamento facendo in modo che il numero parte veloce e frena verso la fine (ease-out)
   requestAnimationFrame richiama la funzione al fotogramma successivo finché l'avanzamento non arriva a 1 */
function anima(elemento) {
    const valoreFinale = Number(elemento.dataset.fine);
    const partenza = performance.now();

    function passo(adesso) {
        const trascorso = adesso - partenza;
        let avanzamento = trascorso / durata;

        if (avanzamento > 1) {
            avanzamento = 1;
        }

        const morbido = 1 - Math.pow(1 - avanzamento, 3);
        const valoreAttuale = Math.round(valoreFinale * morbido);

        elemento.textContent = valoreAttuale.toLocaleString("it-IT");

        if (avanzamento < 1) {
            requestAnimationFrame(passo);
        }
    }

    requestAnimationFrame(passo);
}

/* L'IntersectionObserver avvisa quando un elemento entra nella parte visibile della pagina facendo partire l'animazione solo allora, e non al caricamento
   threshold 0.4 = considera "visibile" il 40% dell'elemento sullo schermo
   unobserve smette di sorvegliarlo, così viene contato una volta sola. */
const osservatore = new IntersectionObserver(function (elementi) {
    elementi.forEach(function (elemento) {
        if (elemento.isIntersecting) {
            anima(elemento.target);
            osservatore.unobserve(elemento.target);
        }
    });
}, { threshold: 0.4 });

contatori.forEach(function (contatore) {
    osservatore.observe(contatore);
});