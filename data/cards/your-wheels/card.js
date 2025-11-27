// Your Wheels & Ports card initialization
window.CardInitializers = window.CardInitializers || {};
window.CardInitializers['your-wheels'] = function() {
    console.log('Your Wheels & Ports card initializing...');

    // Setup hide untaken functionality
    setupHideUntaken();
};

/**
 * Setup hide untaken functionality for vehicle options
 */
function setupHideUntaken() {
    console.log('Setting up hide untaken for wheels options...');

    // All vehicle radio buttons
    const vehicleRadios = document.querySelectorAll('input[name="opv"]');

    // Add change listeners to all inputs
    [...vehicleRadios].forEach(input => {
        if (!input.hasAttribute('data-wheels-listener')) {
            input.addEventListener('change', updateWheelsDisplay);
            input.setAttribute('data-wheels-listener', 'true');
        }
    });

    // Listen to hide_untaken checkbox changes
    const hideUntakenCheckbox = document.getElementById('hide_untaken');
    if (hideUntakenCheckbox && !hideUntakenCheckbox.hasAttribute('data-wheels-untaken-listener')) {
        hideUntakenCheckbox.addEventListener('change', updateWheelsDisplay);
        hideUntakenCheckbox.setAttribute('data-wheels-untaken-listener', 'true');
    }

    // Initial display update
    updateWheelsDisplay();
}

/**
 * Update display based on selections and hide untaken setting
 */
function updateWheelsDisplay() {
    console.log('Updating wheels display...');

    // Check if hide untaken is enabled
    const hideUntakenCheckbox = document.getElementById('hide_untaken');
    const hideUntaken = hideUntakenCheckbox ? hideUntakenCheckbox.checked : false;

    // Handle vehicle options
    const vehicleOptions = [
        { radio: 'opv1', option: 'opv1o' },
        { radio: 'opv2', option: 'opv2o' },
        { radio: 'opv3', option: 'opv3o' }
    ];

    vehicleOptions.forEach(item => {
        const radio = document.getElementById(item.radio);
        const optionElement = document.getElementById(item.option);

        if (radio && optionElement) {
            if (radio.checked) {
                optionElement.classList.add('selected');
                optionElement.style.display = '';
            } else {
                optionElement.classList.remove('selected');
                optionElement.style.display = hideUntaken ? 'none' : '';
            }
        }
    });
}
