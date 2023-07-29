<?php
  $title = '로그인';
  include('header.php')
?> 
 <main>
    <h2>Request</h2>
    <?php
      var_dump($_POST);
      //array(2) { ["email"]=> string(16) "dkanrl@gmail.com" ["passwd"]=> string(8) "12341234" } 이렇게나옴

      $name = $_POST['email'];
      $email = $_POST['passwd'];
      echo "{$name}님의 이메일은 {$password}입니다"
    ?>
  </main>
<?php
  include('footer.php')
?>