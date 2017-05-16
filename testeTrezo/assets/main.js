// Horário
function updateTime(){
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    if (minutes < 10){
        minutes = "0" + minutes
    }
    var time = hours + ":" + minutes + " ";
    if(hours > 11){
        time += "PM";
    } else {
        time += "AM";
    }
    document.getElementById('hour').innerHTML = time;
}
setInterval(updateTime, 1000);
function updateTime2(){
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    if (minutes < 10){
        minutes = "0" + minutes
    }
    var time = hours + ":" + minutes + " ";
    document.getElementById('bigHour').innerHTML = time;
}
setInterval(updateTime2, 1000);

// Dia da semana
var userLang = navigator.language || navigator.userLanguage; 

if (userLang == "pt-BR"){
	
	var days = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
	var months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
}
if (userLang == "en-US"){
	var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
}
var currentTime = new Date();
var dia = currentTime.getDate();
var semana = days[ currentTime.getDay() ];
var mes = months[ currentTime.getMonth() ];

if (userLang == "pt-BR"){
	document.getElementById('date').innerHTML = semana+", "+dia+" de "+mes;
}

if (userLang == "en-US"){
	document.getElementById('date').innerHTML = semana+", "+mes+" "+dia;
}

// GitHub
$(function(){
        $.get('https://api.github.com/users/eduardofidera', function(response){
            $('#avatar').attr('src', response.avatar_url);
            $('#nome').text(response.name);
            $('#email').text(response.blog);
        });
    });
	
// Screen change
 screenChange();
    function screenChange(){
        $(".desbloquear").click(function(){
			$(".screen1").toggleClass("screenChange")
            $(".screen2").toggleClass("screenReveal");
			$(".screen1").removeClass("screen1sideOut");
        }); 
        $(".screen2 span").click(function(){
            $(".screen2").removeClass("screenReveal");
			$(".screen1").removeClass("screenChange");
			$(".screen1").toggleClass("screen1sideOut");
        }); 
    }	
	
