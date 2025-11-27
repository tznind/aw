// Your Holding card initialization
window.CardInitializers = window.CardInitializers || {};
window.CardInitializers['your-holding'] = function() {
    console.log('Your Holding card initializing...');

    // Setup hide untaken functionality
    setupHideUntaken();
};

/**
 * Setup hide untaken functionality for holding options
 */
function setupHideUntaken() {
    console.log('Setting up hide untaken for holding options...');

    // All radio button groups
    const gangNumberRadios = document.querySelectorAll('input[name="hgn"]');
    const raidingPartyRadios = document.querySelectorAll('input[name="hrp"]');

    // All holding option checkboxes
    const holdingOptionCheckboxes = [
        document.getElementById('ho1'),
        document.getElementById('ho2'),
        document.getElementById('ho3'),
        document.getElementById('ho4'),
        document.getElementById('ho5'),
        document.getElementById('ho6'),
        document.getElementById('ho7'),
        document.getElementById('ho8'),
        document.getElementById('ho9'),
        document.getElementById('ho10'),
        document.getElementById('ho11'),
        document.getElementById('ho12'),
        document.getElementById('ho13')
    ].filter(el => el !== null);

    // All surplus checkboxes
    const surplusCheckboxes = document.querySelectorAll('.surplus-options input[type="checkbox"]');

    // All wants checkboxes
    const wantsCheckboxes = document.querySelectorAll('.wants-options input[type="checkbox"]');

    // Add change listeners to all inputs
    [...gangNumberRadios, ...raidingPartyRadios, ...holdingOptionCheckboxes, ...surplusCheckboxes, ...wantsCheckboxes].forEach(input => {
        if (!input.hasAttribute('data-holding-listener')) {
            input.addEventListener('change', updateHoldingDisplay);
            input.setAttribute('data-holding-listener', 'true');
        }
    });

    // Listen to hide_untaken checkbox changes
    const hideUntakenCheckbox = document.getElementById('hide_untaken');
    if (hideUntakenCheckbox && !hideUntakenCheckbox.hasAttribute('data-holding-untaken-listener')) {
        hideUntakenCheckbox.addEventListener('change', updateHoldingDisplay);
        hideUntakenCheckbox.setAttribute('data-holding-untaken-listener', 'true');
    }

    // Initial display update
    updateHoldingDisplay();
}

/**
 * Update display based on selections and hide untaken setting
 */
function updateHoldingDisplay() {
    console.log('Updating holding display...');

    // Check if hide untaken is enabled
    const hideUntakenCheckbox = document.getElementById('hide_untaken');
    const hideUntaken = hideUntakenCheckbox ? hideUntakenCheckbox.checked : false;

    // Handle holding options
    const holdingOptions = [
        { checkbox: 'ho1', option: 'ho1o' },
        { checkbox: 'ho2', option: 'ho2o' },
        { checkbox: 'ho3', option: 'ho3o' },
        { checkbox: 'ho4', option: 'ho4o' },
        { checkbox: 'ho5', option: 'ho5o' },
        { checkbox: 'ho6', option: 'ho6o' },
        { checkbox: 'ho7', option: 'ho7o' },
        { checkbox: 'ho8', option: 'ho8o' },
        { checkbox: 'ho9', option: 'ho9o' },
        { checkbox: 'ho10', option: 'ho10o' },
        { checkbox: 'ho11', option: 'ho11o' },
        { checkbox: 'ho12', option: 'ho12o' },
        { checkbox: 'ho13', option: 'ho13o' }
    ];

    holdingOptions.forEach(item => {
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

    // Handle surplus options
    const surplusOptions = [
        { checkbox: 'hs1', option: 'hs1o' },
        { checkbox: 'hs2', option: 'hs2o' },
        { checkbox: 'hs3', option: 'hs3o' },
        { checkbox: 'hs4', option: 'hs4o' },
        { checkbox: 'hs5', option: 'hs5o' },
        { checkbox: 'hs6', option: 'hs6o' },
        { checkbox: 'hs7', option: 'hs7o' },
        { checkbox: 'hs8', option: 'hs8o' },
        { checkbox: 'hs9', option: 'hs9o' },
        { checkbox: 'hs10', option: 'hs10o' },
        { checkbox: 'hs11', option: 'hs11o' },
        { checkbox: 'hs12', option: 'hs12o' },
        { checkbox: 'hs13', option: 'hs13o' },
        { checkbox: 'hs14', option: 'hs14o' },
        { checkbox: 'hs15', option: 'hs15o' },
        { checkbox: 'hs16', option: 'hs16o' },
        { checkbox: 'hs17', option: 'hs17o' },
        { checkbox: 'hs18', option: 'hs18o' },
        { checkbox: 'hs19', option: 'hs19o' },
        { checkbox: 'hs20', option: 'hs20o' },
        { checkbox: 'hs21', option: 'hs21o' },
        { checkbox: 'hs22', option: 'hs22o' },
        { checkbox: 'hs23', option: 'hs23o' }
    ];

    surplusOptions.forEach(item => {
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

    // Handle wants options
    const wantsOptions = [
        { checkbox: 'hw1', option: 'hw1o' },
        { checkbox: 'hw2', option: 'hw2o' },
        { checkbox: 'hw3', option: 'hw3o' },
        { checkbox: 'hw4', option: 'hw4o' },
        { checkbox: 'hw5', option: 'hw5o' },
        { checkbox: 'hw6', option: 'hw6o' },
        { checkbox: 'hw7', option: 'hw7o' },
        { checkbox: 'hw8', option: 'hw8o' },
        { checkbox: 'hw9', option: 'hw9o' },
        { checkbox: 'hw10', option: 'hw10o' },
        { checkbox: 'hw11', option: 'hw11o' },
        { checkbox: 'hw12', option: 'hw12o' },
        { checkbox: 'hw13', option: 'hw13o' }
    ];

    wantsOptions.forEach(item => {
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
