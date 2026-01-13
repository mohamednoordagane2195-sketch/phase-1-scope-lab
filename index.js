// Write your solution in this file!
/**********************
 * GLOBAL VARIABLES
 **********************/

// 1) customerName must be global
var customerName = "bob";

// 2) bestCustomer must be changeable
var bestCustomer;

// 3) leastFavoriteCustomer must NOT be changeable
const leastFavoriteCustomer = "someone";

/**********************
 * FUNCTIONS
 **********************/

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

function changeLeastFavoriteCustomer() {
  // This should fail silently or throw an error
  // because leastFavoriteCustomer is a const
  leastFavoriteCustomer = "bob";
}
