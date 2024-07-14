
var j = "";
var date_now = new Date();
var i;
var p = document.createElement("p");
var P1;
var chosenDate;
var chosenMonth;
var chosenYear;
var chosenHour;
var chosenMinute;
var formatedDate;
var k;
var table_dates = new Array(35);
var counter;
var firstMonday;
var fcd;
var dateF = "a"; //what was dateF meant to be? it's redundant... never actually used
var months_lang = ["January", "Febuary", "March", "April", "May", "June", "July", "Augaust", "September", "October", "November", "December"];
var days_lang = ["Sunday",  "Monday",  "Tuesday",  "Wednesday",  "Thursday",  "Friday",  "Saturday"];
var todayCell;
var chosenCell;
var selectedDate;
var idOfSelCell;

function fill_out_calandar(){
	chosenDate = document.getElementById("chosenDate").value *1;
	chosenMonth = document.getElementById("chosenMonth").value;
	chosenYear = document.getElementById("chosenYear").value *1;
	chosenHour = document.getElementById("chosenHour").value *1;
	chosenMinute = document.getElementById("chosenMinute").value *1;
	
	if (chosenDate==""){
		chosenDate = date_now.getDate();
	}
	if(chosenMonth==""){
		chosenMonth = date_now.getMonth();
	}
	if(chosenYear==""){
		chosenYear = date_now.getFullYear()
	}
	if(chosenHour==""){
		chosenHour=date_now.getHours();
	}
	if(chosenMinute==""){
		chosenMinute = date_now.getMinutes();
		if(chosenMinute.length==1){
			chosenMinute="0"+chosenMinute;
		}
	}
	if (chosenDate>=1 && chosenDate<=31){
		if(chosenYear>=0){
			if(chosenHour>=0&&chosenHour<=23){
				if(chosenMinute>=0&&chosenMinute<=59){
					if((chosenMonth>=0&&chosenMonth<=11)){
						if((chosenMinute+"").length ==1){
							chosenMinute = "0" + chosenMinute;
						}
						if((chosenHour+"").length==1){
							chosenHour = "0" + chosenHour;
						}
						if(dateF=="a"){
							j = months_lang[chosenMonth] + " " + chosenDate + ", " + chosenYear + " " + chosenHour + ":" + chosenMinute + ":00";
							P1 = days_lang[date_now.getDay(j)] + " "+ j;
							p.innerHTML = P1;
							document.body.appendChild(p);
						}
						else if(dateF=="b"){
							j = months_lang[chosenMonth] + " " + chosenDate + ", " + chosenYear + " " + chosenHour + ":" + chosenMinute + ":00";
							P1 = days_lang[date_now.getDay(j)] + " "+ j;
							p.innerHTML = P1;
							document.body.appendChild(p);
						}
					}else{
						alert("invalid month")
					}
				}else{
					alert("invalid minute")
				}
			}else{
				alert("invalid hour")
			}
		}else{
			alert("invalid year")
		}
	} else{
		alert("invalid date")
	}
	counter = 0;
	formatedDate = new Date(chosenYear+"/"+(chosenMonth+1)+"/"+chosenDate+" "+chosenHour+":"+chosenMinute);
	fcd=new Date(formatedDate);
	firstMonday = formatedDate;
	while(firstMonday.getDay()!==1){
	firstMonday.setDate(firstMonday.getDate()-1);
	}
	firstMonday.setDate(firstMonday.getDate()-7);
	formatedDate = firstMonday;
	for (counter=0; counter<=34; counter++){  //interate through every cell
		
		table_dates[counter] = months_lang[formatedDate.getMonth()] + " " + formatedDate.getDate() + ", " + formatedDate.getFullYear() + " " + formatedDate.getHours() + ":" + formatedDate.getMinutes() + ":00";
		formatedDate.setDate(formatedDate.getDate()+1);
	}
	counter = 0;
	if(chosenCell!=null){
		chosenCell.classList.remove("chosen");
		if(todayCell!=null){
			todayCell.classList.remove("today");
		}
	}
	for(k=1; k<6; k++){		
		for(i=1; i<=7; i++){
			cell_id = "u" + i + "" + k;
			if(document.getElementById(cell_id)){
				document.getElementById(cell_id).innerHTML = new Date(table_dates[counter]).getDate() + " " + months_lang[new Date(table_dates[counter]).getMonth()];
				//console.log("cell_id: ", cell_id, "cell inner: ",  document.getElementById(cell_id).innerHTML, "date string: ", table_dates[counter]);
				if(new Date(table_dates[counter]).getTime()==new Date(fcd).getTime()){
					document.getElementById(cell_id).classList.add("chosen");
					chosenCell = document.getElementById(cell_id);
				}
				if(sameDateAndYear(new Date(), table_dates[counter])){
					document.getElementById(cell_id).classList.add("today");
					todayCell = document.getElementById(cell_id);
				}
			} else {
				console.log('cell does not exist', cell_id)
			}
			counter++;
		}
	}
}


function TDonclick(){
	if(idOfSelCell!=null){
		document.getElementById(idOfSelCell).classList.remove("clickedCell")
	}
	var cell_id = event.target.getAttribute("data-val");
	document.getElementById(cell_id).classList.add("clickedCell");
	var d = function(){
		var i;
		for(i=0; i<35; i++){
			if(sameDate(table_dates[i], document.getElementById(cell_id).innerHTML)){
				return table_dates[i];
			}
		}
		return new Date();
	};
	selectedDate = new Date(d());
	document.getElementById("seldate").value = selectedDate;
	document.getElementById("chosenDate").value = selectedDate.getDate();
	document.getElementById("chosenMonth").value = selectedDate.getMonth();
	document.getElementById("chosenYear").value = selectedDate.getFullYear();
	//next line must be last in the function
	idOfSelCell = cell_id;
}