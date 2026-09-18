import AboutMe from "./aboutMe/page";
import Contact from "./contact/page";
import Navbar from "./navbar/page";
import Projects from "./projects/page";
import Skills from "./skills/page";

export default function Home() {
  return <><Navbar /><main id="main-content"><AboutMe /><Skills /><Projects /><Contact /></main></>;
}
