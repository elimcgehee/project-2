 // Alert
 alert("⚠️ Are you sure you wish to proceed? ⚠️") 
 
 // Sound 
  document.addEventListener('click', () => {
	let url = chrome.runtime.getURL('media/audio.mp3')
	console.log(url)

	let a = new Audio(url)
	a.play()
})

  // Pop-Up
var popup2 = document.createElement("div");
popup2.style.width = "400px";
popup2.style.height = "400px";
popup2.style.border = "solid 1px #000";
popup2.style.margin = "10px";
popup2.style.padding = "10px";
popup2.style.position = "absolute";
popup2.style.top = "300px";
popup2.style.left = "500px";
popup2.style.zIndex = "9999";
popup2.textContent = "CLICK HERE TO FULLY IMMERSE YOURSELF";
document.body.insertAdjacentElement("afterbegin",popup2);

popup2.addEventListener('click', function() {
  popup2.remove();
});
  
	// Technique 1
	// var elements = document.getElementsByTagName('*');
	for (e of document.getElementsByTagName('*')) {
	var c = "rgb(" + Math.floor(Math.random()*255)
				 + "," + Math.floor(Math.random()*255)
				 + "," + Math.floor(Math.random()*255) + ")"

	e.style.setProperty('background-color',c);
	}
  
	// Technique 2
	var html = document.querySelector('html');
	var walker = document.createTreeWalker(html, NodeFilter.SHOW_TEXT);
	var node;
	while (node = walker.nextNode()) {
	   node.nodeValue = node.nodeValue.replace(/a/gi, 'ᾷ'),
	   node.nodeValue = node.nodeValue.replace(/b/gi, 'ℬ'),
	   node.nodeValue = node.nodeValue.replace(/c/gi, '©'),
	   node.nodeValue = node.nodeValue.replace(/d/gi, 'ḋ'),
	   node.nodeValue = node.nodeValue.replace(/e/gi, '€'),
	   node.nodeValue = node.nodeValue.replace(/f/gi, '𝑓'),
	   node.nodeValue = node.nodeValue.replace(/g/gi, 'Ǥ'),
	   node.nodeValue = node.nodeValue.replace(/h/gi, 'ℏ'),
	   node.nodeValue = node.nodeValue.replace(/i/gi, 'ⓘ'),
	   node.nodeValue = node.nodeValue.replace(/j/gi, '♩'),
	   node.nodeValue = node.nodeValue.replace(/k/gi, '𝒦'),
	   node.nodeValue = node.nodeValue.replace(/l/gi, '1'),
	   node.nodeValue = node.nodeValue.replace(/m/gi, 'ℳ'),
	   node.nodeValue = node.nodeValue.replace(/n/gi, 'Ꞥ'),
	   node.nodeValue = node.nodeValue.replace(/o/gi, 'ø'),
	   node.nodeValue = node.nodeValue.replace(/p/gi, 'ℙ'),
	   node.nodeValue = node.nodeValue.replace(/q/gi, 'ℚ'),
	   node.nodeValue = node.nodeValue.replace(/r/gi, '®'),
	   node.nodeValue = node.nodeValue.replace(/s/gi, 'ⓢ'),
	   node.nodeValue = node.nodeValue.replace(/t/gi, '☂'),
	   node.nodeValue = node.nodeValue.replace(/u/gi, '∪'),
	   node.nodeValue = node.nodeValue.replace(/v/gi, 'ⓥ'),
	   node.nodeValue = node.nodeValue.replace(/w/gi, '𝒘'),
	   node.nodeValue = node.nodeValue.replace(/x/gi, '✗'),
	   node.nodeValue = node.nodeValue.replace(/y/gi, '⑂'),
	   node.nodeValue = node.nodeValue.replace(/z/gi, 'ⓩ')
	}
 



