document.body.innerHTML +="Resistance:Avalon Manager v1.1"
var i=0;
var serif=[];
var timer=[];
var playing=false;

var gm = new SpeechSynthesisUtterance('load end');
speechSynthesis.speak(gm);
speechSynthesis.cancel(gm);

document.querySelector('#speechButton').onclick = function () {
serif=[];
timer=[];
if(playing){
	return;
}
playing=true;
serif.push('レジスタンスアヴァロン');
timer.push(3000);
serif.push('みな、目を閉じ、こぶしを前に差し出せ');
timer.push(2000);
if(document.querySelector('#oberon').checked)
{
	serif.push('オベロンを除く、モードレットの手下は、目をひらき、周囲を確認して誰が邪悪なしもべであるか確認せよ');
	timer.push(5000);
}else{
	serif.push('モードレットの手下は、目をひらき、周囲を確認して誰が邪悪なしもべであるか確認せよ');
	timer.push(5000);
}
serif.push('モードレッドの手下は目を閉じよ');
timer.push(3000);
if(document.querySelector('#merlin').checked)
{
	if(document.querySelector('#modred').checked)
	{
		serif.push('モードレッド本人を除く、、モードレッドの手下は親指をたて、マーリンがお前らを知れるようにせよ');
		timer.push(2000);
	}else{
		serif.push('モードレッドの手下は親指をたて、マーリンがお前らを知れるようにせよ');
		timer.push(2000);
	}
	serif.push('マーリンは目をひらき、邪悪のしもべを見よ');
	timer.push(5000);
	serif.push('モードレッドの手下は親指を戻し、再び手を握りこぶしにせよ');
	timer.push(2000);
	serif.push('マーリンは目を閉じよ');
	timer.push(3000);
}
serif.push('すべてのプレイヤーは目をとじ、自分の手を握りこぶしにせよ');
timer.push(2000);
if(document.querySelector('#percival').checked)
{
	serif.push('マーリンとモルガナは親指をたて、パーシヴァルがお前らを知れるようにせよ');
	timer.push(2000);
	serif.push('パーシヴァルは目をあけ、マーリンとモルガナをみよ');
	timer.push(5000);
	serif.push('マーリンとモルガナは親指を戻し、再び手を握りこぶしにせよ');
	timer.push(2000);
	serif.push('パーシヴァルは目を閉じよ');
	timer.push(3000);
	serif.push('すべてのプレイヤーは目をとじ、自分の手を握りこぶしにせよ');
	timer.push(2000);
}
serif.push('みなの者は目を開くがよい');
timer.push(2000);

	i=0;
	gm = new SpeechSynthesisUtterance('');
	var voices = speechSynthesis.getVoices();
	voices.forEach(function(v, i){
		if(v.name == 'Google 日本語') gm.voice = v;
			//document.write(v.name);
	});
	gm.volume = 1;
	gm.rate = 1;
	gm.pitch = 1;
	gm.lang='ja-JP';
	gm.onend = function (event) {
        setTimeout(soundPlay,timer[i]);
		  i++
    }
	gm.text=serif[i];
	speechSynthesis.speak(gm);

};
function soundPlay()
{
	if(i<serif.length)
	{
		gm.text=serif[i];
		speechSynthesis.speak(gm);
	}else{
		playing=false;
		gm.onend=null;
		return;
	}
}
