var Views = document.getElementById("view-result");

var summ = 0;
var arr = [];
function nav_link1(){
	document.getElementById("Home").classList.add("actives");
	document.getElementById("Randomize").classList.remove("actives");
	document.getElementById("section-home").style = "display:block";
	document.getElementById("section-randomize").style = "display:none";
	document.getElementById("alert-home").style = "display:none !important";
}
function nav_link2(){
	if (Views.value.length != "") {
		document.getElementById("Home").classList.remove("actives");
		document.getElementById("Randomize").classList.add("actives");
		document.getElementById("section-home").style = "display:none";
		document.getElementById("section-randomize").style = "display:block !important";
		document.getElementById("alert-home").style = "display:none !important";
		summ = Views.value;
		console.log(summ);
		for (var i = 0; i < summ * 1; i++) {
		arr.push(i+1);
	}
	}
	else{
		alert("Bu bo'limga otishdan oldin o'quvchilar sonini kiriting!!!")
	}
}

function Qabul(){
	
	if (Views.value.length != "") {
		document.getElementById("Home").classList.remove("actives");
		document.getElementById("Randomize").classList.add("actives");
		document.getElementById("section-home").style = "display:none";
		document.getElementById("section-randomize").style = "display:block !important";
		summ = Views.value;
		console.log(summ);
		for (var i = 0; i < summ * 1; i++) {
		arr.push(i+1);
		}
	}else{
		document.getElementById("alert-home").style = "display:block !important"
	}
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