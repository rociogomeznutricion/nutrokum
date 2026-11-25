/* Web de YKY: sin dependencias, sin cookies, sin analítica y sin peticiones de red. */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const el = (tag, attrs = {}, ...kids) => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) { if (k === 'class') n.className = v; else if (k.startsWith('on')) n.addEventListener(k.slice(2), v); else if (v !== false && v != null) n.setAttribute(k, v); }
    n.append(...kids.filter((k) => k != null)); return n;
  };
  const WHATSAPP = '34633892567'; // WhatsApp de empresa publicado en nutriku.com

  /* ---------- Especialidad ---------- */
  const HILO = {
    nutricion: [
      ['22:47', 'Otro menú desde cero. Vegetariano, sin frutos secos y para cuatro.', 'YKY monta la semana', ' con su objetivo, sus alergias y quien se sienta a su mesa. Tú decides qué se queda.'],
      ['Domingo', 'Tu familia en el sofá. Tú, copiando datos de una hoja a un informe.', 'Monta tu informe una vez.', ' Después se rellena con los datos de cada paciente y sale en PDF con un clic.'],
      ['Martes', '«Eso ya te lo conté en la primera consulta.»', 'Antes de cada cita ves', ' lo último que te dijo y en qué quedasteis.'],
      ['Día 31', 'No sabes si cobraste esa sesión. Y te da apuro preguntar.', 'Cada cita dice', ' si está cobrada. Y al lado, quién falta.'],
      ['3:12', '¿Y si mañana no arranca el portátil?', 'Copia cifrada', ' cada vez que cierras. Vuelve a dormirte.'],
    ],
    psicologia: [
      ['21:30', 'Seis sesiones hoy. Las notas de las tres últimas, todavía en tu cabeza.', 'Nota estructurada', ' (SOAP, DAP o libre) desde la propia cita. Se guarda sola mientras escribes.'],
      ['23:05', 'Te contó algo que no sabe ni su pareja. ¿En qué servidor lo acabas de escribir?', 'En ninguno.', ' Se queda en tu ordenador, cifrado con tu contraseña.'],
      ['Lunes', 'El cuestionario te llega en una foto torcida por WhatsApp.', 'Lo responde en su móvil', ' y te llega cifrado. Se puntúa solo y va a su ficha.'],
      ['Sesión 9', '«¿Estoy mejor?» Y tú lo intuyes, pero no puedes enseñárselo.', 'Enséñaselo:', ' su gráfica, desde el primer día hasta hoy.'],
      ['Viernes', 'Llaman del colegio: necesitan un informe. Para ayer.', 'Plantillas tuyas', ' que se rellenan con su historia y se firman en pantalla.'],
    ],
  };
  const TABS = {
    nutri: [
      ['Menú de la semana', 'menu', 'Una propuesta en segundos. La última palabra, tuya.', 'Kcal y macros según el objetivo, frecuencias de alimentos, temporada y tiempo de cocina. Si algo no te convence, lo cambias, y ves al momento cómo queda el día.', 'Menú semanal de YKY con las kcal de cada comida y el total del día'],
      ['Plato a plato', 'menu-panel', 'Cambia un plato sin descuadrar la semana.', 'Ración, complementos, favoritas y la cantidad de cada persona de la casa. Con alternativas equivalentes ya calculadas.', 'Panel de un plato con las raciones de cada miembro de la familia'],
      ['Tuppers', 'tuppers', 'Domingo de cocina, semana resuelta.', 'Qué cocinar, cuánto pesa cada pieza ya cocinada, qué va a la nevera y qué al congelador.', 'Tablero semanal de tuppers con los gramos de cada bloque'],
      ['Evolución', 'evolucion-nutricion', 'Más allá del peso.', 'Cualquier pregunta numérica tuya se convierte en una gráfica con su objetivo. Perfecta para los días en que cree que no avanza.', 'Gráficas de evolución de un paciente'],
    ],
    psico: [
      ['Historia', 'historia', 'Se cierra. Y cerrada se queda.', 'Al cerrar una nota ya no se puede modificar: solo añadir aclaraciones con fecha. Riesgo, objetivos, tutores y archivos, en el mismo sitio.', 'Historia clínica en YKY con notas SOAP cerradas en una línea de tiempo'],
      ['Evolución', 'evolucion', 'Lo que intuyes, a la vista.', 'Malestar, ansiedad, sueño o lo que tú midas. Una gráfica por cada cosa, con su objetivo, lista para enseñarla en sesión.', 'Gráficas de malestar y ansiedad de un paciente ficticio'],
      ['Tests', 'gad7', 'Responden. Se puntúa. Lo interpretas tú.', 'Tests de uso permitido con su resultado y sus niveles. Y los tuyos: define preguntas, subescalas y avisos.', 'Test GAD-7 en YKY'],
      ['Tu formulario', 'plantilla', 'Como tú entrevistas.', 'Lo escribes a la izquierda y lo ves a la derecha, tal como lo verá quien lo responda.', 'Editor de formularios de YKY con vista previa'],
      ['Cuaderno', 'cuaderno', 'Lo que te funciona, a mano.', 'Estrategias y casos sin datos de nadie, con notas de voz, cifrados aparte y con buscador instantáneo.', 'Cuaderno clínico de YKY'],
    ],
  };
  function pintaHilo(esp) {
    $('#hilo').replaceChildren(...HILO[esp].map(([h, d, fuerte, resto]) => el('li', {}, el('time', {}, h), el('p', { class: 'dolor' }, d), el('p', { class: 'alivio' }, el('b', {}, fuerte), resto))));
  }
  document.querySelectorAll('.pestanas').forEach((caja) => {
    const datos = TABS[caja.dataset.grupo];
    const lista = el('div', { class: 'tabs', role: 'tablist', 'aria-label': 'Pantallas de YKY' });
    const cuerpo = el('div', { class: 'tab-cuerpo', role: 'tabpanel' });
    const ver = (i) => {
      [...lista.children].forEach((b, k) => { b.setAttribute('aria-selected', k === i); b.tabIndex = k === i ? 0 : -1; });
      const [, img, t, p, alt] = datos[i];
      cuerpo.replaceChildren(el('div', {}, el('h3', {}, t), el('p', {}, p)), el('figure', { class: 'marco' }, el('img', { src: `img/${img}.webp`, alt, loading: 'lazy', width: 1920, height: 1080 })));
    };
    datos.forEach(([n], i) => lista.append(el('button', { type: 'button', role: 'tab', onclick: () => ver(i), onkeydown: (e) => { const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (d) { const k = (i + d + datos.length) % datos.length; ver(k); lista.children[k].focus(); } } }, n)));
    caja.append(lista, cuerpo); ver(0);
  });
  function ponEspecialidad(esp) {
    document.documentElement.dataset.esp = esp;
    document.querySelectorAll('.esp button').forEach((b) => b.setAttribute('aria-pressed', b.dataset.esp === esp));
    pintaHilo(esp);
    document.querySelectorAll('.solo').forEach((s) => { s.hidden = s.dataset.para !== esp; });
    const dolor = $('#formDemo select[name=dolor]'); if (dolor) dolor.selectedIndex = esp === 'psicologia' ? 1 : 0;
    const r = $(`#formDemo input[value^="${esp === 'nutricion' ? 'nutrición' : 'psicología'}"]`); if (r) r.checked = true;
    campos = PLANTILLA[esp].map((c) => ({ ...c })); pintaForm();
  }

  /* ---------- Vídeos cortos: no se descarga nada hasta pulsar ---------- */
  const CORTOS = [['datos', '¿Dónde están las historias de tus pacientes?'], ['formularios', 'Tus preguntas, no las de otro'], ['movil', 'Responde en su móvil, solo lo abres tú'], ['nota', 'La nota, cerrada antes de la siguiente sesión'], ['informe', 'El informe que te quita el domingo'], ['huecos', 'Un hueco vacío no se recupera']];
  $('#cortos').append(...CORTOS.map(([f, t]) => {
    const caja = el('span', {}, el('img', { src: `video/${f}.jpg`, alt: '', loading: 'lazy', width: 360, height: 640 }));
    const b = el('button', { class: 'corto', type: 'button', 'aria-label': `Ver el vídeo: ${t}`, onclick: () => {
      if (b.classList.contains('viendo')) return;
      document.querySelectorAll('video').forEach((v) => v.pause());
      b.classList.add('viendo');
      const v = el('video', { src: `video/${f}.mp4`, controls: '', playsinline: '', poster: `video/${f}.jpg` });
      caja.replaceChildren(v); v.play().catch(() => {});
    } }, caja, el('b', {}, t));
    return b;
  }));
  $('#cine').addEventListener('play', () => document.querySelectorAll('.corto video').forEach((v) => v.pause()));

  /* ---------- Recoger la mesa ---------- */
  const mesaNoche = $('#mesaNoche'); const recoger = $('#recoger');
  const ordena = (si) => { mesaNoche.classList.toggle('ordenado', si); recoger.textContent = si ? 'Desordenar otra vez' : 'Recoger todo esto'; };
  let tocado = false;
  recoger.addEventListener('click', () => { tocado = true; ordena(!mesaNoche.classList.contains('ordenado')); });
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) ordena(true);
  else setTimeout(() => { if (!tocado) ordena(true); }, 5200);

  /* ---------- Formulario a medida, cifrado de verdad en el navegador ---------- */
  const NOMBRE = { texto: 'Texto', escala: 'Escala', sino: 'Sí o no', opciones: 'Opciones' };
  const PLANTILLA = {
    nutricion: [{ t: 'escala', q: '¿Con cuánta hambre llegaste a la cena?' }, { t: 'sino', q: '¿Comiste sin pantallas?' }, { t: 'texto', q: '¿Qué te costó más esta semana?' }],
    psicologia: [{ t: 'escala', q: '¿Cuánto te ha pesado la semana?' }, { t: 'sino', q: '¿Pusiste en práctica lo que hablamos?' }, { t: 'texto', q: '¿Qué te gustaría contarme y no te atreves?' }],
  };
  const NUEVA = { texto: 'Escribe tu pregunta', escala: 'Del 1 al 5, ¿cómo…?', sino: '¿Te ha pasado…?', opciones: '¿En qué momento del día?' };
  let campos = []; let llaves = null; let paquete = null;
  const b64 = (buf) => btoa(String.fromCharCode(...new Uint8Array(buf)));
  function pintaEditor() {
    $('#campos').replaceChildren(...campos.map((c, i) => el('div', { class: 'campo' }, el('span', {}, NOMBRE[c.t]),
      el('input', { value: c.q, 'aria-label': `Pregunta ${i + 1}`, maxlength: 90, oninput: (e) => { c.q = e.target.value; const b = document.querySelectorAll('#previa .preg > b')[i]; if (b) b.textContent = c.q || '…'; } }),
      el('button', { type: 'button', 'aria-label': `Quitar la pregunta ${i + 1}`, onclick: () => { campos.splice(i, 1); pintaForm(); } }, '✕'))));
  }
  function pintaPrevia() {
    const botones = (c, ops, clase) => { const g = el('div', { class: `esc ${clase}`, role: 'group', 'aria-label': c.q }); ops.forEach((o) => g.append(el('button', { type: 'button', 'aria-pressed': String(c.r === o), onclick: (e) => { c.r = o; [...g.children].forEach((b) => b.setAttribute('aria-pressed', b === e.currentTarget)); } }, o))); return g; };
    $('#previa').replaceChildren(...campos.map((c) => el('div', { class: 'preg' }, el('b', {}, c.q || '…'),
      c.t === 'escala' ? botones(c, ['1', '2', '3', '4', '5'], '') : c.t === 'sino' ? botones(c, ['Sí', 'No'], 'dosc') : c.t === 'opciones' ? botones(c, ['Por la mañana', 'Por la tarde', 'Por la noche'], 'una')
        : el('input', { type: 'text', value: c.r ?? '', maxlength: 140, 'aria-label': c.q, oninput: (e) => { c.r = e.target.value; } }))),
    el('button', { class: 'boton oscuro', type: 'submit' }, 'Enviar'));
  }
  function limpia(txt) { paquete = null; $('#cifrado').textContent = txt ?? 'Responde en el móvil y pulsa «Enviar».'; $('#abierto').replaceChildren(el('button', { class: 'boton oscuro', type: 'button', disabled: '' }, 'Abrirlo en mi consulta')); }
  function pintaForm() { pintaEditor(); pintaPrevia(); limpia(); }
  document.querySelectorAll('.anadir button').forEach((b) => b.addEventListener('click', () => { if (campos.length >= 7) return; campos.push({ t: b.dataset.tipo, q: NUEVA[b.dataset.tipo] }); pintaForm(); const ins = document.querySelectorAll('#campos input'); const u = ins[ins.length - 1]; u.focus({ preventScroll: true }); u.select(); }));
  $('#previa').addEventListener('submit', async (e) => {
    e.preventDefault();
    const datos = campos.filter((c) => c.r).map((c) => [c.q, c.r]);
    if (!datos.length) { limpia('Responde al menos una pregunta en el móvil.'); return; }
    try {
      llaves = await crypto.subtle.generateKey({ name: 'RSA-OAEP', modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: 'SHA-256' }, false, ['encrypt', 'decrypt']);
      const aes = await crypto.subtle.generateKey({ name: 'AES-GCM', length: 256 }, true, ['encrypt', 'decrypt']);
      const iv = crypto.getRandomValues(new Uint8Array(12));
      const ct = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, aes, new TextEncoder().encode(JSON.stringify(datos)));
      const k = await crypto.subtle.encrypt({ name: 'RSA-OAEP' }, llaves.publicKey, await crypto.subtle.exportKey('raw', aes));
      paquete = { iv, ct, k };
      $('#cifrado').textContent = `${b64(ct)}.${b64(k)}`;
      $('#abierto').replaceChildren(el('button', { class: 'boton oscuro', type: 'button', onclick: abre }, 'Abrirlo en mi consulta'));
    } catch { limpia('Este navegador no permite cifrar aquí. En YKY sí funciona.'); }
  });
  async function abre() {
    if (!paquete) return;
    const raw = await crypto.subtle.decrypt({ name: 'RSA-OAEP' }, llaves.privateKey, paquete.k);
    const aes = await crypto.subtle.importKey('raw', raw, 'AES-GCM', false, ['decrypt']);
    const datos = JSON.parse(new TextDecoder().decode(await crypto.subtle.decrypt({ name: 'AES-GCM', iv: paquete.iv }, aes, paquete.ct)));
    $('#abierto').replaceChildren(el('dl', {}, ...datos.flatMap(([q, r]) => [el('dt', {}, q), el('dd', {}, r)])));
  }

  /* ---------- La mesa: raciones calculadas por el generador de YKY (consulta de demostración) ---------- */
  const GENTE = [['Lucía', '38 años · pérdida de grasa'], ['Dani', '38 años · su pareja'], ['Leo', '5 años · alergia a frutos secos'], ['Nora', '15 años · vegetariana']];
  const CENAS = [
    { dia: 'Martes', n: 'Bonito al horno con patata y calabacín', f: [0.75, 1.25, 0.75, 1], prot: ['Bonito fresco', 150], cambio: ['Tofu firme', 150], resto: [['Patata', 250], ['Calabacín', 150], ['Limón', 20], ['Aceite de oliva', 10]] },
    { dia: 'Jueves', n: 'Pavo a la mostaza y miel con boniato y coliflor', f: [0.75, 1, 0.5, 1], prot: ['Pechuga de pavo', 150], cambio: ['Tofu firme', 150], resto: [['Boniato', 220], ['Coliflor', 150], ['Aceite de oliva', 15], ['Mostaza', 10], ['Miel', 8]] },
    { dia: 'Domingo', n: 'Contramuslos al horno con bulgur y zanahoria', f: [0.75, 1, 0.5, 1], prot: ['Contramuslo de pollo', 160], cambio: ['Tofu firme', 160], resto: [['Zanahoria', 130], ['Bulgur', 70], ['Aceite de oliva', 10]], ojo: { 2: 'Para Leo, la zanahoria cocida o rallada.' } },
  ];
  const r5 = (g) => Math.round(g / 5) * 5; const fmt = (g) => (g >= 1000 ? `${(g / 1000).toLocaleString('es-ES', { maximumFractionDigits: 2 })} kg` : `${g} g`);
  let cena = 1; const en = [true, true, true, true];
  function pintaMesa() {
    const c = CENAS[cena];
    $('#platos').replaceChildren(...CENAS.map((x, i) => el('button', { type: 'button', role: 'tab', 'aria-selected': String(i === cena), onclick: () => { cena = i; pintaMesa(); } }, x.dia)));
    $('#platoNombre').textContent = c.n;
    const unidad = (i) => (i === 3 ? c.cambio[1] : c.prot[1]) + c.resto.reduce((s, x) => s + x[1], 0);
    const gr = c.f.map((f, i) => r5(f * unidad(i))); const max = Math.max(...gr);
    if (!$('#comensales').children.length) $('#comensales').append(...GENTE.map(([n, d], i) => el('label', { class: 'com' }, el('input', { type: 'checkbox', onchange: (e) => { en[i] = e.target.checked; pintaMesa(); } }), el('span', { class: 'q' }, el('b', {}, n), el('span', {}, d)), el('span', { class: 'barr' }, el('i')), el('span', { class: 'g' }), el('span', { class: 'cambio' }))));
    [...$('#comensales').children].forEach((l, i) => { l.classList.toggle('on', en[i]); $('input', l).checked = en[i]; $('.barr i', l).style.width = en[i] ? `${(gr[i] / max) * 100}%` : 0; $('.g', l).textContent = en[i] ? `${gr[i]} g` : '—'; const t = i === 3 ? `${c.cambio[0]} (${c.cambio[1] * c.f[3]} g) en lugar de ${c.prot[0].toLowerCase()}. El resto, igual.` : c.ojo?.[i] ?? ''; $('.cambio', l).textContent = t; $('.cambio', l).hidden = !t; });
    const suma = en.reduce((s, x, i) => s + (x ? c.f[i] : 0), 0); const sinV = en.reduce((s, x, i) => s + (x && i !== 3 ? c.f[i] : 0), 0);
    const lista = [[c.prot[0], r5(sinV * c.prot[1])], ...c.resto.map(([n, g]) => [n, r5(suma * g)]), [c.cambio[0], en[3] ? r5(c.f[3] * c.cambio[1]) : 0]].filter((x) => x[1] > 0);
    const n = en.filter(Boolean).length;
    $('#total').replaceChildren(n ? fmt(lista.reduce((s, x) => s + x[1], 0)) : '0 g', ' ', el('small', {}, n === 0 ? 'no hay nadie a la mesa' : n === 1 ? 'en crudo, para 1' : `en crudo, para ${n}`));
    $('#compra').replaceChildren(...lista.map(([a, g]) => el('li', {}, a, el('b', {}, fmt(g)))));
  }
  pintaMesa();

  /* ---------- Wifi ---------- */
  $('#interruptor').addEventListener('click', (e) => { const w = $('#wifi'); const on = w.dataset.on !== '1'; w.dataset.on = on ? '1' : '0'; e.currentTarget.setAttribute('aria-checked', on); $('em', w).textContent = on ? 'encendido' : 'apagado'; });

  /* ---------- Demo: prepara un mensaje de WhatsApp; no guarda ni envía nada ---------- */
  const fd = $('#formDemo');
  fd.addEventListener('change', () => { $('#avisoMac').hidden = fd.so.value !== 'Mac'; });
  fd.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = fd.nombre.value.trim(); $('#errorDemo').hidden = !!nombre; if (!nombre) { fd.nombre.focus(); return; }
    const txt = `Hola, Rocío. Soy ${nombre} y me gustaría ver una demo de YKY.\nMe dedico a: ${fd.esp.value}\nOrdenador: ${fd.so.value}\nLo que más tiempo me quita: ${fd.dolor.value.toLowerCase()}\nMe viene bien: ${fd.cuando.value.toLowerCase()}`;
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(txt)}`;
    if (!window.open(url, '_blank', 'noopener')) { /* con noopener siempre devuelve null */ }
  });

  document.querySelectorAll('.esp button').forEach((b) => b.addEventListener('click', () => ponEspecialidad(b.dataset.esp)));
  ponEspecialidad(/psico/.test(location.search + location.hash + location.pathname) ? 'psicologia' : 'nutricion');
  const fijo = $('.fijo'); if ('IntersectionObserver' in window) new IntersectionObserver(([x]) => fijo.classList.toggle('fuera', x.isIntersecting)).observe($('#demo'));
})();
