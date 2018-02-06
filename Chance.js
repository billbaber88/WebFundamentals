var luckyNumber = Math.floor(Math.random()*100);
console.log('Your lucky number is ' + luckyNumber);

function slots(quarters, leaveAmount){
    for(var i=quarters; i>=0; i--){
      if(quarters > leaveAmount){
        console.log('Congrats, you have ' + quarters + ' quarters! You walk away a winner!')
        break;
      }
      
      quarters--
      
        var spin = Math.floor(Math.random() * 100)
        if (spin === luckyNumber){
            var winnings = Math.floor(Math.random() * 50)+51;
            quarters = quarters + winnings;
            console.log('Congrats, you just won ' + winnings + " quarters, and now have a total of " + quarters + " quarters");
        } else if(i>0) {
            console.log('You lost. You have ' + (i-1) + ' spins remaining.')
        } else {
          console.log('You\'re bankrupt! Now go home and watch your daughter grow old while you figure out how to tell her that you gambled away all of her college money.')
        }
      i = quarters;  
    }
}

slots(50, 100);