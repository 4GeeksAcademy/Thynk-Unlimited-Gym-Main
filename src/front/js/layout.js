import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import Resources from "./pages/resources";

import { Footer } from "./component/footer";
import injectContext from "./store/appContext";
import { MembershipViewPage } from "./pages/membershipView";
import { Navbar } from "./component/navbar";

import { AboutUs } from "./pages/aboutUs";
import ScheduleTable from "./pages/classes2";
import { Login } from "./pages/login";
import { Forgot } from "./pages/forgot-pw";
import { Connect } from "./pages/connect";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "")
    return <BackendURL />;

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<AboutUs />} path="/about" />
            <Route element={<Resources />} path="/resources" />
            <Route element={<ScheduleTable />} path="/classes" />
            <Route
              element={<MembershipViewPage />}
              path="/membershipView/:id"
            />
            <Route element={<Login />} path="/login" />
            <Route element={<Forgot />} path="/forgot-pw"/>
            <Route element={<Connect/>} path="/connect"/>
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
