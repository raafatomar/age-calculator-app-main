let birthDayInput = document.querySelector("#day")
let birthMonthInput = document.querySelector("#month")
let birthYearInput = document.querySelector("#year")
let daySpan = document.querySelector("#day-out");
let monthSpan = document.querySelector("#month-out");
let yearSpan = document.querySelector("#year-out");

function get_age(){
    var today = new Date();
    var todayYear = today.getFullYear();
    var todayMonth = today.getMonth()+1;
    var todayDay = today.getDate();
    let birthYear = birthYearInput.value;
    let birthMonth = birthMonthInput.value;
    let birthDay = birthDayInput.value;

    // حساب العمر بدقة     

        let ageYear = todayYear - birthYear ;
        let ageMonth = todayMonth - birthMonth;
        let ageDay = todayDay - birthDay;
        if (birthMonth > todayMonth){
            ageMonth+=12;
            ageYear--;
        }
        yearSpan.innerHTML = ageYear ;
        monthSpan.innerHTML = ageMonth ;
        daySpan.innerHTML = ageDay ; 

        // let bottom = document.getElementById('img');
        // bottom.addEventListener('click',
    }
    
    function raa(){
        if(birthDayInput.value > 31 || birthDayInput.value < 1){
            var wrong1 = document.getElementById('wrong1');
            wrong1.style.display = 'block';
            daySpan.innerHTML = '--' ;
        }else{
            wrong1.style.display = 'none';
            daySpan.innerHTML = ageDay ; 
        }
        
        if(birthMonthInput.value > 1 || birthMonthInput.value < 12){
            var wrong2 = document.getElementById('wrong2');
            wrong2.style.display = 'block';
            monthSpan.innerHTML = '--' ;
        }else{
            wrong2.style.display = 'none';
            monthSpan.innerHTML = ageMonth ;
        }
        
        if (birthYearInput.value > 2024 || birthYearInput.value < 1900){
            var wrong3 = document.getElementById('wrong3');
            wrong3.style.display = 'block';
            yearSpan.innerHTML = '--' ;
        }else{
            wrong3.style.display = 'none';
            yearSpan.innerHTML = ageYear ;
        }
    }

    