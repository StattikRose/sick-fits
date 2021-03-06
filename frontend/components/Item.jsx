import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import Title from "./styles/Title";
import PriceTag from "./styles/PriceTag";
import ItemStyles from "./styles/ItemStyles";
import formatMoney from "../lib/formatMoney";
import DeleteItemButton from "./DeleteItemButton";

export default class Item extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  render() {
    const { item } = this.props;
    return (
      <ItemStyles>
        {item.image && <img src={item.image} alt={item.title} />}
        <Title>
          <Link href={{ pathname: "/item", query: { id: item.id } }}>
            <a>{item.title}</a>
          </Link>
        </Title>
        <PriceTag>{formatMoney(item.price)}</PriceTag>
        <p>{item.description}</p>
        <div className="buttonList">
          <Link href={{ pathname: "update", query: { id: item.id } }}>
            <a>Edit</a>
          </Link>
          <button>Add to Cart</button>
          <DeleteItemButton id={item.id}>Delete Item</DeleteItemButton>
        </div>
      </ItemStyles>
    );
  }
}
