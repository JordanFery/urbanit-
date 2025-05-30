import Header from "./Frontend/Components/Header/header";
import Accueil from "@/app/Frontend/Components/Homepage/home";
import Quartier from "@/app/Frontend/Components/PageTwo/quartier";
import Residence from "@/app/Frontend/Components/PageThree/residence";
import Atout from "@/app/Frontend/Components/PageFour/atout";
import Tableau from "@/app/Frontend/Components/PageFive/tableau";
import Offre from "@/app/Frontend/Components/PageSix/offre";
import Virtuel from "@/app/Frontend/Components/image360/image3d";
import AboutUs from "@/app/Frontend/Components/PageSeven/aboutUs";
import Photos from "./Frontend/Components/imagesRésidence/pictures";
import InfoContact from "./Frontend/Components/pageEight/infoContact";

export default function Home() {
    return (
        <div>
            <Header />
            <Accueil />
            <Quartier />
            <Residence />
            <Atout />
            <Virtuel />
            <Photos />
            <Tableau />
            <Offre />
            <AboutUs />
            <InfoContact />
        </div>
    );
}