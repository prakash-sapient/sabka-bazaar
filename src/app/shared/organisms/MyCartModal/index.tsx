import React from "react";
import { Modal, ModalProps, Button } from "react-bootstrap";
import "./style.scss";
import { BsX, BsChevronRight } from "react-icons/bs";
import styled from "styled-components";
import { CartItem } from "app/shared/molecules";
import { LowestPriceGuaranteeCard, NoDataFound } from "app/shared/atoms";

interface MyCartModalProps extends ModalProps {}

const MyCartModal: React.FC<MyCartModalProps> = (props) => {
  return (
    <Modal {...props} dialogClassName="my_cart_modal">
      <Modal.Header>
        <Modal.Title>My Cart (1 items)</Modal.Title>
        <button type="button" className="btn-close" aria-label="Close">
          <BsX size={30} />
        </button>
      </Modal.Header>
      <Modal.Body>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />

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
