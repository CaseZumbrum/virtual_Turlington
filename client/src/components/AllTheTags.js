const AllTheTags = ({ tags }) => {
  //tags is a list of the available tag names
  if (!tags) {
    return <h1>ERROR: no tags exist!</h1>;
  }

  //return a form with a bunch of different tags
  return (
    <form action="" className="tags">
      <div className="tagGrid">
        {tags.map((tag, index) => (
          <div key={index} className="tag">
            <label>{tag}</label>
            <input key={tag} type="checkbox" />
          </div>
        ))}
      </div>
    </form>
  );
};

export default AllTheTags;
