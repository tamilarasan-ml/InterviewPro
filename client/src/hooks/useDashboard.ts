import { useEffect } from "react";
import { useDashboardStore } from "../store/dashboard.store";

export const useDashboard = () => {
  const store = useDashboardStore();

  useEffect(() => {
    store.fetchDashboard();
  }, []);

  return {
    ...store,
    refresh: store.fetchDashboard,
  };
};