import RotatingCard from "../../components/RotatingCard";
import BackContent from "../../components/RotatingCard/BackContent";
import PolaroidFrontContent from "../../components/RotatingCard/PolaroidFrontContent";
import MainLayout from "../../layouts/main";
// import estrelaFlor from "../../assets/estrelaFlor.png";

import ImageItem from "../../components/ImageItem";
import { useEffect, useState } from "react";
import { IPolaroid } from "../../interfaces/IPolaroid";
import { polaroidService } from "../../services";

const MainPage = () => {
  const [polaroid, setPolaroid] = useState<IPolaroid | null>(null);

  useEffect(() => {
    async function fetchPolaroid() {
      try {
        const fetchPolaroid = await polaroidService.getPolaroidById(
          "691a8178d83563060e2f9307"
        );
        setPolaroid(fetchPolaroid);
        console.log("Fetched polaroid:", fetchPolaroid);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    }

    fetchPolaroid();
  }, []);
  return (
    <MainLayout sx={{ backgroundColor: "#212529" }}>
      <RotatingCard
        children={{
          front: (
            <PolaroidFrontContent
              content={
                <ImageItem src={polaroid?.imageUrl} alt={"Polaroid image"} />
              }
            />
            // <CardCover
            //   content={
            //     <ImageItem src={polaroid?.imageUrl} alt={"Polaroid image"} />
            //   }
            // />
          ),
          back: <BackContent content={polaroid?.backContent} />,
        }}
      />
    </MainLayout>
  );
};

export default MainPage;
