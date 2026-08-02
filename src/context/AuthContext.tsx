import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "@/lib/firebase";
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, User } from "firebase/auth";
import { toast } from "sonner";

interface AuthContextType {
  user: User | MockUser | null;
  loading: boolean;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  loginSimulated: (email: string) => void;
}

export interface MockUser {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const ADMIN_EMAIL = "maheshvemula898@gmail.com";

const isAuthorizedAdminEmail = (email?: string | null) =>
  email?.trim().toLowerCase() === ADMIN_EMAIL;

const isLoopbackHostname = () => {
  if (typeof window === "undefined") return false;
  return ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname);
};

const LOCALHOST_ADMIN_USER: MockUser = {
  uid: "localhost-admin",
  displayName: "Local Administrator",
  email: ADMIN_EMAIL,
  photoURL: "",
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | MockUser | null>(null);
  const [loading, setLoading] = useState(true);
  const mockAuthEnabled = import.meta.env.DEV && import.meta.env.VITE_ENABLE_MOCK_AUTH === "true";
  const localhostAdminBypass = import.meta.env.DEV && isLoopbackHostname();

  useEffect(() => {
    // Local development convenience only. `import.meta.env.DEV` is compiled to
    // false in production builds, so deployed domains always require Firebase.
    if (localhostAdminBypass) {
      setUser(LOCALHOST_ADMIN_USER);
      setLoading(false);
      return;
    }

    if (auth) {
      // Use real Firebase auth listener
      const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
        if (firebaseUser) {
          if (!isAuthorizedAdminEmail(firebaseUser.email)) {
            setUser(null);
            await signOut(auth);
            setLoading(false);
            return;
          }
          setUser(firebaseUser);
          setLoading(false);
        } else {
          const storedUser = mockAuthEnabled ? localStorage.getItem("techwin_admin_user") : null;
          if (storedUser) {
            try {
              setUser(JSON.parse(storedUser));
            } catch (e) {
              localStorage.removeItem("techwin_admin_user");
            }
          } else {
            setUser(null);
          }
          setLoading(false);
        }
      });
      return () => unsubscribe();
    } else {
      // Optional local-only mock auth. This is disabled in every production build.
      const storedUser = mockAuthEnabled ? localStorage.getItem("techwin_admin_user") : null;
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (e) {
          localStorage.removeItem("techwin_admin_user");
        }
      }
      setLoading(false);
    }
  }, [localhostAdminBypass, mockAuthEnabled]);

  const loginWithGoogle = async () => {
    setLoading(true);
    if (auth) {
      try {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: "select_account" });
        const result = await signInWithPopup(auth, provider);
        if (!isAuthorizedAdminEmail(result.user.email)) {
          await signOut(auth);
          setUser(null);
          toast.error(`Access is restricted to ${ADMIN_EMAIL}.`);
          return;
        }
        setUser(result.user);
        toast.success(`Welcome back, ${result.user.displayName}!`);
      } catch (error: any) {
        console.error("Google OAuth failed:", error);
        toast.error(error.message || "Failed to authenticate via Google OAuth");
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("Firebase Authentication is not configured.");
      setLoading(false);
    }
  };

  const loginSimulated = (email: string) => {
    if (!mockAuthEnabled) {
      toast.error("Simulated authentication is disabled.");
      return;
    }
    if (!isAuthorizedAdminEmail(email)) {
      toast.error(`Access is restricted to ${ADMIN_EMAIL}.`);
      return;
    }
    setLoading(true);
    const mockUser: MockUser = {
      uid: "mock-uid-" + Math.random().toString(36).substring(2, 9),
      displayName: email.split("@")[0] || "Simulated User",
      email: email.trim(),
      photoURL: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80"
    };
    localStorage.setItem("techwin_admin_user", JSON.stringify(mockUser));
    setUser(mockUser);
    toast.success(`Logged in as simulated user ${mockUser.email}!`);
    setLoading(false);
  };

  const logout = async () => {
    setLoading(true);
    localStorage.removeItem("techwin_admin_user");
    if (auth) {
      try {
        await signOut(auth);
      } catch (error) {
        toast.error("Failed to sign out");
      }
    }
    setUser(null);
    toast.success("Logged out successfully");
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user, loading, loginWithGoogle, logout, loginSimulated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
