import React from "react";

const SearchResultShow = (props) => {
  const trs = props.result.map((item, i) => {
    return (
      <tr key={i}>
        <td>{item.id}</td>
        <td>{item.name}</td>
      </tr>
    );
  });

  return (
    <table>
      <tbody>{trs}</tbody>
    </table>
  );
};

export default SearchResultShow;
