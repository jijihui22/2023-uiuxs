<?php
  require_once($_SERVER['DOCUMENT_ROOT'].'/bbs/inc/db.php');
  $pno = $_GET['idx'];
  
  $sql = "SELECT * FROM board WHERE idx='{$pno}'";//idx='{$pno}번호의 모든 파일을 다 가져온다
  $result = $conn->query($sql);
  $sqlarr = $result -> fetch_assoc();
  $hit = $sqlarr['hit']  + 1; //조회수 증가시키기


  $sql2 ="UPDATE board set hit = '{$hit}' where idx='{$pno}'";
  $result2 = $conn->query($sql2);
 

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>글읽기 - BBS</title>
  <link rel="stylesheet" href="../css/bbs_style.css">
</head>
<body>

  <div class="container">
      <h1>자유게시판</h1>
      <h2>글읽기</h2>
      <div class="write_form">
        <table>
          <colgroup>
            <col class="label">
            <col class="content">
          </colgroup>
          <tr>
            <td>제목:</td>
            <td><?= $sqlarr["title"] ?></td>
          </tr>
          <tr>
            <td>글쓴이:</td>
            <td><?= $sqlarr["name"] ?></td>
          </tr>
          <tr>
            <td>날짜:</td>
            <td><?= $sqlarr["date"] ?></td>
          </tr>
          <tr>
            <td>조회수:</td>
            <td><?= $hit ?></td>
          </tr>
          <tr>
            <td>추천수:</td>
            <td><?= $sqlarr["thumbsup"] ?></td>
          </tr>
          <tr>
            <td>내용:</td>
            <td><?= $sqlarr["content"] ?></td>
          </tr>          
          <tr>
            <td>첨부파일:</td>
            <td>
              <!-- 이미지면 img src, 아니라면 a태그의 링크로 표시 -->

              <?php
                if($sqlarr["is_img"] == 1){
              ?>  
                  <img src="<?= $sqlarr["file"] ?>" alt="">             

              <?php
                } else {
                  $file_name = str_replace("../upload/", "", $sqlarr["file"]);
              ?>
                <a href="<?= $sqlarr["file"] ?>"><?= $file_name ?></a>
              <?php
                }
              ?>
            </td>
          </tr>          
        </table>
      </div>
      <hr>
      <div class="footer">
        <div class="list">
          <a href="../index.php">목록</a>
        </div>
        <p class="btns">
          <a href="modify.php?idx=<?= $pno; ?>">수정</a>
          <a href="thumbsup.php?idx=<?= $pno; ?>">추천</a>
          <a href="#" id="delete">삭제</a>
        </p>
      </div>   
      <div class="reply">
        <h3>댓글 목록</h3>
        <?php
          $replay_sql = "SELECT * FROM reply WHERE con_num='{$pno}' order by idx desc";
          $replay_result = $conn->query($replay_sql);
          while($reply_row=$replay_result->fetch_assoc()){
          ?>
            <div class="reply_list">
              <h4>글쓴이: <?= $reply_row['name']?></h4>
              <div class="replay_content">
              <?= $reply_row['content']?>
              </div>
              <span><?= $reply_row['date']?></span>
              <a href="" class="reply_mod">수정</a>
              <a href="" class="reply_del">삭제</a>

              <dialog class="reply_edit">
                <form action="reply_edit_ok.php" method="POST">
                  <input type="hidden" name="idx" value="<?= $reply_row['idx']; ?>">
                  <input type="hidden" name="pno" value="<?= $pno; ?>">

                  <textarea name="content" cols="15" rows="10"><?= $reply_row['content']?></textarea>
                  <input type="password" name="password" placeholder="비밀번호">
                  <input type="submit" value="수정">
                  <a href="#" class="close">취소</a>
                </form>
              </dialog>
              <dialog class="reply_del_dialog">
                <form action="reply_del_ok.php" method="POST">
                  <input type="hidden" name="idx" value="<?= $reply_row['idx']; ?>">
                  <input type="hidden" name="pno" value="<?= $pno; ?>">
                 
                  <input type="password" name="password" placeholder="비밀번호">
                  <input type="submit" value="삭제">
                  <a href="#" class="close">취소</a>
                </form>
              </dialog>
            </div>
            <?php 
          }
          ?>
        <hr>
        <div class="reply_form">
          <form action="reply_ok.php?idx=<?= $pno; ?>" method="POST">
            <input type="text" name="name" placeholder="이름" required>
            <input type="password" name="password" placeholder="password" required>
            <textarea name="content" cols="20" rows="10" required></textarea>
            <button>글쓰기</button>
          </form>
        </div>
      </div>   

  </div>
  <script>
    let btn = document.querySelector('#delete');
    let reply_mod_btn = document.querySelectorAll('.reply_mod');

    let reply_del_btn = document.querySelectorAll('.reply_del');

    for(let rb of reply_mod_btn){
      rb.addEventListener('click',(e)=>{
        e.preventDefault();
        let target = e.target.closest('.reply_list').querySelector('.reply_edit');        
        target.setAttribute('open','open');

        let closeBtn = target.querySelector('.close');
        closeBtn.addEventListener('click',(e)=>{
          e.preventDefault();
          target.removeAttribute('open');
        });

      })
    }
    for(let db of reply_del_btn){
      db.addEventListener('click',(e)=>{
        e.preventDefault();
        let target = e.target.closest('.reply_list').querySelector('.reply_del_dialog');        
        target.setAttribute('open','open');

        let closeBtn = target.querySelector('.close');
        closeBtn.addEventListener('click',(e)=>{
          e.preventDefault();
          target.removeAttribute('open');
        });

      })
    }
    /*
    for(let rc of reply_mod_close){
      rc.addEventListener('click',(e)=>{
        e.preventDefault();
        e.target.closest('.reply_edit').removeAttribute('open');
      })
    }
    */

    btn.addEventListener('click',(e)=>{
      e.preventDefault();
      if(confirm('삭제하시겠습니까?')){
        window.location = 'delete.php?idx=<?= $pno; ?>';
      }else{
        alert('취소되었습니다.');
      }
    });
  </script>
</body>
</html>