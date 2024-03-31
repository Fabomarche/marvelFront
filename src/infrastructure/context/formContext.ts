import React, { createContext, useState } from "react";



const FormContext = createContext({
    text: string;
})

export const FormStore({ children }: { children: React.ReactNode }){
    const [searchedText, setSearchedText] = useState(text)


}


