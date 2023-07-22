<?php
  $title = 'login';
  include_once('header.php');//include여러번 불러오기
?>
<main>
    <h2>login</h2>
    <form action="request.php" method="POST">
      <div>
        <label for="useremail">Email</label>
        <input type="email" id="useremail" name="email">
      </div>
      <div>
        <label for="userpassword">Password</label>
        <input type="password" id="userpassword" name="passwd">
      </div>
      <button>로그인</button>
    </form>
</main>
<?php
  include('footer.php')
?>