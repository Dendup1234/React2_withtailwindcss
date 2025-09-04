import PropTypes from "prop-types";

function List({ items = [], category = "Category" }) {
  const Itemlist = items;
  const category_item = category;
  // Sorting concept
  //fruits.sort((a, b) => a.name.localeCompare(b.name));
  //fruits.sort((a, b) => a.cal - b.cal);
  //Flitering
  //const lowCalories = fruits.filter((fruit) => fruit.cal < 100);
  const listfruits = Itemlist.map((item) => (
    <li key={item.id}>
      {item.name}: {item.cal}
    </li>
  ));

  return (
    <>
      <h3>{category_item}</h3>
      <ul>{listfruits}</ul>
    </>
  );
}
List.PropTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      cal: PropTypes.string,
    })
  ),
};

export default List;
