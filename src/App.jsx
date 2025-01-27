import Header from "./components/Header";
import Bamboo from "./components/Bamboo";
import Data from "./components/Data";
import Project from "./components/Project";

function App() {
  return (
    <>
      <Header />
      <section className="flex flex-col gap-20">
        <Bamboo />
        <Data />
        <Project />
      </section>
    </>
  );
}

export default App;
