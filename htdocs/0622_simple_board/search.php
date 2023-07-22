<?php
  require_once('config.php');

  $keyword = $_GET['searchkey'];

  $sql = "SELECT * FROM board WHERE message Like '%$keyword%'"; //리절트에 있는것을 배열, 연관배열, 순번으로 가져올지 포함되어 있는거 검색은 Like// %는 그 앞,뒤에 어떤 글씨가 있든 상관없이
  $result = mysqli_query($conn, $sql);

  $list = '';
  // var_dump($row = mysqli_fetch_array($result, MYSQLI_ASSOC));
  while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){// ()값이 있으면{}반복//이게 우리가 아는 게시판이다!
    $list = $list."<li><a href=\"\">{$row['name']}</a></li>";
  };// ()값이 있으면{}반복//
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Message Board</title>
</head>
<body>
    <h1>검색결과</h1>
    <ul>
      <?php echo $list ?>
    </ul>
    <a href="write.php">글쓰기</a>
    <hr>
    <h2>메시지 검색</h2>
    <form action="search.php" method="get">
        <p>검색할 키워드를 입력하세요.</p>
        <p>
            <label for="msgsearch">키워드: </label>
            <input type="text" id="msgsearch" name="searchkey">
        </p>
        <input type="submit" value="검색">
    </form>


</body>
</html>
