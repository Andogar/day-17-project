/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


// if you get an ace it should be 11
// if making your ace 11 puts you over 21, the ace needs to be 1

function handValue (hand) {

  var runningTotal = 0;
  var aceCount = 0;

  for (var i = 0; i < hand.length; i++) {

    if (hand[i] == "K" || hand[i] == "Q" || hand[i] == "J") {

      hand[i] = "10";

    } else if (hand[i] == "A") {

      hand[i] = "11";
      aceCount += 1;

    }

    currentCard = parseInt(hand[i]);
    runningTotal += currentCard;

  }

  while (aceCount > 0 && runningTotal > 21) {

    runningTotal -= 10;
    aceCount -= 1;

  }

  return runningTotal;
}

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
