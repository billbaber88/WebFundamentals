var daysUntilMyBirthday = 60;

for(var i = daysUntilMyBirthday; i>=0; i--){
    if(i>30){
        console.log('My birthday is still ' + i + ' days away. It will never be here :(')
    } else if (i<=30 && i > 5){
        console.log('Oh my glob, my birthday is ' + i + ' days away. Less than a month!')
    } else {
        console.log('MY BIRTHDAY IS ' + i + ' DAYS AWAY. GET READY TO PARTY!')
    }
}