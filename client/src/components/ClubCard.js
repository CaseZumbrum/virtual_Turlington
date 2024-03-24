import { convertIntToDay } from "../help/DataConversions";

const ClubCard = ({ club }) => {
  const createCommaSeparatedList = (array) => {
    let names = array.join(", ");
    return <p>{names}</p>;
  };

  return (
    <div className="club-card">
      <h1>{club.name}</h1>
      <p>
        <strong>Tags: </strong>
        {club.tags.join(", ")}
      </p>
      <p>{club.info}</p>
      {club.PM ? (
        <p>
          <strong>Starting Time: </strong> {club.meetStart} PM
        </p>
      ) : (
        <p>
          <strong>Starting Time: </strong> {club.meetStart} AM
        </p>
      )}

      <p>
        <strong>Duration: </strong> {club.meetLength} min.
      </p>
      <p>
        <strong>Meeting Days: </strong>
        {club.day.map((d) => convertIntToDay(d)).join(", ")}
      </p>
      <p>
        <strong>Links: </strong>
        {club.links.map((link, index) => (
          <li key={index}>
            <a href={link}>link text LOL</a>
          </li>
        ))}
      </p>
      {club.app ? <p>Application Required!</p> : null}
      <p></p>
    </div>
  );
};

export default ClubCard;
