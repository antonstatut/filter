
const Toolbar = (props) => {
  const { 
    filters, 
    selected, 
    onSelectFilter 
  } = props
  return (
    <div className="ToolBar">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onSelectFilter(filter)}
          className={filter === selected ? 'ToolBarButton active' : 'ToolBarButton'}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Toolbar;