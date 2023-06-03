<script>
      function generateRedirectUrl() {
  const longUrl = document.getElementById("long-url").value;
  const numbersToCheck = ["181686", "lE4HZjeECe15Tz"]; // add the numbers to check here

if (!numbersToCheck.some(num => longUrl.includes(num))) {
  alert("This URL does not shorten without Register please contact +8801306981347 (whatsapp).");
  return;
  }