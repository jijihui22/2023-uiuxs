<?php
require_once($_SERVER['DOCUMENT_ROOT'].'/bbs/inc/db.php');

  $rno = $_POST['idx'];
  $pno = $_POST['pno'];

  //댓글 작성시 입력한 비번 조회
  $rsql = "SELECT * FROM reply WHERE idx = '{$rno}'";

  // $sql = UPDATE BOARD SET $idx = '새값' idx='값'
  // '{$_POST('content')}' = '".$_POST['content']."'
  $rresult = $conn->query($rsql);
  $reply =  $rresult ->fetch_assoc();

  $org_pw = $reply['password'];
  $input_pw = $_POST['password'];

  if(password_verify($input_pw, $org_pw)){

    $sql = "UPDATE reply SET content = '".$_POST['content']."' WHERE idx = '".$rno."' ";
    $result = $conn->query($sql);
    echo "<script>alert('수정되었습니다.'); location.replace('read.php?idx=".$pno."')</script>";
  } else{
    echo "<script>alert('비번이 맞지 않습니다.'); location.replace('read.php?idx=".$pno."')</script>";
  }
?>
