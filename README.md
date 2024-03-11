const localization = require('your-localization-helper-package');

// Add translations
localization.addTranslation('en', { greeting: 'Hello', farewell: 'Goodbye' });
localization.addTranslation('fr', { greeting: 'Bonjour', farewell: 'Au revoir' });

// Set the current language
localization.setLanguage('en');

// Use the translate function
console.log(localization.translate('greeting')); // Output: Hello
console.log(localization.translate('farewell')); // Output: Goodbye

// Change the language
localization.setLanguage('fr');
console.log(localization.translate('greeting')); // Output: Bonjour
