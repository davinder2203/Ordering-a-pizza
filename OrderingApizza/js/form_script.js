// JavaScript code for handling the form submission
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('pizzaOrderForm');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Get form data
      const formData = new FormData(form);
  
      // Process form data and place the order (you can handle this according to your project needs)
  
      // Example: Display an alert with the form data
      const formDataObject = {};
      formData.forEach((value, key) => {
        formDataObject[key] = value;
      });
      alert('Order Placed! Here are your pizza details:\n' + JSON.stringify(formDataObject, null, 2));
    });
  });
  