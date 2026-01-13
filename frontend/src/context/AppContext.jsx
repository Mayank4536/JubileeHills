import { createContext } from "react";
import { profiles } from '../assets/assets'

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const currency = '₹'

    const value = {
        profiles,
        currency
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider;