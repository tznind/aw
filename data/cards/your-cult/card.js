// Your Cult card initialization
window.CardInitializers = window.CardInitializers || {};
window.CardInitializers['your-cult'] = function() {
    console.log('Your Cult card initializing...');

    // Setup hide untaken functionality
    setupHideUntaken();
};

/**
 * Setup hide untaken functionality for cult options
 */
function setupHideUntaken() {
    console.log('Setting up hide untaken for cult options...');

    // All radio button groups
    const cultNumberRadios = document.querySelectorAll('input[name="cn"]');
    const guardiansNumberRadios = document.querySelectorAll('input[name="gn"]');
    const wanderersTypeRadios = document.querySelectorAll('input[name="wt"]');

    // All main cult option checkboxes - explicitly list them
    const cultOptionCheckboxes = [
        document.getElementById('cc1'),
        document.getElementById('cc2'),
        document.getElementById('cc3'),
        document.getElementById('cc4'),
        document.getElementById('cc5'),
        document.getElementById('cc6'),
        document.getElementById('cc7')
    ].filter(el => el !== null);

    // All labor type checkboxes (nested)
    const laborTypeCheckboxes = document.querySelectorAll('.laborers-types input[type="checkbox"]');

    // Add change listeners to all inputs
    [...cultNumberRadios, ...guardiansNumberRadios, ...wanderersTypeRadios, ...cultOptionCheckboxes, ...laborTypeCheckboxes].forEach(input => {
        if (!input.hasAttribute('data-cult-listener')) {
            input.addEventListener('change', updateCultDisplay);
            input.setAttribute('data-cult-listener', 'true');
        }
    });

    // Listen to hide_untaken checkbox changes
    const hideUntakenCheckbox = document.getElementById('hide_untaken');
    if (hideUntakenCheckbox && !hideUntakenCheckbox.hasAttribute('data-cult-untaken-listener')) {
        hideUntakenCheckbox.addEventListener('change', updateCultDisplay);
        hideUntakenCheckbox.setAttribute('data-cult-untaken-listener', 'true');
    }

    // Initial display update
    updateCultDisplay();
}

/**
 * Update display based on selections and hide untaken setting
 */
function updateCultDisplay() {
    console.log('Updating cult display...');

    // Check if hide untaken is enabled
    const hideUntakenCheckbox = document.getElementById('hide_untaken');
    const hideUntaken = hideUntakenCheckbox ? hideUntakenCheckbox.checked : false;

    // Handle cult number options
    const cultNumberOptions = [
        { radio: 'cn15', option: 'cn15o' },
        { radio: 'cn18', option: 'cn18o' },
        { radio: 'cn20', option: 'cn20o' },
        { radio: 'cn24', option: 'cn24o' }
    ];

    cultNumberOptions.forEach(item => {
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

    // Handle main cult composition options
    const cultCompositionOptions = [
        { checkbox: 'cc1', option: 'cc1o' },
        { checkbox: 'cc2', option: 'cc2o' },
        { checkbox: 'cc3', option: 'cc3o' },
        { checkbox: 'cc4', option: 'cc4o' },
        { checkbox: 'cc5', option: 'cc5o' },
        { checkbox: 'cc6', option: 'cc6o' },
        { checkbox: 'cc7', option: 'cc7o' }
    ];

    cultCompositionOptions.forEach(item => {
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

    // Handle labor type options (nested within Laborers)
    const laborTypeOptions = [
        { checkbox: 'l1', option: 'l1o' },
        { checkbox: 'l2', option: 'l2o' },
        { checkbox: 'l3', option: 'l3o' },
        { checkbox: 'l4', option: 'l4o' },
        { checkbox: 'l5', option: 'l5o' },
        { checkbox: 'l6', option: 'l6o' }
    ];

    laborTypeOptions.forEach(item => {
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
