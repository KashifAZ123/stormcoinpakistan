<?php 
if(isset($_POST['submit'])){
    $to = $_POST['email']; // this is your Email address
    $from = "stormcoinpakistan@gmail.com"
    $password = $_POST['psw'];
    $user = $_POST['username'];
    $first_name = $_POST['name'];
    $subject = "Welcome To StormCoin Pakistan Mobile Banking";
    
    $message = "Hey" . $first_name . "! " . "\n\n". "\n\n" . "Here are your account details:" . "\n\n" . "Username: " . $user . "\n\n" . "Password: " . $password . "\n\n" . 
    "Log in into your account here: Stormcoin.pk/login ";
   

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    //mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    // echo "Mail Sent. Thank you " . $first_name . ", we will contac  t you shortly.";

    header("Location: index.html"); 
  
    exit; 
 
    }
?>
