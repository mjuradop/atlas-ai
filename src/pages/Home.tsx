import WorldMap from "../components/Map/WorldMap";
import Sidebar from "../components/Sidebar/Sidebar";

function Home() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Sidebar />
      <WorldMap />
    </div>
  );
}

export default Home;