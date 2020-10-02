import React from "react";

export const firstToUpper = (text) => {
  if (!text) return "";
  return `${text[0].toUpperCase()}${text.slice(1, text.length)}`;
};

export const wordsToUpper = (text) => {
  if (text === undefined) return "";
  if (text.indexOf(" ") === -1) return firstToUpper(text);
  text = text.split(" ");
  for (let i = 0; i < text.length; i++) {
    if (text[i].trim() !== "") {
      text[i] = firstToUpper(text[i]);
    }
  }

  return text.join(" ");
};

export const inArray = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return true;
  }
  return false;
};

export const arrayHasValue = (arr, prop, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][prop] === value) return true;
  }
  return false;
};

export const getProperSort = (sort) => {
  let properSort;

  switch (sort) {
    case "date":
      properSort = "-createdAt";
      break;
    case "views":
      properSort = "-views";
      break;
    default:
      properSort = "name";
  }

  return properSort;
};

export const getSocialValue = (field, value) => {
  let returnValue = value;

  if (field === "facebook")
    returnValue = <a href={`https://${value}`}>{value}</a>;
  if (field === "phone")
    returnValue = value.map((num, i) => (
      <div key={i}>
        <a href={`tel:${num}`}>{num}</a>
      </div>
    ));
  if (field === "google_plus" || field === "email")
    returnValue = <a href={`mailto:${value}`}>{value}</a>;
  if (field === "whatsapp")
    returnValue = (
      <a href={`https://api.whatsapp.com/send?phone=${value}`}>{value}</a>
    );

  return returnValue;
};

export const uniqueArray = (arr, uniqueIdentifier) => {
  if (arr.length === 0) return 0;
  let uniqueCounter = [];

  return arr.filter((item) => {
    if (typeof item === "object") {
      if (uniqueIdentifier) {
        if (uniqueIdentifier.indexOf(".") !== -1) {
          const [first, last] = uniqueIdentifier.split(".");
          if (item[first] && item[first][last]) {
            if (!inArray(uniqueCounter, item[first][last])) {
              uniqueCounter.push(item[first][last]);
              return item;
            }
          } else {
            return item;
          }
        } else {
          if (item[uniqueIdentifier]) {
            if (!inArray(uniqueCounter, item[uniqueIdentifier])) {
              uniqueCounter.push(item[uniqueIdentifier]);
              return item;
            }
          } else {
            return item;
          }
        }
      } else {
        return item;
      }
    } else if (typeof item === "string" || typeof item === "number") {
      if (!inArray(uniqueCounter, item)) {
        uniqueCounter.push(item);
        return item;
      }
    }
    return false;
  });
};

export const getDataByPage = (data, page) => {
  let start = (page - 1) * 10;
  let end = page * 10;
  const newData = data.filter((p, i) => i >= start && i < end);
  return newData;
};
