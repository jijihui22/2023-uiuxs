<?php
  session_start();
  session_unset();
  session_destroy();

  require_once('inc/function.php');
  redirect('login.php');
  die();
?>