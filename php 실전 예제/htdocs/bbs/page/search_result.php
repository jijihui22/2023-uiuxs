<?php
  require_once($_SERVER['DOCUMENT_ROOT'].'/bbs/inc/db.php');

  //검색 변수
  $category = $_GET['search_cat'];
  $keyword = $_GET['keyword'];

  var_dump($category);
  var_dump($keyword);


  if(isset($_GET['page'])){
    $page = $_GET['page'];
  }else{
    $page = 1;
  }
  //전체글 개수 확인
  $pagesql = "SELECT COUNT(*) AS cnt FROM board";
  $page_result = $conn->query($pagesql); 
  $page_row = $page_result->fetch_assoc();
  $row_num = $page_row['cnt'];  //글의 총 개수 57
  var_dump($row_num);

  $list = 10; //페이지당 보여줄 개수
  $block_ct = 5; //페이지네이션 개수

  $block_num = ceil($page/$block_ct);
  $block_start = (($block_num - 1) * $block_ct) + 1; 
  $block_end = $block_start + $block_ct - 1;   
  $total_page = ceil($row_num/$list); //총 페이지 수 7
  $total_block = ceil($total_page/$block_ct); // 7/5   2
  if( $block_end > $total_page) $block_end = $total_page;
  $start_num = ($page-1)*$list;

  /*
  총 65개 - page번호 1
  $block_num = 1/5 0.2 = 1
  $block_start = ((1-1)*5)+1 = 1
  $block_end = 1 + 5 - 1 = 5

  총 65개 - page번호 6
  $block_num = 6/5 1.2 = 2
  $block_start = ((2-1)*5)+1 = 6
  $block_end = 6 + 5 - 1 = 10 -> 7 
  */




?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>게시판</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="../css/bbs_style.css">
</head>
<body>
  <div class="container">
    <h1>자유게시판</h1>
    <table>
      <colgroup>
        <col class="col1">
        <col class="col2">
        <col class="col3">
        <col class="col3">
        <col class="col4">
        <col class="col4">
      </colgroup>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>글쓴이</th>
          <th>작성일</th>
          <th>조회수</th>
          <th>추천수</th>
        </tr>
      </thead>
      <tbody>
        <?php
          $sql = "SELECT * FROM board ORDER BY idx DESC LIMIT $start_num, $list";
          $result = $conn->query($sql); 

          while($row = $result->fetch_array(MYSQLI_ASSOC)){
               //var_dump($row);

              $post_time =  $row['date']; //포스트 등록 날자
              $time_now = date('Y-m-d');//오늘 날짜

              if($post_time == $time_now){
                $new_icon = '[new]';
              } else{
                $new_icon = '';
              }

               $title = $row['title'].$new_icon;
               //댓글수 확인
               $con_idx = $row['idx'];

                $rc_sql= "SELECT COUNT(*) AS cnt FROM reply WHERE con_num = $con_idx";
                $rc_result = $conn->query($rc_sql); 
                $rc_row = $rc_result->fetch_array(MYSQLI_ASSOC);

                if($rc_row['cnt'] > 0){
                    $rc = "[".$rc_row['cnt']."]";
                } else{
                  $rc ='';
                }

               if(iconv_strlen($title)>20){
                $title = str_replace($row['title'],iconv_substr($row['title'],0, 20, 'utf-8')."...",$row['title']);
               }
        ?>

        <tr>
          <td><?= $row['idx']; ?></td>
          <td>
            <?php
              if($row['lock_post'] == '1'){
            ?>
              <a href="page/lock_read.php?idx=<?= $row['idx']; ?>"><?= $title.$rc; ?><i class="fa-solid fa-lock"></i></a>

            <?php } else { ?>  
              
              <a href="page/read.php?idx=<?= $row['idx']; ?>"><?= $title.$rc; ?></a>

            <?php } ?>    
           
          </td>
          <td><?= $row['name']; ?></td>
          <td><?= $row['date']; ?></td>

          <td><?= $row['hit']; ?></td>
          <td><?= $row['hit']; ?></td>

          <td><?= $row['thumbsup']; ?></td>
        </tr>

        <?php
            }
        ?>        
      </tbody>
    </table>
    <div class="btns">
      <a href="page/write.php">글쓰기</a>
    </div>
    <hr>
    <ul class="pagenation">
      <?php
        if($page > 1){
          echo "<li><a href=\"?page=1\" class=\"button\">처음</a></li>";
          if($block_num > 1){
            $prev = ($block_num - 2) * $block_ct + 1;
            echo "<li><a href=\"?page=$prev\" class=\"button\">이전</a></li>";
          }
        }    

        for($i=$block_start;$i<=$block_end;$i++){
          if($i == $page){
            echo "<li><a href=\"?page=$i\" class=\"active\">$i</a></li>";
          }else{
            echo "<li><a href=\"?page=$i\">$i</a></li>";
          }
        }

        if($page < $total_page ){          
          if($block_num < $total_block){
            $next = $block_num * $block_ct + 1;
            echo "<li><a href=\"?page=$next\" class=\"button\">다음</a></li>";
          }
          echo "<li><a href=\"?page=$total_page\" class=\"button\">마지막</a></li>";
        }
      ?>

    </ul>
    <hr>
    <div class="search_form">
      <form action="page/search_result.php" method="get">
        <select name="search_cat" id=""><!-- 서치한게 이름 search_cat로 올라간다 -->
          <option value="title">제목</option>
          <option value="name">글쓴이</option>
          <option value="content">내용</option>
        </select>
        <input type="text" name="keyword" required>
        <button>검색</button>
      </form>
    </div>
  </div>
</body>
</html>