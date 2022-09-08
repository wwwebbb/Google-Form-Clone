document.getElementById("form").addEventListener("submit", function () {
  alert(
    "Name: " +
      document.getElementById("name").value +
      "\r\n" +
      "Age: " +
      document.getElementById("age").value +
      "\r\n" +
      "Favorite Ice Cream: " +
      document.getElementById("icecream").value
  );
});
