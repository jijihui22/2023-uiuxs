<?php
require_once($_SERVER['DOCUMENT_ROOT'].'/bbs/inc/db.php');

  /* 변수 */
  $rno = $_POST['idx'];
  $pno = $_POST['pno'];

  //댓글 작성시 입력한 비번 조회
  $rsql = "SELECT * FROM reply WHERE idx = '{$rno}'";//idx='{$pno}번호의 모든 파일을 다 가져온다
  $rresult = $conn->query($rsql);
  $reply =  $rresult ->fetch_assoc();//조회수 증가시키기

  $org_pw = $reply['password'];
  $input_pw = $_POST['password'];

  if(password_verify($input_pw, $org_pw)){

    $sql = "DELETE FROM reply WHERE idx = '".$rno."' ";
    $result = $conn->query($sql);
    echo "<script>alert('삭제되었습니다.'); location.replace('read.php?idx=".$pno."')</script>";
  } else{
    echo "<script>alert('비번이 맞지 않습니다.'); location.replace('read.php?idx=".$pno."')</script>";
  }



?>
