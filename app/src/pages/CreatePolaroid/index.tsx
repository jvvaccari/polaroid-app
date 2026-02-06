import Polaroid from "./components/Polaroid";
import CardCover from "./components/Polaroid/CardCover";
import PolaroidForm from "./components/Polaroid/PolaroidForm";

const CreatePolaroid = () => {
  return (
    <Polaroid
      children={{
        front: <CardCover />,

        back: <PolaroidForm />,
      }}
    />
  );
};

export default CreatePolaroid;
