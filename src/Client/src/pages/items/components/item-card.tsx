import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { ItemModel } from "../models/item-model";

export interface Props {
  Item: ItemModel;
}

export const ItemCard: React.FC<Props> = (props: Props) => (
  <div className="item-container">
    <img src={props.Item.imagePath} alt={props.Item.name} />
    <div className="item-info">
      <div className="item-header">
        <h3>{props.Item.name}</h3>
        <FontAwesomeIcon icon={faTimesCircle} />
      </div>
      {props.Item.description}
    </div>
  </div>
);
