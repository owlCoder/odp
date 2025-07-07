import { useContext } from "react";
import type { AuthContextType } from "../../types/auth/AuthContext";
import AuthContext from "../../contexts/auth/AuthContext";

// Hook za korišćenje AuthContext-a
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth mora biti korišćen unutar AuthProvider-a');
    }
    return context;
};