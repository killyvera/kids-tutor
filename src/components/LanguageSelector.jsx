import { useTranslation } from "react-i18next";
import { useState } from "react";


const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("es");
  
    const languageMap = {
      us: {lang: "en", flag: "us", label: "North America" },
      es: { lang: "es", flag: "es", label: "España" },
      mx: {lang:"es", flag: "mx", label: "México" },
      // Agrega más opciones de idioma según sea necesario
    };
  
    const handleChangeLanguage = (language) => {
        console.log(language)
      i18n.changeLanguage(languageMap[language].lang);
      setSelectedLanguage(language);
      setIsDropdownOpen(false);
    };
  
    return (
      <div className="relative">
        <button
          className="flex items-center focus:outline-none"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <img
            className="w-4 h-4 rounded mr-2"
            src={`https://cdn.jsdelivr.net/npm/flag-icon-css@3.5.0/flags/4x3/${languageMap[selectedLanguage].flag}.svg`}
            alt={languageMap[selectedLanguage].label}
            onClick={() => handleChangeLanguage(selectedLanguage)}
          />
          <span className="text-gray-700">{languageMap[selectedLanguage].label}</span>
        </button>
  
        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-2 py-2 bg-white rounded shadow-lg">
            <button
              className="flex items-center px-3 py-2 hover:bg-gray-100 focus:outline-none"
              onClick={() => handleChangeLanguage("us")}
            >
              <img
                className="w-4 h-4 rounded mr-2"
                src={`https://cdn.jsdelivr.net/npm/flag-icon-css@3.5.0/flags/4x3/${languageMap["us"].flag}.svg`}
                alt={languageMap["us"].label}
              />
              <span className="text-gray-700">{languageMap["us"].label}</span>
            </button>
            {/* Agrega más opciones de idioma según sea necesario */}
            <button
              className="flex items-center px-3 py-2 hover:bg-gray-100 focus:outline-none"
              onClick={() => handleChangeLanguage("mx")}
            >
              <img
                className="w-4 h-4 rounded mr-2"
                src={`https://cdn.jsdelivr.net/npm/flag-icon-css@3.5.0/flags/4x3/${languageMap["mx"].flag}.svg`}
                alt={languageMap["mx"].label}
              />
              <span className="text-gray-700">{languageMap["mx"].label}</span>
            </button>
            <button
              className="flex items-center px-3 py-2 hover:bg-gray-100 focus:outline-none"
              onClick={() => handleChangeLanguage("es")}
            >
              <img
                className="w-4 h-4 rounded mr-2"
                src={`https://cdn.jsdelivr.net/npm/flag-icon-css@3.5.0/flags/4x3/${languageMap["es"].flag}.svg`}
                alt={languageMap["es"].label}
              />
              <span className="text-gray-700">{languageMap["es"].label}</span>
            </button>
          </div>
        )}
      </div>
    );
  };
  
  export default LanguageSelector;
  