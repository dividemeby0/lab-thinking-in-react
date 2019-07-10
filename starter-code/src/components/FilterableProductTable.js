import React, { Component } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import products from "../data.json";

export default class FilterableProductTable extends Component {
  state = {
    products: products.data,
    filteredData: []
  };

  filterProducts = filteredProducts => {
    this.setState({ filteredData: filteredProducts });
  };

  render() {
    return (
      <div>
        <SearchBar clbk={this.filterProducts} products={this.state.products} />
        {this.state.filteredData.length === 0 ? (
          <ProductTable
            clbk={this.filterProducts}
            products={this.state.products}
          />
        ) : (
          <ProductTable
            clbk={this.filterProducts}
            products={this.state.filteredData}
          />
        )}
      </div>
    );
  }
}
