<script>
function validate() {
	var accepted = false;

	// get passwords from user input
	var password = document.getElementById("password1");	
	var secondPassword = document.getElementById("password2");

	if(password != secondPassword) {
		 alert("These passwords don't match!"); 
	         accepted = false;
	}
	else if(password.length < 8 || password.length < 8) {
		alert("These passwords must be at least 8 characters long!");
		accepted = false;
	}
	else { 
		alert("These passwords match!"); 
		accepted = true;
	}

	return accepted;
}
</script>
