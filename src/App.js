import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import About from "./pages/About";
import Comments from "./pages/Comment";
import Ask from "./pages/Ask";
import Jobs from "./pages/Jobs";
import Show from "./pages/Show";
import NotFound from "./pages/NotFound";
import "./styles.css";

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="profile/:userId" element={<Profile />} />
          <Route path="about" element={<About />} />
          <Route path="comments/:cardId" element={<Comments />} />
          <Route path="ask" element={<Ask />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="show" element={<Show />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
