import Navbar from "../../components/navBar"
import Estados from "../../components/Estado"
import Fallos from "../../components/Fallos"
import '../../css/home.css';
import { Route, Routes } from "react-router-dom"

function Home() {
  return (
    <>      
      <div className="container">
        <Routes>
          <Route path="/home/Estados" element={<Estados />} />
          <Route path="/home/Fallos" element={<Fallos />} />
        </Routes>
      </div>
    </>
  )
}

export default Home