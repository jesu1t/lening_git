otv_uch_1 = document.getElementById('z_1').value;
otv_ucgenika_1 = otv_uch_1;
otv_uch_1 = kodirov(otv_uch_1);
otv_uch_2 = document.getElementById('z_2').value;
otv_ucgenika_2 = otv_uch_2;
otv_uch_2 = kodirov(otv_uch_2);
otv_uch_3 = document.getElementById('z_3').value;
otv_ucgenika_3 = otv_uch_3;
otv_uch_3 = kodirov(otv_uch_3);
ball = 0;
if(otv_uch_1 == pr_otv_zadachi_1){
    ball +=1;
    otveti = "Вопрос 1. Вы ответили верно. Ваш ответ:"+otv_ucgenika_1;
} else {
    otveti = "Вопрос 1. Вы ответили не верно. Ваш ответ:"+otv_ucgenika_1;    
}
if(otv_uch_2 == pr_otv_zadachi_2){
    ball +=1;
    otveti += "<br>Вопрос 2. Вы ответили верно. Ваш ответ:"+otv_ucgenika_2;
} else {
    otveti += "<br>Вопрос 2. Вы ответили не верно. Ваш ответ:"+otv_ucgenika_2;    
}
if(otv_uch_3 == pr_otv_zadachi_3){
    ball +=1;
    otveti += "<br>Вопрос 3. Вы ответили верно. Ваш ответ:"+otv_ucgenika_3;
} else {
    otveti += "<br>Вопрос 3. Вы ответили не верно. Ваш ответ:"+otv_ucgenika_3;
}
vsego_zadach = 3;
procent_vip = ball/vsego_zadach * 100;
docum