// Your Luxe Setup card initialization
window.CardInitializers = window.CardInitializers || {};
window.CardInitializers['your-luxe-setup'] = function() {
    console.log('Your Luxe Setup card initializing...');

    // Setup hide untaken functionality
    setupHideUntaken();
};

/**
 * Setup hide untaken functionality for luxe options
 */
function setupHideUntaken() {
    console.log('Setting up hide untaken for luxe options...');

    // All room property checkboxes
    const roomCheckboxes = document.querySelectorAll('.room-properties input[type="checkbox"]');

    // All luxe option checkboxes
    const luxeOptionCheckboxes = [
        document.getElementById('lxo1'),
        document.getElementById('lxo2'),
        document.getElementById('lxo3'),
        document.getElementById('lxo4'),
        document.getElementById('lxo5'),
        document.getElementById('lxo6'),
        document.getElementById('lxo7'),
        document.getElementById('lxo8'),
        document.getElementById('lxo9')
    ].filter(el => el !== null);

    // Add change listeners to all inputs
    [...roomCheckboxes, ...luxeOptionCheckboxes].forEach(input => {
        if (!input.hasAttribute('data-luxe-listener')) {
            input.addEventListener('change', updateLuxeDisplay);
            input.setAttribute('data-luxe-listener', 'true');
        }
    });

    // Listen to hide_untaken checkbox changes
    const hideUntakenCheckbox = document.getElementById('hide_untaken');
    if (hideUntakenCheckbox && !hideUntakenCheckbox.hasAttribute('data-luxe-untaken-listener')) {
        hideUntakenCheckbox.addEventListener('change', updateLuxeDisplay);
        hideUntakenCheckbox.setAttribute('data-luxe-untaken-listener', 'true');
    }

    // Initial display update
    updateLuxeDisplay();
}

/**
 * Update display based on selections and hide untaken setting
 */
function updateLuxeDisplay() {
    console.log('Updating luxe display...');

    // Check if hide untaken is enabled
    const hideUntakenCheckbox = document.getElementById('hide_untaken');
    const hideUntaken = hideUntakenCheckbox ? hideUntakenCheckbox.checked : false;

    // Handle room property options
    const roomOptions = [
        { checkbox: 'lxr1', option: 'lxr1o' },
        { checkbox: 'lxr2', option: 'lxr2o' },
        { checkbox: 'lxr3', option: 'lxr3o' },
        { checkbox: 'lxr4', option: 'lxr4o' },
        { checkbox: 'lxr5', option: 'lxr5o' },
        { checkbox: 'lxr6', option: 'lxr6o' },
        { checkbox: 'lxr7', option: 'lxr7o' },
        { checkbox: 'lxr8', option: 'lxr8o' },
        { checkbox: 'lxr9', option: 'lxr9o' },
        { checkbox: 'lxr10', option: 'lxr10o' },
        { checkbox: 'lxr11', option: 'lxr11o' },
        { checkbox: 'lxr12', option: 'lxr12o' },
        { checkbox: 'lxr13', option: 'lxr13o' },
        { checkbox: 'lxr14', option: 'lxr14o' }
    ];

    roomOptions.forEach(item => {
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

    // Handle luxe options
    const luxeOptions = [
        { checkbox: 'lxo1', option: 'lxo1o' },
        { checkbox: 'lxo2', option: 'lxo2o' },
        { checkbox: 'lxo3', option: 'lxo3o' },
        { checkbox: 'lxo4', option: 'lxo4o' },
        { checkbox: 'lxo5', option: 'lxo5o' },
        { checkbox: 'lxo6', option: 'lxo6o' },
        { checkbox: 'lxo7', option: 'lxo7o' },
        { checkbox: 'lxo8', option: 'lxo8o' },
        { checkbox: 'lxo9', option: 'lxo9o' }
    ];

    luxeOptions.forEach(item => {
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
}
