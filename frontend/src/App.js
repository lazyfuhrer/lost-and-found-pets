import { Routes, Route } from "react-router-dom";
import MainHeader from "./components/navigation/Navigation/MainHeader";
import Home from "./layout/Home";
import Footer from "./section/footer/Footer";
import Pets from "./pages/Pets";
import NotFoundPage from "./pages/404";
import LostForm from "./pages/LostForm";
import PetView from "./pages/PetView";
import ContactUs from "./pages/ContactUs";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/findPet" element={<Pets />} />
        <Route path="/lostPetForm" element={<LostForm />} />
        <Route path="/:petId/viewPet" element={<PetView />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* <Footer /> */}
    </>   
  );
}

export default App;
