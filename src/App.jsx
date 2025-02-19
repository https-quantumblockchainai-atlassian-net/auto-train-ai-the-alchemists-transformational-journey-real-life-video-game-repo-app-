import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages-and-layouts";
import { useEffect } from "react";
import { checkAndRepairLinks, validateAPIEndpoints, checkAndRepairImports, performSelfUpgrade } from "./utils/selfHealing";
import ErrorBoundary from "./components/ErrorBoundary";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const runSelfHealing = async () => {
      try {
        await checkAndRepairLinks();
        await validateAPIEndpoints(['/api/v1/status', '/api/v1/user']);
        await checkAndRepairImports();
        await performSelfUpgrade();
      } catch (error) {
        console.error("Self-healing process encountered an error:", error);
      }
    };

    runSelfHealing();
    const intervalId = setInterval(runSelfHealing, 3600000); // Run every hour
    return () => clearInterval(intervalId);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <TooltipProvider>
          <Toaster />
          <RouterProvider router={router} />
        </TooltipProvider>
      </ErrorBoundary>
    </QueryClientProvider>
  );
};

export default App;