import Header from "./components/Header";
import Bamboo from "./components/Bamboo";
import Data from "./components/Data";
import Project from "./components/Project";

function App() {
  return (
    <>
      <Header />
      <section className="flex flex-col gap-12 md:max-w-3xl md:mx-auto lg:max-w-5xl px-4 md:px-0">
        <Bamboo />
        <Data />
        <Project />
      </section>
    </>
  );
}

export default App;
