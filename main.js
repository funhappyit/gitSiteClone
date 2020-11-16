(function (window, document){
    //모듈화 전체영역을 더럽히지 않도록 구분하는 것 범위를 설정 하는 것 
    // 'use strict'; 안에 있는 코드는 내가 엄격한 자바스크립트 문법을 통해 작성하겠다고 선언 
    'use strict';
    //요소를 담고 있으면 앞에 보통 $표시를 붙인다.
    //querySelectorAll -> 선택자로 찾음 
    const $toggles = document.querySelectorAll('.toggle');//NodeList라는 유사 배열
    //카멜 표기법 
    //getElementById -> 아이디로 찾음 
    const $toggleBtn =  document.getElementById('toggle-btn');
    //addEventlistener -> 사용자가 발생시킨 이벤트 
    $toggleBtn.addEventListener('click',function(){
        toggleElements();
    });
    
    window.addEventListener('resize',function(){
        if(window.innerWidth>1024){
            //off toggle element
            offElements();
        }
    });
    function toggleElements(){
        //유사 배열 for문 
        [].forEach.call($toggles, function(toggle){
            toggle.classList.toggle('on');
        });
    }

    function offElements(){
        [].forEach.call($toggles, function(toggle){
            toggle.classList.remove('on');
        });
    }

})(window,document)