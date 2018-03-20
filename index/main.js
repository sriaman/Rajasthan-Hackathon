function validateForm() {
    var x = document.forms["myForm"].value;
    if (x == "") 
    {
        alert("please fill out the details");
        return false;
    }
   }
