<?php
  require_once($_SERVER['DOCUMENT_ROOT'].'/bbs/inc/db.php');

  if(isset($_POST['lock_post'])){
    $lock_post = 1;
  }else{
    $lock_post = 0;
  }

  $username = $_POST["name"];
  $userpw = password_hash($_POST["pw"], PASSWORD_DEFAULT);//요즘에는 비밀번호가 관리자도 알수없게 암호화 됬다 //그럴때 쓰는 함수는 password_hash(원본, 알고리즘)
  $title = $_POST["title"];
  $content = $_POST["content"];
  $date = date('Y-m-d');

  //파일 업로드
  print_r($_FILES['b_file']); 
$org_name = $_FILES['b_file']['name']; //파일명 할당
$temp_path = $_FILES['b_file']['tmp_name'];//임시파일의 경로
$upload_path = "../upload/".$org_name;
$file_type = $_FILES['b_file']['type'];//파일 타입

if(strpos($file_type ,'image') != ''){$is_img = 1;}else{$is_img = 0;}//이미지가 없지않다면 이미지값에 1을 준다 없으면 0값을 준다.
// move_uploaded_file(임시폴더, 폴더) ,, 옮기며 파일명도 변경할수 있다
move_uploaded_file($temp_path, $upload_path);

  $sql = "INSERT INTO board (name, pw, title, content, date, lock_post, file, is_img) VALUES ('{$username }' ,'{$userpw }','{$title }','{$content }','{$date }','{$lock_post}','{$upload_path}','{$is_img}')";
  //INSERT는 spq 테이블에 값을 넣는 거
  if ($conn->query($sql) === TRUE) {
    echo "<script>
    alert('글쓰기 완료되었습니다.');
    location.href='../index.php';</script>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>