const db = require('./db');
const mail = require('./mail');

// Testing numbers 
module.exports.absolute = function (number) {
  return (number >= 0) ? number : -number;
}

// Testing strings 
module.exports.greet = function (name) {
  return 'Welcome ' + name + '!';
}

// Testing arrays 
module.exports.getCurrencies = function () {
  return ['USD', 'AUD', 'EUR'];
}

// Testing objects 
module.exports.getProduct = function (productId) {
  return { id: productId, price: 10 };
}

// Testing exceptions 
module.exports.registerUser = function (username) {
  if (!username) throw new Error('Username is required.');

  return { id: new Date().getTime(), username: username }
}

// Mock functions 
module.exports.applyDiscount = function (order) {
  const customer = db.getCustomerSync(order.customerId);

  if (customer.points > 10)
    order.totalPrice *= 0.9;
}

// Mock functions 
module.exports.notifyCustomer = function (order) {
  const customer = db.getCustomerSync(order.customerId);

  mail.send(customer.email, 'Your order was placed successfully.');
}

// Testing a function to remove "PM" from 8.00PM doubt clear to SriRam 9*2*7*0*0* ; 
module.exports.removeMeridiem = function (time) {
  return time.replace(/am/i, '').replace(/pm/i, '');
}
