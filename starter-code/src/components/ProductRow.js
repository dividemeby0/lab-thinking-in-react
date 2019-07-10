import React from "react";

export default function ProductRow(props) {
  return (
    <tbody>
      {props.products.map((product, i) => (
        <tr key={i}>
          {product.stocked === false ? (
            <td className="not-stocked">{product.name}</td>
          ) : (
            <td>{product.name}</td>
          )}
          <td>{product.price}</td>
        </tr>
      ))}
    </tbody>
  );
}
