<?php
  require_once($_SERVER['DOCUMENT_ROOT'].'/bbs/inc/db.php');

  // var_dump($_POST);
  $pno = $_GET['idx'];
  $username = $_POST["name"];
  $userpw = password_hash($_POST["pw"], PASSWORD_DEFAULT);
  $title = $_POST["title"];
  $content = $_POST["content"];

  //update 테이블명 set 컬럼명1='수정된 값', 컬럼명2='수정된 값' where 조건;

  $sql ="UPDATE board SET name='{$username}', pw='{$userpw}', title='{$title}', content='{$content}' WHERE idx='{$pno}'";

  if ($conn->query($sql) === TRUE) {
    echo "<script>
    alert('글수정 완료되었습니다.');
    location.href='../index.php';</script>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>