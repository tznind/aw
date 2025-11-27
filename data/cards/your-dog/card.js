// Your Dog card initialization
window.CardInitializers = window.CardInitializers || {};
window.CardInitializers['your-dog'] = function() {
    console.log('Your Dog card initializing...');

    // Setup hide untaken functionality
    setupHideUntaken();
};

/**
 * Setup hide untaken functionality for dog impression options
 */
function setupHideUntaken() {
    console.log('Setting up hide untaken for dog impression options...');

    // All impression checkboxes
    const impressionCheckboxes = document.querySelectorAll('.impression-options input[type="checkbox"]');
    const otherCheckbox = document.getElementById('dgim16');

    // Combine all checkboxes
    const allCheckboxes = [...impressionCheckboxes];
    if (otherCheckbox) allCheckboxes.push(otherCheckbox);

    // Add change listeners to all inputs
    allCheckboxes.forEach(input => {
        if (!input.hasAttribute('data-dog-listener')) {
            input.addEventListener('change', updateDogDisplay);
            input.setAttribute('data-dog-listener', 'true');
        }
    });

    // Listen to hide_untaken checkbox changes
    const hideUntakenCheckbox = document.getElementById('hide_untaken');
    if (hideUntakenCheckbox && !hideUntakenCheckbox.hasAttribute('data-dog-untaken-listener')) {
        hideUntakenCheckbox.addEventListener('change', updateDogDisplay);
        hideUntakenCheckbox.setAttribute('data-dog-untaken-listener', 'true');
    }

    // Initial display update
    updateDogDisplay();
}

/**
 * Update display based on selections and hide untaken setting
 */
function updateDogDisplay() {
    console.log('Updating dog display...');

    // Check if hide untaken is enabled
    const hideUntakenCheckbox = document.getElementById('hide_untaken');
    const hideUntaken = hideUntakenCheckbox ? hideUntakenCheckbox.checked : false;

    // Handle impression options (dgim1-dgim16)
    for (let i = 1; i <= 16; i++) {
        const checkbox = document.getElementById(`dgim${i}`);
        const optionElement = document.getElementById(`dgim${i}o`);

        if (checkbox && optionElement) {
            if (checkbox.checked) {
                optionElement.classList.add('selected');
                optionElement.style.display = '';
            } else {
                optionElement.classList.remove('selected');
                optionElement.style.display = hideUntaken ? 'none' : '';
            }
        }
    }
}
