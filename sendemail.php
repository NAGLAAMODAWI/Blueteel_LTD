<?php
use PHPMailer\PHPMailer\PHPMailer;

require_once 'phpmailer/Exception.php';
require_once 'phpmailer/PHPMailer.php';
require_once 'phpmailer/SMTP.php';

$mail = new PHPMailer(true);

$alert = '';

if(isset($_POST['submit'])){
  $name = $_POST['name'];
  $email = $_POST['email'];
  $company_name = $_POST['company_name'];
  $phone_number = $_POST['phone_number'];
  $message = $_POST['message'];

  try{
    $mail->isSMTP();
    $mail->Host = 'mail.baranda4xr.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'infos@baranda4xr.com'; // Gmail address which you want to use as SMTP server
    $mail->Password = 'd0)520#!gCM$'; // Gmail address Password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = '587';

    $mail->setFrom('infos@baranda4xr.com'); // Gmail address which you used as SMTP server
    $mail->addAddress('infos@baranda4xr.com'); // Email address where you want to receive emails (you can use any of your gmail address including the gmail address which you used as SMTP server)

    $mail->isHTML(true);
    $mail->Subject = 'Message Received (Contact Page)';
    $mail->Body = "<h3>Name : $name <br>Email: $email<br>company_name : $company_name<br>phone_number : $phone_number <br>Message : $message</h3>";

    $mail->send();
    $alert = '<div class="alert-success">
                 <span>Message Sent! Thank you for contacting us.</span>
                </div>';
  } catch (Exception $e){
    $alert = '<div class="alert-error">
                <span>'.$e->getMessage().'</span>
              </div>';
  }
}
?>
