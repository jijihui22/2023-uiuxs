<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>조건문</title>
</head>
<body>
  <h1>조건문</h1>
  <?php
    $result = 1>3;//1<3 1 true, 3<1 false
    $result = 1 == false;//1 == true 1, 1 == false
    echo $result;

    $first_name = '길동';
    $last_name = '홍';

    if($last_name == '김'){
      echo "김길동";
    } else {
      echo "first_name 길동";
    }

    if($last_name == '홍' && $first_name == '길동'){
      echo "$last_name&first_name";
    }
  ?>
</body>
</html>