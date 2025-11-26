// Your Pack card initialization
window.CardInitializers = window.CardInitializers || {};
window.CardInitializers['your-pack'] = function() {
    console.log('Your Pack card initializing...');
    
    // Initialize the ammo track
    const trackContainer = document.querySelector('.ammo-track-field .track-container');
    if (!trackContainer) {
        console.log('Track container not found');
        return;
    }
    
    const trackId = trackContainer.getAttribute('data-track-id');
    const maxValue = parseInt(trackContainer.getAttribute('data-track-max'), 10);
    const shape = trackContainer.getAttribute('data-track-shape') || 'circle';
    
    console.log(`Initializing ammo track: id=${trackId}, max=${maxValue}, shape=${shape}`);
    
    // Get current value from URL
    const urlParams = new URLSearchParams(window.location.search);
    const currentValue = parseInt(urlParams.get(`track_${trackId}`), 10) || 0;
    
    // Create shapes container
    const shapesContainer = document.createElement('div');
    shapesContainer.className = 'track-shapes';
    
    // Create individual shapes
    for (let i = 1; i <= maxValue; i++) {
        const shapeElement = document.createElement('div');
        shapeElement.className = `track-shape track-${shape}`;
        shapeElement.dataset.value = i;
        shapeElement.setAttribute('data-track-id', trackId);
        
        // Make focusable and accessible
        shapeElement.setAttribute('tabindex', '0');
        shapeElement.setAttribute('role', 'button');
        shapeElement.setAttribute('aria-label', `Ammo - Set to ${i} of ${maxValue}`);
        
        if (i <= currentValue) {
            shapeElement.classList.add('filled');
        }
        
        // Add click handler for toggling
        shapeElement.addEventListener('click', (event) => {
            event.stopPropagation();
            handleShapeClick(trackId, i, maxValue);
        });
        
        // Add keyboard handler
        shapeElement.addEventListener('keydown', (event) => {
            if (event.key === ' ' || event.key === 'Enter') {
                event.preventDefault();
                event.stopPropagation();
                handleShapeClick(trackId, i, maxValue);
            }
        });
        
        shapesContainer.appendChild(shapeElement);
    }
    
    trackContainer.appendChild(shapesContainer);
    
    console.log('Ammo track initialized successfully');
};

/**
 * Handle clicking on a track shape
 */
function handleShapeClick(trackId, clickedValue, maxValue) {
    const urlParams = new URLSearchParams(window.location.search);
    const currentValue = parseInt(urlParams.get(`track_${trackId}`), 10) || 0;
    
    let newValue;
    if (clickedValue <= currentValue) {
        // Clicking on a filled shape or lower - set to one less than clicked
        newValue = clickedValue - 1;
    } else {
        // Clicking on an empty shape - fill up to that shape
        newValue = clickedValue;
    }
    
    // Clamp to valid range
    newValue = Math.max(0, Math.min(newValue, maxValue));
    
    // Update display
    updateTrackDisplay(trackId, newValue);
    
    // Update URL
    urlParams.set(`track_${trackId}`, newValue.toString());
    const newUrl = urlParams.toString() ? '?' + urlParams.toString() : window.location.pathname;
    window.history.replaceState({}, '', newUrl);
}

/**
 * Update the visual display of the track
 */
function updateTrackDisplay(trackId, currentValue) {
    const shapes = document.querySelectorAll(`[data-track-id="${trackId}"]`);
    shapes.forEach((shape) => {
        const shapeValue = parseInt(shape.dataset.value, 10);
        if (shapeValue <= currentValue) {
            shape.classList.add('filled');
        } else {
            shape.classList.remove('filled');
        }
    });
}
