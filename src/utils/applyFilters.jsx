const applyFilters = (data, filters) => {
  return data.filter((item) => {
    const {
      startDate,
      endDate,
      minRevenue,
      maxRevenue,
      minNetIncome,
      maxNetIncome,
    } = filters;

    const dateCheck =
      (!startDate || new Date(item.date) >= new Date(startDate)) &&
      (!endDate || new Date(item.date) <= new Date(endDate));

    const revenueCheck =
      (!minRevenue || item.revenue >= minRevenue) &&
      (!maxRevenue || item.revenue <= maxRevenue);

    const netIncomeCheck =
      (!minNetIncome || item.netIncome >= minNetIncome) &&
      (!maxNetIncome || item.netIncome <= maxNetIncome);

    return dateCheck && revenueCheck && netIncomeCheck;
  });
};

export default applyFilters;
