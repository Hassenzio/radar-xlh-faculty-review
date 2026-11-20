/* ═══════════════════════════════════════════════════════
   RADAR XLH — Faculty Review Platform
   Interactive Module Engine & Uniform Content Navigator
   ═══════════════════════════════════════════════════════ */

// Matrice Organizzativa Ufficiale (da Matrice Organizzativa Moduli - FaD RADAR XLH.xlsx)
const MODULES_DATA = [
  {
    "id": 1,
    "code": "01",
    "rawTitle": "Modulo 1 - L'Importanza del Fosfato",
    "title": "L'Importanza del Fosfato",
    "authors": [
      "Danilo Fintini"
    ],
    "units": [
      {
        "id": "01:01:00",
        "title": "Omeostasi Minerale",
        "authors": "Danilo Fintini",
        "type": "Video Pillola",
        "formatClass": "format-video",
        "hasRealContent": false
      },
      {
        "id": "01:02:00",
        "title": "Ruolo Clinico del Fosfato",
        "authors": "Danilo Fintini",
        "type": "Video Pillola",
        "formatClass": "format-video",
        "hasRealContent": false
      },
      {
        "id": "01:03:00",
        "title": "Omeostasi Fosfo-Calcica in una Pagina",
        "authors": "Danilo Fintini",
        "type": "Info-grafiche/flipbook",
        "formatClass": "format-flipbook",
        "hasRealContent": true,
        "embedUrl": "https://heyzine.com/flip-book/97c5fa83a3.html",
        "embedHtml": "<iframe allowfullscreen allow=\"autoplay; fullscreen; clipboard-write\" scrolling=\"no\" style=\"width: 100%; height: 480px; border: none;\" src=\"https://heyzine.com/flip-book/97c5fa83a3.html\"></iframe>"
      },
      {
        "id": "01:04:00",
        "title": "Quanto Conosci e Utilizzi il Metabolismo Fosfo-Calcico nella Tua Pratica?",
        "authors": "Danilo Fintini",
        "type": "Survey Baseline",
        "formatClass": "format-survey",
        "hasRealContent": false
      }
    ]
  },
  {
        "id": 2,
    "code": "02",
    "rawTitle": "Modulo 2 - Comprendere l'Ipofosfatemia X-Linked",
    "title": "Comprendere l'Ipofosfatemia X‑Linked",
    "authors": [
      "Gaetano Paride Arcidiacono"
    ],
    "units": [
      {
        "id": "02:01:00",
        "title": "Da PHEX a FGF23: Perché nell'XLH si Perde Fosfato",
        "authors": "Gaetano Paride Arcidiacono",
        "type": "Video Pillola",
        "formatClass": "format-video",
        "hasRealContent": true,
        "embedUrl": "https://player.vimeo.com/video/1246890324?h=2ba8f2e4d6",
        "embedHtml": '<div class="vimeo-embed-wrapper"><iframe src="https://player.vimeo.com/video/1246890324?h=2ba8f2e4d6&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen title="0201 Arcidiacono"></iframe></div>'
      },
      {
        "id": "02:02:00",
        "title": "Il Paziente con Ipofosfatemia: dall'Alterazione Biochimica alla Diagnosi",
        "authors": "Gaetano Paride Arcidiacono",
        "type": "Video Pillola",
        "formatClass": "format-video",
        "hasRealContent": true,
        "embedUrl": "https://player.vimeo.com/video/1246890324?h=2ba8f2e4d6",
        "embedHtml": '<div class="vimeo-embed-wrapper"><iframe src="https://player.vimeo.com/video/1246890324?h=2ba8f2e4d6&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen title="0202 Arcidiacono"></iframe></div>'
      },
      {
        "id": "02:03:00",
        "title": "Guida Pratica e Metodologia del Referral (XLH Spiegata al Referrer)",
        "authors": "Gaetano Paride Arcidiacono",
        "type": "FlipBook",
        "formatClass": "format-flipbook",
        "hasRealContent": true,
        "embedUrl": "https://heyzine.com/flip-book/b168ce046b.html",
        "embedHtml": '<iframe allowfullscreen allow="autoplay; fullscreen; clipboard-write" scrolling="no" style="width: 100%; height: 100%; min-height: 76vh; border: none; display: block;" src="https://heyzine.com/flip-book/b168ce046b.html"></iframe>'
      }
    ]
  }, {
    "id": 3,
    "code": "03",
    "rawTitle": "Modulo 3 - Identificare il Paziente",
    "title": "Identificare il Paziente",
    "authors": [
      "Anna Grandone",
      "Gemma Marcucci"
    ],
    "units": [
      {
        "id": "03:01:00",
        "title": "Quando Pensare all'XLH nel Bambino",
        "authors": "Anna Grandone",
        "type": "Video Pillola",
        "formatClass": "format-video",
        "hasRealContent": false
      },
      {
        "id": "03:02:00",
        "title": "Manifestazioni nell'Adulto",
        "authors": "Gemma Marcucci",
        "type": "Video Pillola",
        "formatClass": "format-video",
        "hasRealContent": false
      },
      {
        "id": "03:03:00",
        "title": "Mini-Casi Interattivi \"Effetto Sliding Doors\"",
        "authors": "Anna Grandone / Gemma Marcucci",
        "type": "Mini-Casi Interattivi",
        "formatClass": "format-interactive",
        "hasRealContent": false
      },
      {
        "id": "03:04:00",
        "title": "Red Flags",
        "authors": "Anna Grandone / Gemma Marcucci",
        "type": "Sharing Experience / Survey",
        "formatClass": "format-survey",
        "hasRealContent": false
      }
    ]
  },
  {
    "id": 4,
    "code": "04",
    "rawTitle": "Modulo 4 - Mappatura e Network di Referral",
    "title": "Mappatura e Network di Referral",
    "authors": [
      "Anna Grandone",
      "Vincenzo Grassia",
      "Maurizio Scorianz",
      "Rossella Santoro"
    ],
    "units": [
      {
        "id": "04:03:00",
        "title": "Ruolo del Pediatra di Libera Scelta",
        "authors": "Anna Grandone / Vincenzo Grassia / Maurizio Scorianz",
        "type": "Video Pillola",
        "formatClass": "format-video",
        "hasRealContent": false
      },
      {
        "id": "04:04:00",
        "title": "Ruolo di Odontoiatra",
        "authors": "Anna Grandone / Vincenzo Grassia / Maurizio Scorianz",
        "type": "Video Pillola",
        "formatClass": "format-video",
        "hasRealContent": false
      },
      {
        "id": "04:05:00",
        "title": "Ruolo di Ortopedico e Fisiatra",
        "authors": "Anna Grandone / Vincenzo Grassia / Maurizio Scorianz",
        "type": "Video Pillola",
        "formatClass": "format-video",
        "hasRealContent": false
      },
      {
        "id": "04:06:00",
        "title": "Dove Invieresti Oggi un Paziente Sospetto?",
        "authors": "Anna Grandone / Rossella Santoro / Maurizio Scorianz",
        "type": "Survey Referral Mapping",
        "formatClass": "format-survey",
        "hasRealContent": false
      },
      {
        "id": "04:07:00",
        "title": "Corretto Work Flow di Referral ed Infografica Centri Italiani sul Territorio",
        "authors": "Anna Grandone / Rossella Santoro / Maurizio Scorianz",
        "type": "Info-Grafica",
        "formatClass": "format-infografica",
        "hasRealContent": false
      }
    ]
  },
  {
    "id": 5,
    "code": "05",
    "rawTitle": "Modulo 5 - Mappatura Famigliare",
    "title": "Mappatura Famigliare",
    "authors": [
      "Francesco Gallo"
    ],
    "units": [
      {
        "id": "05:01:00",
        "title": "Genetica ed Ereditarietà X-Linked Dominante",
        "authors": "Francesco Gallo",
        "type": "Video Masterclass",
        "formatClass": "format-video",
        "hasRealContent": false
      },
      {
        "id": "05:02:00",
        "title": "Family Mapping Challenge",
        "authors": "Francesco Gallo",
        "type": "Info-Grafica",
        "formatClass": "format-infografica",
        "hasRealContent": false
      },
      {
        "id": "05:03:00",
        "title": "Family Screening",
        "authors": "Francesco Gallo",
        "type": "Survey",
        "formatClass": "format-survey",
        "hasRealContent": false
      }
    ]
  },
  {
    "id": 6,
    "code": "06",
    "rawTitle": "Modulo 6 - Il Percorso dell'XLH",
    "title": "Il Percorso dell'XLH",
    "authors": [
      "Danilo Fintini",
      "Gemma Marcucci"
    ],
    "units": [
      {
        "id": "06:01:00",
        "title": "Approccio Terapeutico - Pediatrico",
        "authors": "Danilo Fintini",
        "type": "Video Pillola",
        "formatClass": "format-video",
        "hasRealContent": false
      },
      {
        "id": "06:02:00",
        "title": "Approccio Terapeutico - Adulto",
        "authors": "Gemma Marcucci",
        "type": "Video Pillola",
        "formatClass": "format-video",
        "hasRealContent": false
      },
      {
        "id": "06:03:00",
        "title": "Transizione Pediatrico-Adulto",
        "authors": "Danilo Fintini",
        "type": "Video Pillola",
        "formatClass": "format-video",
        "hasRealContent": false
      }
    ]
  },
  {
    "id": 7,
    "code": "07",
    "rawTitle": "Modulo 7 - Vivere con l'XLH",
    "title": "Vivere con l'XLH",
    "authors": [
      "Sabrina Corbetta"
    ],
    "units": [
      {
        "id": "07:01:00",
        "title": "Dal Bambino all'Adulto in Età Avanzata",
        "authors": "Sabrina Corbetta",
        "type": "Video-Case Simulato",
        "formatClass": "format-interactive",
        "hasRealContent": false
      },
      {
        "id": "07:02:00",
        "title": "Transizione - Qualità di Vita",
        "authors": "Sabrina Corbetta",
        "type": "FlipBook Finale",
        "formatClass": "format-flipbook",
        "hasRealContent": false
      },
      {
        "id": "07:04:00",
        "title": "Cosa Cambierai nella Tua Pratica?",
        "authors": "Sabrina Corbetta",
        "type": "Survey Finale",
        "formatClass": "format-survey",
        "hasRealContent": false
      }
    ]
  }
];


// ── MODULI ISTITUZIONALI DI APERTURA E CHIUSURA (DIREZIONE SCIENTIFICA) ──
const PROLOGO_MODULE = {
  id: "prologo",
  code: "PR",
  rawTitle: "Modulo Prologo — Apertura dei Lavori & Razionale Istituzionale",
  title: "Prologo Istituzionale & Apertura Lavori",
  authors: [
    "Sabrina Corbetta",
    "Anna Grandone"
  ],
  units: [
    {
      id: "PR:01:00",
      title: "Introduzione e Razionale Scientifico del Progetto RADAR XLH",
      authors: "Sabrina Corbetta",
      type: "Video Pillola",
      formatClass: "format-video",
      hasRealContent: false,
      note: "In allestimento — Direzione Scientifica"
    },
    {
      id: "PR:02:00",
      title: "Metodologia Formativa e Obiettivi della Rete Clinica Interdisciplinare",
      authors: "Anna Grandone",
      type: "Video Pillola",
      formatClass: "format-video",
      hasRealContent: false,
      note: "In allestimento — Direzione Scientifica"
    }
  ]
};

const EPILOGO_MODULE = {
  id: "epilogo",
  code: "EP",
  rawTitle: "Modulo Epilogo — Conclusioni Scientifiche & Take Home Messages",
  title: "Epilogo & Conclusioni Scientifiche",
  authors: [
    "Sabrina Corbetta",
    "Anna Grandone"
  ],
  units: [
    {
      id: "EP:01:00",
      title: "Sintesi Clinica e Take Home Messages per i Centri Prescrittori e Referrer",
      authors: "Sabrina Corbetta",
      type: "Video Pillola",
      formatClass: "format-video",
      hasRealContent: false,
      note: "In allestimento — Direzione Scientifica"
    },
    {
      id: "EP:02:00",
      title: "Consolidamento del Network RADAR XLH e Prospettive Cliniche Future",
      authors: "Anna Grandone",
      type: "Video Pillola",
      formatClass: "format-video",
      hasRealContent: false,
      note: "In allestimento — Direzione Scientifica"
    }
  ]
};

function getModuleById(id) {
  if (id === "prologo" || id === 0) return PROLOGO_MODULE;
  if (id === "epilogo" || id === 8) return EPILOGO_MODULE;
  const numId = typeof id === "number" ? id : parseInt(id, 10);
  return MODULES_DATA.find(m => m.id === numId);
}

function formatTitleNoBreak(str) {
  if (!str) return "";
  return str
    .replace(/X[-‑]Linked/gi, "<span class=\"no-break\">X&#8209;Linked</span>")
    .replace(/Fosfo[-‑]Calcica/gi, "<span class=\"no-break\">Fosfo&#8209;Calcica</span>");
}

let currentActiveModuleId = 1;

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderRoadmapGrid();
  renderModuleViewer(1);
  initDossierTabs();
  initModal();
});

// ── NAVBAR SCROLL & BURGER ──
function initNavbar() {
  const nav = document.querySelector('.nav');
  const burger = document.querySelector('.nav-burger');
  const mobile = document.querySelector('.nav-mobile');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });

  burger?.addEventListener('click', () => {
    burger.classList.toggle('open');
    mobile.classList.toggle('open');
  });

  document.querySelectorAll('.nav-mobile a').forEach(a => {
    a.addEventListener('click', () => {
      burger?.classList.remove('open');
      mobile?.classList.remove('open');
    });
  });
}

// ── ROADMAP GRID: 7 CARD RIGOROSAMENTE IDENTICHE E UNIFORMI ──
function renderRoadmapGrid() {
  const container = document.getElementById("roadmapGrid");
  if (!container) return;

  container.innerHTML = MODULES_DATA.map(mod => {
    const isActive = mod.id === currentActiveModuleId;
    const readyCount = mod.units.filter(u => u.hasRealContent).length;
    return `
      <div class="tappa-card ${isActive ? "active" : ""}" data-module-id="${mod.id}" onclick="selectModule(${mod.id})">
        <div class="tappa-top-row">
          <div class="tappa-badge">${mod.code}</div>
          ${readyCount > 0 ? `<span class="tappa-ready-pill">${readyCount} ${readyCount === 1 ? "Pronto" : "Pronti"}</span>` : ""}
        </div>
        <div class="tappa-card-title">${formatTitleNoBreak(mod.title)}</div>
        <div class="tappa-card-author">${mod.authors.map(a => `<span class="tappa-author-name">${escapeHtml(a)}</span>`).join(", ")}</div>
        <div class="tappa-card-footer">
          <span class="tappa-count">${mod.units.length} Contenuti</span>
          <span class="tappa-action-arrow">→</span>
        </div>
      </div>
    `;
  }).join("");
}

// ── SELEZIONE MODULO (PROLOGO, 1..7, EPILOGO) ──
function selectModule(id) {
  currentActiveModuleId = id;
  
  // Aggiorna stato active delle card 01-07
  document.querySelectorAll(".tappa-card").forEach(card => {
    const cardId = parseInt(card.dataset.moduleId, 10);
    card.classList.toggle("active", cardId === id);
  });

  // Aggiorna stato active per prologo ed epilogo
  const prologoCard = document.getElementById("btnPrologoModule");
  const epilogoCard = document.getElementById("btnEpilogoModule");
  prologoCard?.classList.toggle("active", id === "prologo");
  epilogoCard?.classList.toggle("active", id === "epilogo");

  // Renderizza il selettore contenuti del modulo
  renderModuleViewer(id);

  // Scroll morbido al visualizzatore del modulo
  const viewer = document.getElementById("stageViewer");
  if (viewer) {
    const yOffset = -90;
    const y = viewer.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

// ── RENDER STAGE VIEWER: SELETTORE CONTENUTI PULITO (NON ESPLOSO) ──
function renderModuleViewer(id) {
  const moduleData = getModuleById(id);
  if (!moduleData) return;

  const headerContainer = document.getElementById("stageViewerHeader");
  const unitsContainer = document.getElementById("stageUnitsList");

  const isFraming = id === "prologo" || id === "epilogo";
  const tagText = id === "prologo" 
    ? "Modulo Prologo Istituzionale · Direzione Scientifica"
    : id === "epilogo"
      ? "Modulo Epilogo Scientifico · Direzione Scientifica"
      : `Tappa Didattica ${moduleData.code} di 07 · Matrice Ufficiale Validata`;

  const descText = isFraming
    ? `<strong>Allestimento Direzione Scientifica:</strong> 2 Video Pillole affidate alle Responsabili Scientifiche Prof.ssa Sabrina Corbetta e Prof.ssa Anna Grandone.`
    : `<strong>Percorso Didattico Validato:</strong> ${moduleData.units.length} Unità Didattiche (Paragrafi da ${moduleData.units[0].id.substring(0, 5)} a ${moduleData.units[moduleData.units.length - 1].id.substring(0, 5)}) come da matrice organizzativa approvata.`;

  // Header uniforme del Modulo
  headerContainer.innerHTML = `
    <div>
      <div class="stage-number-tag">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        ${tagText}
      </div>
      <h2 class="stage-viewer-title">${formatTitleNoBreak(moduleData.rawTitle)}</h2>
      <p class="stage-viewer-goal">${descText}</p>
    </div>
    <div class="stage-author-tags">
      ${moduleData.authors.map(a => `
        <span class="stage-author-chip">
          <span class="chip-dot"></span>
          Docente: ${a}
        </span>
      `).join("")}
    </div>
  `;

  // Griglia di Card Contenuto IDENTICHE PER DIMENSIONI (Nessun iframe esploso in home)
  unitsContainer.innerHTML = `
    <div class="units-uniform-grid">
      ${moduleData.units.map(unit => {
        const isReady = unit.hasRealContent;
        return `
          <div class="unit-card ${isReady ? "is-ready" : ""}">
            <div class="unit-card-top">
              <span class="unit-chapter-badge">Par. ${unit.id.substring(0, 5)}</span>
              <span class="format-badge ${unit.formatClass}">${unit.type}</span>
            </div>
            
            <div class="unit-card-title" title="${escapeHtml(unit.title)}">${formatTitleNoBreak(unit.title)}</div>
            
            <div class="unit-card-author" title="${escapeHtml(unit.authors)}">
              Docente: ${unit.authors}
            </div>

            <div class="unit-status-indicator">
              ${isReady 
                ? `<span class="status-text-ready">🟢 Pronto per revisione</span>` 
                : `<span class="status-text-pending">⚪ In fase editoriale</span>`
              }
            </div>

            <button class="btn-select-unit ${isReady ? "ready-action" : ""}" onclick="openContentModal('${unit.id}', '${moduleData.id}')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              ${isReady ? (unit.formatClass === "format-video" ? "Guarda Video Pillola HD" : "Sfoglia FlipBook HD") : "In Fase Editoriale"}
            </button>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

// ── MODAL VISUALIZZATORE DEL SINGOLO CONTENUTO SELEZIONATO ──
function initModal() {
  const overlay = document.getElementById("contentModal");
  const closeBtn = document.getElementById("modalCloseBtn");

  closeBtn?.addEventListener("click", () => {
    overlay.classList.remove("open");
  });

  overlay?.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("open");
    }
  });

  // Chiusura con tasto Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay?.classList.contains("open")) {
      overlay.classList.remove("open");
    }
  });
}

function openContentModal(unitId, moduleId) {
  const moduleData = getModuleById(moduleId);
  if (!moduleData) return;
  const unit = moduleData.units.find(u => u.id === unitId);
  if (!unit) return;

  const overlay = document.getElementById("contentModal");
  const modalCode = document.getElementById("modalUnitCode");
  const modalTitle = document.getElementById("modalUnitTitle");
  const modalAuthor = document.getElementById("modalUnitAuthor");
  const modalType = document.getElementById("modalUnitType");
  const modalModule = document.getElementById("modalUnitModule");
  const stageBox = document.getElementById("modalContentStage");
  const btnExternal = document.getElementById("btnFullscreenExternal");

  modalCode.textContent = unit.id;
  modalTitle.innerHTML = `Paragrafo ${unit.id.substring(0, 5)} — ${formatTitleNoBreak(unit.title)}`;
  modalAuthor.textContent = unit.authors;
  modalType.textContent = unit.type;
  modalModule.innerHTML = `${moduleData.code} · ${formatTitleNoBreak(moduleData.title)}`;

  // Link esterno a schermo intero in nuova scheda
  if (btnExternal) {
    if (unit.embedUrl) {
      btnExternal.href = unit.embedUrl;
      btnExternal.style.display = "inline-flex";
    } else {
      btnExternal.style.display = "none";
    }
  }

  // Se è presente il contenuto reale caricato
  if (unit.hasRealContent && unit.embedHtml) {
    const isVideo = unit.formatClass === "format-video" || (unit.type && unit.type.toLowerCase().includes("video"));
    stageBox.className = `modal-content-stage has-embed ${isVideo ? "is-video" : "is-flipbook"}`;
    stageBox.innerHTML = unit.embedHtml;
  } else {
    stageBox.className = "modal-content-stage";
    stageBox.innerHTML = `
      <div class="stage-preview-icon">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      </div>
      <div class="stage-preview-title">${formatTitleNoBreak(unit.title)}</div>
      <div class="stage-preview-sub">Spazio di preview riservato per l'erogazione di questo contenuto [${unit.type}]. In attesa di caricamento testi/video editati dalla Faculty.</div>
      <div class="stage-preview-badge">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        In attesa di caricamento
      </div>
    `;
  }

  overlay.classList.add("open");
}

// ── DOSSIER TABS ──
function initDossierTabs() {
  const tabBtns = document.querySelectorAll(".dossier-tab-btn");
  const panels = document.querySelectorAll(".dossier-panel");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.tab;

      tabBtns.forEach(b => b.classList.remove("active"));
      panels.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(targetId)?.classList.add("active");
    });
  });
}

function escapeHtml(str) {
  return str.replace(/'/g, "\\x27").replace(/"/g, "&quot;");
}
