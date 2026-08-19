// Scavenge card initialization
window.CardInitializers = window.CardInitializers || {};
window.CardInitializers.scavenge = function() {
  console.log('Scavenge card initializing...');

  // Scavenge options for each playbook
  const scavengeOptions = {
    "The Angel": {
      option1: "People support you out of appreciation, and you turn all their support back into resources for providing more care. You have Barter-1.",
      option2: "People support you out of appreciation, and you're able to live a little comfortably on their gratitude for your care. You have Barter+1."
    },
    "The Brain-picker": {
      option1: "You're known, and feared by some, but you won't use your psychic abilities just to exploit or extort people. You have Barter+0.",
      option2: "When your resources run thin, you're more than willing to use your psychic abilities to exploit and extort people. You have Barter+2."
    },
    "The Gearcutter": {
      option1: "You always have an abundance of interesting and useful things to trade. You have Barter+1.",
      option2: "In addition to your trade goods, you have a stranglehold, you're the only source for a particular thing that the people around you love or need. You have Barter+2."
    },
    "The Harrier": {
      option1: "You and your pack decline to commit violence for pay, reserving your violence for when you feel it necessary. You have Barter+0.",
      option2: "You and your pack are willing to sell yourselves as bodyguards, skirmishers, armed couriers, mercenaries, and/or a war-band. You have Barter+2."
    },
    "The Hocus": {
      option1: "You are devoted to your cult and share their good times and bad, you don't hold yourself above or apart from them. You have Barter+0.",
      option2: "You're willing to let your cult support you and live well off their devotion to you. You have Barter+2."
    },
    "The Lawmaker": {
      option1: "You don't hold yourself above your holding's population, but live like them, subject to the same tides of plenty and want. You have Barter+0.",
      option2: "No matter what changing fortunes bring to your holding and its people, you live above and you always take your share first. You have Barter+2."
    },
    "The Luminous": {
      option1: "You're privileged, but also generous. When wealth comes into your hands, you take care to spread it around. You have Barter+1.",
      option2: "You're privileged, but always aware of how tenuous privilege is. When wealth comes into your hands, you take care to invest it in your own security. You have Barter+2."
    },
    "The Maestro D": {
      option1: "Your venue keeps you alive but you live for it, giving it all your work and reinvesting all its profits back into it. Barter+0.",
      option2: "Your venue keeps you alive, and more, it keeps you in the life you demand: rich and in luxury. You have Barter+2."
    },
    "The Operator": {
      option1: "You hold your reputation as precious, and you're willing to take a loss when it means making good and doing right. You have Barter+1.",
      option2: "You weigh your reputation like any other resource, and you're willing to let it take the hit, if doing something shady will net you. You have Barter+2."
    },
    "The Restless": {
      option1: "You move as lightly through the Inhospitable as you can, taking nothing, leaving nothing to show you were there. You have Barter+0.",
      option2: "You know where the Inhospitable keeps its treasures — fruit, meat, fur, and other resources — and you'll take what you want for yourself and your friends. You have Barter+2."
    },
    "The Volatile": {
      option1: "You get by on jobs and trading favors. You won't straight-out rob people or murder them for their goods, even when you're down on your luck. You have Barter+0.",
      option2: "You're never willing to suffer an empty belly or an unsatisfied want, not when you can rob and extort. You have Barter+2."
    },
    "A Standout": {
      option1: "You work for your keep, doing whatever odd jobs come your way. You have Barter+0.",
      option2: "You have a skill or trade that keeps you fed and housed. You have Barter+1."
    }
  };

  function updateScavengeOptions() {
    console.log('Updating scavenge options...');

    // Get current roles using Utils
    const roles = window.Utils ? window.Utils.getCurrentRoles() : [];
    const selectedRole = roles.length > 0 ? roles[0] : null;

    console.log('Selected role:', selectedRole);

    const options = selectedRole ? scavengeOptions[selectedRole] : null;

    if (!options) {
      console.log('No scavenge options for role:', selectedRole);
      return;
    }

    // Update the text for each option
    const option1Text = document.querySelector('.scavenge-text[data-option="1"]');
    const option2Text = document.querySelector('.scavenge-text[data-option="2"]');

    if (option1Text) {
      option1Text.textContent = options.option1;
      console.log('Updated option 1');
    }
    if (option2Text) {
      option2Text.textContent = options.option2;
      console.log('Updated option 2');
    }
  }

  // Initial update
  updateScavengeOptions();

  // Listen for role changes (the card system will re-initialize when roles change)
  const roleSelect = document.getElementById('role');
  if (roleSelect && !roleSelect.hasAttribute('data-scavenge-listener')) {
    roleSelect.addEventListener('change', updateScavengeOptions);
    roleSelect.setAttribute('data-scavenge-listener', 'true');
    console.log('Added role change listener');
  }

  console.log('Scavenge card initialization complete');
};
