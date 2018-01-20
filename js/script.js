class Daters {

	constructor(name, surname, age, gender, inRelation, likes) {
		this.name = name;
		this.surname = surname;
		this.age = age;
		this.gender = gender;
		this.inRelation = inRelation;
		this.likes = likes;
	}
}



var newDaters = [
new Daters("John", "Doe", 24, "male", false, 3),
new Daters("Jane", "Doe", 26, "female", true, 2),
new Daters("Maxima", "Musterman", 25, "female", false, 8),
new Daters("Max", "Musterman", 29, "male", false, 2),
new Daters("Samanta", "May", 37, "female", false, 3),
new Daters("Ryan", "Voltano", 35, "male", true, 2),
new Daters("Sam", "Federer", 33, "male", false, 8),
new Daters("Miriam", "Dvorac", 35, "female", false, 2),
new Daters("Jeffrey", "Motown", 53, "male", false, 3),
new Daters("Janett", "Sinatra", 26, "female", false, 2),
new Daters("Cayenne", "Williams", 28, "female", false, 8),
new Daters("Simon", "Rogers", 39, "male", false, 2),
new Daters("Sarah", "Lionett", 31, "female", false, 3),
new Daters("Mario", "Moretti", 29, "male", true, 2),
new Daters("Noah", "Wilson", 27, "male", false, 8),
new Daters("Lina", "McGregor", 23, "female", false, 2),
new Daters("Luca", "Morrison", 30, "male", false, 3),
new Daters("Gregor", "Santana", 32, "male", false, 2),
new Daters("Loraine", "Queeney", 25, "female", false, 8),
new Daters("Etienne", "Baribier", 27, "male", false, 2),
new Daters("Mary", "Riss-Taylor", 33, "female", false, 3),
new Daters("Magnus", "Winter", 57, "male", false, 2),
new Daters("Ean", "Harrison", 29, "male", false, 8),
new Daters("Kendra", "LaFayette", 27, "female", false, 2),
new Daters("Michael", "Trudeau", 34, "male", false, 8),
new Daters("Maya", "Thomson", 28, "female", false, 2),
new Daters("Maliah", "Casta", 36, "female", false, 8),
new Daters("Cameron", "Finnley", 25, "male", false, 2)
];


function showAllDaters() {
	
var allDaters = document.getElementById("datingPartners");

//-----LOOP TO CREATE ALL DATERS -------------//

for (var i = 0; i < newDaters.length; i++) {
	allDaters.innerHTML += '<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 daters" id="'+ i + 
	'"><div class="row"><div class="pic col-lg-12 col-md-12 col-sm-12 col-xs-12"><img src="img/image' + i + '.jpg";>'+
	'</div></div><div class="row boxdetails"><div class="details col-lg-12 col-md-12 col-sm-12 col-xs-12">Name: ' + 
	'<b><big>' + newDaters[i].name + '</big></b>' + 
	'<br>Surname: '         + newDaters[i].surname + 	
	'<br>Age: ' 			+ newDaters[i].age + 
	'<br>Gender: '          + newDaters[i].gender + 
	'<br>In Relationship: ' + newDaters[i].inRelation + 
	'</div></div><div class="row last"><div class="votes col-lg-12 col-md-12 col-sm-12 col-xs-12 px-5 py-4">'+
	'<button class="add id="add"' + i + '" value="' + i + '">Like</button>'+
	'<div id="counter" class="counterall counter' + i + '"><center><b>'+ newDaters[i].likes + '</b></center></div>' + //x+index (x0,x1...)
	'<button class="remove ' + i + '" value="' + i + '">Remove like</button>'+
	'<div class="heart"><img class="heartimg '+ i + '" src="img/like.png"></div></div></div>';

}
};

showAllDaters();

// THIS FILTER IS NOT WORKING
function showFemales(){
	let femaleList = document.getElementById("femaleDaters");
	for (let i = 0; i < newDaters.length; i++) {
		if(newDaters[i].constructor.gender==='female'){
			femaleList.innerHTML += newDaters[i].showAllDaters(this.gender==="female");

		};
	};
};

showFemales();

// THIS FILTER IS NOT WORKING
function showMales(){
	let maleList =document.getElementById("maleDaters");
	for (let i=0; i< newDaters.length; i++){
		if(newDaters[i].constructor.gender == 'male') {
		 maleList.innerHTML += newDaters[i].showAllDaters(this.gender=="male");
		}
	}
}

showMales();

// $("#add").click(function(){
// 	var number = newDaters[0].likes += 1;
// 	$("#"+this.id).html(number);

// });


 $(document).ready(function() {
	$("button.add").on('click', function() { 
		//this.id calls the id from the button.add
		totalLikes = newDaters[this.value].likes += 1; 		
		console.log("Total Likes " + totalLikes + ", index: " + this.id); //i = 4 
		$(".counter" + this.value).html(totalLikes);
		$(".heartimg." + this.value).css("visibility","visible"); //show heart 

	});
});


