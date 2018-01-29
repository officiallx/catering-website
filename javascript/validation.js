function order() 
{
	var fname = document.forms["orderForm"]["firstname"].value;
	var lname = document.forms["orderForm"]["lastname"].value;
	var address = document.forms["orderForm"]["address"].value;
    var contact = document.forms["orderForm"]["contact"].value;
    var guestCount = document.forms["orderForm"]["guestCount"].value;
    var date = document.forms["orderForm"]["date"].value;
    var time = document.forms["orderForm"]["time"].value;
    var venue = document.forms["orderForm"]["venue"].value;
	var message = document.forms["orderForm"]["message"].value;

	if (fname == "" || lname == "" || contact == "" || guestCount == "" || date == "" || time == "" || venue == "" || message == "")
    {
		alert("Empty fields found. Please fill the form.");
	}
	else 
    {
		alert("Thank you for Ordering. You will receive a call for confirmation");
	}
}