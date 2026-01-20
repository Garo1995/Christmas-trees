<?php

$method = @$_SERVER['REQUEST_METHOD'];

$subject = trim(@$_POST["subject"]);
$admin_email  = trim(@$_POST["admin_email"]);
$email = trim(@$_POST["email"]);



foreach ( $_POST as $key => $value ) {
  if ( $value != "" && $key != "admin_email" && $key != "subject") {
    $message .= "
      " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
        <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
        <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
      </tr>
      ";
  }
}

$message = "<html><body><table style='width: 100%;'>$message</table></body></html>";


function adopt($text) {
  return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

// $headers = "MIME-Version: 1.0" . PHP_EOL .
//   "Content-Type: text/html; charset=utf-8" . PHP_EOL .
//   // 'From: '.$admin_email. PHP_EOL .
//   'Reply-To: '.$email.'' . PHP_EOL;

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

mail($admin_email, adopt($subject), $message, $headers);
?>
