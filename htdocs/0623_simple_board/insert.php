<!-- 검색, 확인, 다른페이지로 돌아가는 화면 -->
<?php
  require_once('config.php');//접속하게

  //테이블에 값을 추가
  $username = $_POST['name'];
  $usermsg = $_POST['message'];

  $sql = "INSERT INTO board (name, message) VALUES('$username','$usermsg')";

  $result = mysqli_query($conn, $sql); //$conn에 정보로 db에 접속하고 sql 문장 실행

  // mysqli_query(연결정보, sql문)
  if($result == false){//에러나온 경우
    echo "저장 실패";
  }else{
    echo "<script>location.href='index.php';</script>";
  }
  mysqli_close($conn); //끊어주는 함수, 연결 끊기
?>