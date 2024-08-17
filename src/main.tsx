import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LoadingProvider } from "./context/LoadingContext.tsx";
import { DeleteModalBoxProvider } from "./context/DeleteModalContext.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 1000 * 60 * 2, // Data is fresh for 2 minutes
      // refetchIntervalInBackground: true,
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <LoadingProvider>
        <DeleteModalBoxProvider>
          <App />
        </DeleteModalBoxProvider>
      </LoadingProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
