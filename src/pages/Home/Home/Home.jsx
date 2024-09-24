import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Featured from "../Featured/Featured";
import Footer from "../Footer/Footer";
import ProjectOverviewHome from "../ProjectOverviewHome/ProjectOverviewHome";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <ProjectOverviewHome />
            <Featured></Featured>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;