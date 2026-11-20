/* projects.js: data used by index.html to render the Projects section. */
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
      { "v": "501", "l": "Hospitals" },
      { "v": "55", "l": "Counties" },
      { "v": "11", "l": "Report pages" },
      { "v": "≈100", "l": "DAX measures" }
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
      { "src": "assets/hospital/full/01_overview.webp", "thumb": "assets/hospital/thumb/01_overview.webp", "cap": "Executive overview", "label": "Overview" },
      { "src": "assets/hospital/full/02_network.webp", "thumb": "assets/hospital/thumb/02_network.webp", "cap": "Hospital network", "label": "Network" },
      { "src": "assets/hospital/full/03_capacity.webp", "thumb": "assets/hospital/thumb/03_capacity.webp", "cap": "Capacity and occupancy", "label": "Capacity" },
      { "src": "assets/hospital/full/04_patient_flow.webp", "thumb": "assets/hospital/thumb/04_patient_flow.webp", "cap": "Patient flow", "label": "Patient flow" },
      { "src": "assets/hospital/full/05_emergency.webp", "thumb": "assets/hospital/thumb/05_emergency.webp", "cap": "Emergency department", "label": "Emergency" },
      { "src": "assets/hospital/full/06_pressure.webp", "thumb": "assets/hospital/thumb/06_pressure.webp", "cap": "Network pressure index", "label": "Pressure" },
      { "src": "assets/hospital/full/07_ic_surgery.webp", "thumb": "assets/hospital/thumb/07_ic_surgery.webp", "cap": "Intensive care and surgery", "label": "IC & surgery" },
      { "src": "assets/hospital/full/08_cardio_clinical.webp", "thumb": "assets/hospital/thumb/08_cardio_clinical.webp", "cap": "Cardiovascular and clinical programs", "label": "Clinical" },
      { "src": "assets/hospital/full/09_investment.webp", "thumb": "assets/hospital/thumb/09_investment.webp", "cap": "Equipment and capital investment", "label": "Investment" },
      { "src": "assets/hospital/full/10_services.webp", "thumb": "assets/hospital/thumb/10_services.webp", "cap": "Facility services", "label": "Services" },
      { "src": "assets/hospital/full/11_methodology.webp", "thumb": "assets/hospital/thumb/11_methodology.webp", "cap": "Methodology and data quality", "label": "Methodology" }
    ],
    "gallery": [1, 2, 3, 4]
  }
];
