occupations = [
	'associate dean',
	'attorney',
	'author',
	'CEO',
	'dentist',
	'engineer',
	'fishing guide',
	'founder of nonprofits',
	'guitarist',
	'lacrosse coach',
	'plumber',
	'professor',
	'photographer',
	'real estate contractor',
	'TV editor'
];

$(document).ready(function() {
	setOccupation();
	setInterval(function(){
		animateOccupation();
	},3000);

	function animateOccupation() {
		$('.occupationHeader').animate({'opacity': 0},250, function() {
			setOccupation();
		}).animate({'opacity': 1},250);
	}
	function setOccupation() {
		var occupation = occupations[Math.floor(Math.random() * occupations.length)];
		var article = 'a';
		if(vowelTest(occupation.charAt(0))) {
			article = 'an';
		}
		$('.article').empty().append(article);
		$('.occupation').empty().append(occupation);
	}
});
function vowelTest(s) {
  return (/^[aeiou]$/i).test(s);
}
