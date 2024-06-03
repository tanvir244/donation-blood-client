import { getAuth } from "firebase/auth";
import { createContext } from "react";

const auth = getAuth();
export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {



    const userInfo = {
        
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;