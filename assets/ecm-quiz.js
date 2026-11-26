/* Questionario ECM RADAR XLH - Estratto fedelmente da RADAR XLH Proposta QUIZ ECM.docx */
const ECM_QUIZ_DATA = [
  {
    "num": 1,
    "text": "Quale funzione attribuisce l’atlante al tubulo prossimale nell’omeostasi del fosfato?",
    "options": [
      {
        "letter": "A",
        "text": "Mediare l’assorbimento alimentare del fosfato",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Regolare il riassorbimento del fosfato filtrato",
        "correct": true
      },
      {
        "letter": "C",
        "text": "Costituire il principale deposito di fosfato",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Mineralizzare la matrice scheletrica",
        "correct": false
      }
    ]
  },
  {
    "num": 2,
    "text": "Quale informazione fornisce direttamente la fosfatemia?",
    "options": [
      {
        "letter": "A",
        "text": "La concentrazione di fosfato nel sangue",
        "correct": true
      },
      {
        "letter": "B",
        "text": "La quantità di fosfato assorbita dall’intestino",
        "correct": false
      },
      {
        "letter": "C",
        "text": "La quota di fosfato trattenuta dal tubulo",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Il deposito totale di fosfato nello scheletro",
        "correct": false
      }
    ]
  },
  {
    "num": 3,
    "text": "Quale sistema recettoriale media il segnale renale di FGF23 descritto nell’atlante?",
    "options": [
      {
        "letter": "A",
        "text": "CYP27B1 e CYP24A1",
        "correct": false
      },
      {
        "letter": "B",
        "text": "FGFR1c e α-Klotho",
        "correct": true
      },
      {
        "letter": "C",
        "text": "PHEX e fosfatasi alcalina",
        "correct": false
      },
      {
        "letter": "D",
        "text": "NaPi-IIa e NaPi-IIc",
        "correct": false
      }
    ]
  },
  {
    "num": 4,
    "text": "Come cambia la gestione tubulare del fosfato quando aumenta l’attività di FGF23?",
    "options": [
      {
        "letter": "A",
        "text": "Diminuiscono NaPi-IIa e NaPi-IIc e aumenta la perdita urinaria",
        "correct": true
      },
      {
        "letter": "B",
        "text": "Diminuiscono NaPi-IIa e NaPi-IIc e aumenta il riassorbimento",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Aumentano NaPi-IIa e NaPi-IIc e aumenta la ritenzione renale",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Aumentano NaPi-IIa e NaPi-IIc e diminuisce la perdita urinaria",
        "correct": false
      }
    ]
  },
  {
    "num": 5,
    "text": "Quale coppia di variazioni enzimatiche contribuisce al calcitriolo inappropriatamente basso in presenza di eccesso di FGF23?",
    "options": [
      {
        "letter": "A",
        "text": "CYP27B1 e CYP24A1 aumentano entrambe",
        "correct": false
      },
      {
        "letter": "B",
        "text": "CYP27B1 aumenta e CYP24A1 diminuisce",
        "correct": false
      },
      {
        "letter": "C",
        "text": "CYP27B1 e CYP24A1 diminuiscono entrambe",
        "correct": false
      },
      {
        "letter": "D",
        "text": "CYP27B1 diminuisce e CYP24A1 aumenta",
        "correct": true
      }
    ]
  },
  {
    "num": 6,
    "text": "Un paziente presenta fosfatemia bassa per età e TmP/GFR ridotto. Quale interpretazione è più coerente con l’atlante?",
    "options": [
      {
        "letter": "A",
        "text": "Il risultato dimostra un difetto di assorbimento intestinale isolato",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Il risultato identifica da solo la causa genetica",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Il rene conserva il fosfato in modo appropriato",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Il rene non sta conservando il fosfato in misura adeguata",
        "correct": true
      }
    ]
  },
  {
    "num": 7,
    "text": "Quale profilo può essere compatibile con XLH quando è già documentata ipofosfatemia?",
    "options": [
      {
        "letter": "A",
        "text": "Calcemia generalmente normale e FGF23 anche inappropriatamente normale",
        "correct": true
      },
      {
        "letter": "B",
        "text": "Calcemia necessariamente bassa e FGF23 sempre soppresso",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Calcemia generalmente alta e TmP/GFR necessariamente aumentato",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Calcemia generalmente normale e calcitriolo necessariamente elevato",
        "correct": false
      }
    ]
  },
  {
    "num": 8,
    "text": "Nel confronto didattico tra XLH e rachitismo da carenza di vitamina D, quale dato sostiene maggiormente la seconda ipotesi senza dimostrarla da solo?",
    "options": [
      {
        "letter": "A",
        "text": "ALP elevata",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Calcemia normale",
        "correct": false
      },
      {
        "letter": "C",
        "text": "25(OH)D ridotta",
        "correct": true
      },
      {
        "letter": "D",
        "text": "Fosfatemia ridotta",
        "correct": false
      }
    ]
  },
  {
    "num": 9,
    "text": "Quale compartimento costituisce il principale deposito di fosfato nel modello illustrato?",
    "options": [
      {
        "letter": "A",
        "text": "Lo scheletro",
        "correct": true
      },
      {
        "letter": "B",
        "text": "Il lume intestinale",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Il tubulo renale",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Il plasma",
        "correct": false
      }
    ]
  },
  {
    "num": 10,
    "text": "Perché un calcitriolo nel range del laboratorio può risultare comunque inappropriato nell’XLH?",
    "options": [
      {
        "letter": "A",
        "text": "Perché il range è valido soltanto se il calcio totale è basso",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Perché un valore nel range indica una carenza di 25(OH)D",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Perché il calcitriolo sostituisce la misurazione di FGF23",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Perché il valore va interpretato rispetto al grado di ipofosfatemia",
        "correct": true
      }
    ]
  },
  {
    "num": 11,
    "text": "Quale reperto, da solo, discrimina poco tra XLH e rachitismo carenziale nel confronto del modulo?",
    "options": [
      {
        "letter": "A",
        "text": "Un profilo di 25(OH)D marcatamente ridotto",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Un TmP/GFR ridotto in presenza di ipofosfatemia",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Un FGF23 inappropriatamente elevato rispetto all’ipofosfatemia",
        "correct": false
      },
      {
        "letter": "D",
        "text": "L’aumento della fosfatasi alcalina",
        "correct": true
      }
    ]
  },
  {
    "num": 12,
    "text": "Quale abbinamento rileva il calcio nei due compartimenti indicati per il monitoraggio biochimico?",
    "options": [
      {
        "letter": "A",
        "text": "Calcemia e creatininemia",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Calciuria e fosfaturia",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Calcemia e calciuria",
        "correct": true
      },
      {
        "letter": "D",
        "text": "Fosfatemia e fosfaturia",
        "correct": false
      }
    ]
  },
  {
    "num": 13,
    "text": "Quale sequenza sintetizza il meccanismo dell’XLH presentato nel modulo?",
    "options": [
      {
        "letter": "A",
        "text": "Variante di PHEX, maggiore assorbimento di fosfato, ridotta fosfaturia",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Variante di PHEX, soppressione di FGF23, perdita renale di fosfato",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Variante di PHEX, attività eccessiva di FGF23, maggiore ritenzione renale di fosfato",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Variante di PHEX, attività eccessiva di FGF23, perdita renale di fosfato",
        "correct": true
      }
    ]
  },
  {
    "num": 14,
    "text": "Perché un ormone di origine ossea può produrre un difetto scheletrico agendo sul rene?",
    "options": [
      {
        "letter": "A",
        "text": "L’FGF23 prodotto dall’osso agisce soltanto sulla dentina senza coinvolgere il rene",
        "correct": false
      },
      {
        "letter": "B",
        "text": "L’FGF23 prodotto dall’osso agisce sul rene, riducendo la disponibilità sistemica di fosfato",
        "correct": true
      },
      {
        "letter": "C",
        "text": "L’FGF23 prodotto dal rene agisce soprattutto sull’osso senza alterare il riassorbimento",
        "correct": false
      },
      {
        "letter": "D",
        "text": "L’FGF23 prodotto dall’osso aumenta la disponibilità di fosfato alzando il riassorbimento",
        "correct": false
      }
    ]
  },
  {
    "num": 15,
    "text": "In un bambino con segni rachitici il fosfato è 3,2 mg/dL, valore segnalato come normale secondo un intervallo adulto. Come va letto?",
    "options": [
      {
        "letter": "A",
        "text": "Va considerato normale perché il limite adulto è quello riportato",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Va classificato solo in base al valore di vitamina D",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Va interpretato usando il riferimento adulto se il calcio è normale",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Va confrontato con il riferimento pediatrico per età e laboratorio",
        "correct": true
      }
    ]
  },
  {
    "num": 16,
    "text": "Davanti a deformità progressive e sospetto di rachitismo ipofosfatemico, quale errore rischia di rinviare l’inquadramento e causare danno?",
    "options": [
      {
        "letter": "A",
        "text": "Richiedere fosforemia a digiuno con ALP e creatinina",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Verificare la traiettoria staturale e i riferimenti pediatrici",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Usare megadosi empiriche di vitamina D come prova diagnostica",
        "correct": true
      },
      {
        "letter": "D",
        "text": "Documentare i segni clinici prima dell’invio",
        "correct": false
      }
    ]
  },
  {
    "num": 17,
    "text": "Per stimare il TRP con campioni appaiati, quali analiti vanno rilevati in siero e urine?",
    "options": [
      {
        "letter": "A",
        "text": "Fosfato e fosfatasi alcalina",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Fosfato e PTH",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Fosfato e creatinina",
        "correct": true
      },
      {
        "letter": "D",
        "text": "Calcio e creatinina",
        "correct": false
      }
    ]
  },
  {
    "num": 18,
    "text": "Nella formula del TRP, quale controllo è necessario prima di combinare i valori di siero e urine?",
    "options": [
      {
        "letter": "A",
        "text": "Verificare che le unità siano coerenti per ogni analita nei due campioni",
        "correct": true
      },
      {
        "letter": "B",
        "text": "Convertire il fosfato solo nel campione urinario, senza verificare le unità sieriche",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Usare unità diverse per la creatinina nei due campioni",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Sostituire la creatinina sierica con un riferimento medio per età",
        "correct": false
      }
    ]
  },
  {
    "num": 19,
    "text": "Un paziente arriva in un ambulatorio territoriale con sospetto fondato. Quale compito è appropriato prima dell’invio secondo il modello Hub e Spoke?",
    "options": [
      {
        "letter": "A",
        "text": "Limitare l’invio ai pazienti con diagnosi già confermata",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Aspettare di completare tutti gli accertamenti genetici specialistici",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Raccogliere gli elementi iniziali che rendono il sospetto valutabile dal centro",
        "correct": true
      },
      {
        "letter": "D",
        "text": "Definire già al primo contatto eleggibilità e terapia mirata",
        "correct": false
      }
    ]
  },
  {
    "num": 20,
    "text": "Nel caso didattico dell’adulta con dolore persistente, quale nuova informazione riapre il ragionamento sulla causa metabolica?",
    "options": [
      {
        "letter": "A",
        "text": "La persistenza della stessa ipotesi nonostante nuovi sintomi",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Un precedente giudizio di dolore compatibile con fibromialgia",
        "correct": false
      },
      {
        "letter": "C",
        "text": "L’attribuzione iniziale del dolore a coxartrosi",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Un ascesso spontaneo su un dente apparentemente integro",
        "correct": true
      }
    ]
  },
  {
    "num": 21,
    "text": "Quale esempio richiama Arcidiacono come causa acquisita nel gruppo delle condizioni associate a eccesso di FGF23?",
    "options": [
      {
        "letter": "A",
        "text": "Ipofosfatemia legata a una variante ereditaria di PHEX",
        "correct": false
      },
      {
        "letter": "B",
        "text": "XLH da una variante di PHEX trasmessa dalla madre",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Osteomalacia oncogenica",
        "correct": true
      },
      {
        "letter": "D",
        "text": "Rachitismo ereditario X-linked dominante",
        "correct": false
      }
    ]
  },
  {
    "num": 22,
    "text": "Quale conseguenza non scheletrica viene ricondotta al difetto di mineralizzazione illustrato nel dossier?",
    "options": [
      {
        "letter": "A",
        "text": "Compromissione della mineralizzazione della dentina",
        "correct": true
      },
      {
        "letter": "B",
        "text": "Eccessiva deposizione di minerale nella dentina",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Perdita della dentina dovuta esclusivamente a carie",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Manifestazioni dentali senza alcun legame con la mineralizzazione",
        "correct": false
      }
    ]
  },
  {
    "num": 23,
    "text": "Un paziente ha un sospetto fondato, ma l’invio non arriva a un centro competente. Quale problema mette in evidenza questo scenario?",
    "options": [
      {
        "letter": "A",
        "text": "Un referral tardivo è irrilevante se in seguito viene avviato un trattamento",
        "correct": false
      },
      {
        "letter": "B",
        "text": "La disponibilità di una terapia rende superflua la valutazione del sospetto",
        "correct": false
      },
      {
        "letter": "C",
        "text": "L’assenza di un invio rende improbabile un disturbo metabolico",
        "correct": false
      },
      {
        "letter": "D",
        "text": "L’esistenza di terapie mirate non elimina le conseguenze di un referral tardivo o incompleto",
        "correct": true
      }
    ]
  },
  {
    "num": 24,
    "text": "Nel caso didattico del bambino con varismo, quale coppia di reperti orienta il pediatra ad approfondire invece di rassicurare?",
    "options": [
      {
        "letter": "A",
        "text": "Miglioramento dell’allineamento e assenza di altri segni",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Calcemia normale e recupero della velocità di crescita",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Deflessione staturale e fosforemia ridotta per età",
        "correct": true
      },
      {
        "letter": "D",
        "text": "Statura in linea con la traiettoria e fosforemia adeguata",
        "correct": false
      }
    ]
  },
  {
    "num": 25,
    "text": "Durante il secondo anno di vita un bambino mostra rallentamento staturale e deformità degli arti inferiori. Quale lettura è più utile?",
    "options": [
      {
        "letter": "A",
        "text": "Usare la statura dell’ultima visita senza ricostruire la crescita",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Integrare la traiettoria auxologica con la deformità e valutare il metabolismo minerale",
        "correct": true
      },
      {
        "letter": "C",
        "text": "Considerare la crescita soltanto se la calcemia è bassa",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Valutare la deformità isolatamente e ignorare il rallentamento staturale",
        "correct": false
      }
    ]
  },
  {
    "num": 26,
    "text": "Quale quadro rende meno plausibile archiviare il varismo come semplice variante fisiologica?",
    "options": [
      {
        "letter": "A",
        "text": "Varismo in riduzione con crescita regolare e senza disturbi funzionali",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Allineamento stabile con crescita regolare e deambulazione conservata",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Varismo che progredisce con alterazione dell’andatura e crescita in rallentamento",
        "correct": true
      },
      {
        "letter": "D",
        "text": "Incurvamento in miglioramento senza altri segni associati",
        "correct": false
      }
    ]
  },
  {
    "num": 27,
    "text": "Quale insieme di reperti appartiene alla presentazione scheletrica pediatrica descritta nel corso?",
    "options": [
      {
        "letter": "A",
        "text": "Slargamento metafisario e deformità degli arti inferiori durante la crescita",
        "correct": true
      },
      {
        "letter": "B",
        "text": "Pseudofratture da osteomalacia come unico criterio di riconoscimento nel bambino",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Rigidità articolare isolata dopo il termine della crescita",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Entesopatia degenerativa e artrosi precoce come tipico esordio del lattante",
        "correct": false
      }
    ]
  },
  {
    "num": 28,
    "text": "Quale reperto odontoiatrico nel bambino dovrebbe far rileggere anche crescita e scheletro?",
    "options": [
      {
        "letter": "A",
        "text": "Un disturbo dentale acuto chiaramente riferibile a un trauma",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Ascessi ricorrenti su denti senza una carie evidente",
        "correct": true
      },
      {
        "letter": "C",
        "text": "Un ascesso con carie profonda che lo spiega, da solo",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Un dente con lesione cariosa localizzata e anamnesi altrimenti negativa",
        "correct": false
      }
    ]
  },
  {
    "num": 29,
    "text": "Quale osservazione all’esame del capo merita attenzione nel quadro pediatrico illustrato?",
    "options": [
      {
        "letter": "A",
        "text": "Forma cranica anomala, per la conferma diretta di PHEX",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Assenza di bozze frontali, perché escluderebbe tutte le forme genetiche",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Forma cranica anomala, per la possibile associazione con craniostenosi",
        "correct": true
      },
      {
        "letter": "D",
        "text": "Forma cranica normale, perché escluderebbe l’XLH",
        "correct": false
      }
    ]
  },
  {
    "num": 30,
    "text": "In un adulto con osteomalacia e dolore osseo focale, quale reperto orienta verso una pseudofrattura?",
    "options": [
      {
        "letter": "A",
        "text": "Un ascesso periapicale spontaneo",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Una stria di Looser",
        "correct": true
      },
      {
        "letter": "C",
        "text": "Un deposito isolato a un’inserzione tendinea",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Uno slargamento metafisario del polso in accrescimento",
        "correct": false
      }
    ]
  },
  {
    "num": 31,
    "text": "Quale quadro esprime il contributo delle entesopatie alla malattia dell’adulto?",
    "options": [
      {
        "letter": "A",
        "text": "Alterazioni metafisarie tipiche della cartilagine di crescita",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Dolore inserzionale, rigidità e limitazione del movimento",
        "correct": true
      },
      {
        "letter": "C",
        "text": "Ascessi spontanei senza coinvolgimento delle inserzioni muscolo-tendinee",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Perdita renale di fosfato come manifestazione locale delle inserzioni",
        "correct": false
      }
    ]
  },
  {
    "num": 32,
    "text": "Quali aspetti lega la lezione dell’adulto alla riduzione della qualità di vita quotidiana?",
    "options": [
      {
        "letter": "A",
        "text": "Dolore e riduzione di funzione e mobilità",
        "correct": true
      },
      {
        "letter": "B",
        "text": "Solo il valore di fosfatemia alla diagnosi",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Il risultato genetico indipendentemente dai sintomi",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Solo gli interventi avvenuti nell’infanzia",
        "correct": false
      }
    ]
  },
  {
    "num": 33,
    "text": "Quale ragionamento evita un falso negativo quando si valuta un bambino con segni rachitici e calcio nella norma?",
    "options": [
      {
        "letter": "A",
        "text": "Considerare soltanto le cause ortopediche senza valutare il fosfato",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Mantenere il sospetto e leggere il profilo fosfo-calcico con riferimenti pediatrici",
        "correct": true
      },
      {
        "letter": "C",
        "text": "Escludere il rachitismo in base alla calcemia normale",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Rimandare gli esami finché la calcemia non si abbassa",
        "correct": false
      }
    ]
  },
  {
    "num": 34,
    "text": "Quale storia dentaria è coerente con il carico di malattia che la lezione descrive nell’adulto?",
    "options": [
      {
        "letter": "A",
        "text": "Dolore tutte le volte spiegato da traumi documentati",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Perdita dentaria limitata a un singolo trauma nell’infanzia",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Una sola carie risolta senza altri problemi dentari",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Ascessi spontanei e perdita precoce di elementi dentari",
        "correct": true
      }
    ]
  },
  {
    "num": 35,
    "text": "Quale associazione descrive l’osteomalacia dell’adulto nel materiale RADAR?",
    "options": [
      {
        "letter": "A",
        "text": "Infiammazione isolata delle inserzioni con mineralizzazione conservata",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Aumento della mineralizzazione con rimodellamento sempre asintomatico",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Difetto di mineralizzazione con possibile dolore osseo e fratture da insufficienza",
        "correct": true
      },
      {
        "letter": "D",
        "text": "Alterazioni limitate alla cartilagine di crescita dell’adulto",
        "correct": false
      }
    ]
  },
  {
    "num": 36,
    "text": "Quale sequenza rappresenta la filiera RADAR dal primo contatto alla presa in carico?",
    "options": [
      {
        "letter": "A",
        "text": "Laboratorio, presa in carico Hub, riconoscimento territoriale, invio",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Riconoscimento territoriale, invio, terapia territoriale, documentazione di laboratorio",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Riconoscimento territoriale, documentazione di laboratorio, invio, presa in carico Hub",
        "correct": true
      },
      {
        "letter": "D",
        "text": "Presa in carico Hub, riconoscimento territoriale, invio, bilancio di primo livello",
        "correct": false
      }
    ]
  },
  {
    "num": 37,
    "text": "Un MMG vede un adulto con dolore osseo persistente. Quale elemento anamnestico giustifica in particolare di riaprire il sospetto metabolico?",
    "options": [
      {
        "letter": "A",
        "text": "Una storia di rachitismo infantile",
        "correct": true
      },
      {
        "letter": "B",
        "text": "Un trauma recente che spiega integralmente un dolore localizzato",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Un disturbo episodico risolto spontaneamente senza altri indizi",
        "correct": false
      },
      {
        "letter": "D",
        "text": "L’assenza di dolori durante l’ultima visita specialistica",
        "correct": false
      }
    ]
  },
  {
    "num": 38,
    "text": "Quale organizzazione dei prelievi permette di accompagnare correttamente la valutazione biochimica della perdita renale?",
    "options": [
      {
        "letter": "A",
        "text": "Prelievo ematico di solo calcio e raccolta urinaria senza creatinina",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Esame delle urine del mattino coordinato con il prelievo ematico a digiuno",
        "correct": true
      },
      {
        "letter": "C",
        "text": "Misura di ALP senza fosforemia né esami urinari",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Esame urinario in un giorno diverso senza dati ematici associati",
        "correct": false
      }
    ]
  },
  {
    "num": 39,
    "text": "Quale invio è più informativo per il centro che riceve un sospetto di XLH?",
    "options": [
      {
        "letter": "A",
        "text": "Quesito metabolico esplicito, storia e red flags, fosfato e dati renali disponibili",
        "correct": true
      },
      {
        "letter": "B",
        "text": "Solo una richiesta di terapia, senza descrivere sospetto e priorità",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Indicazione generica di dolore, senza quesito o referti consultabili",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Solo la calcemia, senza contesto clinico o fosforemia",
        "correct": false
      }
    ]
  },
  {
    "num": 40,
    "text": "Nel modello didattico, quale paziente giustifica la valutazione di una priorità più alta rispetto a uno screening familiare programmabile?",
    "options": [
      {
        "letter": "A",
        "text": "Un adulto con pseudofrattura dolorosa",
        "correct": true
      },
      {
        "letter": "B",
        "text": "Un congiunto senza nuovi segni già indirizzato a counseling",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Un familiare a rischio asintomatico in valutazione programmata",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Un paziente con deformità stabilizzata da reinquadrare",
        "correct": false
      }
    ]
  },
  {
    "num": 41,
    "text": "Una volta ricevuto un invio fondato, quale compito caratterizza l’Hub nel percorso RADAR?",
    "options": [
      {
        "letter": "A",
        "text": "Rinviare sempre la conferma genetica al professionista inviante",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Ripetere soltanto la calcemia senza considerare il sospetto",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Integrare dati clinici, biochimici e genetici e organizzare il follow-up",
        "correct": true
      },
      {
        "letter": "D",
        "text": "Chiudere il percorso al momento della prima scelta terapeutica",
        "correct": false
      }
    ]
  },
  {
    "num": 42,
    "text": "Con sospetta osteomalacia non compensata e deformità per cui si valuta un intervento, quale raccordo è prioritario?",
    "options": [
      {
        "letter": "A",
        "text": "Fissare l’intervento prima di ricostruire il quadro metabolico",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Valutare il compenso soltanto dopo l’intervento",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Coordinare la pianificazione ortopedica con la valutazione e il compenso metabolico",
        "correct": true
      },
      {
        "letter": "D",
        "text": "Limitare il confronto al solo esame dell’allineamento",
        "correct": false
      }
    ]
  },
  {
    "num": 43,
    "text": "Per confrontare la completezza degli invii nel tempo, cosa occorre definire prima della rilevazione?",
    "options": [
      {
        "letter": "A",
        "text": "Il numero di referti disponibili senza specificare invii e periodo",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Solo il numero di centri che partecipano all’iniziativa",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Solo quanti invii hanno portato a una diagnosi confermata",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Quali dati rendono completo un invio, denominatore, periodo e responsabilità",
        "correct": true
      }
    ]
  },
  {
    "num": 44,
    "text": "L’odontoiatra rileva fistole ricorrenti e camere pulpari ampie in denti apparentemente integri. Quale contributo dà alla rete RADAR?",
    "options": [
      {
        "letter": "A",
        "text": "Riconoscere la possibile sentinella sistemica e documentarla per la valutazione metabolica",
        "correct": true
      },
      {
        "letter": "B",
        "text": "Considerare sufficiente l’assenza di carie per escludere una causa sistemica",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Usare le camere pulpari come conferma definitiva di XLH",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Attivare l’invio solo dopo conferma genetica già ottenuta in studio",
        "correct": false
      }
    ]
  },
  {
    "num": 45,
    "text": "Che cosa distingue il Core Team dalla rete specialistica satellite nel modello illustrato?",
    "options": [
      {
        "letter": "A",
        "text": "Le competenze specialistiche si attivano solo dopo la chiusura del follow-up",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Il Core Team coordina le decisioni; la rete satellite integra competenze secondo il bisogno",
        "correct": true
      },
      {
        "letter": "C",
        "text": "La rete satellite prende tutte le decisioni e il Core Team si limita alle immagini",
        "correct": false
      },
      {
        "letter": "D",
        "text": "I due gruppi svolgono solo funzioni di segreteria e prenotazione",
        "correct": false
      }
    ]
  },
  {
    "num": 46,
    "text": "Quale azione dell’Hub trasforma un invio in una presa in carico condivisa con lo Spoke?",
    "options": [
      {
        "letter": "A",
        "text": "Demandare allo Spoke la conferma prima di discuterne il piano",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Considerare sufficiente che la prima visita sia stata registrata",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Conservare il piano presso il centro senza comunicarlo",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Restituire all’inviante un piano e concordare responsabilità e continuità",
        "correct": true
      }
    ]
  },
  {
    "num": 47,
    "text": "Come vanno letti i valori soglia proposti nel materiale per gli indicatori di rete?",
    "options": [
      {
        "letter": "A",
        "text": "Come risultati già ottenuti su tutti i pazienti",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Come obiettivi organizzativi da validare e monitorare",
        "correct": true
      },
      {
        "letter": "C",
        "text": "Come standard universali da applicare senza definire la coorte",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Come limiti diagnostici per distinguere XLH e altre cause",
        "correct": false
      }
    ]
  },
  {
    "num": 48,
    "text": "Il padre è affetto da XLH e la madre non porta la variante causale. Chi eredita la variante paterna nel modello illustrato?",
    "options": [
      {
        "letter": "A",
        "text": "Metà delle figlie e tutti i figli maschi",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Metà dei figli maschi e metà delle figlie",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Tutti i figli maschi e nessuna figlia",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Tutte le figlie e nessun figlio maschio",
        "correct": true
      }
    ]
  },
  {
    "num": 49,
    "text": "Una madre eterozigote per una variante patogena di PHEX chiede come cambia il rischio fra figli e figlie. Quale risposta descrive la trasmissione?",
    "options": [
      {
        "letter": "A",
        "text": "Tutti i figli ereditano la variante, ma non tutte le figlie",
        "correct": false
      },
      {
        "letter": "B",
        "text": "La probabilità di ereditare la variante è del 50% per ogni gravidanza, indipendentemente dal sesso",
        "correct": true
      },
      {
        "letter": "C",
        "text": "Il rischio è del 50% soltanto per i figli maschi",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Il rischio è del 50% soltanto per le figlie",
        "correct": false
      }
    ]
  },
  {
    "num": 50,
    "text": "Una madre portatrice ha già avuto due figli con la variante di PHEX. Come si interpreta il rischio per la prossima gravidanza?",
    "options": [
      {
        "letter": "A",
        "text": "Si riduce perché due figli hanno già ereditato la variante",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Rimane del 50% secondo il modello, perché gli esiti precedenti non lo modificano",
        "correct": true
      },
      {
        "letter": "C",
        "text": "Diventa determinabile solo contando i figli già nati",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Aumenta perché la variante è già comparsa due volte",
        "correct": false
      }
    ]
  },
  {
    "num": 51,
    "text": "Come va interpretata un’anamnesi familiare negativa in un bambino con quadro compatibile con XLH?",
    "options": [
      {
        "letter": "A",
        "text": "Non esclude il sospetto, perché sono possibili varianti de novo",
        "correct": true
      },
      {
        "letter": "B",
        "text": "Prova che l’ipofosfatemia è di origine nutrizionale",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Esclude una forma legata a PHEX finché non compare un secondo caso",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Permette di escludere la perdita renale di fosfato",
        "correct": false
      }
    ]
  },
  {
    "num": 52,
    "text": "Un genitore del caso indice ha bassa statura e storia dentaria, ma non ricorda deformità importanti. Come si usa questa informazione?",
    "options": [
      {
        "letter": "A",
        "text": "Si esclude il coinvolgimento del genitore perché manca una deformità evidente",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Si conclude che la variante del figlio è de novo senza ulteriori elementi",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Si considera sospetto soltanto il familiare con gli stessi segni e la stessa gravità",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Si considera un possibile fenotipo sfumato e si approfondisce l’anamnesi familiare",
        "correct": true
      }
    ]
  },
  {
    "num": 53,
    "text": "Dopo l’identificazione di un caso indice, quale passaggio attiva correttamente il family mapping?",
    "options": [
      {
        "letter": "A",
        "text": "Individuare i congiunti a rischio e coordinarne la valutazione con il centro e il counseling",
        "correct": true
      },
      {
        "letter": "B",
        "text": "Studiare soltanto i familiari che condividono lo stesso sesso del caso indice",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Aspettare che tutti i congiunti sviluppino deformità evidenti",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Usare un solo valore di fosfato come sostituto della valutazione familiare",
        "correct": false
      }
    ]
  },
  {
    "num": 54,
    "text": "Se un ramo del pedigree è incompleto, come va trattato nel family mapping?",
    "options": [
      {
        "letter": "A",
        "text": "Considerare tutta la famiglia non informativa e abbandonare la ricostruzione",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Classificare gli individui mancanti come non affetti",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Documentare ciò che è noto e lasciare espliciti i rami da ricostruire",
        "correct": true
      },
      {
        "letter": "D",
        "text": "Attribuire la variante a tutto il ramo senza verifica",
        "correct": false
      }
    ]
  },
  {
    "num": 55,
    "text": "Quale impostazione propone Gallo dopo aver identificato il paziente e iniziato a valutare la famiglia?",
    "options": [
      {
        "letter": "A",
        "text": "Sola restituzione del test, senza raccordo con altri professionisti",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Valutazione unicamente ortopedica dei familiari sintomatici",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Conclusione del percorso subito dopo la ricostruzione del pedigree",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Presa in carico con un’équipe preparata ai bisogni medici e psicosociali",
        "correct": true
      }
    ]
  },
  {
    "num": 56,
    "text": "Quale ruolo ha il pedigree nell’invio strutturato per sospetta XLH?",
    "options": [
      {
        "letter": "A",
        "text": "Sostituisce il test genetico e il profilo clinico-biochimico",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Consente di classificare come sani i parenti senza dati",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Organizza l’anamnesi su più generazioni e orienta la valutazione dei familiari",
        "correct": true
      },
      {
        "letter": "D",
        "text": "Documenta solo il ramo del genitore con segni evidenti",
        "correct": false
      }
    ]
  },
  {
    "num": 57,
    "text": "Nel caso indice è stata identificata una variante patogena di PHEX. Come può orientare l’accertamento nei familiari a rischio?",
    "options": [
      {
        "letter": "A",
        "text": "Permette di cercare in modo mirato la stessa variante",
        "correct": true
      },
      {
        "letter": "B",
        "text": "Impone di ripetere il test del caso indice senza valutare i parenti",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Indica di cercare soltanto varianti diverse da quella del caso indice",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Rende inutile selezionare i parenti secondo il pedigree",
        "correct": false
      }
    ]
  },
  {
    "num": 58,
    "text": "Quale combinazione di informazioni è più coerente con l’inquadramento del bambino e dei familiari discusso nel modulo?",
    "options": [
      {
        "letter": "A",
        "text": "Solo analisi dell’allineamento degli arti, anche nei familiari senza sintomi",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Valutazione clinica e biochimica integrate dal test genetico quando indicato",
        "correct": true
      },
      {
        "letter": "C",
        "text": "Solo fosfatasi alcalina prima di archiviare l’intera famiglia",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Solo test genetico, senza anamnesi né valutazione clinica",
        "correct": false
      }
    ]
  },
  {
    "num": 59,
    "text": "Quali componenti identifica il corso nella terapia convenzionale dell’XLH?",
    "options": [
      {
        "letter": "A",
        "text": "Fosfato orale e un metabolita attivo della vitamina D",
        "correct": true
      },
      {
        "letter": "B",
        "text": "Fosfato orale e soltanto vitamina D nativa come sostituto del metabolita attivo",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Solo fosfato orale come schema di riferimento",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Calcio orale e un anticorpo anti-FGF23 come schema convenzionale",
        "correct": false
      }
    ]
  },
  {
    "num": 60,
    "text": "Quale limite spiega perché il follow-up della terapia convenzionale non si esaurisce nella misura della fosfatemia?",
    "options": [
      {
        "letter": "A",
        "text": "La terapia agisce soltanto sui denti, senza effetti scheletrici",
        "correct": false
      },
      {
        "letter": "B",
        "text": "La terapia elimina la perdita renale e rende inutile controllare il rene",
        "correct": false
      },
      {
        "letter": "C",
        "text": "La terapia neutralizza FGF23 e rende superfluo monitorare il metabolismo",
        "correct": false
      },
      {
        "letter": "D",
        "text": "La terapia non corregge il meccanismo della perdita renale e richiede sorveglianza delle complicanze",
        "correct": true
      }
    ]
  },
  {
    "num": 61,
    "text": "Qual è il bersaglio del burosumab secondo le lezioni di terapia?",
    "options": [
      {
        "letter": "A",
        "text": "FGF23",
        "correct": true
      },
      {
        "letter": "B",
        "text": "Il trasportatore NaPi-IIa",
        "correct": false
      },
      {
        "letter": "C",
        "text": "PHEX",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Il recettore della vitamina D",
        "correct": false
      }
    ]
  },
  {
    "num": 62,
    "text": "Perché la lezione sull’adulto sconsiglia il fosfato orale in monoterapia nello schema convenzionale?",
    "options": [
      {
        "letter": "A",
        "text": "Impedisce il passaggio del fosfato nel filtrato glomerulare",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Può favorire l’iperparatiroidismo, motivo per cui si associa vitamina D attiva",
        "correct": true
      },
      {
        "letter": "C",
        "text": "Sopprime invariabilmente il PTH e favorisce l’ipoparatiroidismo",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Neutralizza FGF23 e rende ridondante la vitamina D attiva",
        "correct": false
      }
    ]
  },
  {
    "num": 63,
    "text": "Un adulto chiede se la terapia mirata farà regredire un’entesopatia già stabilizzata. Quale risposta riflette la lezione?",
    "options": [
      {
        "letter": "A",
        "text": "La regressione dell’entesopatia è dimostrata quando il fosfato si normalizza",
        "correct": false
      },
      {
        "letter": "B",
        "text": "L’entesopatia migliora sempre prima delle pseudofratture",
        "correct": false
      },
      {
        "letter": "C",
        "text": "I benefici attesi riguardano altri esiti; la regressione dell’entesopatia già stabilizzata non è dimostrata",
        "correct": true
      },
      {
        "letter": "D",
        "text": "La risposta va valutata soltanto verificando la scomparsa dell’entesopatia",
        "correct": false
      }
    ]
  },
  {
    "num": 64,
    "text": "Per giudicare il beneficio clinico della terapia nell’adulto, cosa va affiancato al dato biochimico?",
    "options": [
      {
        "letter": "A",
        "text": "Soltanto la statura raggiunta a fine crescita",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Soltanto il numero di prescrizioni emesse",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Il pedigree, senza rivalutare sintomi o lesioni ossee",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Dolore, rigidità, funzione fisica ed evoluzione delle fratture o pseudofratture",
        "correct": true
      }
    ]
  },
  {
    "num": 65,
    "text": "Un adolescente è vicino al passaggio al servizio per adulti ma conosce poco la gestione della malattia. Quale intervento è più coerente con il modello presentato?",
    "options": [
      {
        "letter": "A",
        "text": "Trasferirlo alla data prevista senza valutare la preparazione",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Posticipare ogni contatto con il servizio per adulti finché il trasferimento è concluso",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Consegnare il piano soltanto ai genitori senza coinvolgere il ragazzo",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Valutarne la preparazione, coinvolgere la famiglia e organizzare incontri congiunti",
        "correct": true
      }
    ]
  },
  {
    "num": 66,
    "text": "Quale verifica distingue un passaggio realmente completato da un semplice invio di documenti?",
    "options": [
      {
        "letter": "A",
        "text": "Controllare che la presa in carico sia effettiva e raccogliere riscontri da paziente e team",
        "correct": true
      },
      {
        "letter": "B",
        "text": "Verificare solo che il file sia stato inviato",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Interrompere il confronto tra i centri al momento dell’invio",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Archiviare il caso alla chiusura della cartella pediatrica",
        "correct": false
      }
    ]
  },
  {
    "num": 67,
    "text": "Quale caratteristica pratica contribuisce al carico della terapia convenzionale con fosfato orale?",
    "options": [
      {
        "letter": "A",
        "text": "La necessità di concentrare di norma tutte le dosi in un’unica assunzione",
        "correct": false
      },
      {
        "letter": "B",
        "text": "L’assenza di qualsiasi problema di tollerabilità gastrointestinale",
        "correct": false
      },
      {
        "letter": "C",
        "text": "La necessità di somministrarlo soltanto durante le visite al centro",
        "correct": false
      },
      {
        "letter": "D",
        "text": "La necessità di suddividere le assunzioni nell’arco della giornata",
        "correct": true
      }
    ]
  },
  {
    "num": 68,
    "text": "Nello studio di fase 3 descritto nella lezione sull’adulto, quale variabile biochimica è usata per valutare la risposta al trattamento?",
    "options": [
      {
        "letter": "A",
        "text": "La calcemia come esito di efficacia principale",
        "correct": false
      },
      {
        "letter": "B",
        "text": "La fosfatemia",
        "correct": true
      },
      {
        "letter": "C",
        "text": "La calciuria senza una misura del fosfato",
        "correct": false
      },
      {
        "letter": "D",
        "text": "La 25(OH)D come unico parametro",
        "correct": false
      }
    ]
  },
  {
    "num": 69,
    "text": "Che cosa deve accompagnare l’appuntamento con il centro dell’adulto affinché il nuovo team possa proseguire le cure?",
    "options": [
      {
        "letter": "A",
        "text": "La ricetta corrente senza storia clinica né referti",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Solo la data di chiusura della cartella pediatrica",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Solo le informazioni amministrative di prenotazione",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Una sintesi clinica strutturata e gli esami pertinenti al trasferimento",
        "correct": true
      }
    ]
  },
  {
    "num": 70,
    "text": "Perché una valutazione della qualità di vita nel bambino non dovrebbe limitarsi alle immagini scheletriche?",
    "options": [
      {
        "letter": "A",
        "text": "Deambulazione, affaticabilità e attività quotidiane possono essere compromesse",
        "correct": true
      },
      {
        "letter": "B",
        "text": "Il quadro radiologico non appartiene mai alla valutazione",
        "correct": false
      },
      {
        "letter": "C",
        "text": "La qualità di vita dipende soltanto dalla statura prevista",
        "correct": false
      },
      {
        "letter": "D",
        "text": "I limiti funzionali compaiono soltanto in età adulta",
        "correct": false
      }
    ]
  },
  {
    "num": 71,
    "text": "Quale andamento descrive il modulo lungo il corso della vita?",
    "options": [
      {
        "letter": "A",
        "text": "Le difficoltà muscoloscheletriche si risolvono con la fine della crescita",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Alle deformità residue possono sommarsi complicanze articolari e degenerative",
        "correct": true
      },
      {
        "letter": "C",
        "text": "Le manifestazioni dell’adulto riproducono solo quelle metafisarie del bambino",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Il carico articolare è indipendente dalle complicanze strutturali accumulate",
        "correct": false
      }
    ]
  },
  {
    "num": 72,
    "text": "In un adulto con XLH compare nuovo dolore osseo localizzato. Perché non va attribuito automaticamente al dolore cronico abituale?",
    "options": [
      {
        "letter": "A",
        "text": "Può essere la manifestazione di una pseudofrattura da valutare",
        "correct": true
      },
      {
        "letter": "B",
        "text": "La chiusura delle cartilagini impedisce nuove lesioni ossee",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Le pseudofratture si osservano esclusivamente nell’infanzia",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Il dolore focale esclude una complicanza della mineralizzazione",
        "correct": false
      }
    ]
  },
  {
    "num": 73,
    "text": "Un adulto riferisce rigidità crescente e difficoltà nelle attività quotidiane. Quale aspetto del carico di malattia è utile indagare?",
    "options": [
      {
        "letter": "A",
        "text": "Soltanto la componente dentale, perché la rigidità non è osteoarticolare",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Soltanto il fosfato, senza raccogliere informazioni su mobilità o dolore",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Contributo combinato di entesopatie, alterazioni articolari e deformità residue",
        "correct": true
      },
      {
        "letter": "D",
        "text": "Soltanto la presenza di una frattura recente, escludendo ogni altro contributo",
        "correct": false
      }
    ]
  },
  {
    "num": 74,
    "text": "Quale tema la lezione affianca al trattamento specifico per sostenere il benessere nella transizione?",
    "options": [
      {
        "letter": "A",
        "text": "Sostituire la valutazione funzionale con il solo controllo della statura",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Concentrare i colloqui unicamente sul valore di fosfatemia",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Rinviare la discussione delle abitudini alla fine del follow-up",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Promuovere uno stile di vita attivo e un’alimentazione sana",
        "correct": true
      }
    ]
  },
  {
    "num": 75,
    "text": "Un adulto torna al centro dopo un lungo intervallo senza visite. Quale approccio suggerisce la lezione?",
    "options": [
      {
        "letter": "A",
        "text": "Riprendere il follow-up soltanto se viene riscontrata una nuova deformità",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Ripristinare automaticamente il piano pediatrico senza rivalutazione",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Ricostruire il percorso, rivalutare bisogni, comorbidità e complicanze e aggiornare la presa in carico",
        "correct": true
      },
      {
        "letter": "D",
        "text": "Limitarsi a ripetere l’anamnesi genetica anche se è già documentata",
        "correct": false
      }
    ]
  },
  {
    "num": 76,
    "text": "Quale ambito affianca la lezione al monitoraggio muscoloscheletrico nei pazienti trattati a lungo con terapia convenzionale?",
    "options": [
      {
        "letter": "A",
        "text": "Soltanto la valutazione audiometrica, senza sorveglianza renale",
        "correct": false
      },
      {
        "letter": "B",
        "text": "La funzione renale e le complicanze renali",
        "correct": true
      },
      {
        "letter": "C",
        "text": "Unicamente la storia delle correzioni ortopediche",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Soltanto la misura dell’altezza adulta",
        "correct": false
      }
    ]
  },
  {
    "num": 77,
    "text": "Quale strategia di follow-up riflette meglio l’andamento longitudinale dell’XLH?",
    "options": [
      {
        "letter": "A",
        "text": "Rivalutare periodicamente le esigenze cliniche e funzionali nelle diverse fasi della vita",
        "correct": true
      },
      {
        "letter": "B",
        "text": "Programmare controlli soltanto dopo un intervento ortopedico",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Mantenere lo stesso piano pediatrico per tutta la vita senza modifiche",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Sospendere i controlli quando si stabilizza la statura",
        "correct": false
      }
    ]
  },
  {
    "num": 78,
    "text": "Quando può emergere il carico odontoiatrico lungo il percorso dell’XLH?",
    "options": [
      {
        "letter": "A",
        "text": "Solo dopo l’esordio dell’artrosi",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Già con la dentizione decidua",
        "correct": true
      },
      {
        "letter": "C",
        "text": "Soltanto dopo la comparsa delle pseudofratture nell’adulto",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Esclusivamente dopo la conclusione della crescita",
        "correct": false
      }
    ]
  },
  {
    "num": 79,
    "text": "Quale esito è utile verificare oltre all’avvenuto trasferimento amministrativo durante la transizione?",
    "options": [
      {
        "letter": "A",
        "text": "Unicamente il tempo trascorso dalla fine della crescita",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Soltanto il numero di documenti trasferiti",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Aderenza alla cura e benessere del paziente nel nuovo percorso",
        "correct": true
      },
      {
        "letter": "D",
        "text": "Solo la data in cui il nuovo team ha aperto la scheda",
        "correct": false
      }
    ]
  },
  {
    "num": 80,
    "text": "Una giovane adulta con XLH desidera una gravidanza. Quale passaggio organizzativo è coerente con il corso?",
    "options": [
      {
        "letter": "A",
        "text": "Sospendere il follow-up fino alla fine dell’allattamento",
        "correct": false
      },
      {
        "letter": "B",
        "text": "Prevedere un confronto specialistico sulle esigenze di cura in gravidanza e allattamento",
        "correct": true
      },
      {
        "letter": "C",
        "text": "Considerare la storia dell’XLH irrilevante per il percorso",
        "correct": false
      },
      {
        "letter": "D",
        "text": "Mantenere il piano esistente senza discutere il cambiamento di fase della vita",
        "correct": false
      }
    ]
  },
  {
    "num": 81,
    "text": "Quale distinzione va mantenuta quando si discutono gli esiti a lungo termine?",
    "options": [
      {
        "letter": "A",
        "text": "La correzione metabolica dimostra la reversibilità di ogni deformità",
        "correct": false
      },
      {
        "letter": "B",
        "text": "L’assenza di regressione anatomica esclude qualsiasi beneficio funzionale",
        "correct": false
      },
      {
        "letter": "C",
        "text": "Il miglioramento metabolico e la regressione del danno strutturale consolidato sono esiti distinti",
        "correct": true
      },
      {
        "letter": "D",
        "text": "La qualità di vita può essere valutata dalla sola anatomia",
        "correct": false
      }
    ]
  }
];
