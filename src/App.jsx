import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PersistLogin from "./components/PersistLogin";
import RequireAuth from "./components/RequireAuth";
import Home from "./pages/Home";
import F404Page from "./pages/F404Page";
import useScrollToTop from "./hooks/useScrollToTop";

import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Helmet } from "react-helmet-async";
import Profile from "./pages/Profile";

const App = () => {
  const queryClient = new QueryClient();

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <QueryClientProvider client={queryClient}>
        <MantineProvider>
          <Router>
            {/* Call useScrollToTop here, inside the Router */}
            <Routes>
              <Route path="/:_id" element={<Home />} />
              <Route path="/profile/:name/wallet" element={<Profile />} />

              <Route path="/*" element={<F404Page />} />
            </Routes>
          </Router>
        </MantineProvider>
      </QueryClientProvider>
    </div>
  );
};

export default App;

// Create a wrapper component that handles scroll behavior
const ScrollToTopWrapper = ({ children }) => {
  useScrollToTop(); // Call your scroll-to-top hook here
  return <>{children}</>;
};
