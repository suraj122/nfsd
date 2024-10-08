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
import Slider from "./components/Slider";
import LiveChat from "./components/liveChat/LiveChat";
import Search from "./components/Search/Search";
const About = lazy(() => import("./components/About"));
const Pagination = lazy(() => import("./components/pagination/Pagination"));

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
          <Route path="/slider" element={<Slider />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/live-chat" element={<LiveChat />} />
          <Route path="/search" element={<Search />} />
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
