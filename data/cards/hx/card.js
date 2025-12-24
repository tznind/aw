// Hx (History) card - Dynamic table version
(function() {
  'use strict';

  function updateHxHelpText() {
    // Get the help icon button
    const helpBtn = document.querySelector('.hx-card .help-icon');
    if (!helpBtn) return;

    // Get current roles
    const roles = window.Utils ? window.Utils.getCurrentRoles() : [];
    if (roles.length === 0) return;

    // Get the first role's hxInstructions from availableMap
    const primaryRole = roles[0];
    if (window.availableMap && window.availableMap[primaryRole]) {
      const hxInstructions = window.availableMap[primaryRole].hxInstructions;
      if (hxInstructions) {
        helpBtn.setAttribute('data-help-text', hxInstructions);
      }
    }
  }

  function initializeHx(container) {
    // Update help text based on current role's hxInstructions
    updateHxHelpText();

    // Add min/max constraints to Hx number inputs
    // The dynamic table system doesn't support min/max yet, so we add it via delegation
    const table = container ? container.querySelector('#hx-table') : document.getElementById('hx-table');
    if (table) {
      table.addEventListener('input', function(e) {
        if (e.target.type === 'number' && e.target.closest('td')) {
          let value = parseInt(e.target.value);
          if (isNaN(value)) return;

          // Clamp Hx values between -2 and +3 (Apocalypse World standard)
          if (value < -2) e.target.value = -2;
          if (value > 3) e.target.value = 3;
        }
      });
    }
  }

  // Export initialization function for the card system
  window.CardInitializers = window.CardInitializers || {};
  window.CardInitializers.hx = initializeHx;
})();
