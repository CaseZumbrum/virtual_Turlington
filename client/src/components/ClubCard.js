import { convertIntToDay } from "../help/DataConversions";

const ClubCard = ({ club }) => {
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
        {club.links.length > 0 ? <strong>Links: </strong> : null}
        {club.links.map((l, index) => (
          <li key={index}>
            <a href={l.Link}>{l.Site}</a>
          </li>
        ))}
      </p>

      {club.app ? (
        <p>Application Required: Yes</p>
      ) : (
        <p>Application Required: No</p>
      )}
    </div>
  );
};

export default ClubCard;
