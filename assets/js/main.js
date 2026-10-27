/* =====================================================================
   Jennifer Villegas · Broker de Seguros — JavaScript principal
   (sin dependencias; funciona abriendo el archivo directamente)
   ===================================================================== */
(function () {
  'use strict';
  const S = window.SITE, P = window.PRODUCTS, C = window.CATEGORIES, I = window.ICONS;
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ---------- Utilidades ---------- */
  const waLink = (msg) => `https://wa.me/${S.whatsapp}?text=${encodeURIComponent(msg || S.waMessage)}`;
  const productById = (id) => P.find(p => p.id === id);
  const pageName = () => (location.pathname.split('/').pop() || 'index.html').toLowerCase();

  /* ---------- Enlaces de WhatsApp / correo dinámicos ---------- */
  function hydrateLinks() {
    $$('[data-wa]').forEach(a => {
      const custom = a.getAttribute('data-wa');
      a.href = waLink(custom || S.waMessage);
      a.target = '_blank'; a.rel = 'noopener';
    });
    $$('[data-mail]').forEach(a => { a.href = `mailto:${S.email}`; if (!a.textContent.trim()) a.textContent = S.email; });
    $$('[data-text="email"]').forEach(el => el.textContent = S.email);
    $$('[data-text="phone"]').forEach(el => el.textContent = S.whatsappDisplay);
    $$('[data-text="hours"]').forEach(el => el.textContent = S.hours);
    $$('[data-text="city"]').forEach(el => el.textContent = S.city);
    $$('[data-text="year"]').forEach(el => el.textContent = new Date().getFullYear());
    $$('[data-icon]').forEach(el => { const k = el.getAttribute('data-icon'); if (I[k]) el.innerHTML = I[k]; });
  }

  /* ---------- Header: estado scroll + link activo ---------- */
  function initHeader() {
    const header = $('.header'); if (!header) return;
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

    const current = pageName();
    $$('.nav__link[href], .drawer__nav a[href]').forEach(a => {
      const href = (a.getAttribute('href') || '').split('#')[0].toLowerCase();
      if (href && href === current) a.classList.add('is-active');
    });

    /* Mega menú accesible por teclado/touch */
    $$('.nav__item--mega').forEach(item => {
      const trigger = $('.nav__link', item);
      trigger.addEventListener('click', (e) => {
        if (window.matchMedia('(hover: none)').matches || e.detail === 0) {
          e.preventDefault(); item.classList.toggle('is-open');
        }
      });
      document.addEventListener('click', (e) => { if (!item.contains(e.target)) item.classList.remove('is-open'); });
      item.addEventListener('keydown', (e) => { if (e.key === 'Escape') item.classList.remove('is-open'); });
    });
  }

  /* ---------- Drawer móvil ---------- */
  function initDrawer() {
    const drawer = $('#drawer'); if (!drawer) return;
    const open = () => { drawer.classList.add('is-open'); document.body.style.overflow = 'hidden'; $('.drawer__close', drawer).focus(); };
    const close = () => { drawer.classList.remove('is-open'); document.body.style.overflow = ''; };
    $$('[data-drawer-open]').forEach(b => b.addEventListener('click', open));
    $$('[data-drawer-close]', drawer).forEach(b => b.addEventListener('click', close));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
    $$('.drawer__acc > button', drawer).forEach(btn => {
      btn.addEventListener('click', () => btn.parentElement.classList.toggle('is-open'));
    });
    $$('a', drawer).forEach(a => a.addEventListener('click', close));
  }

  /* ---------- Animación de entrada ---------- */
  function initReveal() {
    const els = $$('.reveal'); if (!els.length) return;
    if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('is-visible')); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); } });
    }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(e => io.observe(e));
  }

  /* ---------- Home: chips que resaltan columna ---------- */
  function initChips() {
    const chips = $$('.chip[data-cat]'); if (!chips.length) return;
    chips.forEach(ch => ch.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('is-active')); ch.classList.add('is-active');
      const cat = ch.getAttribute('data-cat');
      $$('.solcol').forEach(col => col.classList.toggle('is-highlight', cat !== 'all' && col.getAttribute('data-cat') === cat));
      const target = cat === 'all' ? $('#soluciones') : $(`.solcol[data-cat="${cat}"]`);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }));
  }

  /* ---------- Home: cotizador rápido del hero ---------- */
  function initQuick() {
    const quick = $('#quick'); if (!quick) return;
    const opts = $$('.quick__opt', quick); const go = $('#quick-go', quick);
    let selected = '';
    opts.forEach(o => o.addEventListener('click', () => {
      opts.forEach(x => x.classList.remove('is-selected')); o.classList.add('is-selected');
      selected = o.getAttribute('data-value');
      go.href = waLink(`Hola Jennifer, quisiera cotizar un seguro de ${selected}. ¿Me puedes asesorar?`);
    }));
    go.href = waLink();
  }

  /* ---------- Marquee de aseguradoras (duplicar pista) ---------- */
  function initPartners() {
    const track = $('.partners__track'); if (!track) return;
    track.innerHTML += track.innerHTML;
  }

  /* ---------- Catálogo de seguros: render + modal ---------- */
  function renderCatalog() {
    const root = $('#catalogo'); if (!root) return;
    const grids = {};
    Object.keys(C).forEach(cat => {
      const block = document.createElement('section');
      block.className = 'cat-block reveal'; block.id = cat; block.setAttribute('data-cat', cat);
      block.innerHTML = `
        <div class="cat-block__head">
          <span data-icon="${cat === 'empresas' ? 'building' : cat === 'personales' ? 'users' : 'crane'}"></span>
          <div><h2>${C[cat].name}</h2><p>${C[cat].desc}</p></div>
        </div>
        <div class="products"></div>`;
      root.appendChild(block); grids[cat] = $('.products', block);
    });
    P.forEach(p => {
      const card = document.createElement('article'); card.className = 'product';
      card.innerHTML = `
        ${p.tag ? `<span class="product__tag ${p.required ? 'product__tag--req' : ''}">${p.tag}</span>` : ''}
        <div class="product__icon">${I[p.icon] || I.shield}</div>
        <h3>${p.name}</h3>
        <p>${p.summary}</p>
        <div class="product__actions">
          <button class="btn btn--teal btn--sm" data-open-product="${p.id}">Ver ficha ${I.arrow}</button>
          <a class="btn btn--wa btn--sm" data-wa="Hola Jennifer, quisiera cotizar ${p.name}.">${I.whatsapp} Cotizar</a>
        </div>`;
      grids[p.cat].appendChild(card);
    });
    /* Tabs de categoría */
    $$('.tabs .chip[data-cat]').forEach(t => t.addEventListener('click', () => {
      $$('.tabs .chip').forEach(x => x.classList.remove('is-active')); t.classList.add('is-active');
      const cat = t.getAttribute('data-cat');
      $$('.cat-block', root).forEach(b => { b.style.display = (cat === 'all' || b.getAttribute('data-cat') === cat) ? '' : 'none'; });
      if (cat !== 'all') $(`#${cat}`).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }));
    /* Abrir ficha desde hash (#sctr) o desde ?p= */
    const hash = location.hash.replace('#', '');
    if (hash && productById(hash)) setTimeout(() => openProduct(hash), 300);
  }

  function ensureModal() {
    let m = $('#modal');
    if (m) return m;
    m = document.createElement('div'); m.id = 'modal'; m.className = 'modal'; m.setAttribute('role', 'dialog'); m.setAttribute('aria-modal', 'true');
    m.innerHTML = `<div class="modal__backdrop" data-modal-close></div>
      <div class="modal__box"><button class="modal__close" data-modal-close aria-label="Cerrar">${I.close}</button>
      <div class="modal__head"></div><div class="modal__body"></div></div>`;
    document.body.appendChild(m);
    $$('[data-modal-close]', m).forEach(b => b.addEventListener('click', closeModal));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
    return m;
  }
  function openProduct(id) {
    const p = productById(id); if (!p) return;
    const m = ensureModal();
    $('.modal__head', m).innerHTML = `<span class="eyebrow">${C[p.cat].name}</span><h3>${p.name}</h3>`;
    $('.modal__body', m).innerHTML = `
      <div class="modal__q"><h4>${I.shield} ¿Qué cubre?</h4><ul>${p.covers.map(c => `<li>${c}</li>`).join('')}</ul></div>
      <div class="modal__q"><h4>${I.users} ¿Para quién es ${p.required ? 'obligatorio' : 'recomendado'}?</h4><p>${p.who}</p></div>
      <div class="modal__actions">
        <a class="btn btn--wa" data-wa="Hola Jennifer, quisiera cotizar ${p.name}. ¿Me puedes enviar una propuesta?">${I.whatsapp} Cotizar por WhatsApp</a>
        <a class="btn btn--outline-teal" href="contacto.html?cat=${p.cat}&p=${p.id}">Solicitar por formulario</a>
      </div>`;
    hydrateLinks();
    m.classList.add('is-open'); document.body.style.overflow = 'hidden';
    history.replaceState(null, '', `#${p.id}`);
    $('.modal__close', m).focus();
  }
  function closeModal() {
    const m = $('#modal'); if (!m || !m.classList.contains('is-open')) return;
    m.classList.remove('is-open'); document.body.style.overflow = '';
    history.replaceState(null, '', location.pathname + location.search);
  }
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-open-product]'); if (b) { e.preventDefault(); openProduct(b.getAttribute('data-open-product')); }
  });

  /* ---------- Contacto: selector condicional + envío ---------- */
  function initForm() {
    const form = $('#quote-form'); if (!form) return;
    const catSel = $('#f-cat', form), prodSel = $('#f-prod', form);

    const fillProducts = (cat) => {
      prodSel.innerHTML = '<option value="">Selecciona un seguro (opcional)</option>';
      P.filter(p => !cat || p.cat === cat).forEach(p => {
        const o = document.createElement('option'); o.value = p.id; o.textContent = p.name; prodSel.appendChild(o);
      });
      prodSel.disabled = false;
    };
    catSel.addEventListener('change', () => fillProducts(catSel.value));

    /* Preselección desde URL ?cat=&p= */
    const q = new URLSearchParams(location.search);
    fillProducts(q.get('cat') || '');
    if (q.get('cat')) catSel.value = q.get('cat');
    if (q.get('p')) prodSel.value = q.get('p');

    const fields = ['f-name', 'f-phone', 'f-email', 'f-cat'];
    const validate = () => {
      let ok = true;
      fields.forEach(id => {
        const input = $('#' + id, form); const wrap = input.closest('.field');
        let valid = input.checkValidity();
        if (id === 'f-phone') valid = /^[+\d\s()-]{7,20}$/.test(input.value.trim());
        wrap.classList.toggle('is-invalid', !valid); if (!valid) ok = false;
      });
      return ok;
    };
    form.addEventListener('input', (e) => { const w = e.target.closest('.field'); if (w) w.classList.remove('is-invalid'); });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!validate()) { $('.is-invalid input, .is-invalid select', form)?.focus(); return; }
      const data = {
        nombre: $('#f-name', form).value.trim(),
        telefono: $('#f-phone', form).value.trim(),
        email: $('#f-email', form).value.trim(),
        categoria: C[catSel.value]?.name || '',
        seguro: prodSel.value ? productById(prodSel.value).name : 'No especificado',
        mensaje: $('#f-msg', form).value.trim()
      };
      const text = `Hola Jennifer, solicito asesoría y cotización.\n\n` +
        `• Nombre / Razón social: ${data.nombre}\n• Teléfono: ${data.telefono}\n• Correo: ${data.email}\n` +
        `• Tipo de seguro: ${data.categoria}\n• Seguro de interés: ${data.seguro}\n` +
        (data.mensaje ? `• Detalles: ${data.mensaje}\n` : '');

      const btn = $('button[type="submit"]', form); btn.disabled = true; btn.textContent = 'Enviando…';

      let sent = false;
      if (S.formEndpoint) {
        try {
          const r = await fetch(S.formEndpoint, { method: 'POST', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
          sent = r.ok;
        } catch (_) { sent = false; }
      }
      if (!sent) {
        /* Sin backend: abrimos el cliente de correo con el mensaje precargado */
        const subject = encodeURIComponent(`Solicitud de cotización · ${data.seguro}`);
        window.location.href = `mailto:${S.email}?subject=${subject}&body=${encodeURIComponent(text)}`;
      }
      /* Opcional: abrir WhatsApp con el texto del prospecto */
      const waBtn = $('#form-wa'); if (waBtn) waBtn.href = waLink(text);
      form.style.display = 'none';
      $('#form-success').classList.add('is-visible');
      btn.disabled = false; btn.textContent = 'Solicitar Asesoría y Cotización';
    });
  }

  /* ---------- Init ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    renderCatalog();
    hydrateLinks();
    initHeader(); initDrawer(); initReveal(); initChips(); initQuick(); initPartners(); initForm();
  });
})();
