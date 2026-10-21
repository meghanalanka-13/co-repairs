import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export const ORGS = [
  "Co-Repairs",
  "Bosch",
  "Godrej",
  "Haier",
  "IFB",
  "LG",
  "Panasonic",
  "Samsung",
  "Voltas",
  "Whirlpool",
] as const;

export type Org = (typeof ORGS)[number];

interface OrgContextValue {
  org: Org | null;
  setOrg: (org: Org | null) => void;
  analyticsUrl: string;
}

const OrgContext = createContext<OrgContextValue | undefined>(undefined);

const STORAGE_KEY = "co-repairs-org";

export function OrgProvider({ children }: { children: ReactNode }) {
  const [org, setOrgState] = useState<Org | null>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return ORGS.includes(stored as Org) ? (stored as Org) : null;
  });

  const setOrg = (value: Org | null) => {
    setOrgState(value);
    if (value) {
      localStorage.setItem(STORAGE_KEY, value);
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  useEffect(() => {}, []);

  const analyticsUrl = org
    ? `https://servisense.streamlit.app/?org=${encodeURIComponent(org)}`
    : "https://servisense.streamlit.app";

  return (
    <OrgContext.Provider value={{ org, setOrg, analyticsUrl }}>
      {children}
    </OrgContext.Provider>
  );
}

export function useOrg() {
  const ctx = useContext(OrgContext);
  if (!ctx) {
    throw new Error("useOrg must be used within OrgProvider");
  }
  return ctx;
}
