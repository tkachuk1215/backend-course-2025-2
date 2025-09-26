const currency = "JPY";
const exact_date = "20240127";

const url = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange");

url.searchParams.append("valcode", currency);
url.searchParams.append("date", exact_date);
url.searchParams.append("json", "");

console.log(url.toString());

