<?php
  function output($input){//input 들어오면 <pre>로 감싸 출력
    echo '<pre>';
    print_r($input);
    echo '</pre>';
  }

  function authenticate_user($email,$passwd){//이메일과 패스워드 넣어 config와 일치하니 할 함슈
   if($email == USER_EMAIL && $passwd == PASSWD){//일치 여부만 알려주는 함수
      return true;
   } 
  }

  function redirect($url){
    header("Location: {$url}");
  }
  function is_user_admin(){
    return isset($_SESSION['admin_email']);
  }
  function ensure_is_user_admin(){
    if(!is_user_admin()){
      redirect('login.php');
    }
  }
?>