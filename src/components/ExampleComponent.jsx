import React from 'react';
import { useTranslation } from 'react-i18next';

const ExampleComponent = () => {
  const { t, i18n } = useTranslation();
  

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
   <div className='pl-10 flex text-xl'>
     <button
       className={`text-white/60 m-2 hover:text-yellow-200 ${i18n.language === 'ru' ? 'active' : ''}`}
       onClick={() => changeLanguage('ru')}
     >
       Ru
     </button>
     <button
       className={`text-white/60 m-2 hover:text-yellow-200 ${i18n.language === 'es' ? 'active' : ''}`}
       onClick={() => changeLanguage('es')}
     >
       Es
     </button>
   </div>
 );
};

export default ExampleComponent;