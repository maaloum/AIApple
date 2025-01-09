import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
import Error from "./Error";
import { fetchData, setFilters } from "../../features/data/data";

const FinancialTable = () => {
  const { loading, error } = useSelector((state) => state.FinancialData);
  const dispatch = useDispatch();

  const { filteredData, filters, sortConfig } = useSelector(
    (state) => state.FinancialData
  );

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFilters({ [name]: value }));
  };

  const handleSort = (key) => {
    dispatch({
      type: "financialData/setSortConfig",
      payload: {
        key,
        direction:
          sortConfig.direction === "ascending" ? "descending" : "ascending",
      },
    });
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div className=" p-4 ">
      <h1 className="text-xl font-bold mb-4 text-secondary text-center">
        Financial Data
      </h1>

      <div className="mb-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-zinc-500 p-3 rounded-lg ">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Start Date
          </label>
          <input
            type="date"
            name="startDate"
            value={filters.startDate || ""}
            onChange={handleFilterChange}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            End Date
          </label>
          <input
            type="date"
            name="endDate"
            value={filters.endDate || ""}
            onChange={handleFilterChange}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Min Revenue
          </label>
          <input
            type="number"
            name="minRevenue"
            value={filters?.minRevenue || ""}
            onChange={handleFilterChange}
            className="mt-1 block p-2 w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Max Revenue
          </label>
          <input
            type="number"
            name="maxRevenue"
            value={filters?.maxRevenue || ""}
            onChange={handleFilterChange}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Min Net Income
          </label>
          <input
            type="number"
            name="minNetIncome"
            value={filters?.minNetIncome || ""}
            onChange={handleFilterChange}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Max Net Income
          </label>
          <input
            type="number"
            name="maxNetIncome"
            value={filters?.maxNetIncome || ""}
            onChange={handleFilterChange}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
      </div>
      {/* <button
        onClick={() => dispatch(applyFilters())}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Apply Filters
      </button> */}
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-secondary text-white">
              <th
                className="px-4 py-2 border border-gray-300 cursor-pointer"
                onClick={() => handleSort("date")}
              >
                Date
              </th>
              <th
                className="px-4 py-2 border border-gray-300 cursor-pointer"
                onClick={() => handleSort("revenue")}
              >
                Revenue
              </th>
              <th
                className="px-4 py-2 border border-gray-300 cursor-pointer"
                onClick={() => handleSort("netIncome")}
              >
                Net Income
              </th>
              <th className="px-4 py-2 border border-gray-300">Gross Profit</th>
              <th className="px-4 py-2 border border-gray-300">EPS</th>
              <th className="px-4 py-2 border border-gray-300">
                Operating Income
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData?.map((item, index) => (
              <tr key={index} className="odd:bg-gray-100 even:bg-gray-200">
                <td className="px-4 py-2 border border-gray-300">
                  {item.date}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {item.revenue}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {item.netIncome}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {item.grossProfit}
                </td>
                <td className="px-4 py-2 border border-gray-300">{item.eps}</td>
                <td className="px-4 py-2 border border-gray-300">
                  {item.operatingIncome}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinancialTable;
