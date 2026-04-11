/**
 * SisMonitorias — app.js
 * Controla toda a navegação e estado da aplicação.
 */

const App = (() => {

  // ── Estado ─────────────────────────────────────────────────
  let currentRole      = 'aluno';   // 'aluno' | 'monitor'
  let monitorDisponivel = false;
  let userEmail         = '';

  // ── Navegação ──────────────────────────────────────────────

  function goTo(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(screenId);
    if (target) {
      target.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    updateHeader(screenId);
  }

  function updateHeader(screenId) {
    const hr      = document.getElementById('header-right');
    const isLogin = screenId === 'screen-login' || screenId === 'screen-token';

    if (isLogin) {
      hr.innerHTML = `
        <svg class="icon-user" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="8" r="4"/>
          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
        </svg>`;
      return;
    }

    const isMonitor = screenId.startsWith('screen-monitor');
    const role      = isMonitor ? 'monitor' : 'aluno';
    const greeting  = isMonitor ? 'Olá, monitor!' : 'Olá, aluno!';

    let badgeHTML = '';
    if (isMonitor) {
      badgeHTML = monitorDisponivel
        ? `<span class="header-badge disponivel"><span class="dot dot-green"></span> Disponível</span>`
        : `<span class="header-badge indisponivel"><span class="dot dot-red"></span> Indisponível</span>`;
    }

    hr.innerHTML = `
      ${badgeHTML}
      <div style="text-align:right;">
        <div style="font-size:13px;font-weight:600;">${greeting}</div>
        <div style="font-size:11px;opacity:.8;">${userEmail || 'twolowski@inf.ufpel.edu.br'}</div>
      </div>
      <div class="user-avatar">
        <svg class="icon-user" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="8" r="4"/>
          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
        </svg>
      </div>`;
  }

  // ── Google OAuth ───────────────────────────────────────────

  function openGoogle(role) {
    currentRole = role;
    const overlay = document.getElementById('google-overlay');
    overlay.classList.add('open');
  }

  function closeOverlay(event) {
    const overlay = document.getElementById('google-overlay');
    if (event.target === overlay) {
      overlay.classList.remove('open');
    }
  }

  function selectAccount(email) {
    userEmail = email || 'twolowski@inf.ufpel.edu.br';
    document.getElementById('google-overlay').classList.remove('open');

    // Monitor precisa inserir token; aluno vai direto ao painel
    if (currentRole === 'monitor') {
      goTo('screen-token');
    } else {
      goTo('screen-aluno');
    }
  }

  // ── Token ──────────────────────────────────────────────────

  function submitToken() {
    const field = document.getElementById('token-field');
    const value = field.value.trim();

    if (!value) {
      field.closest('.token-input-wrap').style.outline = '2px solid #dc3545';
      setTimeout(() => {
        field.closest('.token-input-wrap').style.outline = '';
      }, 1200);
      return;
    }

    // Token válido → vai ao painel do monitor
    goTo('screen-monitor');
    field.value = '';
  }

  // ── Toggle disponibilidade (monitor) ───────────────────────

  function toggleDisponibilidade() {
    monitorDisponivel = !monitorDisponivel;
    const label = document.getElementById('disp-label');
    label.textContent = monitorDisponivel ? 'Ficar indisponível' : 'Ficar disponível';
    updateHeader('screen-monitor');
  }

  // ── API pública ────────────────────────────────────────────

  return {
    goTo,
    openGoogle,
    closeOverlay,
    selectAccount,
    submitToken,
    toggleDisponibilidade,
  };

})();
