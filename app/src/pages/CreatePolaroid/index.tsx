import { Stack } from "@mui/material";
import Polaroid from "./components/Polaroid";
import CardCover from "./components/Polaroid/CardCover";
import PolaroidForm from "./components/Polaroid/PolaroidForm";
import { useEffect, useState } from "react";

const CreatePolaroid = () => {
  const [textContent, setTextContent] = useState("");
  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    console.log(textContent);
  }, [textContent])


  useEffect(() => {
    console.log(image);
  }, [image])

  return (
    <Stack sx={{
      justifyContent: "center",
      alignItems: "center",
      overflowY: "auto",
      height: "100vh",
    }}>

      <Polaroid
        children={{
          front: <CardCover imageFile={image} setImageFile={setImage}/>,
          back: <PolaroidForm setContent={(content) => setTextContent(content)} />,
        }}
      />
    </Stack>
  );
};

export default CreatePolaroid;
