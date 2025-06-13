import { salesData } from './data.js';

function generateReport(data) {
  let totalSales = 0;
  const regionWiseSales = {};

  data.forEach(sale => {
    totalSales += sale.amount;

    if (!regionWiseSales[sale.region]) {
      regionWiseSales[sale.region] = sale.amount;
    } else {
      regionWiseSales[sale.region] += sale.amount;
    }
  });

  console.log("📊 Sales Report Generator");
  console.log("==========================");
  console.log("Total Sales: ₹", totalSales);
  console.log("Sales by Region:");
  for (const region in regionWiseSales) {
    console.log(`- ${region}: ₹${regionWiseSales[region]}`);
  }
}

generateReport(salesData);
