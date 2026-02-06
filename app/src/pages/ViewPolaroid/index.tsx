import { Stack } from "@mui/material";
import ImageItem from "../../components/ImageItem";

import Polaroid from "./components/Polaroid";
import CardCover from "./components/Polaroid/CardCover";
import BackContent from "./components/Polaroid/PolaroidBackContent";

const ViewPolaroid = () => {
  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        overflowY: "auto",
        height: "100vh",
      }}>

      <Polaroid
        faces={{
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
    </Stack>
  );
};

export default ViewPolaroid;
