import RotatingCard from "../../components/RotatingCard";
import BackContent from "../../components/RotatingCard/PolaroidBackContent";
import PolaroidFrontContent from "../../components/RotatingCard/PolaroidFrontContent";
import MainLayout from "../../layouts/main";

import ImageItem from "../../components/ImageItem";
import { useEffect, useState } from "react";
import { IPolaroid } from "../../interfaces/IPolaroid";
import { dailyChallengeService } from "../../services";
import CardCover from "../../components/RotatingCard/CardCover";
import { useApp } from "../../hooks/useApp";

const MainPage = () => {
  const [polaroid, setPolaroid] = useState<IPolaroid | null>(null);
  const { handleMessage } = useApp();

  useEffect(() => {
    async function fetchPolaroid() {
      try {
        const fetchPolaroid = await dailyChallengeService.getDailyChallenge();
        setPolaroid(fetchPolaroid);
        console.log("Fetched polaroid:", fetchPolaroid);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    }

    fetchPolaroid();
  }, []);

  const handleSubmit = (answer: string) => {
    const isCorrect = parseInt(answer) === polaroid?.keyNumber;

    if (isCorrect) {
      handleMessage("Resposta certa!", "success");
      return;
    }

    handleMessage("Resposta errada!", "error");
  };

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
              handleSubmit={handleSubmit}
            />
          ),
        }}
      />
    </MainLayout>
  );
};

export default MainPage;
