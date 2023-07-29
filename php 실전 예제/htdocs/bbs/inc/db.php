<?php
$conn = new mysqli("localhost","bbs","1234","bbs");

// Check connection
if ($conn  -> connect_errno) {
  echo "연결 실패: " . $conn  -> connect_error;
  exit();
} else{
  echo "연결 성공! ";
}

?>