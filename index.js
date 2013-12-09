var context = false;
try {
	if(window.AudioContext = window.AudioContext||window.webkitAudioContext){
		context = new AudioContext();
	}
} catch(e){
	throw new Error('Web Audio API is not supported in this browser');
}
module.exports = context;