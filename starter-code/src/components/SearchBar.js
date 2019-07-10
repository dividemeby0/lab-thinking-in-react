import React, { Component } from "react";

export default class SearchBar extends Component {
  searchFilter = evt => {
    this.props.clbk(
      this.props.products.filter(function(element) {
        return (
          element.name.toLowerCase().indexOf(evt.target.value.toLowerCase()) !==
          -1
        );
      })
    );
  };

  showStockedOnly = evt => {
    this.props.clbk(
      this.props.products.filter(function(element) {
        return element.stocked === true;
      })
    );
  };

  render() {
    // console.log(this.props.products.products.data);
    // // object with an array in it: this.props.products.products
    return (
      <div className="search-bar">
        <div>
          <label>Search</label>
          <input onChange={this.searchFilter} type="text" />
        </div>
        <div>
          <label>Only show products in stock</label>
          <input onChange={this.showStockedOnly} type="checkbox" />
        </div>
      </div>
    );
  }
}
