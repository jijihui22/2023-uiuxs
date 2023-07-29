<?php
  //지금은 주소창에 admin 들어가 지지만
  session_start();//이런 세션 정보가 있어야 들어감
  if(!isset($_SESSION['admin_email'])){
    echo "<script>
    alert('권한이 없습니다');
    // location.href ='login.php';
    </script>";//<script></script>이건 자바스크립트 적은   것이다
    
    require_once('inc/function.php');
    ensure_is_user_admin();
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>관리자 페이지</title>
</head>
<body>
  <h1>관리자 페이지</h1>
  <p>
    <?php
      echo "{$_SESSION['admin.email']}님 반갑습니다."
    ?>
  </p>
  <p>
    <a href="logout.php">로그아웃</a><!-- 섹션없애면됨 -->
  </p>
</body>
</html>