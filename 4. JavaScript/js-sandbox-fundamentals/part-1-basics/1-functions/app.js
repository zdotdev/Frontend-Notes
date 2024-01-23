const c = console.log.bind(this);

// Create a function that will convert USD to PHP

// 1 Usd = 57.26 php
const convertToPhp = function (usd, rate) {
  let php = usd * rate;
  c(`$${usd} is equal to ₱${php}`);
  return php;
};

convertToPhp(100, 57.26);
