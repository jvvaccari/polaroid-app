import RotatingCard from "../../components/RotatingCard";
import BackContent from "../../components/RotatingCard/BackContent";
// import PolaroidFrontContent from "../../components/RotatingCard/PolaroidFrontContent";
import MainLayout from "../../layouts/main";
// import polaroidImage from "../../assets/imgTest.jpeg";
import coverImage from "../../assets/estrelaFlor.png";

import ImageItem from "../../components/ImageItem";
import CardCover from "../../components/RotatingCard/CardCover";

const testMarkdownContent = `
# Memórias de Verão

**Data:** 13 de julho, 2024

Esse dia foi especial. O sol brilhava forte, e o mar estava calmo como nunca vi antes.

> "As melhores memórias são aquelas que guardamos no coração."

---

**Detalhes do momento:**
- Local: Praia do Rosa
- Temperatura: 28°C
- Companhia: Amigos queridos

*Que esse momento fique guardado para sempre...*
`;

const MainPage = () => {
  return (
    <MainLayout sx={{ backgroundColor: "#212529" }}>
      <RotatingCard
        children={{
          front: (
            // <PolaroidFrontContent
            //   content={<ImageItem src={polaroidImage} alt={"Polaroid image"} />}
            // />
            <CardCover
              content={<ImageItem src={coverImage} alt={"Polaroid image"} />}
            />
          ),
          back: <BackContent content={testMarkdownContent} />,
        }}
      />
    </MainLayout>
  );
};

export default MainPage;
