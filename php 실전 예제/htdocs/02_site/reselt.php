<?php
  $title = '검색 결과';
  include('header.php')
?> 
 <main>
    <h2>검색 결과</h2>
    <?php
      var_dump($_GET);
      //array(2) { ["email"]=> string(16) "dkanrl@gmail.com" ["passwd"]=> string(8) "12341234" } 이렇게나옴
      
      $category = filter_input(INPUT_GET,'category', FILTER_VALIDATE_INT);
      //get안써도 값이 조건에 맞으면 각 $변수에 넣어준다
      $product_name = $_GET['product_name'];
      $limit = filter_input(INPUT_GET,'category', FILTER_VALIDATE_INT);

      // if($category == false || $limit == false){
      //   die();
      // }

        if($category == false){
          $category = 1;
        }
        if($limit == false){
          $limit = 10;
        }

      
      ?>
         <p>검색 키워드:<?php echo $category ?></p>; 
         <p>검색 키워드:<?= $product_name?></p>; 
         <p>검색 키워드:<?= $limit?></p>; 
      
      
  </main>
<?php
  include('footer.php')
?>