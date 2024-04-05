
function createAlerts() {
  var locationInput = document.getElementById("locationInput").value;
  
  if (!locationInput) {
      alert("Please enter your location.");
  } else {
      alert("Your order has been confirmed.");
  }
}
