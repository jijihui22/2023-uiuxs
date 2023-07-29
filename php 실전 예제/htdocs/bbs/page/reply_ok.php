<?php
  require_once($_SERVER['DOCUMENT_ROOT'].'/bbs/inc/db.php');

  $num = $_GET['idx'];
  $username = $_POST["name"];
  $userpw = password_hash($_POST["password"], PASSWORD_DEFAULT);//요즘에는 비밀번호가 관리자도 알수없게 암호화 됬다 //그럴때 쓰는 함수는 password_hash(원본, 알고리즘)
  $content = $_POST["content"];
  $date = date('Y-m-d');

  $sql = "INSERT INTO reply (con_num, name, password, content, date) VALUES ('{$num }', '{$username }' ,'{$userpw }','{$content }','{$date }')";

  if ($conn->query($sql) === TRUE) {
    echo "<script>
    alert('글쓰기 완료되었습니다.');
    location.href='../index.php';</script>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>