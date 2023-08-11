$.getJSON('https://dummyjson.com/products',initList);
let allData = [];
let filteredArr = [];

let target = $('.product_list');

function initList(data,status,xhr){

  if(status == 'success'){
    allData = data.products;

    setTimeout(()=>{
      addItems();
    });
    
    console.log(allData);
  }

}
function addItems(cate, value){
  let listHTML = '';//li들 만들어서 넣을 공간 만든거

  if(value=='' || value == 'all'){
    filteredArr = allData;
  } else{
    filteredArr = allData.filter(pl=> pl[cate] == value);//pl 부터 모르겠음 filter 예시 보자 . 대신 []하니 알아들어 그렇게 했음 
    //가로 제일 앞 매개변수 만들어 넣고 =>를 쓰고 매개변수 한번더 쓰고 불러올 값 .나 []을 하고 넣고 조건 쓰자
  }


  $.each(filteredArr, (i,item)=>{
    listHTML += `
    <li>
      <h2>${item.title}</h2>
      <img src="${item.thumbnail}" alt="${item.title}">
    </li> `
    ;
  });
  console.log(listHTML);
  target.html(listHTML);
  target.find('li').css({visibility:'hidden'});

  target.imagesLoaded()
  .done( function( instance ) {
    target.find('li').css({visibility:'visible'});
  })
  .fail( function() {
    setTimeout(()=>{
      addItems('category', 'all');
    },100);    
  });
}

target.html('listHtml')//태그생성 일단 넘 css로 안보임

target.find('img').each(function(){
  let $this = $(this)
  $this.on('load', ()=>{ //로드 되면 보이게 하자 
  $this.parent().css({'visibility':'visible'})
})
})

$('#category').change(function(){
  let val = $(this).val();

  addItems('category', val);
});



// let st = {
//   eng:100,
//   kor:90,
//   test: function(){
//     return this.eng
//   }
// }console.log(st.eng)
// const ages = [32, 33, 16, 40];

// let filterArr = ages.filter(age=>age >= 18

// );

/* <li>
      <h2>Hyaluronic Acid Serum</h2>
      <img src="https://i.dummyjson.com/data/products/16/thumbnail.jpg" alt="">
</li> */
