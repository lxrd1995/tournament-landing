const TabsRow = (props) => {
  return (
    <div className="string-item">
      <div className="row__first-stats">
        <p>{props.num}</p>
        <p>{props.name}</p>
      </div>
      <div className='row__second-stats'> 
        <p>{props.score}</p>
        <p>{props.match}</p>
      </div>
    </div>
  );
};

export default TabsRow;
