import ButtonCreateItem from "../buttonCreateItem/buttonCreateItem";
import { state } from "../../state/index";

const Buttons = () => {
  const elements = state.categoryList.map((item) => {
    const { id } = item;
    return <ButtonCreateItem key={id} item={item} />;
  });

  return <div className="flex flex-col">{elements}</div>;
};

export default Buttons;
