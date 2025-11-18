import RotatingCard from "../../components/RotatingCard";
import BackContent from "../../components/RotatingCard/PolaroidBackContent";
import PolaroidFrontContent from "../../components/RotatingCard/PolaroidFrontContent";
import MainLayout from "../../layouts/main";

import ImageItem from "../../components/ImageItem";
import CardCover from "../../components/RotatingCard/CardCover";
import { useApp } from "../../hooks/useApp";
import { useGetDailyChallenge } from "../../hooks/daily-challenge/use-get-daily-challenge";

const MainPage = () => {
  const { data: dailyChallenge, isError } = useGetDailyChallenge();
  const { handleMessage } = useApp();

  if (isError) {
    handleMessage("Erro ao carregar desafio diário", "error");
  }


  const handleSubmit = (answer: string) => {
    const isCorrect = parseInt(answer) === dailyChallenge?.keyNumber;

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
          front: dailyChallenge?.keyNumber ? (
            <PolaroidFrontContent
              content={
                <ImageItem src={dailyChallenge?.imageUrl} alt={"Polaroid image"} />
              }
            />
          ) : (
            <CardCover
              cover={
                <ImageItem src={dailyChallenge?.imageUrl} alt={"Polaroid image"} />
              }
            />
          ),
          back: (
            <BackContent
              content={dailyChallenge?.backContent}
              isOnlyContent={!!dailyChallenge?.keyNumber}
              handleSubmit={handleSubmit}
            />
          ),
        }}
      />
    </MainLayout>
  );
};

export default MainPage;
