# Bonifiche Ferraresi – Sostenibilità e Innovazione nella Grande Impresa Agricola

> Sviluppo di una pagina web per la comunicazione e il download dei report di sostenibilità di un'impresa del settore primario.

Progetto sviluppato come elaborato finale, con l'obiettivo di tradurre i contenuti del Report di Sostenibilità 2023 di **Bonifiche Ferraresi S.p.A.** in uno strumento digitale accessibile, capace di comunicare in modo chiaro e immediato l'impegno dell'azienda sulle tre dimensioni ESG (Environmental, Social, Governance).

## 🌱 Descrizione del progetto

I report di sostenibilità sono documenti lunghi, tecnici e pensati principalmente per stakeholder e professionisti, risultando spesso di difficile lettura per il pubblico generale. Questo progetto nasce per ridurre quella distanza tra la quantità di dati disponibili e la loro reale comprensibilità, traducendo un documento statico di circa cento pagine in un'esperienza web dinamica, sintetica e navigabile.

Il sito è organizzato come **single-page application** in HTML puro, con sezioni dedicate a:

- **Home / Hero** – presentazione sintetica della mission aziendale e del settore in cui opera l'impresa.
- **Storia aziendale** – timeline verticale delle tappe fondamentali dell'azienda.
- **Sezione ESG** – tre blocchi tematici (Environmental, Social, Governance) con indicatori numerici animati, estratti e sintetizzati dal report ufficiale.
- **Documenti** – visualizzazione e download diretto del report di sostenibilità in formato PDF.
- **Footer** – contatti aziendali e collegamenti ai canali social ufficiali.

## 🛠️ Stack tecnologico

Il progetto è stato sviluppato **senza framework né librerie di terze parti**, con l'obiettivo di consolidare i fondamenti dello sviluppo web e mantenere piena proprietà e comprensione di ogni riga di codice prodotta.

- **HTML5** – struttura semantica della pagina (`header`, `nav`, `section`, `footer`)
- **CSS3** – layout responsive tramite Flexbox e media query, variabili CSS (`:root`) per la palette colori aziendale
- **JavaScript** (vanilla) – gestione del menu hamburger, animazione dei contatori numerici tramite `IntersectionObserver`, logica di download del report

### Strumenti di sviluppo

- **Visual Studio Code** come IDE
- **Live Server** – anteprima in tempo reale in `localhost`
- **HTMLHint** – controllo automatico della sintassi e chiusura dei tag

## 📱 Caratteristiche principali

- ✅ Design completamente **responsive**, ottimizzato per smartphone, tablet e desktop
- ✅ Navigazione interna tramite **anchor link** in un'unica pagina
- ✅ Indicatori ESG animati al momento della visualizzazione (attributo `data-fine`)
- ✅ Download diretto del report di sostenibilità in PDF
- ✅ Markup semantico e attributi di accessibilità (`alt`, `aria-label`) per una migliore fruibilità con screen reader
- ✅ Codice modulare e riutilizzabile (pattern *Reusability* sulla classe `section`)
- ✅ Testato in modalità **cross-browser** (Chrome, Firefox, Safari)

## 📂 Struttura del progetto

```
├── index.html                                          # Struttura della pagina
├── style.css                                           # Fogli di stile e layout responsive
├── script.js                                           # Logica interattiva (menù e animazioni)
├── assets/                                             # Immagini, loghi e risorse grafiche
├── banner1.jpg                                         # Immagine di banner  
├── bonificheferraresi_medium.gif                       # Logo Esteso
├── fotoreport.jpg                                      # Foto download report
├── logo.svg                                            # Logo di Bonifiche Ferraresi
├── sfondo_storia.jpg                                   # Sfondo sezione storia
└── report-sostenibilita-2023.pdf                       # Report di sostenibilità scaricabile
```

## 📜 Fonti e crediti

- Report di Sostenibilità 2023, Bonifiche Ferraresi S.p.A. – [bfspa.it](https://www.bfspa.it/)

Il logo aziendale, reperito dal sito ufficiale di Bonifiche Ferraresi, è utilizzato ai sensi della Legge sul diritto d'autore (L. 22 aprile 1941, n. 633) esclusivamente a fini di ricerca scientifica e uso didattico, senza fini di lucro o attività commerciali. Le risorse grafiche di sfondo sono utilizzate sotto licenza Creative Commons.

## 🚀 Demo

Il sito è pubblicato tramite **GitHub Pages**: *[inserire qui il link al sito pubblicato]*

## 👤 Autore

Il sito è stato realizzato da me personalmente nell'ambito del corso di Tecnologie Web e del corso di Strategia, Organizzazione e Marketing come elaborato finale della laurea triennale CDL L-31.

---

*Questo progetto ha finalità didattiche e non è affiliato né sponsorizzato da Bonifiche Ferraresi S.p.A.*