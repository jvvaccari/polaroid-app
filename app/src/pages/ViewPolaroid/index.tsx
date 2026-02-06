import ImageItem from "../../components/ImageItem";

import RotateCard from "./components/RotateCard";
import CardCover from "./components/RotateCard/CardCover";
import BackContent from "./components/RotateCard/PolaroidBackContent";

const ViewPolaroid = () => {
  return (
    <RotateCard
      children={{
        front: (
          <CardCover
            cover={
              <ImageItem
                src={"https://rounder.pics/assets/img/ui/square-image.webp"}
                alt={"Polaroid cover image"}
              />
            }
          />
        ),

        back: (
          <BackContent
            content={
              "Conteudo de exemplo para teste da polaroid com fotinho de cachorro."
            }
            isOnlyContent={true}
          />
        ),
      }}
    />
  );
};

export default ViewPolaroid;
