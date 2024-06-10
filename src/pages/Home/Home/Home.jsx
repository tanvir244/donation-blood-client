import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Featured from "../Featured/Featured";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Featured></Featured>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;