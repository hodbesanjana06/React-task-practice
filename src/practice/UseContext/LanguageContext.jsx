import { createContext, useState } from "react";

export const languageContext = createContext();

function LanguageProvider({children}){
    const [language , setLanguage] = useState("English")
    return(
        <languageContext.Provider value={{language , setLanguage}}>
            {children}
        </languageContext.Provider>
    )
}
export default LanguageProvider;