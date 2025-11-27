// Your Venue card initialization
window.CardInitializers = window.CardInitializers || {};
window.CardInitializers['your-venue'] = function() {
    console.log('Your Venue card initializing...');

    // Setup hide untaken functionality
    setupHideUntaken();
};

/**
 * Setup hide untaken functionality for venue options
 */
function setupHideUntaken() {
    console.log('Setting up hide untaken for venue options...');

    // All radio button groups
    const gangNumberRadios = document.querySelectorAll('input[name="vnsn"]');

    // All checkboxes from different sections
    const tradesCheckboxes = document.querySelectorAll('.venue-options input[type="checkbox"][id^="vnt"]');
    const atmosphereCheckboxes = document.querySelectorAll('.venue-options input[type="checkbox"][id^="vna"]');
    const securityCheckboxes = [
        document.getElementById('vns1'),
        document.getElementById('vnso1'),
        document.getElementById('vnso2'),
        document.getElementById('vnso3'),
        document.getElementById('vnso4'),
        document.getElementById('vnso5'),
        document.getElementById('vnso6'),
        document.getElementById('vnso7')
    ].filter(el => el !== null);
    const wantsCheckboxes = document.querySelectorAll('.wants-options input[type="checkbox"]');

    // Add change listeners to all inputs
    [...gangNumberRadios, ...tradesCheckboxes, ...atmosphereCheckboxes, ...securityCheckboxes, ...wantsCheckboxes].forEach(input => {
        if (!input.hasAttribute('data-venue-listener')) {
            input.addEventListener('change', updateVenueDisplay);
            input.setAttribute('data-venue-listener', 'true');
        }
    });

    // Listen to hide_untaken checkbox changes
    const hideUntakenCheckbox = document.getElementById('hide_untaken');
    if (hideUntakenCheckbox && !hideUntakenCheckbox.hasAttribute('data-venue-untaken-listener')) {
        hideUntakenCheckbox.addEventListener('change', updateVenueDisplay);
        hideUntakenCheckbox.setAttribute('data-venue-untaken-listener', 'true');
    }

    // Initial display update
    updateVenueDisplay();
}

/**
 * Update display based on selections and hide untaken setting
 */
function updateVenueDisplay() {
    console.log('Updating venue display...');

    // Check if hide untaken is enabled
    const hideUntakenCheckbox = document.getElementById('hide_untaken');
    const hideUntaken = hideUntakenCheckbox ? hideUntakenCheckbox.checked : false;

    // Handle trades options (vnt1-vnt19)
    for (let i = 1; i <= 19; i++) {
        const checkbox = document.getElementById(`vnt${i}`);
        const optionElement = document.getElementById(`vnt${i}o`);

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

    // Handle atmosphere options (vna1-vna32)
    for (let i = 1; i <= 32; i++) {
        const checkbox = document.getElementById(`vna${i}`);
        const optionElement = document.getElementById(`vna${i}o`);

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

    // Handle security options
    const securityOptions = [
        { checkbox: 'vns1', option: 'vns1o' },
        { checkbox: 'vnso1', option: 'vnso1o' },
        { checkbox: 'vnso2', option: 'vnso2o' },
        { checkbox: 'vnso3', option: 'vnso3o' },
        { checkbox: 'vnso4', option: 'vnso4o' },
        { checkbox: 'vnso5', option: 'vnso5o' },
        { checkbox: 'vnso6', option: 'vnso6o' },
        { checkbox: 'vnso7', option: 'vnso7o' }
    ];

    securityOptions.forEach(item => {
        const checkbox = document.getElementById(item.checkbox);
        const optionElement = document.getElementById(item.option);

        if (checkbox && optionElement) {
            if (checkbox.checked) {
                optionElement.classList.add('selected');
                optionElement.style.display = '';
            } else {
                optionElement.classList.remove('selected');
                optionElement.style.display = hideUntaken ? 'none' : '';
            }
        }
    });

    // Handle wants options (vnw1-vnw9)
    for (let i = 1; i <= 9; i++) {
        const checkbox = document.getElementById(`vnw${i}`);
        const optionElement = document.getElementById(`vnw${i}o`);

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
