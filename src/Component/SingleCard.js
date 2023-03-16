import React from "react";
import {
  CardImg,
  CardTitle,
  Row,
  Col,
  Card,
  CardText,
  Button,
} from "reactstrap";

const SingleCard = (props) => {
  return (
    <Row className="my-3">
      <Col xl={10}>
        <Card>
          <CardTitle
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
            className="text-center m-3 h5"
          >
            {props.title}
          </CardTitle>
          <CardImg className="p-2" width={70} height={220} src={props.image} />
          <CardText className="mx-3 text-primary font-weight-bold border-bottom">
            {props.category}
          </CardText>
          {/* <CardText style={{
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 3,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }} className="mx-3">{props.description}</CardText> */}
          <CardText className="mx-3 text-secondary">
            Stock : {props.count}
          </CardText>
          <CardText className="mx-3 text-secondary">
            Price : ${props.price}
          </CardText>
          <Button onClick={props.handleClick} className="btn btn-danger">
            ADD TO CART
          </Button>
        </Card>
      </Col>
    </Row>
  );
};

export default SingleCard;
