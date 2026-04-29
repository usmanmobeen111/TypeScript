const year = document.getElementById("year");
const thisYear = new Date().getFullYear();
year.setAttribute("data-year", thisYear.toString());
year.textContent = thisYear.toString();
export {};
