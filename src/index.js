class LocalizationHelper {
    constructor() {
      this.translations = {};
      this.defaultLanguage = 'en';
      this.currentLanguage = this.defaultLanguage;
    }
  
    setLanguage(language) {
      if (this.translations[language]) {
        this.currentLanguage = language;
      } else {
        console.warn(`Language '${language}' not available. Using default language.`);
        this.currentLanguage = this.defaultLanguage;
      }
    }
  
    addTranslation(language, translations) {
      if (!this.translations[language]) {
        this.translations[language] = {};
      }
  
      Object.assign(this.translations[language], translations);
    }
  
    translate(key) {
      const translation = this.translations[this.currentLanguage][key];
  
      if (!translation) {
        console.warn(`Translation not found for key: '${key}' in language: '${this.currentLanguage}'`);
        return key; // Return the key itself if translation is not found
      }
  
      return translation;
    }
  }
  
  // Export a singleton instance of the LocalizationHelper
  module.exports = new LocalizationHelper();
  