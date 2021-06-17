import React from "react";

const SearchResultShow = (props) => {
  return props.result.map((item, i) => {
    return <div key={i}>{item.name}</div>;
  });
};

export default SearchResultShow;
