$(document).ready(function() {

	//what does this do?
	function convert_value_to_string(value) {
		if (value > 10) {
			switch (value) {
				case 11:
				return 'Jack';
				break;
				case 12:
				return 'Queen';
				break;
				case 13:
				return 'King';
				break;
			}
		}
		return value.toString();
	}

	//what does this do?
	var deck = [];
	var suits = ['hearts', 'diamonds', 'spades', 'clubs'];
	for (var i = 0; i<suits.length; i++) {
		var suit = suits[i];
		for (var j = 0; j<13; j++) {
			deck.push({number: j+1, suit: suit});
		}
	}
	
	//shuffle the deck
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

	deck = shuffleArray(deck);
	
	var cards_player_1 = [];
	var cards_player_2 = [];
	//divide out the cards into the two arrays
	for (var i = 0; i < deck.length; i++) {
		if (i%2 === 1) {
		cards_player_1.push(deck[i])
		} else {
		cards_player_2.push(deck[i])
		}
	}
	//create a function (algorithm) called "war" that takes two cards as parameters, compares them and returns a winner. A tie should return false.
	function war(card_1, card_2) {
		if (card_1.number > card_2.number){
			alert("player1 wins")
		}else if(card_2.number > card_1.number){
			alert("player2 wins")
	}else {
		alert("tie")
	}
	
	}
	//create a play function
		//compare the cards
		//give the winner both cards (at end of deck)
	function play() {
		var round = war(cards_player_1[0], cards_player_2[0]);
			
		if(round == "player1 wins"){
			cards_player_1.push(cards_player_2.shift(), cards_player_1.shift());
				alert("player1 wins")
		} else if (round == "player2 wins"){
			cards_player_2.push(cards_player_1.shift(), cards_player_2.shift());
				alert("player2 wins")
		} else {
			var tiebreak = war(cards_player_1[3], cards_player_2[3])

			if (tiebreak === "player1 wins"){
				for(var i = 0; i < 4; i++)
					cards_player_1.push(cards_player_2.shift(), cards_player_1.shift());
						alert("player1 wins")
			}else if (tiebreak === "player2 wins"){
				for(var i = 0; i < 4; i++)
					cards_player_2.push(cards_player_2.shift(), cards_player_1.shift());
						alert("player2 wins")
			}else {
				return false;
			}
		  } 

			//this function (defined below) will continue to the next turn
		advance();
	}
		
	
	
	
	function advance() {
		//take the top two cards and display them
		if (cards_player_1.length) {
			var card_1 = cards_player_1[0];
			var card_2 = cards_player_2[0];
			$("#opp-card").html(convert_value_to_string(card_1.number)+" "+card_1.suit);
			$("#opp-card-count").html(cards_player_1.length);
			$("#my-card").html(convert_value_to_string(card_2.number)+" "+card_2.suit);
			$("#my-card-count").html(cards_player_2.length);
			
		}
	}
	advance();
	
	$(".btn").click(function() {
		play();
	});
});