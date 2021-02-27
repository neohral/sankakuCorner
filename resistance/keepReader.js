document.querySelector('#readerButton').onclick = function () {
	var text  = document.querySelector('#taear').value.replace(/\r\n|\r/g, "\n");
   var lines = text.split( '\n' );
	var outArray = new Array();
	for ( var i = 0; i < lines.length; i++ ) {
        // 空行は無視する
        if ( lines[i] == '' ) {
            continue;
        }

        outArray.push( lines[i] );
    }
	var rand = Math.floor( Math.random() * lines.length ) ;
	gmm = new SpeechSynthesisUtterance('');
	var voices = speechSynthesis.getVoices();
	voices.forEach(function(v, i){
		if(v.name == 'Google 日本語') gmm.voice = v;
			//document.write(v.name);
	});
	gmm.volume = 1;
	gmm.rate = 1;
	gmm.pitch = 1;
	gmm.lang='ja-JP';
	gmm.onend = function (event) {
        setTimeout(soundPlay,timer[i]);
		  i++
    }
	setTimeout(soundPlay,timer[i]);
	gmm.text="スタートプレイヤーは、、"+lines[rand]+"、、です";
	speechSynthesis.speak(gmm);
}
