
var test = [];

function Question(question, value1, value2, value3, value4){ 
	this.question = question; 
	this.value1 = value1; 
	this.value2 = value2; 
	this.value3 = value3; 
	this.value4 = value4; 

}

 
function addQuestion(question, value1, value2, value3, value4){
	var q = new Question(question, value1, value2, value3, value4);
	test.push(q);
}

addQuestion( 
		  	"In which decade was the American Institute of Electrical Engineers (AIEE) founded?",
			"1850s",
			"1880s",
			"1930s",
			"1950s"
   		);

addQuestion( 
		  	"What is part of a database that holds only one type of information?",
			"Report",
			"Field",
			"Record",
			"File"
   		);

addQuestion( 
		  	"'OS' computer abbreviation usually means ?",
			"Order of Significance",
			"Open Software",
			"Operating System",
			"Optical Sensor"
   		);


console.log(test);

function addElement(e, type, name, text){
	var element = document.createElement(e);
	if(type != ""){
		element.setAttribute("type", type);
		element.setAttribute("name", name);
		element.setAttribute("value", text);
	}else{
		var text = document.createTextNode(text);
		element.appendChild(text);
	}
	var col = document.getElementById("col");
	col.appendChild(element);
}

var h3 = document.getElementsByTagName("h3");
var label = document.getElementsByTagName("input");
var option = document.getElementsByTagName("option");

h3[0].innerHTML = test[0].question;
label[1].setAttribute("placeholder", test[0].value1);
label[3].setAttribute("placeholder", test[0].value2);
label[5].setAttribute("placeholder", test[0].value3);
label[7].setAttribute("placeholder", test[0].value4);


h3[1].innerHTML = test[1].question;
label[9].setAttribute("placeholder", test[1].value1);
label[11].setAttribute("placeholder", test[1].value2);
label[13].setAttribute("placeholder", test[1].value3);
label[15].setAttribute("placeholder", test[1].value4);

h3[2].innerHTML = test[2].question;
option[0].innerHTML = test[2].value1;
option[1].innerHTML = test[2].value2;
option[2].innerHTML = test[2].value3;
option[3].innerHTML = test[2].value4;





