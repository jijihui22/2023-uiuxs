<?php
  $title = 'about';
  include('header.php')
?> 
 <main>
    <h2>Search Form</h2>
    <form action="reselt.php">
      <input type="text" name="category" placeholder="category">
      <input type="text" name="product_name" placeholder="product_name">
      <input type="text" name="limit" placeholder="limit">
      <button>검색</button>
    </form>
  </main>
<?php
  include('footer.php')
?>