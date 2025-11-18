import RotatingCard from "../../components/RotatingCard";
import BackContent from "../../components/RotatingCard/PolaroidBackContent";
import PolaroidFrontContent from "../../components/RotatingCard/PolaroidFrontContent";
import MainLayout from "../../layouts/main";
import ImageItem from "../../components/ImageItem";
import CardCover from "../../components/RotatingCard/CardCover";
import { useApp } from "../../hooks/useApp";
import { useGetDailyChallenge } from "../../hooks/daily-challenge/use-get-daily-challenge";
import { useEffect } from "react";

const MainPage = () => {
  const { data: dailyChallenge, isError, refetch } = useGetDailyChallenge();
  const { handleMessage } = useApp();

  useEffect(() => {
    if (isError) {
      handleMessage("Erro ao carregar desafio diário", "error");
    }
  }, [isError, handleMessage]);

  useEffect(() => {
    const checkMidnight = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);
      const timeUntilMidnight = midnight.getTime() - now.getTime();

      const timer = setTimeout(() => {
        refetch();
        checkMidnight();
      }, timeUntilMidnight);

      return () => clearTimeout(timer);
    };

    const cleanup = checkMidnight();

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        const lastCheck = localStorage.getItem('lastChallengeDate');
        const today = new Date().toDateString();
        
        if (lastCheck !== today) {
          refetch();
          localStorage.setItem('lastChallengeDate', today);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      cleanup();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [refetch]);

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
