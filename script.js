const infoCells = {};

function toggleFilters() {
    const section = document.getElementById('filterSection');
    const btn = document.getElementById('toggleFiltersBtn');
    if (!section || !btn) return;

    section.classList.toggle('collapsed');

    if (section.classList.contains('collapsed')) {
        btn.innerHTML = '<span>🔍</span> Filtrar Horario';
    } else {
        btn.innerHTML = '<span>✕</span> Cerrar Filtros';
    }
}

function shortM(name) {
    return name
        .replace(/CIRCUITOS/g, "C.")
        .replace(/DIGITALES/g, "DIG.")
        .replace(/MICROCONTROLADORES/g, "MICRO.")
        .replace(/APL /g, "A. ")
        .replace(/ELECTRÓNICOS/g, "ELEC.")
        .replace(/ELÉCTRICOS/g, "ELÉC.")
        .replace(/INSTRUMENTACIÓN/g, "INSTRUM.")
        .replace(/INDUSTRIAL/g, "IND.")
        .replace(/SISTEMAS/g, "SIST.")
        .replace(/AUTOMÁTICOS/g, "AUTO.")
        .replace(/MECATRÓNICOS/g, "MECAT.")
        .replace(/FABRICACIÓN/g, "FAB.")
        .replace(/SOSTENIBLE/g, "SOST.")
        .replace(/COMUNICACIONES/g, "COMUN.")
        .replace(/CONMUTACION/g, "CONMUT.")
        .replace(/SERVOMECANISMOS/g, "SERVO.")
        .replace(/DISEÑO ELEM MAQ/g, "D.E.M.")
        .replace(/INTRODUCCIÓN/g, "INTRO.")
        .replace(/INTRO /g, "I. ");
}

function openModal(cellId) {
    const data = infoCells[cellId];
    const modalBody = document.getElementById('modalBody');
    let html = `<p style="color:var(--text-muted); font-size:0.8rem; margin-top:-10px; margin-bottom:15px;">${data.dia} | ${data.hora}</p>`;

    if (data.materias.length === 0) {
        html += "<b>ESPACIO LIBRE</b><small>No hay clases programadas</small>";
    } else {
        data.materias.forEach((m, index) => {
            html += `<div><b>${m.m}</b><small>${m.d}<br>AULA: ${m.a}</small></div>`;
            if (index < data.materias.length - 1) html += "<hr>";
        });
    }
    html += `<div class="lab-tag">🛠️ LAB: ${data.lab}</div>`;
    modalBody.innerHTML = html;
    document.body.classList.add('modal-open');
}

function closeModal() { document.body.classList.remove('modal-open'); }

function renderLabDots(labString) {
    if (!labString || labString === "---") return "";

    return `
<div class="lab-dots">
  ${labString.split("-").map(name =>
        `<span class="lab-dot lab-${name}"></span>`
    ).join("")}
</div>
`;
}

let currentFilters = { materia: ['all'], docente: ['all'], lab: ['all'] };

function initTable() {
    const tbody = document.getElementById('scheduleBody');
    tbody.innerHTML = "";
    for (let h = 6; h <= 20; h += 2) {
        const row = document.createElement('tr');
        const hCol = document.createElement('td');
        hCol.className = 'hour-col';
        hCol.innerText = `${h}-${h + 2}`;
        row.appendChild(hCol);

        dias.forEach(dia => {
            const cellId = `cell-${dia}-${h}`;
            const cell = document.createElement('td');
            const labString = (laboratoristas[dia] && laboratoristas[dia][h]) || "---";

            // Apply lab filter
            let visibleLabs = labString;
            if (!currentFilters.lab.includes('all')) {
                const labsArray = labString.split("-");
                // Filter only labels that ARE in currentFilters.lab
                const filtered = labsArray.filter(l => currentFilters.lab.includes(l));
                visibleLabs = filtered.length > 0 ? filtered.join("-") : "---";
            }

            infoCells[cellId] = { materias: [], lab: labString, hora: `${h}-${h + 2}`, dia: dia };

            cell.innerHTML = `
<div class="cell-container" onclick="openModal('${cellId}')">
${renderLabDots(visibleLabs)}
<div class="cell-content" id="content-${cellId}"></div>
</div>`;

            row.appendChild(cell);
        });
        tbody.appendChild(row);
    }
    renderMaterias();
}

function renderMaterias() {
    materiasData.forEach(m => {
        // Filter logic
        const matchesMateria = currentFilters.materia.includes('all') || currentFilters.materia.includes(m.m);
        const matchesDocente = currentFilters.docente.includes('all') || currentFilters.docente.includes(m.d);

        if (!matchesMateria || !matchesDocente) return;

        const blockStart = m.start % 2 === 0 ? m.start : m.start - 1;
        const cellId = `cell-${m.dia}-${blockStart}`;
        const container = document.getElementById(`content-${cellId}`);
        if (container) {
            infoCells[cellId].materias.push(m);
            const block = document.createElement('div');
            block.className = `materia-block materia-${m.c}`;
            block.innerHTML = `<span>${shortM(m.m)}</span><span class="aula-badge">${m.a}</span>`;
            container.appendChild(block);

            // Apply card styling to the cell container
            container.closest('.cell-container').classList.add('has-class');
        }
    });
}

// FILTER LOGIC
function setupFilters() {
    const selMateria = document.getElementById('filterMateria');
    const selDocente = document.getElementById('filterDocente');
    const selLab = document.getElementById('filterLab');

    if (!selMateria || !selDocente || !selLab) return;

    // Unique values
    const uniqueMaterias = [...new Set(materiasData.map(m => m.m))].sort();
    const uniqueDocentes = [...new Set(materiasData.map(m => m.d))].sort();
    const uniqueLabs = ["Rosario", "Anderson", "Camilo", "Mateo", "Miguel"].sort();

    uniqueMaterias.forEach(m => selMateria.add(new Option(m, m)));
    uniqueDocentes.forEach(d => selDocente.add(new Option(d, d)));
    uniqueLabs.forEach(l => selLab.add(new Option(l, l)));

    const getSelected = (selectEl) => {
        const selected = Array.from(selectEl.selectedOptions).map(opt => opt.value);
        if (selected.length === 0) return ['all'];
        // If 'all' is selected along with others, 'all' wins or we can filter it out
        // Let's say if 'all' is selected, we reset others or vice versa.
        // Simple approach: if 'all' is in the list, just use 'all'.
        if (selected.includes('all') && selected.length > 1) {
            // If user clicked something else while 'all' was there, remove 'all'
            // Unless they specifically clicked 'all' last? 
            // Better: if 'all' is present, it means "show everything".
            return ['all'];
        }
        return selected;
    };

    const triggerRebuild = (e) => {
        const select = e.target;
        // Logic to handle 'all' vs specific
        const values = Array.from(select.selectedOptions).map(opt => opt.value);

        // If 'all' was selected and we add more, remove 'all'
        // If nothing is selected, select 'all'
        if (values.length > 1 && values.includes('all')) {
            // If 'all' was already there, and we added more, remove 'all'
            // But wait, the native behavior is just to add to selection.
            // Let's force a toggle:
            // If we just selected 'all', deselect others.
            // If we selected something else, deselect 'all'.

            // We need to know what was JUST changed.
        }

        currentFilters = {
            materia: getSelected(selMateria),
            docente: getSelected(selDocente),
            lab: getSelected(selLab)
        };

        // Update selection UI to match our logic (if 'all' is selected, deselect others)
        if (currentFilters.materia.includes('all')) Array.from(selMateria.options).forEach(opt => opt.selected = (opt.value === 'all'));
        if (currentFilters.docente.includes('all')) Array.from(selDocente.options).forEach(opt => opt.selected = (opt.value === 'all'));
        if (currentFilters.lab.includes('all')) Array.from(selLab.options).forEach(opt => opt.selected = (opt.value === 'all'));

        initTable();
        highlightCurrentSlot();
    };

    selMateria.addEventListener('change', triggerRebuild);
    selDocente.addEventListener('change', triggerRebuild);
    selLab.addEventListener('change', triggerRebuild);
}

function clearFilters() {
    ['filterMateria', 'filterDocente', 'filterLab'].forEach(id => {
        const sel = document.getElementById(id);
        Array.from(sel.options).forEach(opt => opt.selected = (opt.value === 'all'));
    });
    currentFilters = { materia: ['all'], docente: ['all'], lab: ['all'] };
    initTable();
    highlightCurrentSlot();
}


// Initializing the table when the scripts are loaded
setupFilters();
initTable();
createLegend();

// Use separate intervals for clock and slot highlighting
setInterval(updateLiveClock, 1000);
setInterval(highlightCurrentSlot, 30000); // Check slot every 30s

function updateLiveClock() {
    const now = new Date();
    const dayNames = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const dayString = dayNames[now.getDay()];

    document.getElementById('liveClock').innerText = `${dayString} ${timeString} | Gestión 2026-1`;
}

function highlightCurrentSlot() {
    // Remove previous highlights
    document.querySelectorAll('.cell-now').forEach(el => el.classList.remove('cell-now'));

    const now = new Date();
    const dayNames = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const currentDay = dayNames[now.getDay()];
    const currentHour = now.getHours();

    // Find the correct block (the table uses 2-hour blocks starting at even hours)
    const blockStart = currentHour % 2 === 0 ? currentHour : currentHour - 1;

    if (currentHour >= 6 && currentHour < 22 && currentDay !== "Domingo") {
        const cellId = `cell-${currentDay}-${blockStart}`;
        const container = document.querySelector(`[onclick="openModal('${cellId}')"]`);
        if (container) {
            container.classList.add('cell-now');
        }
    }
}

function createLegend() {
    const legend = document.getElementById('legend');
    const techs = [
        { name: "Rosario", class: "lab-Rosario" },
        { name: "Anderson", class: "lab-Anderson" },
        { name: "Camilo", class: "lab-Camilo" },
        { name: "Mateo", class: "lab-Mateo" },
        { name: "Miguel", class: "lab-Miguel" }
    ];

    legend.innerHTML = techs.map(t => `
        <div class="legend-item">
            <span class="legend-color ${t.class}"></span>
            <span>${t.name}</span>
        </div>
    `).join("");
}

// Ensure the initial updates happen immediately
updateLiveClock();
highlightCurrentSlot();
