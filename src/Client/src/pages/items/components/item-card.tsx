import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { ItemModel } from "../models/item-model";
import styles from "../styles/item-card.module.css";

export interface Props {
  Item: ItemModel;
}

export const ItemCard: React.FC<Props> = (props: Props) => (
  <div className={styles.container}>
    <img src={props.Item.imagePath} alt={props.Item.name} />
    <div className={styles.info}>
      <div className={styles.header}>
        <h3>{props.Item.name}</h3>
        <span>
          <FontAwesomeIcon icon={faTimesCircle} />
        </span>
      </div>
      {props.Item.description}
    </div>
  </div>
);
