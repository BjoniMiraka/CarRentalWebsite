import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

export const AppLayout = () => {
  return (
    <>
      <Outlet />
      <Toaster />
    </>
  );
};
