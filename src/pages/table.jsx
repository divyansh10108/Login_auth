import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router"
function Table(props) {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const router = useRouter();

  useEffect(() => {
  async function fetchData() {
    try {
      // if(!props.token){
      //   router.push("/")
      // }
      const response = await fetch(
        "https://frontendtestapi.staging.fastjobs.io/data",
        {
          headers: {
            Authorization: `Bearer ${props.token}`,
          },
          credentials: "include"
        }
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error(error);
      // Redirect to "/" in case of error
      router.push("/");
    }
  }

  fetchData();
}, [props.token]);

  const handleSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };
 
  const sortedData = () => {
    if (!Array.isArray(data) || !data.length) {
      return [];
    }
    let sortedData = [...data];
    if (sortConfig !== null) {
      sortedData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortedData;
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = sortedData().filter(
    (item) =>
      item.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.last_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl items-left font-bold mb-2">Graphic Design</h1>
      <hr className="border-gray-400 mb-4 w-full" />
      <div className="w-3/4 flex flex-col items-center">
        <div class="w-full md:w-1/3 flex items-center border-b border-gray-300 py-2">
    <div class="w-full relative">
      <span class="absolute inset-y-0 left-0 flex items-center pl-3">
        <FaSearch 
          color="gray"
        />
      </span>
      <input
        type="text"
        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 pl-8 leading-tight focus:outline-none"
        placeholder="Search by first name or last name"
        onChange={handleSearch}
      />
      <div class="border-b border-gray-500 absolute bottom-0 w-full"></div>
    </div>
  </div>
        <table className="w-full">
          <thead>
            <tr>
              <th
                className="cursor-pointer"
                onClick={() => handleSort("first_name")}
              >
                First name
              </th>
              <th
                className="cursor-pointer"
                onClick={() => handleSort("last_name")}
              >
                Last name
              </th>
              <th
                className="cursor-pointer"
                onClick={() => handleSort("email")}
              >
                @ Email
              </th>
              <th
                className="cursor-pointer"
                onClick={() => handleSort("gender")}
              >
                Gender
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr
                key={item.id}
                className={`${index % 2 === 0 ? "bg-gray-100" : ""} animate-slideUpCubiBezier animation-delay-2`}
              >
                <td className="p-4">{item.first_name}</td>
                <td className="p-4">{item.last_name}</td>
                <td className="p-4">{item.email}</td>
                <td className="p-4">{item.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
