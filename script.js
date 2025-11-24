let cartItems = {};
function addItem(service, price) {
  if (!cartItems[service]) cartItems[service] = {price, quantity:0};
  cartItems[service].quantity += 1;
  updateCart();
}
function removeItem(service) {
  if (cartItems[service]) {
    cartItems[service].quantity -= 1;
    if (cartItems[service].quantity <= 0) delete cartItems[service];
    updateCart();
  }
}
function updateCart() {
  const cartUl = document.getElementById('cart');
  cartUl.innerHTML = '';
  let total = 0;
  for (let key in cartItems) {
    const item = cartItems[key];
    if (item.quantity > 0) {
      cartUl.innerHTML += `<li>${key} x ${item.quantity} - ₹${item.price * item.quantity}</li>`;
      total += item.price * item.quantity;
    }
  }
  document.getElementById('total').innerText = total;
}
function sendEmail() {
  var fullname = document.getElementById('fullname').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var orderDetails = Object.keys(cartItems).map(s=>`${s} x ${cartItems[s].quantity}`).join(', ');
  // Uncomment and configure with your EmailJS Service and Template IDs:
  // emailjs.send('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID',{
  //   to_email: email,
  //   from_name: fullname,
  //   phone: phone,
  //   order: orderDetails,
  // }).then(function(response) {
      document.getElementById('confirmation').innerText =
        'Thank you For Booking the Service. We will get back to you soon!';
  // });
}
