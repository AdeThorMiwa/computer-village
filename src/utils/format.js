export const formatMoney = (number, decPlaces, decSep, thouSep) => {
  const dp = isNaN((decPlaces = Math.abs(decPlaces))) ? 2 : decPlaces;
  const ds = typeof decSep === "undefined" ? "." : decSep;
  const ts = typeof thouSep === "undefined" ? "," : thouSep;
  const sign = number < 0 ? "-" : "";
  const i = String(
    parseInt((number = Math.abs(Number(number) || 0).toFixed(dp)))
  );

  let j = i.length;
  j = j > 3 ? j % 3 : 0;

  return (
    sign +
    (j ? i.substr(0, j) + ts : "") +
    i.substr(j).replace(/(\ds{3})(?=\ds)/g, "$1" + ts) +
    (dp
      ? ds +
        Math.abs(number - i)
          .toFixed(dp)
          .slice(2)
      : "")
  );
};
