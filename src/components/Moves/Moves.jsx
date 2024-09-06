

import MoveCard from "./MoveCard/MoveCard";
import { Navbars } from "../Shared/Navbars/Navbars";
import MovesSlider from "./MovesSlider/MovesSlider";

const Moves = () => {
  return (
    <div>
      <Navbars />
      <MovesSlider/>
      <MoveCard />
    </div>
  );
};

export default Moves;
