import Header from "./components/Header";
import Bamboo from "./components/Bamboo";
import Data from "./components/Data";

function App() {
  return (
    <>
      <Header />
      <section className="flex flex-col gap-20">
        <Bamboo />
        <Data />
      </section>
    </>
  );
}

export default App;
