<<<<<<< HEAD
import './App.css';
import Header from './components/Header';
import PetAdoptionForm from './components/PetAdoptionForm';
import TableData from './components/TableData';
=======
import Header from './components/Header';
import PetAdoptionForm from './components/PetAdoptionForm';
import "./myApp.css";
>>>>>>> 8e79057a336b065b65bd0e81f1888f2d3c1d576d


const App = () => {
  return (
<<<<<<< HEAD
    <div className="app-container">
      <Header />
      <PetAdoptionForm TableData={TableData}/>
=======
    <div
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80')",
        height: "100vh",
        backgroundSize: "cover"
      }}
    >
      <Header message={"Pet Adoption Form"} />
      <PetAdoptionForm />
>>>>>>> 8e79057a336b065b65bd0e81f1888f2d3c1d576d
    </div>
  );
};
export default App;
