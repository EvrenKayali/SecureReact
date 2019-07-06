import React from "react";
import { ItemCard } from "./item-card";
import { ItemModel } from "../models/item-model";

export interface Props {
  items: ItemModel[];
}

export const ItemList: React.FC<Props> = (props: Props) => {
  return (
    <section className="items-wrapper">
      {props.items.map(i => (
        <ItemCard Item={i} key={i.id} />
      ))}
    </section>
  );
};
