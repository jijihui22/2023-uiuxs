<?php

$conn = mysqli_connect("localhost", "jihui", "1234", "jihui");
//mysqli_connect MySQL server 또는 MariaDB Server에 연결하는 함수


if (mysqli_connect_errno()) {
  echo "DB연결에 실패했습니다" . mysqli_connect_error();
  exit();
} else{
  echo "DB연결 성공!";
}
?>