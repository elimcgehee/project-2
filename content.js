 // Alert
 alert("⚠️ Are you sure you wish to proceed? ⚠️") 
 
 // Sound 
  document.addEventListener('click', () => {
	let url = chrome.runtime.getURL('media/audio.mp3')
	console.log(url)

	let a = new Audio(url)
	a.play()
})

  // Pop-Ups
var popup = document.createElement("div");
popup.style.width = "400px";
popup.style.height = "400px";
popup.style.border = "solid 1px #000";
popup.style.margin = "10px";
popup.style.padding = "10px";
popup.style.position = "absolute";
popup.style.top = "100px";
popup.style.left = "100px";
popup.style.zIndex = "9999";
popup.textContent = "CLICK ME CLICK ME CLICK ME CLICK ME CLICK ME CLICK ME CLICK ME CLICK ME ";
document.body.insertAdjacentElement("afterbegin",popup);

popup.addEventListener('click', function() {
  popup.remove();
});

var popup2 = document.createElement("div");
popup2.style.width = "400px";
popup2.style.height = "400px";
popup2.style.border = "solid 1px #000";
popup2.style.margin = "10px";
popup2.style.padding = "10px";
popup2.style.position = "absolute";
popup2.style.top = "400px";
popup2.style.left = "600px";
popup2.style.zIndex = "9999";
popup2.textContent = "NO CLICK ME NO CLICK ME NO CLICK ME NO CLICK ME NO CLICK ME NO CLICK ME NO CLICK ME NO CLICK ME";
document.body.insertAdjacentElement("afterbegin",popup2);

popup2.addEventListener('click', function() {
  popup2.remove();
});

var popup3 = document.createElement("div");
popup3.style.width = "400px";
popup3.style.height = "400px";
popup3.style.border = "solid 1px #000";
popup3.style.margin = "10px";
popup3.style.padding = "10px";
popup3.style.position = "absolute";
popup3.style.top = "100px";
popup3.style.left = "700px";
popup3.style.zIndex = "9999";
popup3.textContent = "CLICK HERE TO WIN A FREE MONEY CLICK HERE TO WIN A FREE MONEY CLICK HERE TO WIN A FREE MONEY CLICK HERE TO WIN A FREE MONEY CLICK HERE TO WIN A FREE MONEY";
document.body.insertAdjacentElement("afterbegin",popup3);

popup3.addEventListener('click', function() {
  popup3.remove();
});

var popup4 = document.createElement("div");
popup4.style.width = "400px";
popup4.style.height = "400px";
popup4.style.border = "solid 1px #000";
popup4.style.margin = "10px";
popup4.style.padding = "10px";
popup4.style.position = "absolute";
popup4.style.top = "300px";
popup4.style.left = "200px";
popup4.style.zIndex = "9999";
popup4.textContent = "CLICK ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME ME";
document.body.insertAdjacentElement("afterbegin",popup4);

popup4.addEventListener('click', function() {
  popup4.remove();
});

var popup5 = document.createElement("div");
popup5.style.width = "400px";
popup5.style.height = "400px";
popup5.style.border = "solid 1px #000";
popup5.style.margin = "10px";
popup5.style.padding = "10px";
popup5.style.position = "absolute";
popup5.style.top = "600px";
popup5.style.left = "100px";
popup5.style.zIndex = "9999";
popup5.textContent = "HAZ CLIC HAZ CLIC HAZ CLIC HAZ CLIC HAZ CLIC HAZ CLIC HAZ CLIC";
document.body.insertAdjacentElement("afterbegin",popup5);

popup5.addEventListener('click', function() {
  popup5.remove();
});

var popup6 = document.createElement("div");
popup6.style.width = "400px";
popup6.style.height = "400px";
popup6.style.border = "solid 1px #000";
popup6.style.margin = "10px";
popup6.style.padding = "10px";
popup6.style.position = "absolute";
popup6.style.top = "300px";
popup6.style.left = "200px";
popup6.style.zIndex = "9999";
popup6.textContent = "CLICK HERE 4 FREE STUFF CLICK HERE 4 FREE STUFF CLICK HERE 4 FREE STUFF";
document.body.insertAdjacentElement("afterbegin",popup6);

popup6.addEventListener('click', function() {
  popup6.remove();
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
 



