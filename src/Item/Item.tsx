import Button from "@material-ui/core/Button";
// Types
import { CartItemType } from "../App";
// Styles
import { Wrapper } from "./Item.styles";

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

export const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
    <Wrapper>
        <img src={item.tittle} alt={item.tittle} />
        <div>
            <h3>{item.tittle}</h3>
            <p>{item.description}</p>
            <h3>{item.price}</h3>
        </div>
        <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
    </Wrapper>
)