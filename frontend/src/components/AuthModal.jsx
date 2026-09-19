import { createContext, useContext, useCallback } from 'react';

const SIGN_IN_URL = 'https://accounts.neurativo.com/sign-in';
const SIGN_UP_URL = 'https://accounts.neurativo.com/sign-up';

function clerkRedirect(base) {
    const dest = `${window.location.origin}/app`;
    return `${base}?redirect_url=${encodeURIComponent(dest)}`;
}

// ─── Context ──────────────────────────────────────────────────────────────────
const AuthModalCtx = createContext(null);
export function useAuthModal() { return useContext(AuthModalCtx); }

// ─── Provider ─────────────────────────────────────────────────────────────────
// Redirects to Clerk's hosted Account Portal, then back to this origin (/app).
export function AuthModalProvider({ children }) {
    const openSignIn = useCallback(() => {
        window.location.href = clerkRedirect(SIGN_IN_URL);
    }, []);

    const openSignUp = useCallback(() => {
        window.location.href = clerkRedirect(SIGN_UP_URL);
    }, []);

    const closeModal = useCallback(() => {}, []);

    return (
        <AuthModalCtx.Provider value={{ openSignIn, openSignUp, closeModal }}>
            {children}
        </AuthModalCtx.Provider>
    );
}
