for(var j=1;j<8;j++){
	var mytextarea = document.getElementById("person"+j);
	var fm = "";
	if(j==1){
		fm += '<br>';
	}else{
		fm += '<input type="text" class="readOnly" name="player'+j+'"><br>'
	}
	fm += '<br>';
	for(var i=0;i<6;i++){
		makeselecter(i,j);
	}
	fm += '<br>';
		for(var i=0;i<6;i++){
	    	makeselecter(i,j);
	    }
	fm += '<br>';
		for(var i=0;i<9;i++){
			makeselecter(i,j);
		}
	mytextarea.innerHTML = fm;
	if(j!=1){
		document.getElementsByName("player"+j)[0].addEventListener('click', test, false);
	}
}
var nodeList = document.getElementsByName("target");
for(var i in nodeList){
	nodeList[i].addEventListener('click', test, false);
}
function test(event){
	if((event.target.style.color == "rgb(255, 0, 0)")){
		event.target.style.color = "#000000";
	}else{
		event.target.style.color = "#FF0000";
		if((event.target.name=="target")&&(document.getElementById("checkmemo").checked)){
			document.getElementById("memo").value+="["+event.target.value+"]";
		}
	}
}
function makeselecter(i,j){
	fm += '<select name="select'+j+i+'">';
    fm += '<option value="maru">-</option>';
    fm += '<option value="maru">〇</option>';
    fm += '<option value="batu">×</option>';
    fm += '<option value="sank">△</option>';
    fm += '<option value="sank1">△1</option>';
    fm += '<option value="sank2">△2</option>';
    fm += '<option value="sank3">△3</option>';
    fm += '<option value="sank4">△4</option>';
    fm += '<option value="sank5">△5</option>';
    fm += '<option value="sank6">△6</option>';
    fm += '<option value="sank7">△7</option>';
    fm += '<option value="sank8">△8</option>';
    fm += '<option value="sank9">△9</option>';
    fm += '</select>';
    fm += '<br>';
}