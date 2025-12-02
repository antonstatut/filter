
const Toolbar = (props) => {
  const {
    filters,
    selected,
    onSelectFilter,
  } = props


  return (
    <div className="ToolBar">
      <button className="ToolBarButton">All</button>
      <button className="ToolBarButton">Websites</button>
      <button className="ToolBarButton">Flayers</button>
      <button className="ToolBarButton">Business Cards</button>
    </div>
  )
}

export default Toolbar