// Datos Profesionales Oficiales - Martillero Judicial Ángel Alejandro Arce
const MARTILLERO_INFO = {
  name: "Ángel Alejandro Arce",
  title: "Martillero Judicial y Público",
  matriculaSTJ: "Matrícula S.T.J. Ctes. Nº 383",
  colegio: "Colegio Público de Martilleros y Corredores de la Provincia de Corrientes",
  phoneDisplay: "0379 - 154532991",
  phoneRaw: "5493794532991",
  phoneAlt: "03794 - 15532991",
  email: "alearce70@yahoo.com.ar",
  address: "Plácido Martínez Nº 1350",
  city: "Ciudad de Corrientes, Corrientes, Argentina",
  schedule: "Lunes a Viernes de 08:00 a 12:30 y 17:00 a 20:30 hs.",
  coords: [-27.4638, -58.8322] // Plácido Martínez 1350, Corrientes Capital
};

// Catálogo de Subastas Judiciales, Remates y Propiedades en Corrientes
const LISTINGS_DATA = [
  {
    id: 1,
    code: "101",
    slug: "ARCE-101",
    title: "Inmueble Urbano en Ejecución Hipotecaria - Zona Centro",
    address: "San Lorenzo Nº 1140",
    neighborhood: "Centro",
    locationId: "centro",
    locationLabel: "Corrientes Capital • Barrio Centro",
    operationId: "subasta",
    operationLabel: "Subasta Judicial",
    typeId: "inmueble",
    typeLabel: "Inmueble Urbano",
    currency: "ARS",
    price: 48500000,
    priceFormatted: "$ 48.500.000",
    conditionsSummary: "Base reducida • Seña 10% en el acto • Comisión 3%",
    ribbon: "Subasta Judicial",
    ribbonClass: "",
    juzgado: "Juzgado Civil y Comercial Nº 9 - Corrientes",
    expediente: "Expte. Judicial - Ejecución Hipotecaria",
    totalArea: 285,
    coveredArea: 210,
    rooms: "5 Ambientes",
    auctionDate: "Próxima Fecha en Sede Plácido Martínez 1350",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80",
    description: "Importante propiedad edificada sobre lote propio en pleno radio céntrico de la Ciudad de Corrientes. Cuenta con salón al frente, dependencias, patio interno y todos los servicios conectados.",
    edicto: "EDICTO JUDICIAL: Por disposición del Juzgado Civil y Comercial Nº 9 de la Primera Circunscripción Judicial de la Provincia de Corrientes, se hace saber que el Martillero Judicial Ángel Alejandro Arce (Mat. S.T.J. Ctes. Nº 383) procederá a la venta en pública subasta del inmueble sito en el radio céntrico de esta ciudad. Acto de remate en calle Plácido Martínez Nº 1350 (Sede del Colegio Público de Martilleros y Corredores de Corrientes). Informes al Cel. 0379-154532991 o al correo alearce70@yahoo.com.ar."
  },
  {
    id: 2,
    code: "102",
    slug: "ARCE-102",
    title: "Lote de Vehículos Utilitarios y Chasis - Quiebra Comercial",
    address: "Exhibición en Depósito Judicial • Ruta Nac. 12",
    neighborhood: "Zona Ruta 12",
    locationId: "ruta12",
    locationLabel: "Corrientes Capital • Corredor Ruta 12",
    operationId: "quiebra",
    operationLabel: "Remate por Quiebra",
    typeId: "vehiculo",
    typeLabel: "Vehículos y Rodados",
    currency: "ARS",
    price: 14200000,
    priceFormatted: "$ 14.200.000",
    conditionsSummary: "Sin Base / Al Mejor Postor • Seña 30% • Comisión 10%",
    ribbon: "Sin Base",
    ribbonClass: "ribbon-gold",
    juzgado: "Juzgado Civil y Comercial Nº 9 (Concursos y Quiebras)",
    expediente: "Ref. Autos: Distribuidora / Agroleg / Concursos",
    totalArea: 0,
    coveredArea: 0,
    rooms: "Lote Rodados",
    auctionDate: "Subasta Presencial • Plácido Martínez 1350",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=900&q=80",
    description: "Subasta pública de unidades utilitarias, chasis con cabina y rodados afectados a proceso concursal y liquidación judicial. Venta en el estado en que se encuentran y exhiben.",
    edicto: "EDICTO DE QUIEBRA: Por orden del Juzgado Civil y Comercial con competencia en Concursos y Quiebras de la Ciudad de Corrientes, el Martillero Judicial Ángel Alejandro Arce (Mat. S.T.J. Nº 383) rematará al mejor postor unidades automotores y utilitarios pertenecientes al activo falencial. Entrega sujeta a aprobación judicial. Consultas y visitas previas al Tel. 0379-154532991."
  },
  {
    id: 3,
    code: "103",
    slug: "ARCE-103",
    title: "Departamento 3 Dormitorios con Balcón Vista al Río",
    address: "Av. Costanera Gral. San Martín Nº 980",
    neighborhood: "Costanera / Camba Cuá",
    locationId: "cambacua",
    locationLabel: "Corrientes Capital • Camba Cuá",
    operationId: "venta",
    operationLabel: "Venta Directa",
    typeId: "departamento",
    typeLabel: "Departamento",
    currency: "USD",
    price: 135000,
    priceFormatted: "USD 135.000",
    conditionsSummary: "Título perfecto • Apto escritura inmediata • Cochera incluida",
    ribbon: "Destacado",
    ribbonClass: "ribbon-navy",
    juzgado: "Operación Particular Certificada",
    expediente: "Tasación y Corretaje Profesional",
    totalArea: 128,
    coveredArea: 112,
    rooms: "4 Ambientes",
    auctionDate: "Disponible para visitas coordinadas",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80",
    description: "Excelente piso frente al Parque Camba Cuá y Costanera de Corrientes. Amplio estar comedor, balcón terraza corrido, 3 dormitorios (1 en suite), cocina equipada y cochera cubierta.",
    edicto: "OPERACIÓN INMOBILIARIA: Inmueble seleccionado con documentación verificada por el Martillero Público y Judicial Ángel Alejandro Arce. Asesoramiento integral jurídico-notarial y tasación oficial."
  },
  {
    id: 4,
    code: "104",
    slug: "ARCE-104",
    title: "Maquinaria Industrial, Herramientas y Equipamiento Comercial",
    address: "Plácido Martínez Nº 1350 (Lugar de Subasta)",
    neighborhood: "Libertad / Centro",
    locationId: "libertad",
    locationLabel: "Corrientes Capital • Barrio Libertad",
    operationId: "quiebra",
    operationLabel: "Remate Judicial",
    typeId: "maquinaria",
    typeLabel: "Maquinarias y Bienes Muebles",
    currency: "ARS",
    price: 3800000,
    priceFormatted: "$ 3.800.000",
    conditionsSummary: "Venta por lotes • Pago de contado en el acto • Comisión 10%",
    ribbon: "Subasta de Lotes",
    ribbonClass: "",
    juzgado: "Juzgado Laboral Nº 4 / Civil y Comercial Nº 8",
    expediente: "Ejecución Laboral y Liquidación de Bienes (Ref. Serviclean)",
    totalArea: 0,
    coveredArea: 0,
    rooms: "18 Lotes",
    auctionDate: "Sede Colegio de Martilleros • 10:00 hs.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
    description: "Subasta judicial de equipamiento industrial, máquinas de limpieza profesional, estanterías metálicas, mobiliario de oficina y herramientas de taller en lotes individuales.",
    edicto: "EDICTO JUDICIAL: El Martillero Judicial Ángel Alejandro Arce (Matrícula S.T.J. Ctes. Nº 383) comunica que en la sede del Colegio Público de Martilleros y Corredores (Plácido Martínez Nº 1350, Corrientes) se procederá al remate público de bienes muebles, maquinarias y equipamiento comercial. Informes: Cel. 0379-154532991."
  },
  {
    id: 5,
    code: "105",
    slug: "ARCE-105",
    title: "Terreno Esquina Comercial sobre Avenida Principal",
    address: "Av. 3 de Abril esq. Chaco",
    neighborhood: "Ferré / 3 de Abril",
    locationId: "3deabril",
    locationLabel: "Corrientes Capital • Corredor Av. 3 de Abril",
    operationId: "subasta",
    operationLabel: "Subasta Judicial",
    typeId: "terreno",
    typeLabel: "Terreno / Lote",
    currency: "ARS",
    price: 62000000,
    priceFormatted: "$ 62.000.000",
    conditionsSummary: "Base Judicial Fijada • Ideal Desarrollo o Local Comercial",
    ribbon: "Oportunidad Inversión",
    ribbonClass: "ribbon-gold",
    juzgado: "Juzgado Civil y Comercial Nº 8 - Corrientes",
    expediente: "División de Condominio / Ejecución",
    totalArea: 450,
    coveredArea: 85,
    rooms: "Lote 15x30m",
    auctionDate: "Consultar Edicto y Condiciones",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
    description: "Fracción de terreno en esquina estratégica con alto tránsito vehicular y excelente FOT para desarrollo en altura o salón de exposición comercial en Corrientes Capital.",
    edicto: "EDICTO JUDICIAL: Subasta ordenada en autos sobre División de Condominio por ante el Juzgado Civil y Comercial de Corrientes Capital. Martillero designado: Ángel Alejandro Arce (Mat. S.T.J. Nº 383). Consultas de títulos y planos en escritorio de calle Plácido Martínez Nº 1350."
  },
  {
    id: 6,
    code: "106",
    slug: "ARCE-106",
    title: "Casa Quinta Familiar con Parque y Piscina en Santa Ana",
    address: "Calle Pública s/n - Acceso pavimentado",
    neighborhood: "Santa Ana / Perichón",
    locationId: "santaana",
    locationLabel: "Gran Corrientes • Santa Ana de los Guácaras",
    operationId: "venta",
    operationLabel: "Venta Directa",
    typeId: "inmueble",
    typeLabel: "Casa Quinta",
    currency: "USD",
    price: 98000,
    priceFormatted: "USD 98.000",
    conditionsSummary: "Escritura inmediata • Terreno parquizado de 1.200 m²",
    ribbon: "Venta Directa",
    ribbonClass: "ribbon-navy",
    juzgado: "Gestión Inmobiliaria Directa",
    expediente: "Tasación Oficial verificada",
    totalArea: 1200,
    coveredArea: 165,
    rooms: "4 Ambientes",
    auctionDate: "Visitas con entrevista previa",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80",
    description: "Hermosa residencia de fin de semana o vivienda permanente a minutos de la Ciudad de Corrientes. Galería con quincho y parrilla, piscina de material, 3 dormitorios y amplio parque arbolado.",
    edicto: "GESTIÓN PROFESIONAL: Propiedad tasada y comercializada bajo supervisión del Martillero Ángel Alejandro Arce. Consulte financiación o permuta menor valor."
  }
];

let advancedMode = false;
let currentSelectedProperty = null;

document.addEventListener("DOMContentLoaded", () => {
  renderListings(LISTINGS_DATA);
  setupFilters();
  setupHeaderCodeSearch();
  setupForms();
  initOfficeMap();
});

// Renderizar tarjetas siguiendo el diseño de referencia (.property-card)
function renderListings(items) {
  const container = document.getElementById("propertiesContainer");
  const countBadge = document.getElementById("resultsCountBadge");

  if (countBadge) {
    countBadge.textContent = `${items.length} ${items.length === 1 ? "publicación activa" : "publicaciones activas"}`;
  }

  if (!items.length) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <div class="p-5 bg-white rounded-3 shadow-sm border">
          <i class="fa-solid fa-gavel fa-3x text-muted mb-3"></i>
          <h4 class="fw-bold text-dark">No se encontraron resultados para su búsqueda.</h4>
          <p class="text-muted mb-4">Intente modificar los filtros o restablecer la vista completa de subastas y propiedades.</p>
          <button class="btn btn-primary px-4" onclick="resetAllFilters()">
            <i class="fa-solid fa-rotate-left me-2"></i>Ver todas las publicaciones
          </button>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = items
    .map((item) => {
      const waText = encodeURIComponent(
        `Hola Martillero Ángel Alejandro Arce, vi la publicación "${item.title}" (Cód. ${item.slug}) en su sitio web y me gustaría recibir más información. Muchas gracias.`
      );
      const waLink = `https://wa.me/${MARTILLERO_INFO.phoneRaw}?text=${waText}`;

      const areaText =
        item.totalArea > 0
          ? `<div class="item" title="Superficie Total"><i class="fa-solid fa-ruler-combined"></i><span>${item.totalArea} m² tot.</span></div>`
          : `<div class="item" title="Modalidad"><i class="fa-solid fa-scale-balanced"></i><span>${item.operationLabel}</span></div>`;

      const coveredText =
        item.coveredArea > 0
          ? `<div class="item" title="Superficie Cubierta"><i class="fa-solid fa-house"></i><span>${item.coveredArea} m² cub.</span></div>`
          : `<div class="item" title="Sede"><i class="fa-solid fa-building-columns"></i><span>Plácido Martínez 1350</span></div>`;

      return `
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="card property-card">
            <div class="card-header" style="background: url('${item.image}') no-repeat center center" onclick="openDetailModal(${item.id})">
              ${item.ribbon ? `<span class="ribbon ${item.ribbonClass}">${item.ribbon}</span>` : ""}
              <div class="card-badge-bottom">
                <span class="badge-juzgado text-truncate"><i class="fa-solid fa-gavel me-1"></i>${item.juzgado}</span>
              </div>
            </div>
            <div class="card-body">
              <div class="mb-2">
                <span class="operation-tag">${item.operationLabel} • ${item.typeLabel}</span>
                <h3 class="price" title="${item.priceFormatted}">
                  <span class="currency">${item.currency === "USD" ? "USD" : "Base / Valor"}</span> ${item.priceFormatted}
                </h3>
                <p class="expenses text-truncate" title="${item.conditionsSummary}">
                  <i class="fa-solid fa-circle-info me-1 text-primary"></i>${item.conditionsSummary}
                </p>
              </div>

              <div class="common-data">
                ${areaText}
                ${coveredText}
                <div class="item" title="Detalle"><i class="fa-solid fa-layer-group"></i><span>${item.rooms}</span></div>
              </div>

              <div class="mb-2">
                <h5 class="address text-truncate" title="${item.address}" onclick="openDetailModal(${item.id})">${item.address}</h5>
                <p class="location-sub text-truncate mb-2"><i class="fa-solid fa-location-dot me-1 text-danger"></i>${item.locationLabel}</p>
                <p class="description">${item.description}</p>
              </div>

              <div class="contact">
                <div class="row align-items-center g-2">
                  <div class="col-4">
                    <span class="badge bg-light text-dark border fw-semibold">Cód.: ${item.slug}</span>
                  </div>
                  <div class="col-8 text-end d-flex justify-content-end align-items-center gap-1">
                    <a class="whatsapp-button" href="${waLink}" target="_blank" title="Consultar por WhatsApp">
                      <i class="fa-brands fa-whatsapp"></i>
                    </a>
                    <button class="btn btn-outline-primary btn-sm fw-semibold" onclick="openDetailModal(${item.id})">
                      Edicto / Ficha
                    </button>
                    <button class="btn btn-primary btn-sm fw-semibold" onclick="openContactModal(${item.id})">
                      Contactar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

// Configurar buscador principal y filtros avanzados
function setupFilters() {
  const filterForm = document.getElementById("homeFilterForm");
  const toggleBtn = document.getElementById("toggleAdvancedBtn");
  const advancedRow = document.getElementById("advancedFilterRow");

  if (toggleBtn && advancedRow) {
    toggleBtn.addEventListener("click", () => {
      advancedMode = !advancedMode;
      advancedRow.classList.toggle("d-none", !advancedMode);
      toggleBtn.innerHTML = advancedMode
        ? `<i class="fa-solid fa-sliders me-1"></i>Búsqueda básica`
        : `<i class="fa-solid fa-sliders me-1"></i>Búsqueda avanzada`;
    });
  }

  if (filterForm) {
    filterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      applyCurrentFilters();
    });
  }

  // Píldoras rápidas de categorías
  document.querySelectorAll(".category-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".category-pill").forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");

      const filterOp = pill.getAttribute("data-op") || "";
      const opSelect = document.getElementById("filterOperation");
      if (opSelect) opSelect.value = filterOp;
      applyCurrentFilters();
    });
  });
}

function applyCurrentFilters() {
  const typeVal = document.getElementById("filterType").value;
  const opVal = document.getElementById("filterOperation").value;
  const locVal = document.getElementById("filterLocation").value;
  const currencyVal = document.getElementById("filterCurrency").value;
  const areaFrom = parseFloat(document.getElementById("filterAreaFrom").value) || 0;
  const areaTo = parseFloat(document.getElementById("filterAreaTo").value) || Infinity;
  const priceFrom = parseFloat(document.getElementById("filterPriceFrom").value) || 0;
  const priceTo = parseFloat(document.getElementById("filterPriceTo").value) || Infinity;
  const errorBox = document.getElementById("filterValidationMsg");

  if (priceFrom > priceTo) {
    errorBox.textContent = "El precio/base desde no puede ser mayor al precio hasta.";
    errorBox.classList.remove("d-none");
    return;
  }
  if (areaFrom > areaTo) {
    errorBox.textContent = "La superficie desde no puede ser mayor a la superficie hasta.";
    errorBox.classList.remove("d-none");
    return;
  }
  errorBox.classList.add("d-none");

  const filtered = LISTINGS_DATA.filter((item) => {
    if (typeVal && item.typeId !== typeVal) return false;
    if (opVal && item.operationId !== opVal) return false;
    if (locVal && item.locationId !== locVal) return false;
    if (currencyVal && item.currency !== currencyVal) return false;
    if (areaFrom > 0 && item.totalArea < areaFrom) return false;
    if (areaTo < Infinity && item.totalArea > areaTo) return false;
    if (priceFrom > 0 && item.price < priceFrom) return false;
    if (priceTo < Infinity && item.price > priceTo) return false;
    return true;
  });

  renderListings(filtered);
  document.getElementById("subastas").scrollIntoView({ behavior: "smooth" });
}

function resetAllFilters() {
  const form = document.getElementById("homeFilterForm");
  if (form) form.reset();
  document.querySelectorAll(".category-pill").forEach((p, idx) => {
    p.classList.toggle("active", idx === 0);
  });
  const errorBox = document.getElementById("filterValidationMsg");
  if (errorBox) errorBox.classList.add("d-none");
  renderListings(LISTINGS_DATA);
}

// Búsqueda por Código de Aviso en Header (como en armandovallejos.com.ar)
function setupHeaderCodeSearch() {
  const codeForm = document.getElementById("headerCodeForm");
  const codeInput = document.getElementById("headerCodeInput");

  if (codeForm && codeInput) {
    codeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const raw = codeInput.value.trim().toUpperCase().replace("ARCE-", "");
      if (!raw) return;

      const found = LISTINGS_DATA.find(
        (item) => item.code === raw || item.slug.toUpperCase() === codeInput.value.trim().toUpperCase()
      );

      if (found) {
        openDetailModal(found.id);
        codeInput.value = "";
      } else {
        alert(`No se encontró ningún aviso o edicto con el código "${codeInput.value}". Códigos disponibles: 101 al 106.`);
      }
    });
  }
}

// Modal de Ficha Completa y Edicto Judicial
function openDetailModal(id) {
  const item = LISTINGS_DATA.find((x) => x.id === id);
  if (!item) return;
  currentSelectedProperty = item;

  const waText = encodeURIComponent(
    `Hola Martillero Ángel Alejandro Arce, consulto por el aviso Cód. ${item.slug} (${item.title}). Quisiera recibir información sobre condiciones y horarios.`
  );

  const body = document.getElementById("detailModalBody");
  body.innerHTML = `
    <div class="row g-4">
      <div class="col-lg-6">
        <div class="position-relative rounded-3 overflow-hidden shadow-sm mb-3">
          <img src="${item.image}" alt="${item.title}" class="img-fluid w-100" style="height: 290px; object-fit: cover;" />
          <span class="badge bg-danger position-absolute top-0 start-0 m-3 px-3 py-2">${item.ribbon}</span>
        </div>
        <div class="edicto-box">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <strong class="text-uppercase small text-primary"><i class="fa-solid fa-scroll me-1"></i>Texto de Referencia / Edicto</strong>
            <span class="badge bg-warning text-dark">Mat. S.T.J. Nº 383</span>
          </div>
          <p class="mb-0">${item.edicto}</p>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <span class="badge bg-primary">${item.operationLabel}</span>
          <span class="text-muted fw-bold">Código: ${item.slug}</span>
        </div>
        <h4 class="fw-bold text-dark mb-1">${item.title}</h4>
        <p class="text-muted mb-3"><i class="fa-solid fa-location-dot text-danger me-1"></i>${item.address} — ${item.locationLabel}</p>

        <div class="p-3 bg-light rounded-3 border mb-3">
          <div class="small text-muted">Valor / Base de Subasta</div>
          <div class="fs-3 fw-bold text-primary">${item.priceFormatted} <span class="fs-6 fw-normal text-muted">(${item.currency})</span></div>
          <div class="small text-dark mt-1"><i class="fa-solid fa-check-circle text-success me-1"></i>${item.conditionsSummary}</div>
        </div>

        <ul class="list-group list-group-flush mb-3 small">
          <li class="list-group-item d-flex justify-content-between px-0">
            <span class="text-muted"><i class="fa-solid fa-gavel me-2 text-primary"></i>Juzgado / Ámbito:</span>
            <span class="fw-semibold text-end">${item.juzgado}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between px-0">
            <span class="text-muted"><i class="fa-solid fa-folder-open me-2 text-primary"></i>Referencia:</span>
            <span class="fw-semibold text-end">${item.expediente}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between px-0">
            <span class="text-muted"><i class="fa-solid fa-calendar-check me-2 text-primary"></i>Acto / Disponibilidad:</span>
            <span class="fw-semibold text-end">${item.auctionDate}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between px-0">
            <span class="text-muted"><i class="fa-solid fa-user-tie me-2 text-primary"></i>Martillero Interviniente:</span>
            <span class="fw-semibold text-end">Ángel Alejandro Arce (Mat. 383)</span>
          </li>
        </ul>

        <p class="small text-secondary mb-4">${item.description}</p>

        <div class="d-grid gap-2 d-sm-flex no-print">
          <a href="https://wa.me/${MARTILLERO_INFO.phoneRaw}?text=${waText}" target="_blank" class="btn btn-success flex-grow-1 fw-semibold">
            <i class="fa-brands fa-whatsapp me-2"></i>Consultar por WhatsApp
          </a>
          <button class="btn btn-outline-primary fw-semibold" onclick="window.print()">
            <i class="fa-solid fa-print me-1"></i>Imprimir Ficha
          </button>
        </div>
      </div>
    </div>
  `;

  const modalEl = document.getElementById("detailModal");
  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  modal.show();
}

// Modal de Contacto por Propiedad / Subasta (idéntico al flujo de armandovallejos.com.ar)
function openContactModal(id) {
  const item = LISTINGS_DATA.find((x) => x.id === id);
  if (!item) return;
  currentSelectedProperty = item;

  const titleEl = document.getElementById("modalPropertyTitle");
  const msgEl = document.getElementById("modalContactMessage");
  const waBtn = document.getElementById("modalWhatsappDirectBtn");
  const alertBox = document.getElementById("modalContactAlert");

  if (alertBox) alertBox.classList.add("d-none");
  if (titleEl) titleEl.textContent = `${item.title} (Cód. ${item.slug})`;

  const defaultMessage = `Hola Martillero Ángel Alejandro Arce, vi esta publicación en su sitio web y me gustaría que me contacten. Cód. aviso: ${item.slug}. Muchas gracias.`;
  if (msgEl) msgEl.value = defaultMessage;

  if (waBtn) {
    waBtn.href = `https://wa.me/${MARTILLERO_INFO.phoneRaw}?text=${encodeURIComponent(defaultMessage)}`;
  }

  const modalEl = document.getElementById("contactPropertyModal");
  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  modal.show();
}

// Validación y envío de formularios (Tasaciones, Contacto General y Modal)
function setupForms() {
  // Formulario del Modal de Propiedad
  const modalForm = document.getElementById("propertyContactForm");
  if (modalForm) {
    modalForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const alertBox = document.getElementById("modalContactAlert");
      alertBox.classList.remove("d-none");
      modalForm.reset();
    });
  }

  // Formulario de Tasaciones Judiciales y Particulares
  const tasacionesForm = document.getElementById("tasacionesForm");
  if (tasacionesForm) {
    tasacionesForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const firstName = document.getElementById("tasFirstName").value.trim();
      const lastName = document.getElementById("tasLastName").value.trim();
      const phone = document.getElementById("tasPhone").value.trim();
      const type = document.getElementById("tasType").value;
      const details = document.getElementById("tasDetails").value.trim();

      const alertBox = document.getElementById("tasacionesAlert");
      alertBox.classList.remove("d-none");

      const waMsg = encodeURIComponent(
        `Hola Martillero Ángel Alejandro Arce, solicito una Tasación Profesional.\nNombre: ${firstName} ${lastName}\nTeléfono: ${phone}\nTipo de bien: ${type}\nDetalles: ${details}`
      );
      const waLinkEl = document.getElementById("tasacionesWaFollowup");
      if (waLinkEl) {
        waLinkEl.href = `https://wa.me/${MARTILLERO_INFO.phoneRaw}?text=${waMsg}`;
      }
      tasacionesForm.reset();
    });
  }

  // Formulario de Contacto General
  const mainContactForm = document.getElementById("mainContactForm");
  if (mainContactForm) {
    mainContactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const alertBox = document.getElementById("mainContactAlert");
      alertBox.classList.remove("d-none");
      mainContactForm.reset();
    });
  }
}

// Mapa Interactivo Leaflet (igual que armandovallejos.com.ar que utiliza Leaflet 1.9.4)
function initOfficeMap() {
  const mapEl = document.getElementById("officeMap");
  if (!mapEl || typeof L === "undefined") return;

  const map = L.map("officeMap").setView(MARTILLERO_INFO.coords, 16);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  const marker = L.marker(MARTILLERO_INFO.coords).addTo(map);
  marker
    .bindPopup(
      `<strong>Ángel Alejandro Arce</strong><br>Martillero Judicial (Mat. S.T.J. Nº 383)<br>📍 Plácido Martínez Nº 1350, Corrientes Capital<br><small>Sede Colegio Público de Martilleros y Corredores</small>`
    )
    .openPopup();
}
