<?php
  session_start();//세션을 사용해서 이 페이지에서 구현하겠다
  $title = '로그인';
  require_once('inc/function.php');
  require_once('inc/config.php');
  //아래 로그인에 입력한 거 post방식으로 확인하기
  // var_dump($_POST);//이렇게론 확인할 수 없어 아래 방식으로 한다
  if($_SERVER['REQUEST_METHOD'] == 'POST'){//서버의 정보를 확인할 수 있음 //이메일 넣고 전송누르니
    // echo $_POST['email'];//이메일이 나온다
    // output($_POST);
    $email = filter_input(INPUT_POST,'email',FILTER_VALIDATE_EMAIL);
    $passwd = $_POST['passwd'];//데이터베이스에서 확인해야하지만 대신 파일에 관리자 아이디 비번을 넣어두자
    if($email == false){
      $status = "이메일 형식에 맞춰 입력해주세요";
    }

  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?= $title; ?></title>
</head>
<body>
  <h1><?= $title; ?></h1>
  <form action="" method="POST">
    <div>
      <label for="email">Email</label>
      <input type="text" id="email" name="email">
      <!-- 타입이 text라 유효성 검사를 안해 php filter로 검사해기 -->
    </div>
    <div>
      <label for="passwd">password</label>
      <input type="password" id="passwd" name="passwd">
    </div>
    <input type="submit" value="로그인">
  </form>
  <div class="feedback">
    <?php
      if(authenticate_user($email, $passwd)){
        $_SESSION['admin_email'] = $email;//$_SESSION['admin_email']이 있으면 관리자 페이지에 들어갈 수 있는거

        //페이지 이동 방법, 관리자만 보는 정보로 이동해야되
        //1.자바스크립트로 하는 법 <script></script>
        //2.헤더 정보 바꾸는 법 header('Location 주소')
        redirect('admin_email');
        die();//그냥 그 페이지 안나오게 하는것
      }else{
        $status = '관리자 정보와 맞지 않습니다';
      }
      

      if(isset($status)){
        echo $status;
      }
    ?>
  </div>
</body>
</html>