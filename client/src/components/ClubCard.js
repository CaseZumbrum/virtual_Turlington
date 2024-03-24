const ClubCard = ({ club }) => {
  const createCommaSeparatedList = (array) => {
    let names = array.join(", ");
    return <p>{names}</p>;
  };

  const convertIntToDay = (n) => {
    switch (n) {
      case 0:
        return "Monday";
      case 1:
        return "Tuesday";
      case 2:
        return "Wednesday";
      case 3:
        return "Thursday";
      case 4:
        return "Friday";
      case 5:
        return "Saturday";
      case 6:
        return "Sunday";
      default:
        return "Invalid day";
    }
  };

  return (
    <div className="club-card">
      <h1>{club.name}</h1>
      <p>
        <strong>Tags:</strong>
        {createCommaSeparatedList(club.tags)}
      </p>
      <p>{club.info}</p>
      {club.PM ? (
        <p>
          <strong>Starting Time:</strong> {club.meetStart} PM
        </p>
      ) : (
        <p>
          <strong>Starting Time:</strong> {club.meetStart} AM
        </p>
      )}

      <p>
        <strong>Duration:</strong> {club.meetLength} min.
      </p>
      <p>
        <strong>Meeting Days:</strong>
        {/* createCommaSeparatedList(club.days) */}
      </p>
      <p>
        <strong>Links:</strong>
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
