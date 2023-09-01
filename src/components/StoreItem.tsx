import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utils/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const quantity = 1;
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between mb-4">
          <span className="fs-2">{name}</span>
          <span className="text-muted ms-2">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100">+ Add to cart</Button>
          ) : (
            <div
              className="d-flex flex-column align-items-center"
              style={{ gap: ".5rem" }}
            >
              <div style={{ gap: ".5rem" }}>
                <Button>-</Button>
                <span className="fs-5">{quantity}</span>in cart
                <Button>+</Button>
              </div>
              <Button variant="danger" size="sm">Remove</Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
