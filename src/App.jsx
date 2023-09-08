// Components
import Projects from "./components/Projects";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Internships from "./components/Internships";

// static files
import dev_img from "./static/dev.svg";
import logo from "./static/aruiz-logo.png";
import html_logo from "./static/tech-logos/html-logo.png";
import css_logo from "./static/tech-logos/css-logo.png";
import javascript_logo from "./static/tech-logos/javascript-logo.png";
import react_logo from "./static/tech-logos/react-logo.svg";
import tailwind_logo from "./static/tech-logos/tailwindcss-logo.svg";
import python_logo from "./static/tech-logos/python-logo.png";
import csharp_logo from "./static/tech-logos/csharp-logo.svg";
import sql_logo from "./static/tech-logos/sql-logo.png";

// data
import about from "./data/aboutme";
import links from "./data/links";
import experience from "./data/work-experience";
import projects from "./data/projects";
import Skills from "./components/Skills";

const logos = {
  html: { html_logo },
  css: { css_logo },
  javascript: { javascript_logo },
  react: { react_logo },
  tailwind: { tailwind_logo },
  python: { python_logo },
  csharp: { csharp_logo },
  sql: { sql_logo }
}

function App() {
  return (
    <div className="flex flex-col relative min-h-full">
      <div className="pb-10">
        <Navbar logo={logo} />
        <Header img={dev_img} about={about} links={links} />
        <Skills logos={logos} />
        <Internships experience={experience} />
        <Projects projects={projects} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
