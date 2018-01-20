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
new Daters("John", "Doe", "25", "male", false, 3),
new Daters("Jane", "Doe", "25", "female", true, 2),
new Daters("Maxima", "Musterman", "25", "female", false, 8),
new Daters("Max", "Musterman", "25", "male", false, 2)
];

function showAllDaters() {
	
var allDaters = document.getElementById("datingPartners");

//-----LOOP TO CREATE ALL DATERS -------------//

for (var i = 0; i < newDaters.length; i++) {
	allDaters.innerHTML += '<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 daters" id="'+ i + '"><div class="row"><div class="pic col-lg-12 col-md-12 col-sm-12 col-xs-12"><img src="img/image' + i + '.jpg";>'+
	'</div></div><div class="row"><div class="details col-lg-12 col-md-12 col-sm-12 col-xs-12">Name: ' + newDaters[i].name + 
	'<br>Surname: '         + newDaters[i].surname + 	
	'<br>Age: ' 			+ newDaters[i].age + 
	'<br>Gender: '          + newDaters[i].gender + 
	'<br>In Relationship: ' + newDaters[i].inRelation + 
	'</div></div><div class="row"><div class="votes col-lg-12 col-md-12 col-sm-12 col-xs-12 p-5">'+
	'<button class="add id="add"' + i + '" value="' + i + '">Like</button>'+
	'<div id="counter" class="counterall counter' + i + '"><center><b>'+ newDaters[i].likes + '</b></center></div>' + //x+index (x0,x1...)
	'<button class="remove ' + i + '" value="' + i + '">Remove like</button>'+
	'<div class="heart"><img class="heartimg '+ i + '" src="img/like.png"></div></div></div>';

}
};

showAllDaters();


function showFemales(){
	let femaleList = document.getElementById("femaleDaters");
	for (let i = 0; i < newDaters.length; i++) {
		if(newDaters[i].constructor.gender==='female'){
			femaleList.innerHTML += newDaters[i].showAllDaters(this.gender=="female");

		};
	};
};

showFemales();


function showMales(){
	let maleList =document.getElementById("maleDaters");
	for (let i=0; i< newDaters.length; i++){
		if(newDaters[i].constructor.gender == 'male') {
		 maleList.innerHTML += newDaters[i].showAllDaters();
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

		//--------OPTIONAL - TO ADD JUST ONE LIKE ---------------------
		// $(".add."+this.value).css("display","none"); //hide button.add 
		// $(".remove."+this.value).css("display","initial"); //show button.remove 
		//------------------------------------------------------------

	});
});


