import { ShoppingBasket } from "lucide-react";
import { Button } from "./ui/button";

const CartButton = () => {
  return (
    <>
      <Button variant="default">
        <span>0</span>
        <ShoppingBasket />
      </Button>
    </>
  );
};

export default CartButton;
