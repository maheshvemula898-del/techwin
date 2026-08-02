import React, {
  AnchorHTMLAttributes,
  Children,
  createContext,
  isValidElement,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type LocationValue = {
  pathname: string;
  search: string;
  hash: string;
  state: unknown;
};

type RouterValue = {
  location: LocationValue;
  navigate: (to: string, replace?: boolean) => void;
};

const RouterContext = createContext<RouterValue | null>(null);
const ParamsContext = createContext<Record<string, string>>({});
const NAVIGATION_EVENT = "techwin:navigate";

const readLocation = (): LocationValue => ({
  pathname: window.location.pathname || "/",
  search: window.location.search,
  hash: window.location.hash,
  state: window.history.state,
});

const normalizePath = (path: string) => {
  const value = path.split(/[?#]/, 1)[0] || "/";
  return value !== "/" ? value.replace(/\/+$/, "") : value;
};

export const BrowserRouter = ({ children }: { children: ReactNode }) => {
  const [location, setLocation] = useState<LocationValue>(() => readLocation());

  useEffect(() => {
    const syncLocation = () => setLocation(readLocation());
    window.addEventListener("popstate", syncLocation);
    window.addEventListener(NAVIGATION_EVENT, syncLocation);
    return () => {
      window.removeEventListener("popstate", syncLocation);
      window.removeEventListener(NAVIGATION_EVENT, syncLocation);
    };
  }, []);

  const value = useMemo<RouterValue>(() => ({
    location,
    navigate: (to, replace = false) => {
      const url = new URL(to, window.location.origin);
      if (url.origin !== window.location.origin) {
        window.location.assign(url.href);
        return;
      }
      window.history[replace ? "replaceState" : "pushState"]({}, "", `${url.pathname}${url.search}${url.hash}`);
      window.dispatchEvent(new Event(NAVIGATION_EVENT));
    },
  }), [location]);

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
};

const useRouter = () => {
  const value = useContext(RouterContext);
  if (!value) throw new Error("Router components must be rendered inside BrowserRouter.");
  return value;
};

export const useLocation = () => useRouter().location;
export const useParams = <T extends Record<string, string | undefined> = Record<string, string>>() => useContext(ParamsContext) as T;

export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  to: string;
  replace?: boolean;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(({ to, replace = false, onClick, target, ...props }, ref) => {
  const { navigate } = useRouter();
  return (
    <a
      {...props}
      ref={ref}
      href={to}
      target={target}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || target === "_blank") return;
        const url = new URL(to, window.location.origin);
        if (url.origin !== window.location.origin) return;
        event.preventDefault();
        navigate(to, replace);
      }}
    />
  );
});
Link.displayName = "Link";

export interface NavLinkProps extends Omit<LinkProps, "className" | "children"> {
  className?: string | ((state: { isActive: boolean; isPending: boolean }) => string);
  children?: ReactNode | ((state: { isActive: boolean; isPending: boolean }) => ReactNode);
}

export const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(({ to, className, children, ...props }, ref) => {
  const { pathname } = useLocation();
  const isActive = normalizePath(pathname) === normalizePath(to);
  const state = { isActive, isPending: false };
  return <Link {...props} ref={ref} to={to} className={typeof className === "function" ? className(state) : className}>{typeof children === "function" ? children(state) : children}</Link>;
});
NavLink.displayName = "NavLink";

type RouteProps = { path: string; element: ReactElement };

export const Route = ({ element }: RouteProps) => element;

const matchRoute = (pattern: string, pathname: string) => {
  if (pattern === "*") return { "*": pathname };
  const patternParts = normalizePath(pattern).split("/").filter(Boolean);
  const pathParts = normalizePath(pathname).split("/").filter(Boolean);
  if (patternParts.length !== pathParts.length) return null;
  const params: Record<string, string> = {};
  for (let index = 0; index < patternParts.length; index += 1) {
    const patternPart = patternParts[index];
    const pathPart = pathParts[index];
    if (patternPart.startsWith(":")) {
      try { params[patternPart.slice(1)] = decodeURIComponent(pathPart); } catch { return null; }
    } else if (patternPart !== pathPart) {
      return null;
    }
  }
  return params;
};

export const Routes = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  for (const child of Children.toArray(children)) {
    if (!isValidElement<RouteProps>(child)) continue;
    const params = matchRoute(child.props.path, pathname);
    if (params) return <ParamsContext.Provider value={params}>{child.props.element}</ParamsContext.Provider>;
  }
  return null;
};
