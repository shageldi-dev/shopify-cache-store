import { useState } from "react";
import useDevice from "../../hooks/useDevice";
import { SearchProps } from "./Header";
import "./searchbox.css";

const SearchBox = (props: SearchProps) => {
  const device = useDevice();
  const [name, setName] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTimeout(() => {
      props.onSearchChange(name);
    }, 500);
  };
  return (
    <form className={`search-box ${device}`} onSubmit={handleSubmit}>
      <img src="/bx_search-alt.svg" />
      <input
        type="search"
        placeholder="Search by product title..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </form>
  );
};

export default SearchBox;
