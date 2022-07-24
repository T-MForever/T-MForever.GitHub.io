function auth()
{

    var enteredPassword;
    var actualPassword = "t&mforever";

    enteredPassword=prompt('Authentication Required, please enter the password. It can be found on the back of your save the date / iinvitation',' ');

    if (actualPassword==enteredPassword)
    {
        alert('Authentication Successful, welcome to the party!.');
    }
        
    else
    {
        window.location="Error.html";
    }
}
