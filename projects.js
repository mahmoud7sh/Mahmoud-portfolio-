/* projects.js: the list of projects shown in the Projects section of index.html.
   Edit by hand, or use studio.html to add/edit projects and download an updated copy of this file.
   statusType: "done" (green dot) or "progress" (accent dot).  featured: true = large card with gallery.
   Text in "points" can use **bold**.  Images live in assets/<project-id>/full and assets/<project-id>/thumb. */
window.PROJECTS = [
  {
    "id": "hospital",
    "title": "California Hospital Network Performance & Utilization Intelligence",
    "subtitle": "Power BI · Healthcare Network Analytics",
    "status": "Completed",
    "statusType": "done",
    "featured": true,
    "summary": "An 11-page Power BI report analyzing California hospital utilization data across 501 hospitals and 55 counties. The project explores capacity pressure, emergency demand, patient flow, service readiness, and reported capital investment. Findings are descriptive and do not imply causation or clinical quality.",
    "stats": [
      {
        "v": "501",
        "l": "Hospitals"
      },
      {
        "v": "55",
        "l": "Counties"
      },
      {
        "v": "11",
        "l": "Report pages"
      },
      {
        "v": "≈100",
        "l": "DAX measures"
      }
    ],
    "points": [
      "**Capacity pressure:** 85 hospitals reported occupancy of 85% or more; 10 exceeded 100% of licensed bed-days and were retained and flagged.",
      "**Emergency pressure:** 10 hospitals combined occupancy of at least 85% with ambulance diversion; Los Angeles County accounted for about 60% of reported diversion hours.",
      "**Patient flow:** Acute-care average length of stay was 5.6 days after separating the effect of long-stay facilities.",
      "**Data quality:** Missing service availability was kept distinct from a reported 'No', and total values were not added to their component fields."
    ],
    "tags": [
      "Power BI",
      "DAX",
      "Power Query",
      "Healthcare Analytics",
      "Star Schema",
      "Data Quality"
    ],
    "links": [
      {
        "label": "View on GitHub",
        "url": "https://github.com/mahmoud7sh/California-Hospital-Network-Performance-Intelligence-Analytics"
      },
      {
        "label": "Read report PDF",
        "url": "https://github.com/mahmoud7sh/California-Hospital-Network-Performance-Intelligence-Analytics/blob/main/Report/California%20Hospital%20Network%20-%20Performance%20Intelligence.pdf"
      }
    ],
    "images": [
      {
        "src": "assets/hospital/full/01_overview.webp",
        "thumb": "assets/hospital/thumb/01_overview.webp",
        "cap": "Executive overview",
        "label": "Overview"
      },
      {
        "src": "assets/hospital/full/02_network.webp",
        "thumb": "assets/hospital/thumb/02_network.webp",
        "cap": "Hospital network",
        "label": "Network"
      },
      {
        "src": "assets/hospital/full/03_capacity.webp",
        "thumb": "assets/hospital/thumb/03_capacity.webp",
        "cap": "Capacity and occupancy",
        "label": "Capacity"
      },
      {
        "src": "assets/hospital/full/04_patient_flow.webp",
        "thumb": "assets/hospital/thumb/04_patient_flow.webp",
        "cap": "Patient flow",
        "label": "Patient flow"
      },
      {
        "src": "assets/hospital/full/05_emergency.webp",
        "thumb": "assets/hospital/thumb/05_emergency.webp",
        "cap": "Emergency department",
        "label": "Emergency"
      },
      {
        "src": "assets/hospital/full/06_pressure.webp",
        "thumb": "assets/hospital/thumb/06_pressure.webp",
        "cap": "Network pressure index",
        "label": "Pressure"
      },
      {
        "src": "assets/hospital/full/07_ic_surgery.webp",
        "thumb": "assets/hospital/thumb/07_ic_surgery.webp",
        "cap": "Intensive care and surgery",
        "label": "IC & surgery"
      },
      {
        "src": "assets/hospital/full/08_cardio_clinical.webp",
        "thumb": "assets/hospital/thumb/08_cardio_clinical.webp",
        "cap": "Cardiovascular and clinical programs",
        "label": "Clinical"
      },
      {
        "src": "assets/hospital/full/09_investment.webp",
        "thumb": "assets/hospital/thumb/09_investment.webp",
        "cap": "Equipment and capital investment",
        "label": "Investment"
      },
      {
        "src": "assets/hospital/full/10_services.webp",
        "thumb": "assets/hospital/thumb/10_services.webp",
        "cap": "Facility services",
        "label": "Services"
      },
      {
        "src": "assets/hospital/full/11_methodology.webp",
        "thumb": "assets/hospital/thumb/11_methodology.webp",
        "cap": "Methodology and data quality",
        "label": "Methodology"
      }
    ],
    "gallery": [
      1,
      2,
      3,
      4
    ]
  },
  {
    "id": "call-center-performance-customer-experience-analytics",
    "title": "Call Center Performance & Customer Experience Analytics",
    "subtitle": "Power BI · Call Center Performance Analytics.",
    "status": "Completed Project",
    "statusType": "done",
    "featured": true,
    "summary": "This project delivers an interactive Power BI solution for analyzing call center operations and customer experience using 32,941 call records.\n\nThe dashboard provides insights into call volume, call duration, customer sentiment, response time, SLA performance, communication channels, call reasons, and geographic distribution.\n\nThe workflow included data cleaning and transformation using Power Query, analytical calculations using DAX, and dashboard development in Power BI, with Excel used for data inspection and validation.",
    "stats": [
      {
        "v": "32,941",
        "l": "Total Calls Analyzed"
      },
      {
        "v": "75.3%",
        "l": "Response Time"
      },
      {
        "v": "51.9%",
        "l": "Negative Sentiment Rate"
      },
      {
        "v": "62.6%",
        "l": "Within SLA Rate"
      }
    ],
    "points": [
      "Analyzed 32,941 customer calls across multiple communication channels and geographic locations.",
      "Identified customer sentiment distribution, with negative sentiment representing 51.9% of total calls.",
      "Evaluated service efficiency through response time and SLA performance indicators.",
      "Compared call volume across four channels: Call Center, Chatbot, Email, and Web.",
      "Analyzed call distribution by call center location, customer city, state, and call reason.",
      "Examined call volume trends and customer sentiment patterns throughout October."
    ],
    "tags": [
      "Power BI",
      "Power Query",
      "DAX",
      "Excel",
      "Data Cleaning",
      "Data Transformation",
      "Data Analysis",
      "Customer Experience",
      "Call Center Analytics",
      "Performance Monitoring"
    ],
    "images": [
      {
        "src": "assets/call-center-performance-customer-experience-analytics/full/01_all-center-performance-executive-overview.webp",
        "thumb": "assets/call-center-performance-customer-experience-analytics/thumb/01_all-center-performance-executive-overview.webp",
        "cap": "all Center Performance – Executive Overview",
        "label": "Overview"
      },
      {
        "src": "assets/call-center-performance-customer-experience-analytics/full/02_customer-experience-sla-performance-analysis.webp",
        "thumb": "assets/call-center-performance-customer-experience-analytics/thumb/02_customer-experience-sla-performance-analysis.webp",
        "cap": "Customer Experience & SLA Performance Analysis",
        "label": "Performance Details"
      }
    ],
    "links": [
      {
        "label": "View on Github",
        "url": "https://github.com/mahmoud7sh/Call-Center-Performance-Customer-Experience-Analytics"
      },
      {
        "label": "Download  Dashboard_pdf",
        "url": "https://github.com/mahmoud7sh/Call-Center-Performance-Customer-Experience-Analytics/blob/main/Call%20Center%20Project%20_%20Dashboard.pdf"
      }
    ]
  }
];
