import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages-and-layouts";
import { useEffect } from "react";
import { checkAndRepairLinks, validateAPIEndpoints, checkAndRepairImports, performSelfUpgrade } from "./utils/selfHealing";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Implement self-healing and self-upgrading checks
    checkAndRepairLinks();
    validateAPIEndpoints(['/api/v1/status', '/api/v1/user']); // Add your actual API endpoints
    checkAndRepairImports();
    performSelfUpgrade();

    // Set up periodic checks
    const intervalId = setInterval(() => {
      checkAndRepairLinks();
      validateAPIEndpoints(['/api/v1/status', '/api/v1/user']);
      checkAndRepairImports();
      performSelfUpgrade();
    }, 3600000); // Run every hour

    return () => clearInterval(intervalId);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <RouterProvider router={router} />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;