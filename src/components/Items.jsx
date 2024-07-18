import styles from "./Items.module.css";

export default function Items() {
  const ItemsNames = ["Milk", "Ghee", "Curd", "Roti", "Fruits", "Vegetables"];
  return (
    <>
      <ol className={`${styles["sb-item"]} list-group list-group-numbered`}>
        {ItemsNames.map((ItemsName) => (
          <li className="list-group-item" key={ItemsName}>
            {ItemsName}
            <button type="button" className="btn btn-outline-success float-end" onClick={() => console.log(`${ItemsName} being bought`)}>Buy</button>
          </li>
        ))}
      </ol>
    </>
  );
}
