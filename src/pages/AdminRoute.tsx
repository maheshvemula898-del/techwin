import { AuthProvider } from "@/context/AuthContext";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Admin from "./Admin";

const AdminRoute = () => (
  <AuthProvider>
    <Sonner />
    <Admin />
  </AuthProvider>
);

export default AdminRoute;
