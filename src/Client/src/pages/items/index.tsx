import React from "react";
import { ItemList } from "./components/item-list";
import { ItemModel } from "./models/item-model";

export interface State {
  items: ItemModel[];
}

export class Items extends React.Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      items: []
    };
  }

  componentDidMount() {
    this.fetchItems();
  }

  fetchItems = () => {
    const uri = "https://localhost:5001/api/items";

    fetch(uri)
      .then(response => response.json())
      .then(result => {
        const items = result.map((item: ItemModel) => item);
        this.setState({ items });
      });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Item List</h1>
        <ItemList items={this.state.items} />
      </React.Fragment>
    );
  }
}
