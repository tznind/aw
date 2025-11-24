// Hx (History) tracking functionality
(function() {
  'use strict';
  
  console.log('Hx script loading...');
  
  let hxCount = 0;
  
  function initializeHx() {
    console.log('Initializing Hx card...');
    
    const addHxBtn = document.getElementById('add-hx');
    const hxContainer = document.getElementById('hx-players');
    
    if (!addHxBtn || !hxContainer) {
      console.log('Hx elements not found');
      return;
    }
    
    // Get initial values from URL
    const urlParams = new URLSearchParams(window.location.search);
    hxCount = parseInt(urlParams.get('hx_cnt')) || 0;
    
    console.log('Initial Hx count:', hxCount);
    
    function changeHxValue(index, delta) {
      const valueSpan = document.getElementById(`hx${index}v`);
      if (!valueSpan) return;
      
      let currentValue = parseInt(valueSpan.textContent) || 0;
      let newValue = currentValue + delta;
      
      // Clamp between -2 and +3
      newValue = Math.max(-2, Math.min(3, newValue));
      
      valueSpan.textContent = newValue;
      updateURL();
    }
    
    function updateURL() {
      const params = new URLSearchParams(window.location.search);
      
      // Update Hx count
      if (hxCount > 0) {
        params.set('hx_cnt', hxCount.toString());
      } else {
        params.delete('hx_cnt');
      }
      
      // Update player data
      for (let i = 0; i < hxCount; i++) {
        const nameInput = document.getElementById(`hx${i}n`);
        const valueSpan = document.getElementById(`hx${i}v`);
        
        if (nameInput && nameInput.value) {
          params.set(`hx${i}n`, nameInput.value);
        } else {
          params.delete(`hx${i}n`);
        }
        
        if (valueSpan) {
          const value = valueSpan.textContent;
          if (value !== '' && value !== '0') {
            params.set(`hx${i}v`, value);
          } else {
            params.delete(`hx${i}v`);
          }
        }
      }
      
      const newUrl = params.toString() ? '?' + params.toString() : window.location.pathname;
      window.history.replaceState({}, '', newUrl);
    }
    
    function createHxRow(index) {
      const row = document.createElement('div');
      row.className = 'hx-row';
      row.innerHTML = `
        <input type="text" id="hx${index}n" placeholder="Character name">
        <div class="hx-controls">
          <button type="button" class="hx-btn" data-index="${index}" data-action="decrease">−</button>
          <span class="hx-value" id="hx${index}v">0</span>
          <button type="button" class="hx-btn" data-index="${index}" data-action="increase">+</button>
        </div>
        <button type="button" class="remove-hx" data-index="${index}">×</button>
      `;
      
      // Add event listener for name input
      const nameInput = row.querySelector('input[type="text"]');
      nameInput.addEventListener('input', updateURL);
      
      // Add event listeners for +/- buttons
      const increaseBtn = row.querySelector('[data-action="increase"]');
      const decreaseBtn = row.querySelector('[data-action="decrease"]');
      
      increaseBtn.addEventListener('click', function() {
        changeHxValue(index, 1);
      });
      
      decreaseBtn.addEventListener('click', function() {
        changeHxValue(index, -1);
      });
      
      // Add event listener for remove button with confirmation
      const removeBtn = row.querySelector('.remove-hx');
      removeBtn.addEventListener('click', function() {
        const nameInput = document.getElementById(`hx${index}n`);
        const charName = nameInput && nameInput.value ? nameInput.value : 'this character';
        if (confirm(`Remove ${charName} from your Hx?`)) {
          removeHx(index);
        }
      });
      
      return row;
    }
    
    function addHx() {
      console.log('Adding Hx entry, current count:', hxCount);
      
      if (hxCount === 0) {
        // Add headers
          const headers = document.createElement('div');
          headers.className = 'hx-headers';
          headers.innerHTML = `
            <div>Character Name</div>
            <div style="text-align: center;">Hx</div>
            <div class="remove-spacer"></div>
          `;
        hxContainer.appendChild(headers);
      }
      
      const row = createHxRow(hxCount);
      hxContainer.appendChild(row);
      
      hxCount++;
      console.log('Hx entry added, new count:', hxCount);
      updateURL();
    }
    
    function removeHx(index) {
      // Remove the specific row
      const nameInput = document.querySelector(`#hx${index}n`);
      if (nameInput) {
        const row = nameInput.closest('.hx-row');
        if (row) row.remove();
      }
      
      // Clean up URL params for this player
      const params = new URLSearchParams(window.location.search);
      params.delete(`hx${index}n`);
      params.delete(`hx${index}v`);
      
      // If no entries left, remove headers and reset count
      if (hxContainer.querySelectorAll('.hx-row').length === 0) {
        const headers = hxContainer.querySelector('.hx-headers');
        if (headers) headers.remove();
        hxCount = 0;
        params.delete('hx_cnt');
      }
      
      const newUrl = params.toString() ? '?' + params.toString() : window.location.pathname;
      window.history.replaceState({}, '', newUrl);
    }
    
    // Make removeHx globally accessible
    window.removeHx = removeHx;
    
    // Add event listener (only if not already added)
    if (!addHxBtn.hasAttribute('data-listener-added')) {
      addHxBtn.addEventListener('click', addHx);
      addHxBtn.setAttribute('data-listener-added', 'true');
      console.log('Add Hx event listener added');
    }
    
    // Load existing Hx entries from URL
    for (let i = 0; i < hxCount; i++) {
      if (i === 0) {
        // Add headers
        const headers = document.createElement('div');
        headers.className = 'hx-headers';
        headers.innerHTML = `
          <div>Character Name</div>
          <div style="text-align: center;">Hx</div>
          <div class="remove-spacer"></div>
        `;
        hxContainer.appendChild(headers);
      }
      
      const row = createHxRow(i);
      hxContainer.appendChild(row);
      
      // Populate values from URL
      const nameVal = urlParams.get(`hx${i}n`);
      const valueVal = urlParams.get(`hx${i}v`);
      
      if (nameVal) document.getElementById(`hx${i}n`).value = nameVal;
      if (valueVal !== null) document.getElementById(`hx${i}v`).textContent = valueVal;
    }
    
    console.log('Hx initialization complete');
  }
  
  // Export initialization function for the card system
  window.CardInitializers = window.CardInitializers || {};
  window.CardInitializers.hx = initializeHx;
})();
