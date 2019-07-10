import React from "react";
import ProductRow from "./ProductRow";

export default function ProductTable(props) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <ProductRow products={props.products} />
      </table>
    </div>
  );
}
