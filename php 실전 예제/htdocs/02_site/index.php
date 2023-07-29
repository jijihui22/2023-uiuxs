<?php
  $title = 'home';
  include_once('header.php');//include여러번 불러오기
  //include_once 한번밖에 못부르게 하는 거
  //require_once 필수 페이지는 이거
  //require_once 는 ()안에 조금이라로 다르게 ex)headers 안 나옴
  //include_once은 나옴
?>
<main>
    <h2>Main content</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae asperiores ipsum tempora nobis provident tenetur unde? Harum nihil quis ipsum optio ducimus, quibusdam recusandae ad, numquam sit nesciunt, molestias eius.</p>
  </main>
<?php
  include('footer.php')
?>