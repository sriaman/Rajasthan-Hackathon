function validateForm() {
    var x = document.forms["myForm"][fname].value;
    if (x == "") 
    {
        alert("please fill out the details");
        return false;
    }
   }
