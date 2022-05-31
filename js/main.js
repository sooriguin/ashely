$(document).ready(function(){
    var sw=0;
    //햄버거 메뉴 버튼
	$('#nav-icon3').click(function(){
		//$(this).toggleClass('open');
        if(sw==0){
            sw=1;
            $(this).addClass('open');
            $('.gnb').animate({
                right:0
            });
        }else{
            sw=0;
            $(this).removeClass('open');
            $('.gnb').animate({
                right:'-100%'
        });
	}
});
//nav(아코디언 메뉴)
$('.gnb nav > ul > li > a').click(function(){
    //만약 클릭한 메뉴의 클래스 속성에 active가 설정되어 있지 않다면
    if($(this).attr('class') != 'active'){
        //모든 주메뉴의 active를 제거
        $('.gnb nav > ul > li > a').removeClass('active');
        //클릭한 주메뉴에만 active 설정
        $(this).addClass('active');
        //모든 서브메뉴는 다 들어감
        $('.gnb nav .sub').slideUp();
        //클릭한 주메뉴의 서브메뉴만 나옴
        $(this).next().slideDown();
    //클릭한 메뉴의 클래스 속성에 active가 설정되어 있다면
    }else{
        //클릭한 메뉴에서 active제거
        $(this).removeClass('active');
        //클릭한 메뉴의 서브메뉴 들어감
        $(this).next().slideUp();

    }
});
//fullpage
$('#fullpage').fullpage({
    navigation: true,
	navigationPosition: 'right',
    afterLoad:function(anchorLink,index){
        if(index==2){
            //함수 호출
            addNum();
        }
        if(index==4){
            $('.s4 .s4_box div div').addClass('active');
        }else{
            $('.s4 .s4_box div div').removeClass('active');
        }
    }
});
//메인 슬라이드
var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay:4000
    },
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable:true
    },
  });
  //s2영역의 숫자 증가 애니메이션
  function addNum(){
      //each()매서드 : 객체 개수만큼 반복(1번)
      //prop()메서드 : 객체에 속성(property)을 추가하거나, 객체의 속성을 알아내는 메서드, 0 : 초기값
      $('.addNumber span').each(function(){
          //$(this) : $('.addNumber span)을 가르킴
          //Counter속성을 객체에 추가함. 초기값은 0, 최종값은 51279813
      $(this).prop('Counter',0).animate({
          Counter:51279813
      }, {
          //실행시간
          duration:2000,
          //now값이 변하는 단계
          step:function(now){
              console.log(now);
              //Math.ceil():실수를 정수로 변환(올림)
              //numberfn함수를 호출하면서 정수값now를 매개변수로 전달, 함수의 결과값을 num변수에 받아서 저장
              var num=numberfn(Math.ceil(now));
              //늘어나는 num값을 span영역에 표시함.
              $(this).text(num);
          }
      });
    });
  }
  //numberfn함수 선언
  //매개변수 x에서 Math.ceil(now)값을 전달받음
  function numberfn(x) {
      //toString()메서드 : 전달받은 x값을 문자열로 변환
      // \B: 문자가 존재하는지 경계가 아닌 부분 찾기
      // \d(3) : 문자열 3글자
      // (?!\d) : 3글자 이상 초과안됨
      // g : 문자열 전체 검색
      // ?= : 기호 앞과 뒤의 조건을 합쳐줌
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
});