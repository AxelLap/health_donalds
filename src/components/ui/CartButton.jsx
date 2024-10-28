import { Button } from "./button";

import Image from "next/image";
import shoppingBasket from "../../assets/shopping-basket.svg";

const CartButton = () => {
  return (
    <Button variant="secondary">
      <span>0</span>
      <Image
        src={shoppingBasket}
        alt="Shopping Basket"
        width={15}
        height={15}
      />
    </Button>
  );
};

export default CartButton;
