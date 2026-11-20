/* ═══════════════════════════════════════════════════════
   RADAR XLH — Faculty Review Platform
   Interactive Module Engine & Content Viewer
   ═══════════════════════════════════════════════════════ */

// Matrice Organizzativa Ufficiale (da Matrice Organizzativa Moduli - FaD RADAR XLH.xlsx)
const MODULES_DATA = [
  {
    id: 1,
    code: "01",
    title: "L'importanza del fosfato",
    goal: "Far percepire il fosfato come biomarker clinicamente rilevante, non un parametro accessorio.",
    authors: ["Danilo Fintini"],
    units: [
      {
        id: "01:01:00",
        title: "Omeostasi minerale",
        authors: "Danilo Fintini",
        type: "Video Pillola",
        formatClass: "format-video",
        icon: "video"
      },
      {
        id: "01:02:00",
        title: "Ruolo clinico del fosfato",
        authors: "Danilo Fintini",
        type: "Video Pillola",
        formatClass: "format-video",
        icon: "video"
      },
      {
        id: "01:03:00",
        title: "Omeostasi fosfo-calcica in una pagina",
        authors: "Danilo Fintini",
        type: "Info-grafiche / FlipBook",
        formatClass: "format-flipbook",
        icon: "file-text"
      },
      {
        id: "01:04:00",
        title: "Quanto conosci e utilizzi il metabolismo fosfo-calcico nella tua pratica?",
        authors: "Danilo Fintini",
        type: "Survey Baseline",
        formatClass: "format-survey",
        icon: "check-circle"
      }
    ]
  },
  {
    id: 2,
    code: "02",
    title: "Comprendere l'Ipofosfatemia X-Linked",
    goal: "Tradurre la fisiopatologia in un ragionamento clinico semplice (Da PHEX a FGF23).",
    authors: ["Gaetano Paride Arcidiacono"],
    units: [
      {
        id: "02:01:00",
        title: "Da PHEX a FGF23: perché nell'XLH si perde fosfato",
        authors: "Gaetano Paride Arcidiacono",
        type: "Video Lezione",
        formatClass: "format-video",
        icon: "video"
      },
      {
        id: "02:02:00",
        title: "Caso Interattivo",
        authors: "Gaetano Paride Arcidiacono",
        type: "Caso Interattivo",
        formatClass: "format-interactive",
        icon: "play-circle"
      },
      {
        id: "02:03:00",
        title: "XLH spiegata al referrer",
        authors: "Gaetano Paride Arcidiacono",
        type: "FlipBook",
        formatClass: "format-flipbook",
        icon: "book-open"
      }
    ]
  },
  {
    id: 3,
    code: "03",
    title: "Identificare il paziente",
    goal: "Riconoscere il fenotipo pediatrico e adulto e passare dalla teoria al riconoscimento pratico.",
    authors: ["Anna Grandone", "Gemma Marcucci"],
    units: [
      {
        id: "03:01:00",
        title: "Quando pensare all'XLH nel bambino",
        authors: "Anna Grandone",
        type: "Video Pillola",
        formatClass: "format-video",
        icon: "video"
      },
      {
        id: "03:02:00",
        title: "Manifestazioni nell'adulto",
        authors: "Gemma Marcucci",
        type: "Video Pillola",
        formatClass: "format-video",
        icon: "video"
      },
      {
        id: "03:03:00",
        title: "Mini-Casi Interattivi \"effetto Sliding Doors\"",
        authors: "Anna Grandone / Gemma Marcucci",
        type: "Mini-Casi Interattivi",
        formatClass: "format-interactive",
        icon: "play-circle"
      },
      {
        id: "03:04:00",
        title: "Red Flags",
        authors: "Anna Grandone / Gemma Marcucci",
        type: "Sharing Experience / Survey",
        formatClass: "format-survey",
        icon: "flag"
      }
    ]
  },
  {
    id: 4,
    code: "04",
    title: "Mappatura e network di referral",
    goal: "Valorizzare le sentinelle non-treater e rendere il referral naturale e praticabile.",
    authors: ["Anna Grandone", "Vincenzo Grassia", "Maurizio Scorianz", "Rossella Santoro"],
    units: [
      {
        id: "04:03:00",
        title: "Ruolo del Pediatra di Libera Scelta",
        authors: "Anna Grandone / Vincenzo Grassia / Maurizio Scorianz",
        type: "Video Pillola",
        formatClass: "format-video",
        icon: "video"
      },
      {
        id: "04:04:00",
        title: "Ruolo di odontoiatra",
        authors: "Anna Grandone / Vincenzo Grassia / Maurizio Scorianz",
        type: "Video Pillola",
        formatClass: "format-video",
        icon: "video"
      },
      {
        id: "04:05:00",
        title: "Ruolo di ortopedico e fisiatra",
        authors: "Anna Grandone / Vincenzo Grassia / Maurizio Scorianz",
        type: "Video Pillola",
        formatClass: "format-video",
        icon: "video"
      },
      {
        id: "04:06:00",
        title: "Dove invieresti oggi un paziente sospetto?",
        authors: "Anna Grandone / Rossella Santoro / Maurizio Scorianz",
        type: "Survey Referral Mapping",
        formatClass: "format-survey",
        icon: "compass"
      },
      {
        id: "04:07:00",
        title: "Corretto Work Flow di referral ed Infografica centri italiani sul territorio",
        authors: "Anna Grandone / Rossella Santoro / Maurizio Scorianz",
        type: "Info-Grafica",
        formatClass: "format-infografica",
        icon: "map"
      }
    ]
  },
  {
    id: 5,
    code: "05",
    title: "Mappatura famigliare",
    goal: "Dal Paziente alla Famiglia: trasformare l'anamnesi in screening attivo moltiplicatore.",
    authors: ["Francesco Gallo"],
    units: [
      {
        id: "05:01:00",
        title: "Genetica ed ereditarietà X-linked dominante",
        authors: "Francesco Gallo",
        type: "Video Masterclass",
        formatClass: "format-video",
        icon: "video"
      },
      {
        id: "05:02:00",
        title: "Family Mapping Challenge",
        authors: "Francesco Gallo",
        type: "Info-Grafica",
        formatClass: "format-infografica",
        icon: "users"
      },
      {
        id: "05:03:00",
        title: "Family Screening",
        authors: "Francesco Gallo",
        type: "Survey",
        formatClass: "format-survey",
        icon: "check-circle"
      }
    ]
  },
  {
    id: 6,
    code: "06",
    title: "Il percorso dell'XLH",
    goal: "Approccio multidisciplinare e follow-up continuativo nella transizione pediatrico-adulto.",
    authors: ["Danilo Fintini", "Gemma Marcucci"],
    units: [
      {
        id: "06:01:00",
        title: "Approccio Terapeutico - Pediatrico",
        authors: "Danilo Fintini",
        type: "Video Pillola",
        formatClass: "format-video",
        icon: "video"
      },
      {
        id: "06:02:00",
        title: "Approccio Terapeutico - Adulto",
        authors: "Gemma Marcucci",
        type: "Video Pillola",
        formatClass: "format-video",
        icon: "video"
      },
      {
        id: "06:03:00",
        title: "Transizione pediatrico-adulto",
        authors: "Danilo Fintini",
        type: "Video Pillola",
        formatClass: "format-video",
        icon: "video"
      }
    ]
  },
  {
    id: 7,
    code: "07",
    title: "Vivere con l'XLH",
    goal: "Ricollegare la diagnosi precoce agli outcome di vita lungo tutto il ciclo del paziente.",
    authors: ["Sabrina Corbetta"],
    units: [
      {
        id: "07:01:00",
        title: "Dal bambino all'adulto in età avanzata",
        authors: "Sabrina Corbetta",
        type: "Video-Case Simulato",
        formatClass: "format-interactive",
        icon: "film"
      },
      {
        id: "07:02:00",
        title: "Transizione - Qualità di vita",
        authors: "Sabrina Corbetta",
        type: "FlipBook Finale",
        formatClass: "format-flipbook",
        icon: "book-open"
      },
      {
        id: "07:04:00",
        title: "Cosa cambierai nella tua pratica?",
        authors: "Sabrina Corbetta",
        type: "Survey Finale",
        formatClass: "format-survey",
        icon: "award"
      }
    ]
  }
];

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

// ── ROADMAP GRID (Le 7 Tappe Formative) ──
function renderRoadmapGrid() {
  const container = document.getElementById('roadmapGrid');
  if (!container) return;

  container.innerHTML = MODULES_DATA.map(mod => {
    const isActive = mod.id === currentActiveModuleId;
    return `
      <div class="tappa-card ${isActive ? 'active' : ''}" data-module-id="${mod.id}" onclick="selectModule(${mod.id})">
        <div class="tappa-badge">${mod.code}</div>
        <div class="tappa-card-title">${mod.title}</div>
        <div class="tappa-card-author">${mod.authors.join(', ')}</div>
        <div class="tappa-card-footer">
          <span class="tappa-count">${mod.units.length} Contenuti</span>
          <span class="tappa-action-arrow">→</span>
        </div>
      </div>
    `;
  }).join('');
}

// ── SELECT MODULE ──
function selectModule(id) {
  currentActiveModuleId = id;
  
  // Update Tappe Cards
  document.querySelectorAll('.tappa-card').forEach(card => {
    const cardId = parseInt(card.dataset.moduleId, 10);
    card.classList.toggle('active', cardId === id);
  });

  // Render Viewer
  renderModuleViewer(id);

  // Smooth scroll into stage viewer
  const viewer = document.getElementById('stageViewer');
  if (viewer) {
    const yOffset = -100;
    const y = viewer.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

// ── RENDER STAGE VIEWER ──
function renderModuleViewer(id) {
  const moduleData = MODULES_DATA.find(m => m.id === id);
  if (!moduleData) return;

  const headerContainer = document.getElementById('stageViewerHeader');
  const unitsContainer = document.getElementById('stageUnitsList');

  // Header
  headerContainer.innerHTML = `
    <div>
      <div class="stage-number-tag">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        Tappa Didattica ${moduleData.code} di 07
      </div>
      <h2 class="stage-viewer-title">${moduleData.title}</h2>
      <p class="stage-viewer-goal"><strong>Obiettivo:</strong> ${moduleData.goal}</p>
    </div>
    <div class="stage-author-tags">
      ${moduleData.authors.map(a => `
        <span class="stage-author-chip">
          <span class="chip-dot"></span>
          Docente: ${a}
        </span>
      `).join('')}
    </div>
  `;

  // Units list
  unitsContainer.innerHTML = moduleData.units.map((unit, idx) => {
    return `
      <div class="unit-row">
        <div class="unit-code">${unit.id.substring(0, 5)}</div>
        <div class="unit-info">
          <h4>${unit.title}</h4>
          <div class="unit-authors">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            ${unit.authors}
          </div>
        </div>
        <div class="unit-actions">
          <span class="format-badge ${unit.formatClass}">
            ${unit.type}
          </span>
          <button class="btn-review-content" onclick="openContentModal('${unit.id}', '${escapeHtml(unit.title)}', '${escapeHtml(unit.authors)}', '${escapeHtml(unit.type)}', ${moduleData.id})">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            Visiona & Valida
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// ── CONTENT MODAL VIEWER ──
function initModal() {
  const overlay = document.getElementById('contentModal');
  const closeBtn = document.getElementById('modalCloseBtn');

  closeBtn?.addEventListener('click', () => {
    overlay.classList.remove('open');
  });

  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('open');
    }
  });
}

function openContentModal(id, title, authors, type, moduleId) {
  const overlay = document.getElementById('contentModal');
  const modalCode = document.getElementById('modalUnitCode');
  const modalTitle = document.getElementById('modalUnitTitle');
  const modalAuthor = document.getElementById('modalUnitAuthor');
  const modalType = document.getElementById('modalUnitType');
  const modalModule = document.getElementById('modalUnitModule');
  const previewTitle = document.getElementById('modalPreviewTitle');
  const previewSub = document.getElementById('modalPreviewSub');

  modalCode.textContent = id;
  modalTitle.textContent = title;
  modalAuthor.textContent = authors;
  modalType.textContent = type;
  modalModule.textContent = `Modulo 0${moduleId}`;

  previewTitle.textContent = title;
  previewSub.textContent = `Erogazione didattica in formato [${type}]. Lo spazio di review permette alla Faculty di visionare il materiale preparato e rilasciare la validazione scientifica.`;

  overlay.classList.add('open');
}

function saveValidation() {
  const note = document.getElementById('reviewNote').value;
  alert('Validazione scientifica registrata con successo per questo contenuto!');
  document.getElementById('contentModal').classList.remove('open');
  document.getElementById('reviewNote').value = '';
}

// ── DOSSIER SECONDARIO TABS ──
function initDossierTabs() {
  const tabBtns = document.querySelectorAll('.dossier-tab-btn');
  const panels = document.querySelectorAll('.dossier-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.tab;

      tabBtns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(targetId)?.classList.add('active');
    });
  });
}

// Helper escape
function escapeHtml(str) {
  return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}
