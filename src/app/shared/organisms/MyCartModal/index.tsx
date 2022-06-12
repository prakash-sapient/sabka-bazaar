import React from "react";
import { Modal, ModalProps, Button } from "react-bootstrap";
import "./style.scss";
import { BsX, BsChevronRight } from "react-icons/bs";
import styled from "styled-components";
import { CartItem } from "app/shared/molecules";
import { LowestPriceGuaranteeCard, NoDataFound } from "app/shared/atoms";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "app/store/store";
import { MY_CART } from "app/store/slices/action.type";
import { toggleCartModal } from "app/store/slices/my-cart.slice";

interface MyCartModalProps extends ModalProps {}

const MyCartModal: React.FC<MyCartModalProps> = (props) => {
  const dispatch = useDispatch();
  const toggleCart = () => dispatch(toggleCartModal());
  const { showCartModal, items, count } = useSelector(
    (state: RootState) => state[MY_CART]
  );
  return (
    <Modal {...props} dialogClassName="my_cart_modal" show={showCartModal}>
      <Modal.Header>
        <Modal.Title>My Cart ({count} items)</Modal.Title>
        <button
          onClick={toggleCart}
          type="button"
          className="btn-close"
          aria-label="Close"
        >
          <BsX size={30} />
        </button>
      </Modal.Header>
      <Modal.Body>
        {items.length &&
          items.map((elem, index) => (
            <CartItem key={`my_cart_item_${elem.id}`} {...elem} />
          ))}

        {/* <NoDataFound /> */}

        <LowestPriceGuaranteeCard />
      </Modal.Body>
      <Modal.Footer>
        <PromoCodeTagLine>
          Promo code can be applied on payment page
        </PromoCodeTagLine>
        <Button variant="primary" className="btn-checkout">
          <span>Proceed to Checkout</span>
          <span>
            Rs.187 <BsChevronRight />
          </span>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyCartModal;

const PromoCodeTagLine = styled.p`
  text-align: center;
  font-weight: 500;
`;
