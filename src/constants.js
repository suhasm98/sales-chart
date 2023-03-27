export const lineChartConfig = {
  title: {
    text: "Step 2 Line-Chart",
    align: "center"
  },
  credits: {
    enabled: false
  },
  yAxis: {
    title: {
      text: "Sales"
    }
  },
  xAxis: {
    categories: [
      2010,
      2011,
      2012,
      2013,
      2014,
      2015,
      2016,
      2017,
      2018,
      2019,
      2020
    ]
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle"
  },
  tooltip: {
    enabled: false
  },
  series: [
    {
      marker: {
        enabled: false
      },
      name: "Sum of sales",
      data: [
        13894163,
        15710758,
        16854413,
        16723019,
        17972595,
        17686790,
        17910320,
        18448033,
        20351620,
        21018395,
        18952091
      ]
    }
  ]
};

export const threeDBarChartConfig = {
  title: {
    text: "Step 3 3D-BarCharts",
    align: "center"
  },
  credits: {
    enabled: false
  },
  chart: {
    renderTo: "container",
    type: "column",
    options3d: {
      enabled: true,
      alpha: 25,
      beta: 0,
      depth: 20,
      viewDistance: 25
    }
  },
  tooltip: {
    enabled: false
  },
  xAxis: {
    categories: [
      "Aerospace & Defence",
      "Aerospace & Defence",
      "Alternative Energy",
      "Automobiles & Parts",
      "Banks",
      "Beverages",
      "Biotechnology",
      "Chemicals",
      "Commercial Vehicles & Trucks",
      "Computer Hardware",
      "Computer Services",
      "Construction & Materials",
      "Electrical equipment",
      "Electricity",
      "Electronic & Electrical equipment",
      "Electronic Equipment",
      "Equity Investment Instruments",
      "Financial Services",
      "Fixed Line Telecommunications",
      "Food & Drug Retailers",
      "Food Producers",
      "Forestry & Paper",
      "Gas & Water",
      "General Industrials",
      "General Retailers",
      "Health care equipment & services",
      "Household Goods & Home Construction",
      "Industrial Engineering",
      "Industrial Machinery",
      "Industrial Metals & Mining",
      "Industrial Transportation",
      "Internet",
      "Leisure goods",
      "Life Insurance",
      "Media",
      "Mining",
      "Mobile Telecommunications",
      "Nonequity Investment Instruments",
      "Nonlife Insurance",
      "Oil & Gas Producers",
      "Oil Equipment, Services & Distribution",
      "Other Financials",
      "Personal & Household Goods",
      "Personal Goods",
      "Pharmaceuticals",
      "Real Estate Investment & Services",
      "Semiconductors",
      "Software & Computer Services",
      "Support Services",
      "Technology Hardware & Equipment",
      "Telecommunications",
      "Telecommunications equipment",
      "Tobacco",
      "Toys",
      "Travel & Leisure"
    ]
  },
  yAxis: {
    title: {
      enabled: false
    }
  },

  legend: {
    enabled: false
  },
  plotOptions: {
    column: {
      depth: 25
    }
  },
  series: [
    {
      data: [
        387409.19,
        7448.61,
        1272000.78,
        734744.65,
        270453.22,
        -192361.37,
        831481.68,
        176.12,
        278.72,
        186.04,
        547897.81,
        -6388536.47,
        375453.87,
        87839.7,
        881345,
        501.16,
        121156.6,
        634079.03,
        34696.08,
        520213.44,
        44341.52,
        148021.42,
        492844.22,
        96992.93,
        349139.78,
        312967.42,
        711255.49,
        474.68,
        204347.11,
        47529.18,
        330.98,
        169787.6,
        -101948.58,
        69243.33,
        348291.4,
        74370.11,
        381.3,
        854.51,
        2234612.27,
        189720.33,
        5651.47,
        708,
        311169.28,
        1407476.6,
        55731.2,
        1333.28,
        1381336.74,
        125623.88,
        1704326.66,
        73.86,
        -78.41,
        296930.9,
        105.49,
        162434.04
      ],
      colorByPoint: false
    }
  ]
};
