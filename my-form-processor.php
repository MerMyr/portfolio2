<?php
 header("Location: http://merethem.com/#contact-page");

 exit();
//Accessing the form submission data
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $visitor_email = $_POST['email'];
    $phone= $_POST['phone'];
    $message = $_POST['message'];

//Composing the email message
	$email_from = 'merethe.myrhaug@gmail.com';

	$email_subject = "New Form submission";

  $email_body = "<html>
                    <body>
                      <h2> Du har fått en melding fra $firstname  $lastname.</h2>
                      <br>
                      <p>Meldingen:  $message </p>
                      <br>
                      <p>Telefonnr:  $phone </p>
                      <p>Email  $visitor_email </p>
                      <br>
                  </body>
                 </html>";

//Sending the email
  $to = "merethe.myrhaug@gmail.com";

  $headers = "From: $email_from  \r\n";
  $headers .= "Reply-To: $visitor_email \r\n";
  $headers .= "MINE-Version: 1.0\r\n";
  $headers .= "Content-type: text/html; charset-utf-8";


mail($to, $email_subject, $email_body, $headers);

//Securing the form against email injection
function IsInjected($str)
{
    $injections = array('(\n+)',
           '(\r+)',
           '(\t+)',
           '(%0A+)',
           '(%0D+)',
           '(%08+)',
           '(%09+)'
           );
               
    $inject = join('|', $injections);
    $inject = "/$inject/i";
    
    if(preg_match($inject,$str))
    {
      return true;
    }
    else
    {
      return false;
    }
}

if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    exit;
}

?>


