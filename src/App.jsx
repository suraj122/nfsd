import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Team from "./components/Team";
import Login from "./components/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Profile from "./components/Profile";
import User from "./components/User";
import { lazy, Suspense, useState } from "react";
import Accordion from "./components/Accordion";
import Comment from "./components/comments/Comment";
const About = lazy(() => import("./components/About"));

function App() {
  const [lang, setLang] = useState("en");
  return (
    <>
      <BrowserRouter>
        <Header lang={lang} setLang={setLang} />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route
            path="/about"
            element={
              <Suspense fallback="Loading...">
                <About lang={lang} />
              </Suspense>
            }
          />
          <Route element={<ProtectedRoutes />}>
            <Route path="/team" element={<Team />} />
            <Route path="/team/profile" element={<Profile />} />
            <Route path="/team/profile/:id" element={<User />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/comments" element={<Comment />} />
          <Route
            path="*"
            element={
              <h1 className="text-center text-2xl font-bold my-6">
                Page Not Found!
              </h1>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
