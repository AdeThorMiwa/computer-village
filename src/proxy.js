const isDev = process.env.NODE_ENV === "development";
let host;

if (isDev) {
  host = "https://computer-village-market.herokuapp.com";
} else {
  host = "https://computer-village-market.herokuapp.com";
}

export default host;
