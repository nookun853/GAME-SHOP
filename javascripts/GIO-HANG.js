/*AMOUNT*/
function increaseValue() {
  var value = parseInt(document.getElementById('num').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('num').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('num').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 2 ? value = 2 : '';
  value--;
  document.getElementById('num').value = value;
}
/*AMOUNT*/

/*CAL TOTAL PRICE*/
function calc()
{
  var price = document.getElementById("ticket_price").innerHTML;
  var noTickets = document.getElementById("num").value;
  var total = parseFloat(price) * noTickets
  if (!isNaN(total))
    document.getElementById("total").innerHTML = total
}
