import React, { createContext, useState } from 'react'

export const Context = createContext();

const WrapperContext = (props) => {
  const [title, setTitle] = useState([
    "Trending Now",
    "Popular on Streamify",
    "Top Picks for You",
    "New Releases",
    "Must-Watch Shows",
  ]);

  return (
    <Context.Provider value={{ title }}>
      {props.children}
    </Context.Provider>
  );
};

export default WrapperContext;
