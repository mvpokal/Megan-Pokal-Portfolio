import { Header } from "./components/header/header";
import { About } from "./components/about/about";
import { Experience } from "./components/experience/experience";
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <About />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
