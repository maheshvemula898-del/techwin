const ADMIN_TOKEN_KEY = "techwin_admin_api_token";

export const getAdminApiToken = () => {
  if (typeof window === "undefined") return "";
  return window.sessionStorage.getItem(ADMIN_TOKEN_KEY) || "";
};

export const setAdminApiToken = (token: string) => {
  if (typeof window === "undefined") return;
  const normalized = token.trim();
  if (normalized) window.sessionStorage.setItem(ADMIN_TOKEN_KEY, normalized);
  else window.sessionStorage.removeItem(ADMIN_TOKEN_KEY);
};

export const getAdminApiHeaders = (): Record<string, string> => {
  const token = getAdminApiToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};
