import { useTranslation } from "react-i18next";
import { useState, useEffect, useMemo, useRef } from "react";
import useOutsideClick from "@/utils/useOutsideClick";

const LanguageSelector = () => {
  const componentRef = useRef(null);
  const menuRef = useRef(null);
  const { i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("mx");
  const refs = [componentRef, menuRef];

  const onClose=()=>{
    setIsDropdownOpen(false)
  }
  useOutsideClick(refs, onClose);

  const languageMap = useMemo(() => {
    return {
      us: { lang: "en", flag: "us", label: "US" },
      es: { lang: "es", flag: "es", label: "ES" },
      mx: { lang: "es", flag: "mx", label: "MX" },
      // Agrega más opciones de idioma según sea necesario
    };
  }, []);
  const handleChangeLanguage = (language) => {
    console.log(language);
    i18n.changeLanguage(languageMap[language].lang);
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    document.title = languageMap[selectedLanguage].label;
  }, [selectedLanguage, languageMap]);

  const [countryCode, setCountryCode] = useState('');

  // useEffect(() => {
  //   const fetchCountryCode = () => {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition((position) => {
  //         const latitude = position.coords.latitude;
  //         const longitude = position.coords.longitude;
  //         console.log(latitude, longitude)

  //         // Aquí puedes utilizar servicios de geocodificación inversa para obtener el país basado en las coordenadas (latitude y longitude)
  //         // Por ejemplo, puedes utilizar la API de OpenCage Geocoder (https://opencagedata.com/) o la API de Nominatim (https://nominatim.org/)

  //         // Ejemplo de uso de la API de OpenCage Geocoder:
  //         // const apiKey = 'TU_CLAVE_DE_API';
  //         // const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;
  //         // fetch(apiUrl)
  //         //   .then(response => response.json())
  //         //   .then(data => {
  //         //     const country = data.results[0].components.country_code;
  //         //     setCountryCode(country);
  //         //   })
  //         //   .catch(error => console.error('Error al obtener el código del país:', error));

  //         // En este ejemplo, se establece un valor predeterminado para countryCode (por ejemplo, 'MX' para México o 'ES' para España)
  //         setCountryCode('MX');
  //       }, (error) => {
  //         console.error('Error al obtener las coordenadas geográficas:', error);
  //       });
  //     } else {
  //       console.error('La geolocalización no está disponible en este navegador.');
  //     }
  //   };

  //   fetchCountryCode();
  // }, []);

  return (
    <div className="" ref={componentRef}>
      <button
        className="top-[-12px] flex items-center transition-all hover:scale-125 outline-none"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <img
          className="w-4 h-4 rounded mr-2"
          src={`https://cdn.jsdelivr.net/npm/flag-icon-css@3.5.0/flags/4x3/${languageMap[selectedLanguage].flag}.svg`}
          alt={languageMap[selectedLanguage].label}
          onClick={() => handleChangeLanguage(selectedLanguage)}
        />
        <span className="text-gray-700">
          {languageMap[selectedLanguage].label}
        </span>
      </button>

      {isDropdownOpen && (
        <div className="absolute top-10 right-7 mt-2 py-2 pr-4 bg-white rounded shadow-lg">
          <button
            className="flex items-center px-3 py-2 transition hover:scale-125"
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
            className="flex items-center px-3 py-2 transition hover:scale-125 focus:outline-none"
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
            className="flex items-center px-3 py-2 transition hover:scale-125 focus:outline-none"
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
