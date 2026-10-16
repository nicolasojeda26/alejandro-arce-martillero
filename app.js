// Datos Profesionales Oficiales - Martillero Judicial Ángel Alejandro Arce
const DEFAULT_MARTILLERO_INFO = {
  name: "Ángel Alejandro Arce",
  title: "Martillero Judicial y Público",
  matriculaSTJ: "Matrícula S.T.J. Ctes. Nº 383",
  colegio: "Colegio Público de Martilleros y Corredores de la Provincia de Corrientes",
  phoneDisplay: "0379 - 154532991",
  phoneRaw: "5493794532991",
  phoneAlt: "03794 - 15532991",
  email: "alearce70@yahoo.com.ar",
  address: "Catamarca Nº 1057",
  city: "Ciudad de Corrientes, Corrientes, Argentina",
  schedule: "Lunes a Viernes de 08:00 a 12:30 y 17:00 a 20:30 hs.",
  coords: [-27.4692, -58.8341],
  adminPin: "arce383"
};

let MARTILLERO_INFO = (() => {
  try {
    const saved = localStorage.getItem("arce_martillero_info");
    return saved ? { ...DEFAULT_MARTILLERO_INFO, ...JSON.parse(saved) } : { ...DEFAULT_MARTILLERO_INFO };
  } catch (e) {
    return { ...DEFAULT_MARTILLERO_INFO };
  }
})();

const DEFAULT_WEB_TEXTS = {
  announcementActive: true,
  announcementText: "PRÓXIMO REMATE JUDICIAL: Sede Catamarca Nº 1057 • Salón Colegio de Martilleros. Consultas y edictos vigentes.",
  announcementLink: "#cronograma",
  heroTitle1: "Subastas Judiciales, Remates Públicos y Operaciones Inmobiliarias",
  heroSubtitle1: "Transparencia, rigor procesal y respaldo institucional en remates dispuestos por los Juzgados Civiles, Comerciales y Laborales de la Ciudad de Corrientes.",
  heroTitle2: "Inmuebles, Rodados y Activos Comerciales en Subasta Pública",
  heroSubtitle2: "Intervención profesional en ejecuciones hipotecarias, concursos preventivos, quiebras y comercialización directa de propiedades en toda la provincia.",
  quoteText: "Seguridad jurídica, publicidad transparente y estricto cumplimiento procesal en cada subasta pública y tasación encomendada por los Tribunales de la Provincia de Corrientes.",
  quoteAuthor: "Ángel Alejandro Arce • Martillero Judicial Matrícula S.T.J. Ctes. Nº 383"
};

let WEB_TEXTS = (() => {
  try {
    const saved = localStorage.getItem("arce_web_texts");
    return saved ? { ...DEFAULT_WEB_TEXTS, ...JSON.parse(saved) } : { ...DEFAULT_WEB_TEXTS };
  } catch (e) {
    return { ...DEFAULT_WEB_TEXTS };
  }
})();

const DEFAULT_INBOX_MESSAGES = [
  {
    id: 1713291000000,
    date: "16/10/2026 10:15",
    type: "Subasta ARCE-101",
    name: "Dr. Gustavo Romero",
    phone: "3794889922",
    email: "g.romero.abogado@gmail.com",
    message: "Buen día Martillero Arce, represento a un cliente interesado en la subasta del inmueble en calle San Lorenzo. Quisiéramos saber si hay días de exhibición previa antes del remate en Catamarca 1057.",
    status: "nueva"
  },
  {
    id: 1713280000000,
    date: "15/10/2026 17:40",
    type: "Tasación Oficial (Casa)",
    name: "Lic. Mariana Escalante",
    phone: "3794123456",
    email: "mescalante@estudiojuridico.com",
    message: "Solicito cotización para pericia de tasación judicial en juicio de división de condominio en Corrientes Capital. Es una casa de 4 dormitorios con terreno propio.",
    status: "respondida"
  }
];

let INBOX_MESSAGES = (() => {
  try {
    const saved = localStorage.getItem("arce_inbox_messages");
    return saved ? JSON.parse(saved) : DEFAULT_INBOX_MESSAGES;
  } catch (e) {
    return DEFAULT_INBOX_MESSAGES;
  }
})();

let ADMIN_PIN = localStorage.getItem("arce_admin_pin") || "arce383";

const STORAGE_KEY = "arce_martillero_listings_v3";


// Helper para generar fechas futuras dinámicas para el cronograma en vivo
function getFutureDateISO(daysAhead, hour = 10, minute = 0) {
  const d = new Date();
  d.setDate(d.getDate() + daysAhead);
  d.setHours(hour, minute, 0, 0);
  return d.toISOString();
}

const DEFAULT_LISTINGS_DATA = [
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
    senaPercent: 10,
    comisionPercent: 3,
    selladoPercent: 1.2,
    ribbon: "Subasta Judicial",
    ribbonClass: "",
    juzgado: "Juzgado Civil y Comercial Nº 9 - Corrientes",
    expediente: "Expte. Nº 184.520 - Ejecución Hipotecaria",
    totalArea: 285,
    coveredArea: 210,
    rooms: "5 Ambientes",
    auctionDate: "Sede Catamarca Nº 1057 • 10:00 hs.",
    auctionDateISO: getFutureDateISO(6, 10, 0),
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Importante propiedad edificada sobre lote propio en pleno radio céntrico de la Ciudad de Corrientes. Cuenta con salón al frente, dependencias, patio interno y todos los servicios conectados.",
    edicto: "EDICTO JUDICIAL: Por disposición del Juzgado Civil y Comercial Nº 9 de la Primera Circunscripción Judicial de la Provincia de Corrientes, se hace saber por tres (3) días que el Martillero Judicial Ángel Alejandro Arce (Mat. S.T.J. Ctes. Nº 383) procederá a la venta en pública subasta del inmueble urbano sito en el radio céntrico de esta ciudad. Acto de remate en calle Catamarca Nº 1057 (Sede del Colegio Público de Martilleros y Corredores de Corrientes). En el acto el comprador abonará el 10% de seña y el 3% de comisión de ley más gastos. Informes al Cel. 0379-154532991 o al correo alearce70@yahoo.com.ar."
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
    senaPercent: 30,
    comisionPercent: 10,
    selladoPercent: 1.0,
    ribbon: "Sin Base",
    ribbonClass: "ribbon-gold",
    juzgado: "Juzgado Civil y Comercial Nº 9 (Concursos y Quiebras)",
    expediente: "Ref. Autos: Distribuidora Ariel S.R.L. / Agroleg S.A.",
    totalArea: 0,
    coveredArea: 0,
    rooms: "Lote Rodados",
    auctionDate: "Subasta Presencial • Catamarca 1057 • 11:00 hs.",
    auctionDateISO: getFutureDateISO(11, 11, 0),
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
    ],
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
    senaPercent: 10,
    comisionPercent: 3,
    selladoPercent: 1.2,
    ribbon: "Destacado",
    ribbonClass: "ribbon-navy",
    juzgado: "Operación Particular Certificada",
    expediente: "Tasación y Corretaje Profesional",
    totalArea: 128,
    coveredArea: 112,
    rooms: "4 Ambientes",
    auctionDate: "Disponible para visitas coordinadas",
    auctionDateISO: null,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Excelente piso frente al Parque Camba Cuá y Costanera de Corrientes. Amplio estar comedor, balcón terraza corrido, 3 dormitorios (1 en suite), cocina equipada y cochera cubierta.",
    edicto: "OPERACIÓN INMOBILIARIA: Inmueble seleccionado con documentación verificada por el Martillero Público y Judicial Ángel Alejandro Arce. Asesoramiento integral jurídico-notarial y tasación oficial."
  },
  {
    id: 4,
    code: "104",
    slug: "ARCE-104",
    title: "Maquinaria Industrial, Herramientas y Equipamiento Comercial",
    address: "Catamarca Nº 1057 (Lugar de Subasta)",
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
    senaPercent: 100,
    comisionPercent: 10,
    selladoPercent: 0.6,
    ribbon: "Subasta de Lotes",
    ribbonClass: "",
    juzgado: "Juzgado Laboral Nº 4 / Civil y Comercial Nº 8",
    expediente: "Ejecución Laboral y Liquidación (Ref. Serviclean S.R.L.)",
    totalArea: 0,
    coveredArea: 0,
    rooms: "18 Lotes",
    auctionDate: "Sede Colegio de Martilleros • 09:30 hs.",
    auctionDateISO: getFutureDateISO(16, 9, 30),
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Subasta judicial de equipamiento industrial, máquinas de limpieza profesional, estanterías metálicas, mobiliario de oficina y herramientas de taller en lotes individuales.",
    edicto: "EDICTO JUDICIAL: El Martillero Judicial Ángel Alejandro Arce (Matrícula S.T.J. Ctes. Nº 383) comunica que en la sede del Colegio Público de Martilleros y Corredores (Catamarca Nº 1057, Corrientes) se procederá al remate público de bienes muebles, maquinarias y equipamiento comercial. Informes: Cel. 0379-154532991."
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
    conditionsSummary: "Base Judicial Fijada • Seña 10% • Comisión 3%",
    senaPercent: 10,
    comisionPercent: 3,
    selladoPercent: 1.2,
    ribbon: "Oportunidad Inversión",
    ribbonClass: "ribbon-gold",
    juzgado: "Juzgado Civil y Comercial Nº 8 - Corrientes",
    expediente: "Expte. Nº 162.890 - División de Condominio",
    totalArea: 450,
    coveredArea: 85,
    rooms: "Lote 15x30m",
    auctionDate: "Sede Catamarca Nº 1057 • 10:30 hs.",
    auctionDateISO: getFutureDateISO(22, 10, 30),
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Fracción de terreno en esquina estratégica con alto tránsito vehicular y excelente FOT para desarrollo en altura o salón de exposición comercial en Corrientes Capital.",
    edicto: "EDICTO JUDICIAL: Subasta ordenada en autos sobre División de Condominio por ante el Juzgado Civil y Comercial de Corrientes Capital. Martillero designado: Ángel Alejandro Arce (Mat. S.T.J. Nº 383). Consultas de títulos y planos en escritorio de calle Catamarca Nº 1057."
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
    senaPercent: 10,
    comisionPercent: 3,
    selladoPercent: 1.2,
    ribbon: "Venta Directa",
    ribbonClass: "ribbon-navy",
    juzgado: "Gestión Inmobiliaria Directa",
    expediente: "Tasación Oficial verificada",
    totalArea: 1200,
    coveredArea: 165,
    rooms: "4 Ambientes",
    auctionDate: "Visitas con entrevista previa",
    auctionDateISO: null,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Hermosa residencia de fin de semana o vivienda permanente a minutos de la Ciudad de Corrientes. Galería con quincho y parrilla, piscina de material, 3 dormitorios y amplio parque arbolado.",
    edicto: "GESTIÓN PROFESIONAL: Propiedad tasada y comercializada bajo supervisión del Martillero Ángel Alejandro Arce. Consulte financiación o permuta menor valor."
  }
];

let LISTINGS_DATA = loadListingsFromStorage();
let advancedMode = false;
let currentSelectedProperty = null;
let lightboxImages = [];
let lightboxIndex = 0;
let isAdminAuthenticated = false;

function loadListingsFromStorage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {
    console.warn("No se pudo leer localStorage:", e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_LISTINGS_DATA));
}

function saveListingsToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(LISTINGS_DATA));
  } catch (e) {
    console.warn("No se pudo guardar en localStorage:", e);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  applyMartilleroInfoToDOM();
  applyWebTextsToDOM();
  updateInboxBadges();
  renderListings(LISTINGS_DATA);
  renderUpcomingSchedule();
  setupFilters();
  setupHeaderCodeSearch();
  setupAuctionCalculator();
  setupForms();
  setupAdminPanel();
  initOfficeMap();
  startCountdownTicker();
  checkDeepLinkOnLoad();
});

// Formatear cuenta regresiva
function formatCountdown(isoDate) {
  if (!isoDate) return null;
  const target = new Date(isoDate).getTime();
  const now = Date.now();
  const diff = target - now;
  if (diff <= 0) return "Subasta en curso / realizada";

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  return `⏳ Faltan ${days}d ${String(hours).padStart(2, "0")}h ${String(mins).padStart(2, "0")}m ${String(secs).padStart(2, "0")}s`;
}

function startCountdownTicker() {
  setInterval(() => {
    document.querySelectorAll("[data-countdown-iso]").forEach((el) => {
      const iso = el.getAttribute("data-countdown-iso");
      const text = formatCountdown(iso);
      if (text) el.textContent = text;
    });
  }, 1000);
}

// Renderizar tarjetas (.property-card)
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
      const photosCount = item.images && item.images.length ? item.images.length : 1;
      const mainImg = item.images && item.images.length ? item.images[0] : item.image;
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
          : `<div class="item" title="Sede"><i class="fa-solid fa-building-columns"></i><span>Catamarca 1057</span></div>`;

      const countdownStr = item.auctionDateISO ? formatCountdown(item.auctionDateISO) : null;

      return `
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="card property-card">
            <div class="card-header" style="background: url('${mainImg}') no-repeat center center" onclick="openDetailModal(${item.id})">
              ${item.ribbon ? `<span class="ribbon ${item.ribbonClass}">${item.ribbon}</span>` : ""}
              <span class="photo-count-badge" title="Galería de fotos">
                <i class="fa-solid fa-camera"></i> ${photosCount} fotos
              </span>
              <div class="card-badge-bottom">
                <span class="badge-juzgado text-truncate"><i class="fa-solid fa-gavel me-1"></i>${item.juzgado}</span>
                ${
                  countdownStr
                    ? `<span class="countdown-badge" data-countdown-iso="${item.auctionDateISO}">${countdownStr}</span>`
                    : ""
                }
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
                    <button class="btn-share-icon" onclick="copyDirectLink(${item.id})" title="Copiar enlace directo a este aviso">
                      <i class="fa-solid fa-share-nodes"></i>
                    </button>
                    <a class="whatsapp-button" href="${waLink}" target="_blank" title="Consultar por WhatsApp">
                      <i class="fa-brands fa-whatsapp"></i>
                    </a>
                    <button class="btn btn-outline-primary btn-sm fw-semibold" onclick="openDetailModal(${item.id})">
                      Edicto / Fotos
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

// Renderizar Cronograma / Agenda de Próximos Remates Judiciales
function renderUpcomingSchedule() {
  const container = document.getElementById("scheduleContainer");
  if (!container) return;

  const upcoming = LISTINGS_DATA.filter((item) => item.auctionDateISO).sort(
    (a, b) => new Date(a.auctionDateISO) - new Date(b.auctionDateISO)
  );

  if (!upcoming.length) {
    container.innerHTML = `<div class="col-12 text-center text-muted py-4">No hay subastas programadas con fecha fija en este momento.</div>`;
    return;
  }

  const monthsEs = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];

  container.innerHTML = upcoming
    .map((item) => {
      const dt = new Date(item.auctionDateISO);
      const day = String(dt.getDate()).padStart(2, "0");
      const month = monthsEs[dt.getMonth()];
      const timeStr = `${String(dt.getHours()).padStart(2, "0")}:${String(dt.getMinutes()).padStart(2, "0")} hs.`;

      const gcalStart = dt.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
      const dtEnd = new Date(dt.getTime() + 60 * 60 * 1000);
      const gcalEnd = dtEnd.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
      const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
        `Subasta Judicial (${item.slug}): ${item.title}`
      )}&dates=${gcalStart}/${gcalEnd}&details=${encodeURIComponent(
        `${item.edicto}\nMartillero: Ángel Alejandro Arce (Mat. STJ Nº 383)`
      )}&location=${encodeURIComponent("Catamarca 1057, Corrientes, Argentina")}`;

      return `
        <div class="col-lg-6">
          <div class="schedule-card h-100 d-flex flex-column justify-content-between">
            <div class="d-flex align-items-start gap-3">
              <div class="date-badge-box flex-shrink-0">
                <span class="day">${day}</span>
                <span class="month">${month}</span>
              </div>
              <div class="flex-grow-1">
                <div class="d-flex flex-wrap justify-content-between align-items-center gap-1 mb-1">
                  <span class="badge bg-primary-subtle text-primary fw-bold">${item.slug} • ${item.operationLabel}</span>
                  <span class="countdown-badge" data-countdown-iso="${item.auctionDateISO}">${formatCountdown(item.auctionDateISO)}</span>
                </div>
                <h6 class="fw-bold text-dark mb-1">${item.title}</h6>
                <div class="small text-muted mb-1">
                  <i class="fa-solid fa-gavel text-primary me-1"></i>${item.juzgado}
                </div>
                <div class="small text-dark fw-semibold">
                  <i class="fa-regular fa-clock text-warning me-1"></i>Horario: ${timeStr} • <i class="fa-solid fa-location-dot text-danger ms-1 me-1"></i>Catamarca Nº 1057
                </div>
              </div>
            </div>
            <div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mt-3 pt-3 border-top">
              <div>
                <span class="small text-muted">Base:</span>
                <strong class="text-primary ms-1">${item.priceFormatted}</strong>
              </div>
              <div class="d-flex gap-2">
                <a href="${gcalUrl}" target="_blank" class="btn btn-sm btn-outline-secondary" title="Agendar en Google Calendar">
                  <i class="fa-regular fa-calendar-plus me-1"></i>Agendar
                </a>
                <button class="btn btn-sm btn-outline-primary" onclick="loadIntoCalculator(${item.id})">
                  <i class="fa-solid fa-calculator me-1"></i>Calcular Gastos
                </button>
                <button class="btn btn-sm btn-primary" onclick="openDetailModal(${item.id})">
                  Ver Edicto
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

// Calculadora Interactiva de Gastos de Subasta Judicial
function setupAuctionCalculator() {
  const typeSelect = document.getElementById("calcAuctionType");
  const amountInput = document.getElementById("calcBidAmount");
  const senaInput = document.getElementById("calcSenaPercent");
  const comisionInput = document.getElementById("calcComisionPercent");
  const selladoInput = document.getElementById("calcSelladoPercent");

  if (!typeSelect || !amountInput) return;

  typeSelect.addEventListener("change", () => {
    const val = typeSelect.value;
    if (val === "inmueble") {
      senaInput.value = 10;
      comisionInput.value = 3;
      selladoInput.value = 1.2;
    } else if (val === "rodado") {
      senaInput.value = 30;
      comisionInput.value = 10;
      selladoInput.value = 1.0;
    } else if (val === "mueble_contado") {
      senaInput.value = 100;
      comisionInput.value = 10;
      selladoInput.value = 0.6;
    }
    recalculateAuctionCosts();
  });

  [amountInput, senaInput, comisionInput, selladoInput].forEach((inp) => {
    inp.addEventListener("input", recalculateAuctionCosts);
  });

  recalculateAuctionCosts();
}

function recalculateAuctionCosts() {
  const amount = parseFloat(document.getElementById("calcBidAmount")?.value) || 0;
  const senaPct = parseFloat(document.getElementById("calcSenaPercent")?.value) || 0;
  const comisionPct = parseFloat(document.getElementById("calcComisionPercent")?.value) || 0;
  const selladoPct = parseFloat(document.getElementById("calcSelladoPercent")?.value) || 0;

  const senaMonto = amount * (senaPct / 100);
  const comisionMonto = amount * (comisionPct / 100);
  const selladoMonto = amount * (selladoPct / 100);
  const totalEnActo = senaMonto + comisionMonto + selladoMonto;
  const saldoAprobacion = Math.max(0, amount - senaMonto);

  const fmt = (n) => "$ " + Math.round(n).toLocaleString("es-AR");

  const elSena = document.getElementById("resSena");
  const elComision = document.getElementById("resComision");
  const elSellado = document.getElementById("resSellado");
  const elTotalActo = document.getElementById("resTotalActo");
  const elSaldo = document.getElementById("resSaldo");

  if (elSena) elSena.textContent = `${fmt(senaMonto)} (${senaPct}%)`;
  if (elComision) elComision.textContent = `${fmt(comisionMonto)} (${comisionPct}%)`;
  if (elSellado) elSellado.textContent = `${fmt(selladoMonto)} (${selladoPct}%)`;
  if (elTotalActo) elTotalActo.textContent = fmt(totalEnActo);
  if (elSaldo) elSaldo.textContent = fmt(saldoAprobacion);
}

function loadIntoCalculator(id) {
  const item = LISTINGS_DATA.find((x) => x.id === id);
  if (!item) return;

  // Cerrar modal si estuviera abierto
  const detailModalEl = document.getElementById("detailModal");
  if (detailModalEl) {
    const inst = bootstrap.Modal.getInstance(detailModalEl);
    if (inst) inst.hide();
  }

  const amountInput = document.getElementById("calcBidAmount");
  const senaInput = document.getElementById("calcSenaPercent");
  const comisionInput = document.getElementById("calcComisionPercent");
  const selladoInput = document.getElementById("calcSelladoPercent");
  const refLabel = document.getElementById("calcLoadedPropertyLabel");

  if (amountInput) amountInput.value = item.price;
  if (senaInput) senaInput.value = item.senaPercent || 10;
  if (comisionInput) comisionInput.value = item.comisionPercent || 3;
  if (selladoInput) selladoInput.value = item.selladoPercent || 1.2;
  if (refLabel) {
    refLabel.textContent = `Simulando sobre: ${item.slug} — ${item.title}`;
    refLabel.classList.remove("d-none");
  }

  recalculateAuctionCosts();
  document.getElementById("calculadora")?.scrollIntoView({ behavior: "smooth" });
}

// Modal de Ficha Completa, Galería Interactiva y Edicto Judicial
function openDetailModal(id) {
  const item = LISTINGS_DATA.find((x) => x.id === id);
  if (!item) return;
  currentSelectedProperty = item;

  const photos = item.images && item.images.length ? item.images : [item.image];
  lightboxImages = photos;
  lightboxIndex = 0;

  const waText = encodeURIComponent(
    `Hola Martillero Ángel Alejandro Arce, consulto por el aviso Cód. ${item.slug} (${item.title}). Quisiera recibir información sobre condiciones y horarios.`
  );

  const shareUrl = `${window.location.origin}${window.location.pathname}?aviso=${item.slug}`;
  const waShareUrl = `https://wa.me/?text=${encodeURIComponent(
    `Mirá esta publicación del Martillero Judicial Ángel Alejandro Arce (${item.slug} - ${item.title}): ${shareUrl}`
  )}`;

  const thumbsHtml = photos
    .map(
      (src, idx) => `
      <img
        src="${src}"
        alt="Miniatura ${idx + 1}"
        class="gallery-thumb ${idx === 0 ? "active" : ""}"
        onclick="switchModalMainPhoto(${idx})"
      />
    `
    )
    .join("");

  const body = document.getElementById("detailModalBody");
  body.innerHTML = `
    <div class="row g-4">
      <div class="col-lg-6">
        <div class="position-relative rounded-3 overflow-hidden shadow-sm mb-2">
          <img
            id="modalMainPhoto"
            src="${photos[0]}"
            alt="${item.title}"
            class="modal-gallery-main"
            onclick="openFullscreenLightbox(0)"
          />
          <span class="badge bg-danger position-absolute top-0 start-0 m-3 px-3 py-2">${item.ribbon}</span>
          <button
            type="button"
            class="btn btn-sm btn-dark bg-opacity-75 position-absolute bottom-0 end-0 m-3 no-print"
            onclick="openFullscreenLightbox(lightboxIndex)"
          >
            <i class="fa-solid fa-expand me-1"></i>Pantalla Completa (${photos.length} fotos)
          </button>
        </div>

        <div class="gallery-thumb-strip mb-3 no-print">
          ${thumbsHtml}
        </div>

        <div class="edicto-box">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <strong class="text-uppercase small text-primary"><i class="fa-solid fa-scroll me-1"></i>Texto Oficial / Edicto</strong>
            <span class="badge bg-warning text-dark">Mat. S.T.J. Nº 383</span>
          </div>
          <p class="mb-0">${item.edicto}</p>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-2">
          <span class="badge bg-primary">${item.operationLabel}</span>
          <span class="text-muted fw-bold">Código: ${item.slug}</span>
        </div>
        <h4 class="fw-bold text-dark mb-1">${item.title}</h4>
        <p class="text-muted mb-3"><i class="fa-solid fa-location-dot text-danger me-1"></i>${item.address} — ${item.locationLabel}</p>

        <div class="p-3 bg-light rounded-3 border mb-3">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <div class="small text-muted">Valor / Base de Subasta</div>
              <div class="fs-3 fw-bold text-primary">${item.priceFormatted} <span class="fs-6 fw-normal text-muted">(${item.currency})</span></div>
            </div>
            <button class="btn btn-sm btn-warning fw-semibold text-dark no-print" onclick="loadIntoCalculator(${item.id})">
              <i class="fa-solid fa-calculator me-1"></i>Calcular Seña y Comisión
            </button>
          </div>
          <div class="small text-dark mt-2"><i class="fa-solid fa-check-circle text-success me-1"></i>${item.conditionsSummary}</div>
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

        <p class="small text-secondary mb-3">${item.description}</p>

        <!-- Barra para compartir y descargar Edicto en PDF -->
        <div class="p-3 rounded-3 bg-light border mb-3 no-print">
          <div class="small fw-bold text-dark mb-2"><i class="fa-solid fa-share-nodes me-1 text-primary"></i>Compartir o Descargar Edicto Oficial:</div>
          <div class="d-flex flex-wrap gap-2">
            <button class="btn btn-sm btn-outline-dark" onclick="downloadEdictPDF(${item.id})">
              <i class="fa-solid fa-file-pdf text-danger me-1"></i>Descargar Edicto PDF
            </button>
            <button class="btn btn-sm btn-outline-primary" onclick="copyDirectLink(${item.id})">
              <i class="fa-solid fa-link me-1"></i>Copiar Link Directo
            </button>
            <a href="${waShareUrl}" target="_blank" class="btn btn-sm btn-outline-success">
              <i class="fa-brands fa-whatsapp me-1"></i>Enviar a un contacto
            </a>
          </div>
        </div>

        <div class="d-grid gap-2 d-sm-flex no-print">
          <a href="https://wa.me/${MARTILLERO_INFO.phoneRaw}?text=${waText}" target="_blank" class="btn btn-success flex-grow-1 fw-semibold">
            <i class="fa-brands fa-whatsapp me-2"></i>Consultar al Martillero
          </a>
          <button class="btn btn-primary fw-semibold" onclick="openContactModal(${item.id})">
            <i class="fa-regular fa-envelope me-1"></i>Dejar Consulta
          </button>
        </div>
      </div>
    </div>
  `;

  const modalEl = document.getElementById("detailModal");
  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  modal.show();
}

function switchModalMainPhoto(idx) {
  lightboxIndex = idx;
  const mainPhoto = document.getElementById("modalMainPhoto");
  if (mainPhoto && lightboxImages[idx]) {
    mainPhoto.src = lightboxImages[idx];
  }
  document.querySelectorAll(".gallery-thumb").forEach((thumb, i) => {
    thumb.classList.toggle("active", i === idx);
  });
}

// Visor Lightbox a Pantalla Completa
function openFullscreenLightbox(startIdx = 0) {
  if (!lightboxImages.length) return;
  lightboxIndex = startIdx;
  const lb = document.getElementById("fullscreenLightbox");
  const img = document.getElementById("lightboxImg");
  const counter = document.getElementById("lightboxCounter");
  if (!lb || !img) return;

  img.src = lightboxImages[lightboxIndex];
  if (counter) counter.textContent = `Foto ${lightboxIndex + 1} de ${lightboxImages.length}`;
  lb.classList.remove("d-none");
}

function closeFullscreenLightbox() {
  const lb = document.getElementById("fullscreenLightbox");
  if (lb) lb.classList.add("d-none");
}

function navigateLightbox(delta) {
  if (!lightboxImages.length) return;
  lightboxIndex = (lightboxIndex + delta + lightboxImages.length) % lightboxImages.length;
  const img = document.getElementById("lightboxImg");
  const counter = document.getElementById("lightboxCounter");
  if (img) img.src = lightboxImages[lightboxIndex];
  if (counter) counter.textContent = `Foto ${lightboxIndex + 1} de ${lightboxImages.length}`;
}

// Copiar Link Directo y Deep Linking (?aviso=ARCE-101)
function copyDirectLink(id) {
  const item = LISTINGS_DATA.find((x) => x.id === id);
  if (!item) return;
  const url = `${window.location.origin}${window.location.pathname}?aviso=${item.slug}`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(() => {
      showToast(`Enlace copiado: ${item.slug}`);
    });
  } else {
    prompt("Copie este enlace directo:", url);
  }
}

function checkDeepLinkOnLoad() {
  const params = new URLSearchParams(window.location.search);
  const avisoSlug = params.get("aviso") || window.location.hash.replace("#", "");
  if (!avisoSlug) return;

  const found = LISTINGS_DATA.find(
    (x) => x.slug.toUpperCase() === avisoSlug.toUpperCase() || x.code === avisoSlug
  );
  if (found) {
    setTimeout(() => openDetailModal(found.id), 350);
  }
}

// Generador de Edicto Oficial para Descargar en PDF / Imprimir
function downloadEdictPDF(id) {
  const item = LISTINGS_DATA.find((x) => x.id === id);
  if (!item) return;

  const printWin = window.open("", "_blank", "width=850,height=900");
  if (!printWin) {
    window.print();
    return;
  }

  printWin.document.write(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <title>Edicto Oficial ${item.slug} - Ángel Alejandro Arce</title>
      <style>
        body { font-family: 'Georgia', serif; color: #111; margin: 40px; line-height: 1.6; }
        .header { border-bottom: 3px double #0b2e59; padding-bottom: 16px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: center; }
        .title-martillero { font-family: Arial, sans-serif; font-size: 20px; font-weight: bold; color: #0b2e59; margin: 0; }
        .sub-martillero { font-family: Arial, sans-serif; font-size: 13px; color: #444; margin: 4px 0 0; }
        .badge { background: #0b2e59; color: #fff; font-family: Arial, sans-serif; padding: 6px 12px; font-size: 12px; font-weight: bold; border-radius: 4px; }
        h1 { font-size: 22px; margin-bottom: 6px; color: #0b2e59; font-family: Arial, sans-serif; }
        .meta-table { width: 100%; border-collapse: collapse; margin: 20px 0; font-family: Arial, sans-serif; font-size: 13px; }
        .meta-table td { padding: 8px 10px; border: 1px solid #ccc; }
        .meta-table td.label { background: #f1f5f9; font-weight: bold; width: 32%; }
        .edicto-box { border: 2px solid #c59b27; background: #fffdf5; padding: 20px; margin: 24px 0; font-size: 14px; text-align: justify; }
        .footer { margin-top: 40px; border-top: 1px solid #ccc; padding-top: 12px; font-family: Arial, sans-serif; font-size: 12px; color: #555; text-align: center; }
      </style>
    </head>
    <body>
      <div class="header">
        <div>
          <p class="title-martillero">ÁNGEL ALEJANDRO ARCE</p>
          <p class="sub-martillero">Martillero Judicial y Público • Matrícula S.T.J. Ctes. Nº 383</p>
          <p class="sub-martillero">Sede de Subastas: Catamarca Nº 1057, Ciudad de Corrientes • Tel: 0379-154532991</p>
        </div>
        <div class="badge">CÓD. ${item.slug}</div>
      </div>

      <h1>${item.title}</h1>
      <p style="font-family: Arial, sans-serif; color: #555; margin-top: 0;">📍 ${item.address} — ${item.locationLabel}</p>

      <img src="${item.image}" style="width: 100%; max-height: 280px; object-fit: cover; border-radius: 6px; margin-bottom: 15px;" />

      <table class="meta-table">
        <tr><td class="label">Tipo de Operación</td><td>${item.operationLabel} (${item.typeLabel})</td></tr>
        <tr><td class="label">Valor / Base de Subasta</td><td><strong>${item.priceFormatted} (${item.currency})</strong></td></tr>
        <tr><td class="label">Condiciones de Venta</td><td>${item.conditionsSummary}</td></tr>
        <tr><td class="label">Juzgado / Intervención</td><td>${item.juzgado}</td></tr>
        <tr><td class="label">Expediente / Referencia</td><td>${item.expediente}</td></tr>
        <tr><td class="label">Acto / Disponibilidad</td><td>${item.auctionDate}</td></tr>
      </table>

      <div class="edicto-box">
        <strong>TEXTO DEL EDICTO / PUBLICACIÓN OFICIAL:</strong><br><br>
        ${item.edicto}
      </div>

      <p style="font-family: Arial, sans-serif; font-size: 13px;"><strong>Descripción general:</strong> ${item.description}</p>

      <div class="footer">
        Documento emitido desde el portal web oficial de Ángel Alejandro Arce — Martillero Judicial (Mat. S.T.J. Ctes. Nº 383)<br>
        Informes: Catamarca Nº 1057, Corrientes Capital | Cel/WhatsApp: 0379-154532991 | Email: alearce70@yahoo.com.ar
      </div>
      <script>
        window.onload = function() { setTimeout(function() { window.print(); }, 400); };
      </script>
    </body>
    </html>
  `);
  printWin.document.close();
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

// Búsqueda por Código de Aviso en Header
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
        showToast(`No se encontró el código "${codeInput.value}". Pruebe del 101 al 106.`);
      }
    });
  }
}

// Modal de Contacto por Publicación
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

// ==========================================================
// FORMULARIOS DE CONTACTO Y TASACIONES (Conexión al Mini-CRM)
// ==========================================================
function setupForms() {
  // 1. Formulario Modal de Publicación
  const modalForm = document.getElementById("propertyContactForm");
  if (modalForm) {
    modalForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("modalContactName")?.value.trim() || "Interesado Web";
      const phone = document.getElementById("modalContactPhone")?.value.trim() || "";
      const email = document.getElementById("modalContactEmail")?.value.trim() || "";
      const message = document.getElementById("modalContactMessage")?.value.trim() || "";
      const typeLabel = currentSelectedProperty ? `Aviso ${currentSelectedProperty.slug}` : "Publicación";

      const newMsg = {
        id: Date.now(),
        date: new Date().toLocaleString("es-AR", { dateStyle: "short", timeStyle: "short" }),
        type: typeLabel,
        name,
        phone,
        email,
        message,
        status: "nueva"
      };

      INBOX_MESSAGES.unshift(newMsg);
      saveInboxToStorage();
      updateInboxBadges();
      if (isAdminAuthenticated) renderInboxMessages();

      document.getElementById("modalContactAlert")?.classList.remove("d-none");
      showToast(`¡Consulta recibida! Se guardó en la bandeja de entrada.`);
      modalForm.reset();
    });
  }

  // 2. Formulario de Tasaciones
  const tasacionesForm = document.getElementById("tasacionesForm");
  if (tasacionesForm) {
    tasacionesForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const firstName = document.getElementById("tasFirstName")?.value.trim() || "";
      const lastName = document.getElementById("tasLastName")?.value.trim() || "";
      const fullName = `${firstName} ${lastName}`.trim() || "Solicitante Tasación";
      const phone = document.getElementById("tasPhone")?.value.trim() || "";
      const email = document.getElementById("tasEmail")?.value.trim() || "";
      const type = document.getElementById("tasType")?.value || "Inmueble";
      const details = document.getElementById("tasDetails")?.value.trim() || "";

      const newMsg = {
        id: Date.now(),
        date: new Date().toLocaleString("es-AR", { dateStyle: "short", timeStyle: "short" }),
        type: `Tasación (${type})`,
        name: fullName,
        phone,
        email,
        message: `Tipo de bien: ${type}.\nDetalles del inmueble/bien: ${details}`,
        status: "nueva"
      };

      INBOX_MESSAGES.unshift(newMsg);
      saveInboxToStorage();
      updateInboxBadges();
      if (isAdminAuthenticated) renderInboxMessages();

      document.getElementById("tasacionesAlert")?.classList.remove("d-none");
      const waMsg = encodeURIComponent(
        `Hola Martillero Ángel Alejandro Arce, solicito una Tasación Profesional.\nNombre: ${fullName}\nTeléfono: ${phone}\nTipo de bien: ${type}\nDetalles: ${details}`
      );
      const waLinkEl = document.getElementById("tasacionesWaFollowup");
      if (waLinkEl) {
        waLinkEl.href = `https://wa.me/${MARTILLERO_INFO.phoneRaw}?text=${waMsg}`;
      }

      showToast(`¡Solicitud de tasación registrada exitosamente!`);
      tasacionesForm.reset();
    });
  }

  // 3. Formulario de Contacto General al Pie
  const mainContactForm = document.getElementById("mainContactForm");
  if (mainContactForm) {
    mainContactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("mainContactName")?.value.trim() || "Usuario Web";
      const phone = document.getElementById("mainContactPhone")?.value.trim() || "";
      const email = document.getElementById("mainContactEmail")?.value.trim() || "";
      const message = document.getElementById("mainContactMsg")?.value.trim() || "";

      const newMsg = {
        id: Date.now(),
        date: new Date().toLocaleString("es-AR", { dateStyle: "short", timeStyle: "short" }),
        type: "Contacto General Web",
        name,
        phone,
        email,
        message,
        status: "nueva"
      };

      INBOX_MESSAGES.unshift(newMsg);
      saveInboxToStorage();
      updateInboxBadges();
      if (isAdminAuthenticated) renderInboxMessages();

      document.getElementById("mainContactAlert")?.classList.remove("d-none");
      showToast(`¡Mensaje enviado y registrado en la bandeja del Martillero!`);
      mainContactForm.reset();
    });
  }
}

// ==========================================================
// SINCRONIZACIÓN REACTIVA DE DATOS Y TEXTOS EN EL SITIO
// ==========================================================
function applyMartilleroInfoToDOM() {
  document.querySelectorAll(".dyn-matricula").forEach((el) => {
    el.textContent = MARTILLERO_INFO.matriculaSTJ;
  });
  document.querySelectorAll(".dyn-name").forEach((el) => {
    el.textContent = MARTILLERO_INFO.name;
  });
  document.querySelectorAll(".dyn-title").forEach((el) => {
    el.textContent = MARTILLERO_INFO.title;
  });
  document.querySelectorAll(".dyn-colegio").forEach((el) => {
    el.textContent = MARTILLERO_INFO.colegio;
  });
  document.querySelectorAll(".dyn-address").forEach((el) => {
    el.textContent = MARTILLERO_INFO.address;
  });
  document.querySelectorAll(".dyn-city").forEach((el) => {
    el.textContent = MARTILLERO_INFO.city;
  });
  document.querySelectorAll(".dyn-phone").forEach((el) => {
    el.textContent = MARTILLERO_INFO.phoneDisplay;
  });
  document.querySelectorAll(".dyn-phone-alt").forEach((el) => {
    el.textContent = MARTILLERO_INFO.phoneAlt;
  });
  document.querySelectorAll(".dyn-email").forEach((el) => {
    el.textContent = MARTILLERO_INFO.email;
  });
  document.querySelectorAll(".dyn-schedule").forEach((el) => {
    el.textContent = MARTILLERO_INFO.schedule;
  });

  // Enlaces de WhatsApp
  document.querySelectorAll(".dyn-wa-link").forEach((el) => {
    const defaultMsg = encodeURIComponent(`Hola Martillero ${MARTILLERO_INFO.name}, le escribo desde su página web.`);
    el.href = `https://wa.me/${MARTILLERO_INFO.phoneRaw}?text=${defaultMsg}`;
  });

  // Botón flotante
  const floatingWa = document.querySelector(".whatsapp-floating-button");
  if (floatingWa) {
    floatingWa.href = `https://wa.me/${MARTILLERO_INFO.phoneRaw}?text=${encodeURIComponent(`Hola Martillero ${MARTILLERO_INFO.name}, me comunico desde su sitio web.`)}`;
    floatingWa.title = `Chatear por WhatsApp con ${MARTILLERO_INFO.name}`;
  }

  // Teléfonos
  document.querySelectorAll(".dyn-tel-link").forEach((el) => {
    el.href = `tel:${MARTILLERO_INFO.phoneRaw}`;
  });

  // Emails
  document.querySelectorAll(".dyn-email-link").forEach((el) => {
    el.href = `mailto:${MARTILLERO_INFO.email}`;
  });

  // Previsualización de tarjeta en el panel
  const prevName = document.getElementById("prevCardName");
  if (prevName) prevName.textContent = MARTILLERO_INFO.name;
  const prevTitle = document.getElementById("prevCardTitle");
  if (prevTitle) prevTitle.textContent = MARTILLERO_INFO.title;
  const prevMat = document.getElementById("prevCardMatricula");
  if (prevMat) prevMat.textContent = MARTILLERO_INFO.matriculaSTJ;
  const prevAddr = document.getElementById("prevCardAddress");
  if (prevAddr) prevAddr.textContent = MARTILLERO_INFO.address;
  const prevPhone = document.getElementById("prevCardPhone");
  if (prevPhone) prevPhone.textContent = MARTILLERO_INFO.phoneDisplay;
  const prevEmail = document.getElementById("prevCardEmail");
  if (prevEmail) prevEmail.textContent = MARTILLERO_INFO.email;
  const prevSched = document.getElementById("prevCardSchedule");
  if (prevSched) prevSched.textContent = MARTILLERO_INFO.schedule;

  // Actualizar mapa Leaflet si existe
  if (window.officeLeafletMap && window.officeLeafletMarker && Array.isArray(MARTILLERO_INFO.coords)) {
    window.officeLeafletMap.setView(MARTILLERO_INFO.coords, 16);
    window.officeLeafletMarker.setLatLng(MARTILLERO_INFO.coords);
    window.officeLeafletMarker.setPopupContent(
      `<strong>${MARTILLERO_INFO.name}</strong><br>${MARTILLERO_INFO.title} (${MARTILLERO_INFO.matriculaSTJ})<br>📍 ${MARTILLERO_INFO.address}, ${MARTILLERO_INFO.city}<br><small>${MARTILLERO_INFO.colegio}</small>`
    );
  }
}

function applyWebTextsToDOM() {
  const bar = document.getElementById("urgentAnnouncementBar");
  const txt = document.getElementById("urgentAnnouncementText");
  const link = document.getElementById("urgentAnnouncementLink");

  if (bar && txt) {
    if (WEB_TEXTS.announcementActive) {
      bar.classList.remove("d-none");
      txt.textContent = WEB_TEXTS.announcementText;
      if (link && WEB_TEXTS.announcementLink) {
        link.href = WEB_TEXTS.announcementLink;
      }
    } else {
      bar.classList.add("d-none");
    }
  }

  const hTitle1 = document.getElementById("dynHeroTitle1");
  if (hTitle1 && WEB_TEXTS.heroTitle1) hTitle1.textContent = WEB_TEXTS.heroTitle1;
  const hSub1 = document.getElementById("dynHeroSubtitle1");
  if (hSub1 && WEB_TEXTS.heroSubtitle1) hSub1.textContent = WEB_TEXTS.heroSubtitle1;

  const hTitle2 = document.getElementById("dynHeroTitle2");
  if (hTitle2 && WEB_TEXTS.heroTitle2) hTitle2.textContent = WEB_TEXTS.heroTitle2;
  const hSub2 = document.getElementById("dynHeroSubtitle2");
  if (hSub2 && WEB_TEXTS.heroSubtitle2) hSub2.textContent = WEB_TEXTS.heroSubtitle2;

  const quoteEl = document.getElementById("dynSpecialQuote");
  if (quoteEl && WEB_TEXTS.quoteText) quoteEl.textContent = `“${WEB_TEXTS.quoteText.replace(/^[“"']+|[”"']+$/g, "")}”`;
  const authorEl = document.getElementById("dynSpecialQuoteAuthor");
  if (authorEl && WEB_TEXTS.quoteAuthor) authorEl.textContent = WEB_TEXTS.quoteAuthor;
}

function dismissAnnouncement() {
  const bar = document.getElementById("urgentAnnouncementBar");
  if (bar) bar.classList.add("d-none");
}

function saveInboxToStorage() {
  try {
    localStorage.setItem("arce_inbox_messages", JSON.stringify(INBOX_MESSAGES));
  } catch (e) {
    console.warn("No se pudo guardar la bandeja en storage:", e);
  }
}

function updateInboxBadges() {
  const newCount = INBOX_MESSAGES.filter((m) => m.status === "nueva").length;
  const totalCount = INBOX_MESSAGES.length;

  const topBadge = document.getElementById("topBarInboxBadge");
  if (topBadge) {
    if (newCount > 0) {
      topBadge.textContent = newCount;
      topBadge.classList.remove("d-none");
    } else {
      topBadge.classList.add("d-none");
    }
  }

  const tabBadge = document.getElementById("tabInboxBadge");
  if (tabBadge) tabBadge.textContent = newCount;

  const kpiInbox = document.getElementById("kpiInboxCount");
  if (kpiInbox) kpiInbox.textContent = totalCount;

  const fTotal = document.getElementById("inboxFilterTotalCount");
  if (fTotal) fTotal.textContent = totalCount;
  const fNew = document.getElementById("inboxFilterNewCount");
  if (fNew) fNew.textContent = newCount;
  const fAns = document.getElementById("inboxFilterAnsweredCount");
  if (fAns) fAns.textContent = INBOX_MESSAGES.filter((m) => m.status === "respondida").length;
}

// ==========================================================
// PANEL DE ADMINISTRACIÓN INTEGRAL (5 PESTAÑAS)
// ==========================================================
function setupAdminPanel() {
  const loginForm = document.getElementById("adminLoginForm");
  const createForm = document.getElementById("adminItemForm");
  const profileForm = document.getElementById("adminProfileForm");
  const textsForm = document.getElementById("adminTextsForm");

  // 1. Manejo del Login con PIN
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const pin = document.getElementById("adminPinInput").value.trim();
      const err = document.getElementById("adminLoginError");
      if (pin === ADMIN_PIN) {
        isAdminAuthenticated = true;
        err.classList.add("d-none");
        document.getElementById("adminLoginView").classList.add("d-none");
        document.getElementById("adminDashboardView").classList.remove("d-none");
        document.getElementById("adminLogoutBtn")?.classList.remove("d-none");

        // Inicializar datos del dashboard
        updateAdminKPIs();
        renderAdminTable();
        populateProfileInputs();
        populateTextsInputs();
        renderInboxMessages();
        updateInboxBadges();
        updateAdminImagePreviews();
      } else {
        err.classList.remove("d-none");
      }
    });
  }

  // 2. Manejo de Publicaciones (Cargar / Editar)
  if (createForm) {
    createForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const editId = parseInt(document.getElementById("adminEditId").value, 10);
      const customCode = document.getElementById("admCode").value.trim().toUpperCase().replace("ARCE-", "");
      const nextCodeNum = LISTINGS_DATA.length ? Math.max(...LISTINGS_DATA.map((x) => parseInt(x.code, 10) || 100)) + 1 : 101;
      const codeStr = customCode || (editId ? LISTINGS_DATA.find((x) => x.id === editId)?.code || String(nextCodeNum) : String(nextCodeNum));

      const currency = document.getElementById("admCurrency").value;
      const priceNum = parseFloat(document.getElementById("admPrice").value) || 0;
      const priceFormatted =
        currency === "USD" ? `USD ${priceNum.toLocaleString("es-AR")}` : `$ ${priceNum.toLocaleString("es-AR")}`;

      const opVal = document.getElementById("admOperation").value;
      const opLabels = {
        subasta: "Subasta Judicial",
        quiebra: "Remate por Quiebra",
        venta: "Venta Directa"
      };

      const typeVal = document.getElementById("admType").value;
      const typeLabels = {
        inmueble: "Inmueble Urbano",
        departamento: "Departamento",
        terreno: "Terreno / Lote",
        vehiculo: "Vehículos y Rodados",
        maquinaria: "Maquinarias y Bienes Muebles"
      };

      const locVal = document.getElementById("admLocation").value;
      const locLabels = {
        centro: "Corrientes Capital • Barrio Centro",
        cambacua: "Corrientes Capital • Camba Cuá / Costanera",
        libertad: "Corrientes Capital • Barrio Libertad",
        "3deabril": "Corrientes Capital • Av. 3 de Abril / Ferré",
        ruta12: "Corrientes Capital • Corredor Ruta 12",
        santaana: "Gran Corrientes • Santa Ana"
      };

      const mainImg =
        document.getElementById("admImage").value.trim() ||
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80";

      const extraUrlsRaw = document.getElementById("admExtraImages").value || "";
      const extraImgs = extraUrlsRaw
        .split(/[\n,]/)
        .map((u) => u.trim())
        .filter((u) => u.length > 5);

      const allImages = [mainImg];
      extraImgs.forEach((u) => {
        if (!allImages.includes(u)) allImages.push(u);
      });

      const dateISO = document.getElementById("admAuctionDateISO").value;
      const dateCustomText = document.getElementById("admAuctionDateText").value.trim();
      const dateDisplayText = dateCustomText
        ? dateCustomText
        : dateISO
        ? `Sede ${MARTILLERO_INFO.address} • ${new Date(dateISO).toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" })} hs.`
        : "Consultar fecha y horario";

      const senaP = parseFloat(document.getElementById("admSenaPercent").value) || (opVal === "quiebra" ? 30 : 10);
      const comisionP = parseFloat(document.getElementById("admComisionPercent").value) || (opVal === "quiebra" ? 10 : 3);
      const selladoP = parseFloat(document.getElementById("admSelladoPercent").value) || 1.2;

      const newObj = {
        id: editId || Date.now(),
        code: codeStr,
        slug: `ARCE-${codeStr}`,
        title: document.getElementById("admTitle").value.trim(),
        address: document.getElementById("admAddress").value.trim(),
        neighborhood: "Corrientes Capital",
        locationId: locVal,
        locationLabel: locLabels[locVal] || "Corrientes Capital",
        operationId: opVal,
        operationLabel: opLabels[opVal] || "Subasta Judicial",
        typeId: typeVal,
        typeLabel: typeLabels[typeVal] || "Inmueble",
        currency,
        price: priceNum,
        priceFormatted,
        conditionsSummary: document.getElementById("admConditions").value.trim(),
        senaPercent: senaP,
        comisionPercent: comisionP,
        selladoPercent: selladoP,
        ribbon: opLabels[opVal] || "Destacado",
        ribbonClass: opVal === "venta" ? "ribbon-navy" : opVal === "quiebra" ? "ribbon-gold" : "",
        juzgado: document.getElementById("admJuzgado").value.trim() || "Juzgado Civil y Comercial - Corrientes",
        expediente: document.getElementById("admExpediente").value.trim() || "Consultar expediente en estudio",
        totalArea: parseFloat(document.getElementById("admArea").value) || 0,
        coveredArea: 0,
        rooms: document.getElementById("admRooms").value.trim() || "Lote Judicial",
        auctionDate: dateDisplayText,
        auctionDateISO: dateISO ? new Date(dateISO).toISOString() : null,
        image: mainImg,
        images: allImages,
        description: document.getElementById("admDescription").value.trim(),
        edicto: document.getElementById("admEdicto").value.trim()
      };

      if (editId) {
        const idx = LISTINGS_DATA.findIndex((x) => x.id === editId);
        if (idx > -1) LISTINGS_DATA[idx] = newObj;
        showToast(`Publicación ${newObj.slug} modificada con éxito.`);
      } else {
        LISTINGS_DATA.unshift(newObj);
        showToast(`Nueva publicación ${newObj.slug} agregada al catálogo.`);
      }

      saveListingsToStorage();
      renderListings(LISTINGS_DATA);
      renderUpcomingSchedule();
      renderAdminTable();
      updateAdminKPIs();
      cancelAdminEdit();
    });
  }

  // 3. Manejo de Datos del Martillero (Pestaña 2)
  if (profileForm) {
    profileForm.addEventListener("submit", (e) => {
      e.preventDefault();
      MARTILLERO_INFO.name = document.getElementById("profName").value.trim();
      MARTILLERO_INFO.title = document.getElementById("profTitle").value.trim();
      MARTILLERO_INFO.matriculaSTJ = document.getElementById("profMatricula").value.trim();
      MARTILLERO_INFO.colegio = document.getElementById("profColegio").value.trim();
      MARTILLERO_INFO.address = document.getElementById("profAddress").value.trim();
      MARTILLERO_INFO.city = document.getElementById("profCity").value.trim();
      MARTILLERO_INFO.phoneDisplay = document.getElementById("profPhoneDisplay").value.trim();
      MARTILLERO_INFO.phoneRaw = document.getElementById("profPhoneRaw").value.trim().replace(/\D/g, "");
      MARTILLERO_INFO.phoneAlt = document.getElementById("profPhoneAlt").value.trim();
      MARTILLERO_INFO.email = document.getElementById("profEmail").value.trim();
      MARTILLERO_INFO.schedule = document.getElementById("profSchedule").value.trim();

      const lat = parseFloat(document.getElementById("profLat").value);
      const lng = parseFloat(document.getElementById("profLng").value);
      if (!isNaN(lat) && !isNaN(lng)) {
        MARTILLERO_INFO.coords = [lat, lng];
      }

      localStorage.setItem("arce_martillero_info", JSON.stringify(MARTILLERO_INFO));
      applyMartilleroInfoToDOM();
      showToast("¡Datos profesionales actualizados en toda la página web!");
    });

    // Escuchar cambios en vivo para sincronizar la tarjeta preview del panel
    [
      "profName",
      "profTitle",
      "profMatricula",
      "profAddress",
      "profPhoneDisplay",
      "profEmail",
      "profSchedule"
    ].forEach((id) => {
      document.getElementById(id)?.addEventListener("input", syncProfileLivePreview);
    });
  }

  // 4. Manejo de Textos y Banners (Pestaña 4)
  if (textsForm) {
    textsForm.addEventListener("submit", (e) => {
      e.preventDefault();
      WEB_TEXTS.announcementActive = document.getElementById("textAnnouncementActive").checked;
      WEB_TEXTS.announcementText = document.getElementById("textAnnouncementText").value.trim();
      WEB_TEXTS.announcementLink = document.getElementById("textAnnouncementLink").value.trim();
      WEB_TEXTS.heroTitle1 = document.getElementById("textHeroTitle1").value.trim();
      WEB_TEXTS.heroSubtitle1 = document.getElementById("textHeroSubtitle1").value.trim();
      WEB_TEXTS.heroTitle2 = document.getElementById("textHeroTitle2").value.trim();
      WEB_TEXTS.heroSubtitle2 = document.getElementById("textHeroSubtitle2").value.trim();
      WEB_TEXTS.quoteText = document.getElementById("textQuote").value.trim();
      WEB_TEXTS.quoteAuthor = document.getElementById("textQuoteAuthor").value.trim();

      localStorage.setItem("arce_web_texts", JSON.stringify(WEB_TEXTS));
      applyWebTextsToDOM();
      showToast("¡Textos institucionales y banners actualizados correctamente!");
    });
  }

  // 5. Manejo de Cambio de Clave PIN (Pestaña 5)
  setupPinChangeForm();
}

function adminLogout() {
  isAdminAuthenticated = false;
  document.getElementById("adminDashboardView")?.classList.add("d-none");
  document.getElementById("adminLoginView")?.classList.remove("d-none");
  document.getElementById("adminLogoutBtn")?.classList.add("d-none");
  document.getElementById("adminLoginForm")?.reset();
  showToast("Sesión del panel cerrada.");
}

function togglePinVisibility() {
  const pinInput = document.getElementById("adminPinInput");
  const icon = document.getElementById("pinToggleIcon");
  if (!pinInput || !icon) return;

  if (pinInput.type === "password") {
    pinInput.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    pinInput.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

function updateAdminKPIs() {
  const total = LISTINGS_DATA.length;
  const judicial = LISTINGS_DATA.filter((x) => x.operationId === "subasta" || x.operationId === "quiebra").length;
  const inbox = INBOX_MESSAGES.length;

  const kpiListings = document.getElementById("kpiListingsCount");
  if (kpiListings) kpiListings.textContent = total;

  const kpiAuctions = document.getElementById("kpiAuctionsCount");
  if (kpiAuctions) kpiAuctions.textContent = judicial;

  const kpiInbox = document.getElementById("kpiInboxCount");
  if (kpiInbox) kpiInbox.textContent = inbox;

  const textCount = document.getElementById("adminListingsCountText");
  if (textCount) textCount.textContent = total;
}

// ==========================================================
// PESTAÑA 1: GESTIÓN DE CATÁLOGO (CRUD Y BÚSQUEDA)
// ==========================================================
function renderAdminTable() {
  filterAdminCatalog();
}

function filterAdminCatalog() {
  const search = document.getElementById("adminCatalogSearch")?.value.toLowerCase().trim() || "";
  const op = document.getElementById("adminCatalogFilterOp")?.value || "all";

  const filtered = LISTINGS_DATA.filter((item) => {
    const matchOp = op === "all" || item.operationId === op;
    const matchSearch =
      !search ||
      item.title.toLowerCase().includes(search) ||
      item.slug.toLowerCase().includes(search) ||
      (item.juzgado && item.juzgado.toLowerCase().includes(search)) ||
      (item.expediente && item.expediente.toLowerCase().includes(search));
    return matchOp && matchSearch;
  });

  renderAdminTableRows(filtered);
}

function renderAdminTableRows(items) {
  const tbody = document.getElementById("adminItemsTbody");
  if (!tbody) return;

  if (items.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="text-center py-4 text-muted">No se encontraron publicaciones con esos criterios.</td></tr>`;
    return;
  }

  tbody.innerHTML = items
    .map(
      (item) => `
    <tr>
      <td>
        <img src="${item.image}" class="admin-table-thumb" alt="${item.slug}" onerror="this.src='https://placehold.co/100x70?text=Foto'" />
      </td>
      <td class="fw-bold text-primary">${item.slug}</td>
      <td>
        <strong>${item.title}</strong><br>
        <small class="text-muted">${item.juzgado || item.address}</small>
      </td>
      <td><span class="badge ${item.operationId === "subasta" ? "bg-primary" : item.operationId === "quiebra" ? "bg-warning text-dark" : "bg-secondary"}">${item.operationLabel}</span></td>
      <td class="fw-bold">${item.priceFormatted}</td>
      <td><small class="text-secondary">${item.auctionDate || "A convenir"}</small></td>
      <td class="text-end">
        <button class="btn btn-sm btn-outline-info me-1 py-0 px-2" onclick="openDetailModal(${item.id})" title="Ver ficha oficial">
          <i class="fa-solid fa-eye"></i>
        </button>
        <button class="btn btn-sm btn-outline-primary me-1 py-0 px-2" onclick="editAdminItem(${item.id})" title="Editar aviso">
          <i class="fa-solid fa-pen"></i>
        </button>
        <button class="btn btn-sm btn-outline-secondary me-1 py-0 px-2" onclick="duplicateAdminItem(${item.id})" title="Duplicar publicación">
          <i class="fa-solid fa-copy"></i>
        </button>
        <button class="btn btn-sm btn-outline-danger py-0 px-2" onclick="deleteAdminItem(${item.id})" title="Eliminar del catálogo">
          <i class="fa-solid fa-trash"></i>
        </button>
      </td>
    </tr>
  `
    )
    .join("");
}

function startNewAdminItem() {
  cancelAdminEdit();
  document.getElementById("adminFormCard")?.scrollIntoView({ behavior: "smooth" });
  document.getElementById("admTitle")?.focus();
}

function editAdminItem(id) {
  const item = LISTINGS_DATA.find((x) => x.id === id);
  if (!item) return;

  document.getElementById("adminEditId").value = item.id;
  document.getElementById("adminFormTitle").innerHTML = `<i class="fa-solid fa-pen me-1"></i> Editando Publicación <span class="badge bg-primary">${item.slug}</span>`;
  document.getElementById("admTitle").value = item.title;
  document.getElementById("admCode").value = item.code;
  document.getElementById("admAddress").value = item.address;
  document.getElementById("admOperation").value = item.operationId;
  document.getElementById("admType").value = item.typeId;
  document.getElementById("admLocation").value = item.locationId;
  document.getElementById("admCurrency").value = item.currency;
  document.getElementById("admPrice").value = item.price;
  document.getElementById("admSenaPercent").value = item.senaPercent || 10;
  document.getElementById("admComisionPercent").value = item.comisionPercent || 3;
  document.getElementById("admSelladoPercent").value = item.selladoPercent || 1.2;
  document.getElementById("admConditions").value = item.conditionsSummary;
  document.getElementById("admJuzgado").value = item.juzgado || "";
  document.getElementById("admExpediente").value = item.expediente || "";
  document.getElementById("admArea").value = item.totalArea || "";
  document.getElementById("admRooms").value = item.rooms || "";
  document.getElementById("admAuctionDateText").value = item.auctionDate || "";

  if (item.auctionDateISO) {
    try {
      const d = new Date(item.auctionDateISO);
      const isoLocal = new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
      document.getElementById("admAuctionDateISO").value = isoLocal;
    } catch (e) {
      document.getElementById("admAuctionDateISO").value = "";
    }
  } else {
    document.getElementById("admAuctionDateISO").value = "";
  }

  document.getElementById("admImage").value = item.image || "";
  const extraImages = (item.images || []).filter((u) => u !== item.image);
  document.getElementById("admExtraImages").value = extraImages.join("\n");

  document.getElementById("admDescription").value = item.description || "";
  document.getElementById("admEdicto").value = item.edicto || "";

  updateAdminImagePreviews();
  document.getElementById("adminFormCard")?.scrollIntoView({ behavior: "smooth" });
}

function cancelAdminEdit() {
  document.getElementById("adminEditId").value = "";
  document.getElementById("adminFormTitle").innerHTML = `<i class="fa-solid fa-pen-to-square me-1"></i> Cargar Nueva Subasta o Propiedad`;
  document.getElementById("adminItemForm")?.reset();
  document.getElementById("admCode").value = "";
  document.getElementById("admExtraImages").value = "";
  updateAdminImagePreviews();
}

function duplicateAdminItem(id) {
  const item = LISTINGS_DATA.find((x) => x.id === id);
  if (!item) return;

  const nextCodeNum = LISTINGS_DATA.length ? Math.max(...LISTINGS_DATA.map((x) => parseInt(x.code, 10) || 100)) + 1 : 101;
  const clone = JSON.parse(JSON.stringify(item));
  clone.id = Date.now();
  clone.code = String(nextCodeNum);
  clone.slug = `ARCE-${nextCodeNum}`;
  clone.title = `[COPIA] ${clone.title}`;

  LISTINGS_DATA.unshift(clone);
  saveListingsToStorage();
  renderListings(LISTINGS_DATA);
  renderUpcomingSchedule();
  renderAdminTable();
  updateAdminKPIs();
  showToast(`Publicación duplicada como ${clone.slug}.`);
}

function deleteAdminItem(id) {
  const item = LISTINGS_DATA.find((x) => x.id === id);
  const slug = item ? item.slug : "";
  if (!confirm(`¿Está seguro de eliminar la publicación ${slug} del portal?`)) return;

  LISTINGS_DATA = LISTINGS_DATA.filter((x) => x.id !== id);
  saveListingsToStorage();
  renderListings(LISTINGS_DATA);
  renderUpcomingSchedule();
  renderAdminTable();
  updateAdminKPIs();
  showToast(`Publicación ${slug} eliminada del portal.`);
}

function resetDefaultCatalog() {
  if (!confirm("¿Restaurar las 6 publicaciones originales de demostración en Catamarca Nº 1057?")) return;
  localStorage.removeItem(STORAGE_KEY);
  LISTINGS_DATA = JSON.parse(JSON.stringify(DEFAULT_LISTINGS_DATA));
  renderListings(LISTINGS_DATA);
  renderUpcomingSchedule();
  renderAdminTable();
  updateAdminKPIs();
  showToast("Catálogo original de demostración restaurado.");
}

function updateAdminImagePreviews() {
  const previewBox = document.getElementById("adminGalleryPreview");
  if (!previewBox) return;

  const mainUrl = document.getElementById("admImage")?.value.trim();
  const extraUrlsRaw = document.getElementById("admExtraImages")?.value || "";
  const extraUrls = extraUrlsRaw
    .split(/[\n,]/)
    .map((u) => u.trim())
    .filter((u) => u.length > 5);

  const allUrls = [];
  if (mainUrl) allUrls.push(mainUrl);
  extraUrls.forEach((u) => {
    if (!allUrls.includes(u)) allUrls.push(u);
  });

  if (allUrls.length === 0) {
    previewBox.innerHTML = `<small class="text-muted">Ingrese una URL de foto para ver la miniatura aquí.</small>`;
    return;
  }

  previewBox.innerHTML = allUrls
    .map(
      (u, i) => `
    <div class="position-relative d-inline-block">
      <img src="${u}" class="admin-img-preview-thumb" alt="Preview ${i + 1}" onerror="this.src='https://placehold.co/100x70?text=Error'" />
      ${i === 0 ? `<span class="badge bg-primary position-absolute bottom-0 start-0 m-1" style="font-size: 8px;">Principal</span>` : ""}
    </div>
  `
    )
    .join("");
}

// ==========================================================
// PESTAÑA 2: GESTIÓN DE PERFIL DEL MARTILLERO
// ==========================================================
function populateProfileInputs() {
  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val || "";
  };

  setVal("profName", MARTILLERO_INFO.name);
  setVal("profTitle", MARTILLERO_INFO.title);
  setVal("profMatricula", MARTILLERO_INFO.matriculaSTJ);
  setVal("profColegio", MARTILLERO_INFO.colegio);
  setVal("profAddress", MARTILLERO_INFO.address);
  setVal("profCity", MARTILLERO_INFO.city);
  setVal("profPhoneDisplay", MARTILLERO_INFO.phoneDisplay);
  setVal("profPhoneRaw", MARTILLERO_INFO.phoneRaw);
  setVal("profPhoneAlt", MARTILLERO_INFO.phoneAlt);
  setVal("profEmail", MARTILLERO_INFO.email);
  setVal("profSchedule", MARTILLERO_INFO.schedule);

  if (Array.isArray(MARTILLERO_INFO.coords)) {
    setVal("profLat", MARTILLERO_INFO.coords[0]);
    setVal("profLng", MARTILLERO_INFO.coords[1]);
  }

  syncProfileLivePreview();
}

function syncProfileLivePreview() {
  const getVal = (id, fallback) => document.getElementById(id)?.value.trim() || fallback;
  const setTxt = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  setTxt("prevCardName", getVal("profName", MARTILLERO_INFO.name));
  setTxt("prevCardTitle", getVal("profTitle", MARTILLERO_INFO.title));
  setTxt("prevCardMatricula", getVal("profMatricula", MARTILLERO_INFO.matriculaSTJ));
  setTxt("prevCardAddress", getVal("profAddress", MARTILLERO_INFO.address));
  setTxt("prevCardPhone", getVal("profPhoneDisplay", MARTILLERO_INFO.phoneDisplay));
  setTxt("prevCardEmail", getVal("profEmail", MARTILLERO_INFO.email));
  setTxt("prevCardSchedule", getVal("profSchedule", MARTILLERO_INFO.schedule));
}

// ==========================================================
// PESTAÑA 3: BANDEJA DE ENTRADA (MINI-CRM)
// ==========================================================
let activeInboxFilter = "all";

function setInboxFilter(filter) {
  activeInboxFilter = filter;
  ["btnFilterAllInbox", "btnFilterNewInbox", "btnFilterAnsweredInbox"].forEach((id) => {
    document.getElementById(id)?.classList.remove("active");
  });
  if (filter === "all") document.getElementById("btnFilterAllInbox")?.classList.add("active");
  if (filter === "nueva") document.getElementById("btnFilterNewInbox")?.classList.add("active");
  if (filter === "respondida") document.getElementById("btnFilterAnsweredInbox")?.classList.add("active");
  renderInboxMessages();
}

function renderInboxMessages() {
  const container = document.getElementById("adminInboxContainer");
  if (!container) return;

  const searchVal = document.getElementById("searchInboxInput")?.value.toLowerCase().trim() || "";

  const filtered = INBOX_MESSAGES.filter((m) => {
    const matchFilter =
      activeInboxFilter === "all" ||
      (activeInboxFilter === "nueva" && m.status === "nueva") ||
      (activeInboxFilter === "respondida" && m.status === "respondida");

    const matchSearch =
      !searchVal ||
      (m.name && m.name.toLowerCase().includes(searchVal)) ||
      (m.phone && m.phone.toLowerCase().includes(searchVal)) ||
      (m.email && m.email.toLowerCase().includes(searchVal)) ||
      (m.message && m.message.toLowerCase().includes(searchVal)) ||
      (m.type && m.type.toLowerCase().includes(searchVal));

    return matchFilter && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="text-center py-5 bg-white rounded-3 border">
        <i class="fa-regular fa-folder-open fa-2x text-muted mb-2"></i>
        <p class="text-muted small mb-0">No se encontraron consultas para este criterio de búsqueda.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered
    .map((m) => {
      const isNew = m.status === "nueva";
      const statusBadge = isNew
        ? `<span class="badge bg-success-subtle text-success border border-success-subtle"><i class="fa-solid fa-bell me-1"></i>Nueva Consulta</span>`
        : `<span class="badge bg-info-subtle text-primary border border-info-subtle"><i class="fa-solid fa-check-double me-1"></i>Respondida</span>`;

      const cleanPhone = (m.phone || "").replace(/\D/g, "");
      const waPhone = cleanPhone.startsWith("54")
        ? cleanPhone
        : cleanPhone.startsWith("9")
        ? `54${cleanPhone}`
        : `549${cleanPhone}`;

      const waReplyText = encodeURIComponent(
        `Hola ${m.name}, soy el Martillero Judicial Ángel Alejandro Arce. Me pongo en contacto respecto a su consulta sobre "${m.type}". ¿En qué puedo asesorarle?`
      );

      return `
      <div class="inbox-item-card ${isNew ? "is-new" : "is-answered"}">
        <div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-2">
          <div class="d-flex align-items-center gap-2">
            ${statusBadge}
            <span class="badge bg-secondary-subtle text-dark border">${m.type}</span>
            <small class="text-muted"><i class="fa-regular fa-clock me-1"></i>${m.date}</small>
          </div>
          <div class="btn-group btn-group-sm">
            <button class="btn btn-outline-secondary py-0 px-2" style="font-size: 11px;" onclick="toggleInboxStatus(${m.id})" title="${isNew ? "Marcar Respondida" : "Marcar Nueva"}">
              <i class="fa-solid fa-arrow-rotate-right me-1"></i>${isNew ? "Marcar Respondida" : "Marcar Nueva"}
            </button>
            <button class="btn btn-outline-danger py-0 px-2" style="font-size: 11px;" onclick="deleteInboxMessage(${m.id})" title="Eliminar mensaje">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>

        <div class="row g-2 mb-2">
          <div class="col-md-4">
            <div class="small fw-bold text-dark"><i class="fa-solid fa-user me-1 text-primary"></i>${m.name}</div>
          </div>
          <div class="col-md-4">
            <div class="small text-muted"><i class="fa-solid fa-phone me-1 text-success"></i>${m.phone}</div>
          </div>
          <div class="col-md-4">
            <div class="small text-muted"><i class="fa-regular fa-envelope me-1 text-info"></i>${m.email || "No informado"}</div>
          </div>
        </div>

        <div class="p-2 rounded bg-white border small text-dark mb-3">
          ${m.message.replace(/\n/g, "<br>")}
        </div>

        <div class="d-flex flex-wrap gap-2">
          <a href="https://wa.me/${waPhone}?text=${waReplyText}" target="_blank" class="btn btn-sm btn-success fw-semibold" onclick="markAnswered(${m.id})">
            <i class="fa-brands fa-whatsapp me-1"></i> Responder por WhatsApp
          </a>
          ${m.phone ? `<a href="tel:${cleanPhone}" class="btn btn-sm btn-outline-primary fw-semibold"><i class="fa-solid fa-phone me-1"></i> Llamar</a>` : ""}
          ${m.email ? `<a href="mailto:${m.email}?subject=Respuesta%20Martillero%20Alejandro%20Arce" class="btn btn-sm btn-outline-secondary fw-semibold"><i class="fa-regular fa-envelope me-1"></i> Enviar Email</a>` : ""}
        </div>
      </div>
    `;
    })
    .join("");
}

function markAnswered(id) {
  const item = INBOX_MESSAGES.find((x) => x.id === id);
  if (item) {
    item.status = "respondida";
    saveInboxToStorage();
    updateInboxBadges();
    renderInboxMessages();
  }
}

function toggleInboxStatus(id) {
  const item = INBOX_MESSAGES.find((x) => x.id === id);
  if (item) {
    item.status = item.status === "nueva" ? "respondida" : "nueva";
    saveInboxToStorage();
    updateInboxBadges();
    renderInboxMessages();
    showToast(`Estado de la consulta actualizado a: ${item.status}.`);
  }
}

function deleteInboxMessage(id) {
  if (!confirm("¿Eliminar este mensaje de la bandeja de entrada?")) return;
  INBOX_MESSAGES = INBOX_MESSAGES.filter((x) => x.id !== id);
  saveInboxToStorage();
  updateInboxBadges();
  renderInboxMessages();
  showToast("Consulta eliminada.");
}

function clearAllInbox() {
  if (!confirm("¿Está seguro de vaciar todos los mensajes de la bandeja de entrada?")) return;
  INBOX_MESSAGES = [];
  saveInboxToStorage();
  updateInboxBadges();
  renderInboxMessages();
  showToast("Bandeja de entrada vaciada.");
}

function exportInboxCSV() {
  if (!INBOX_MESSAGES.length) {
    showToast("No hay consultas registradas para exportar.");
    return;
  }
  let csv = "\uFEFFFecha,Tipo,Nombre,Telefono,Email,Estado,Mensaje\n";
  INBOX_MESSAGES.forEach((m) => {
    const cleanMsg = `"${(m.message || "").replace(/"/g, '""')}"`;
    csv += `"${m.date}","${m.type}","${m.name}","${m.phone}","${m.email}","${m.status}",${cleanMsg}\n`;
  });

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `consultas_martillero_arce_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("Archivo Excel/CSV descargado correctamente.");
}

// ==========================================================
// PESTAÑA 4: GESTIÓN DE TEXTOS Y BANNERS
// ==========================================================
function populateTextsInputs() {
  const chk = document.getElementById("textAnnouncementActive");
  if (chk) chk.checked = !!WEB_TEXTS.announcementActive;

  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val || "";
  };

  setVal("textAnnouncementText", WEB_TEXTS.announcementText);
  setVal("textAnnouncementLink", WEB_TEXTS.announcementLink);
  setVal("textHeroTitle1", WEB_TEXTS.heroTitle1);
  setVal("textHeroSubtitle1", WEB_TEXTS.heroSubtitle1);
  setVal("textHeroTitle2", WEB_TEXTS.heroTitle2);
  setVal("textHeroSubtitle2", WEB_TEXTS.heroSubtitle2);
  setVal("textQuote", WEB_TEXTS.quoteText);
  setVal("textQuoteAuthor", WEB_TEXTS.quoteAuthor);
}

// ==========================================================
// PESTAÑA 5: SEGURIDAD, BACKUP Y RESTABLECIMIENTO
// ==========================================================
function setupPinChangeForm() {
  const form = document.getElementById("adminPinChangeForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const cur = document.getElementById("secCurrentPin").value.trim();
    const newP = document.getElementById("secNewPin").value.trim();
    const conf = document.getElementById("secConfirmPin").value.trim();
    const err = document.getElementById("secPinError");

    if (cur !== ADMIN_PIN) {
      err.textContent = "La clave actual no es correcta.";
      err.classList.remove("d-none");
      return;
    }
    if (newP.length < 4) {
      err.textContent = "La nueva clave debe tener al menos 4 caracteres.";
      err.classList.remove("d-none");
      return;
    }
    if (newP !== conf) {
      err.textContent = "Las contraseñas no coinciden.";
      err.classList.remove("d-none");
      return;
    }

    ADMIN_PIN = newP;
    localStorage.setItem("arce_admin_pin", newP);
    err.classList.add("d-none");
    form.reset();
    showToast(`Clave de acceso actualizada exitosamente a: "${newP}"`);
  });
}

function exportBackupJSON() {
  const fullBackup = {
    exportedAt: new Date().toISOString(),
    system: "Portal Martillero Judicial Ángel Alejandro Arce",
    version: "3.5",
    martillero: MARTILLERO_INFO,
    listings: LISTINGS_DATA,
    inbox: INBOX_MESSAGES,
    webTexts: WEB_TEXTS,
    adminPin: ADMIN_PIN
  };

  const jsonStr = JSON.stringify(fullBackup, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `copia_seguridad_martillero_arce_${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("Copia de seguridad completa (JSON) descargada con éxito.");
}

function importBackupJSON() {
  const fileInput = document.getElementById("secImportFile");
  if (!fileInput || !fileInput.files.length) {
    alert("Por favor seleccione un archivo .json de copia de seguridad primero.");
    return;
  }

  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    try {
      const data = JSON.parse(e.target.result);
      if (!data || (!data.listings && !data.martillero)) {
        throw new Error("El archivo no tiene el formato de copia de seguridad válido.");
      }

      if (data.martillero) {
        MARTILLERO_INFO = { ...DEFAULT_MARTILLERO_INFO, ...data.martillero };
        localStorage.setItem("arce_martillero_info", JSON.stringify(MARTILLERO_INFO));
      }

      if (Array.isArray(data.listings)) {
        LISTINGS_DATA = data.listings;
        saveListingsToStorage();
      }

      if (Array.isArray(data.inbox)) {
        INBOX_MESSAGES = data.inbox;
        saveInboxToStorage();
      }

      if (data.webTexts) {
        WEB_TEXTS = { ...DEFAULT_WEB_TEXTS, ...data.webTexts };
        localStorage.setItem("arce_web_texts", JSON.stringify(WEB_TEXTS));
      }

      if (data.adminPin) {
        ADMIN_PIN = data.adminPin;
        localStorage.setItem("arce_admin_pin", ADMIN_PIN);
      }

      applyMartilleroInfoToDOM();
      applyWebTextsToDOM();
      updateInboxBadges();
      renderListings(LISTINGS_DATA);
      renderUpcomingSchedule();
      renderAdminTable();
      renderInboxMessages();
      populateProfileInputs();
      populateTextsInputs();
      updateAdminKPIs();

      fileInput.value = "";
      showToast("¡Copia de seguridad restaurada exitosamente!");
    } catch (err) {
      alert("Error al restaurar: " + err.message);
    }
  };

  reader.readAsText(file);
}

function factoryResetAll() {
  if (
    !confirm(
      "¿Está seguro de restablecer TODO a los valores de fábrica?\n\nSe restablecerán las 6 propiedades originales, los datos oficiales del Martillero Arce (Catamarca Nº 1057), la clave arce383 y los textos institucionales."
    )
  )
    return;

  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem("arce_martillero_info");
  localStorage.removeItem("arce_inbox_messages");
  localStorage.removeItem("arce_web_texts");
  localStorage.removeItem("arce_admin_pin");

  MARTILLERO_INFO = { ...DEFAULT_MARTILLERO_INFO };
  LISTINGS_DATA = JSON.parse(JSON.stringify(DEFAULT_LISTINGS_DATA));
  INBOX_MESSAGES = JSON.parse(JSON.stringify(DEFAULT_INBOX_MESSAGES));
  WEB_TEXTS = { ...DEFAULT_WEB_TEXTS };
  ADMIN_PIN = "arce383";

  applyMartilleroInfoToDOM();
  applyWebTextsToDOM();
  updateInboxBadges();
  renderListings(LISTINGS_DATA);
  renderUpcomingSchedule();
  renderAdminTable();
  renderInboxMessages();
  populateProfileInputs();
  populateTextsInputs();
  updateAdminKPIs();

  showToast("Valores de fábrica restablecidos correctamente.");
}

// ==========================================================
// NOTIFICACIONES TOAST Y MAPA INTERACTIVO LEAFLET
// ==========================================================
function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toastEl = document.createElement("div");
  toastEl.className = "alert alert-dark shadow-lg border-warning d-flex align-items-center gap-2 py-2 px-3 mb-2";
  toastEl.innerHTML = `<i class="fa-solid fa-circle-check text-warning"></i><span>${message}</span>`;
  container.appendChild(toastEl);

  setTimeout(() => {
    toastEl.remove();
  }, 3400);
}

function initOfficeMap() {
  const mapEl = document.getElementById("officeMap");
  if (!mapEl || typeof L === "undefined") return;

  window.officeLeafletMap = L.map("officeMap").setView(MARTILLERO_INFO.coords, 16);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(window.officeLeafletMap);

  window.officeLeafletMarker = L.marker(MARTILLERO_INFO.coords).addTo(window.officeLeafletMap);
  window.officeLeafletMarker
    .bindPopup(
      `<strong>${MARTILLERO_INFO.name}</strong><br>${MARTILLERO_INFO.title} (${MARTILLERO_INFO.matriculaSTJ})<br>📍 ${MARTILLERO_INFO.address}, ${MARTILLERO_INFO.city}<br><small>${MARTILLERO_INFO.colegio}</small>`
    )
    .openPopup();
}

