import RotatingCard from "../../components/RotatingCard";
import BackContent from "../../components/RotatingCard/PolaroidBackContent";
import PolaroidFrontContent from "../../components/RotatingCard/PolaroidFrontContent";
import MainLayout from "../../layouts/main";

import ImageItem from "../../components/ImageItem";
import { useEffect, useState } from "react";
import { IPolaroid } from "../../interfaces/IPolaroid";
import { polaroidService } from "../../services";
import CardCover from "../../components/RotatingCard/CardCover";

const MainPage = () => {
  const [polaroid, setPolaroid] = useState<IPolaroid | null>(null);

  useEffect(() => {
    async function fetchPolaroid() {
      try {
        const fetchPolaroid = await polaroidService.getPolaroidById(
          "691b4707e807dabff5361546"
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
    <MainLayout sx={{ backgroundColor: "primary.dark" }}>
      <RotatingCard
        children={{
          front: polaroid?.keyNumber ? (
            <PolaroidFrontContent
              content={
                <ImageItem src={polaroid?.imageUrl} alt={"Polaroid image"} />
              }
            />
          ) : (
            <CardCover
              cover={
                <ImageItem src={polaroid?.imageUrl} alt={"Polaroid image"} />
              }
            />
          ),
          back: (
            <BackContent
              content={polaroid?.backContent}
              isOnlyContent={!!polaroid?.keyNumber}
            />
          ),
        }}
      />
    </MainLayout>
  );
};

export default MainPage;
