<!DOCTYPE html>
<html>
    <head>
        <title>Email Validation</title>
    </head>
    <body>
<h1>pattern that matches e-mail addresses</h1>
        <script>
        function valid_email(str)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(mailformat.test(str))
{  
document.write("Valid email address!");  
}  
else  
{  
document.write("You have entered an invalid email address!");  
}
}

valid_email('me-info@example.com');
        </script>
    </body>
</html>