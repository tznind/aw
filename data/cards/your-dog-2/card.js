// Your Dog 2 card initialization
window.CardInitializers = window.CardInitializers || {};
window.CardInitializers['your-dog-2'] = function() {
    console.log('Your Dog 2 card initializing...');

    // Setup hide untaken functionality
    setupHideUntaken();
};

/**
 * Setup hide untaken functionality for dog impression options
 */
function setupHideUntaken() {
    console.log('Setting up hide untaken for dog 2 impression options...');

    // All impression checkboxes
    const impressionCheckboxes = document.querySelectorAll('.impression-options input[type="checkbox"][id^="dg2im"]');
    const otherCheckbox = document.getElementById('dg2im16');

    // Combine all checkboxes
    const allCheckboxes = [...impressionCheckboxes];
    if (otherCheckbox) allCheckboxes.push(otherCheckbox);

    // Add change listeners to all inputs
    allCheckboxes.forEach(input => {
        if (!input.hasAttribute('data-dog2-listener')) {
            input.addEventListener('change', updateDog2Display);
            input.setAttribute('data-dog2-listener', 'true');
        }
    });

    // Listen to hide_untaken checkbox changes
    const hideUntakenCheckbox = document.getElementById('hide_untaken');
    if (hideUntakenCheckbox && !hideUntakenCheckbox.hasAttribute('data-dog2-untaken-listener')) {
        hideUntakenCheckbox.addEventListener('change', updateDog2Display);
        hideUntakenCheckbox.setAttribute('data-dog2-untaken-listener', 'true');
    }

    // Initial display update
    updateDog2Display();
}

/**
 * Update display based on selections and hide untaken setting
 */
function updateDog2Display() {
    console.log('Updating dog 2 display...');

    // Check if hide untaken is enabled
    const hideUntakenCheckbox = document.getElementById('hide_untaken');
    const hideUntaken = hideUntakenCheckbox ? hideUntakenCheckbox.checked : false;

    // Handle impression options (dg2im1-dg2im16)
    for (let i = 1; i <= 16; i++) {
        const checkbox = document.getElementById(`dg2im${i}`);
        const optionElement = document.getElementById(`dg2im${i}o`);

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
