import axios from "axios"
import { useEffect, useState } from "react";
import SearchBox from "./components/SearchBox";
import Cards from "./components/Cards";
import { Link } from "react-router-dom"


function App() {

  const [categories, setCategories] = useState([]);

const apifetch = async () => {
  try {
    const response = await axios(`https://www.omdbapi.com/?t=transformers&apikey=a5ef1268`);
    setCategories([response.data]); // Assuming the response.data is an array, otherwise adjust accordingly
    console.log(response.data, "response");
  } catch (error) {
    console.log(error.message);
  }
}

useEffect(() => {
  apifetch();
}, []);

return (
  <>
    <div className="main">
      <h1>Movies</h1>
      <div style={{ textAlign: "center", margin: "3rem" }}>
        <SearchBox />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {Array.isArray(categories) &&
          categories.map((item) => {
            return (
              <Cards key={item.id} data={item} />
            );
          })}
      </div>
    </div>
  </>
);
}

export default App
