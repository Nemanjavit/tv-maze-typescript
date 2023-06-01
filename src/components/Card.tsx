import { FunctionComponent } from "react";
import { ShowsT } from "../types/common";

type CardT = {
  show: ShowsT;
};

const Card: FunctionComponent<CardT> = ({ show }) => {
  return (
      <div className="showCard h-100 w-100">
        <div className="showCard-body h-100 w-100">
          <div className="image-wrapper h-100 w-100">
            <img className="h-100 w-100 showCard-image" src={show.image.original} alt="" />
          </div>
        </div>
      </div>
  );
};
export default Card;
