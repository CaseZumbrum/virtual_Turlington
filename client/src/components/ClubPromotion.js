import { convertIntToDay } from "../help/DataConversions";
import title from "../index.css";
import subTitle from "../index.css";
import subBox from "../index.css";
import body from "../index.css";

const ClubPromotion = ({ club, isPromotion }) => {
  const createCommaSeparatedList = (array) => {
    let names = array.join(", ");
    return <p>{names}</p>;
  };
  const c = "club-promotion " + isPromotion;
  console.log(club);
  return (
    <div className={c}>
      <div className="title">{club.name}</div>
      <div className="subTitle">
        <strong>Tags: </strong>
        {club.tags.join(", ")}
      </div>
      <div className="subBox">
        <div className="body">
          {" "}
          <strong> Info: </strong>
          {club.info}
        </div>
      </div>

      <div className="subBox">
        {club.PM ? (
          <div className="body">
            <strong>Starting Time: </strong> {club.meetStart} PM
          </div>
        ) : (
          <div className="body">
            <strong>Starting Time: </strong> {club.meetStart} AM
          </div>
        )}

        <div className="body">
          <strong>Duration: </strong> {club.meetLength} min.
        </div>
      </div>

      <div className="body">
        <strong>Meeting Days: </strong>
        {club.day.map((d) => convertIntToDay(d)).join(", ")}
      </div>

      {club.app ? (
        <div className="subTitle">Application Required!</div>
      ) : (
        <div className="subTitle">NO Application Required!</div>
      )}

      <div className="body">
        <div className="flex-container">
          {club.links.length > 0
            ? club.links.map((link, index) => (
                <div className="body" key={index}>
                  <div>
                    <a href={link.Link}>{link.Site}</a>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default ClubPromotion;
