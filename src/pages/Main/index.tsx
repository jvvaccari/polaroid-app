import RotatingCard from "../../components/RotatingCard";
import BackContent from "../../components/RotatingCard/BackContent";
import FrontContent from "../../components/RotatingCard/FrontContent";
import MainLayout from "../../layouts/main";
import polaroidImage from '../../assets/imgTest.jpeg';
import ImageItem from "../../components/ImageItem";

const MainPage = () => {
    return (
        <MainLayout sx={{ backgroundColor: "#212529" }}>
            <RotatingCard
                children={{
                    front: <FrontContent content={<ImageItem src={polaroidImage} alt={"Polaroid image"} />} />,
                    back: <BackContent content={"Back content"} />,
                }}
            />
        </MainLayout>
    );
};

export default MainPage;
