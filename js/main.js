var sinf = document.getElementById("sinf");
var sinfname = ["5-A sinf"]
var oquvchilar =[["Anvarjonov D", "Aliyeva R", "Alijonova M", "A'zimov Elyor", "A'zimov Eldor", "Ikromaliyev Y", "Ismoiljonova G", "Ismoiljonov M", "Isroilov A", "Ilxomjonov B", "Mirzaakbarova Sh", "Mo'minjonov Sh", "Mahmudov G", "Nuraliyev M", "Orifjonov M", "Raximov R", "Rasulova O", "Rasuljonova G", "Sultonaliyev M", "Xudovberganov S"]]
var sinflar = { 
	sinfname: sinfname,
	oquvchilar: oquvchilar
}
var index = 0;
var arr= [];
function nav_link1(){
	document.getElementById("Home").classList.add("actives");
	document.getElementById("Randomize").classList.remove("actives");
	document.getElementById("section-home").style = "display:block";
	document.getElementById("section-randomize").style = "display:none";
	document.getElementById("alert-home").style = "display:none !important";
}
function nav_link2(){
	if (sinf.value.length != "") {
		document.getElementById("Home").classList.remove("actives");
		document.getElementById("Randomize").classList.add("actives");
		document.getElementById("section-home").style = "display:none";
		document.getElementById("section-randomize").style = "display:block !important";
		document.getElementById("alert-home").style = "display:none !important";
	}
	else{
		alert("Bu bo'limga otishdan oldin o'quvchilar sonini kiriting!!!")
	}
}

function Qabul(){
		document.getElementById("Home").classList.remove("actives");
		document.getElementById("Randomize").classList.add("actives");
		document.getElementById("section-home").style = "display:none";
		var inputvalue = sinf.value;
		console.log(inputvalue);
		for (var i = 0; i < sinflar.sinfname.length; i++) {
			if (inputvalue == sinflar.sinfname[i]) {
				index = i;
				arr = sinflar.oquvchilar[index].map(num => num);
				break;
			}
		}
		document.getElementById("section-randomize").style = "display:block !important";
}

// console.log(arr);

function find(){
	if (arr.length > 0) {
		var random = Math.floor(Math.random() * arr.length);
		document.getElementById("modal-text").style = "display:block;"
		document.getElementById("modal-body").classList.add("modal-b");
		document.getElementById("alert").style = "display:none;"
		document.getElementById("modal-text").innerHTML = arr[random];
		arr.splice(random,1);
	}else{
		document.getElementById("modal-text").style = "display:none !important;"
		document.getElementById("modal-body").classList.remove("modal-b");
		document.getElementById("alert").style = "display:block;"
	}
	
}