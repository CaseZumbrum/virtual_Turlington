import { convertIntToDay } from "../help/DataConversions";
import { ClubPromotion } from "./ClubPromotion";
const ClubCard = ({ club }) => {
  return <ClubPromotion club={club} isPromotion={"false"} />;
};

export default ClubCard;
