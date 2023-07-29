<?php
  require_once('config.php');
  $number = $_GET['number'];//사용자가 입력한 것들 변수 잡기

  $sql = "DELETE FROM board WHERE idx=$number";

  $result = mysqli_query($conn, $sql);

  if($result == false){//에러나온 경우
    echo "삭제 실패";
  }else{
    echo "<script>location.href='index.php';</script>";
  }
  mysqli_close($conn);
?>