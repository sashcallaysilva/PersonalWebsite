import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutPage from "../pages/AboutPage";
import ExperiencePage from "../pages/ExperiencePage";
import ProjectsPage from "../pages/ProjectsPage";
import ContactPage from "../pages/ContactPage";
import BlogPage from "../pages/BlogPage";
import PaperView from "../components/PaperView";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<PaperView />} />
        </Routes>
    );
}