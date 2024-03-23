const CheckboxGrid = (props) => {
  //tags is a list of the available tag names
  if (!props.optionList) {
    return <h1>ERROR: no tags exist!</h1>;
  }

  //return a form with a bunch of different tags
  return (
    <form action="" className="tags">
      <div className="checkboxGrid">
        {props.optionList.map((tag, index) => (
          <div key={index} className="tag">
            <label>{tag}</label>
            <input id={tag} type="checkbox" onChange={props.onChange} />
          </div>
        ))}
      </div>
    </form>
  );
};

export default CheckboxGrid;
