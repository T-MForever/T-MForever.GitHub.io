function auth()
{

    var enteredPassword;
    var actualPassword = "t&mforever";

    enteredPassword=prompt('The password can be found on your save the date!');

    if (actualPassword==enteredPassword)
    {
        alert('Authentication Successful, welcome to the party!.');
    }
        
    else
    {
        window.location="Error.html";
    }
}
