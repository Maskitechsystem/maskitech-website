import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Products from "./pages/Products";
import CaseStudies from "./pages/CaseStudies";
import Insights from "./pages/Insights";
import InvestorPress from "./pages/InvestorPress";
import MaskHRDemo from "./pages/MaskHRDemo";
import MaskHR_Home from "./pages/MaskHR_Home";
import MaskHR_About from "./pages/MaskHR_About";
import MaskHR_Modules from "./pages/MaskHR_Modules";
import MaskHR_Contact from "./pages/MaskHR_Contact";
import Layout from "./components/Layout";

function Router() {
  return (
    <Switch>
      {/* MaskHR sub-site — has its own Navbar/Footer, no Layout wrapper */}
      <Route path="/maskhr" component={MaskHR_Home} />
      <Route path="/maskhr/about" component={MaskHR_About} />
      <Route path="/maskhr/modules" component={MaskHR_Modules} />
      <Route path="/maskhr/contact" component={MaskHR_Contact} />

      {/* Main Maskitech site — wrapped in Layout */}
      <Route>
        <Layout>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/products/maskhr" component={MaskHRDemo} />
            <Route path="/case-studies" component={CaseStudies} />
            <Route path="/insights" component={Insights} />
            <Route path="/investor-press" component={InvestorPress} />
            <Route path="/404" component={NotFound} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;