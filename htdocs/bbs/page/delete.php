<?php
  require_once($_SERVER['DOCUMENT_ROOT'].'/bbs/inc/db.php');
  $pno = $_GET['idx'];
  $sql = "DELETE FROM board WHERE idx='{$pno}'";

  if ($conn->query($sql) === TRUE) {
      echo "<script>
      alert('글삭제 완료되었습니다.');
      location.href='../index.php';</script>";
  } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
  }

?>












