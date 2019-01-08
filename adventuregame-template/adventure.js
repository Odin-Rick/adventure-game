var oef = new Audio("audio/oof.mp3");
var scareSound = new Audio("Audio/Jumpscare.mp3");
	scareSound.volume = 0.1;
var wii = new Audio("audio/wii.mp3");
	wii.volume = 0.3;
var plop = new Audio("audio/plop.mp3");
	plop.volume = 0.4;
var pokemon = new Audio("audio/pokemon.mp3")
	pokemon.volume = 0.3;
var win = new Audio("audio/win.mp3")
	win.volume = 0.5;
var bruiloft = new Audio("audio/bruiloft.mp3")
	bruiloft.volume = 0.5;
var container = document.getElementById('game-container');
var title = document.getElementById('title');
var description = document.getElementById('description');
var buttons = document.getElementById('game-buttons');

var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var inventory = document.getElementById('inventoryItem');
var taart;
var hasTaart = false;
var inventaris = [];

function audio(){
	scareSound.play();
}

	title.innerHTML = ('Nightmare');
	button1.innerHTML = ('GAME');
	button2.innerHTML = ('VERHAAL');
	button3.innerHTML = ('START');
	inventory.style.display = 'none';
	description.style.display = 'none';

	var buttonDiv1 = document.createElement("div");
	button1.appendChild(buttonDiv1);
	buttonDiv1.id = ("div1")

	buttonDiv1.innerHTML = ('Dit is een horror game waar je zo het verhaal moet uitspelen door de juiste keuzes te maken. Zet je geluid aan, veel succes!')

	button1.onclick = function() {
		buttonDiv1.style.display = 'block'
		buttonDiv2.style.display = 'none'
		buttonDiv2.style.display = 'none'
	}

	var buttonDiv2 = document.createElement("div");
	button2.appendChild(buttonDiv2);
	buttonDiv2.id = ("div2")

	buttonDiv2.innerHTML = ('In 1996 leefde de alleenstaande mevrouw Janssen in haar huis in het bos. De vrouw was een non. Op een dag werd mevrouw Janssen op onverklaarbare wijze dood aangetroffen in haar huis. sinds dien is het huis verlaten. Verhalen zeggen dat ze nog steeds rondspookt in haar huis. Durf jij het huis te betreden??')

	button2.onclick = function() {
		buttonDiv1.style.display = 'none'
		buttonDiv2.style.display = 'block'
		buttonDiv3.style.display = 'none'
	}

	button3.onclick = function() {
		document.body.style.backgroundImage = "url('img/gang.jpg')";
			button1.style.display = 'none'
			button2.style.display = 'none'
			button3.style.display = 'none'
			title.style.display = 'none'
			wii.loop = true;
			wii.play();

		var level1Title = document.createElement("h1")
		document.body.appendChild(level1Title) 
		level1Title.id = "title1"

		level1Title.innerHTML = 'Je komt het huis binnen, wat ga je doen?'

		var levelB1 = document.createElement("button")
		document.body.appendChild(levelB1)
		levelB1.id = "hoi"

		levelB1.innerHTML = ('Je vraagt of er iemand thuis is.')

		var levelB2 = document.createElement("button")
		document.body.appendChild(levelB2)
		levelB2.id = "hey"

		levelB2.innerHTML = ('Je gaat naar boven.')

		var levelB3 = document.createElement("button")
		document.body.appendChild(levelB3)
		levelB3.id = "hallo"

		levelB3.innerHTML = ('Je kijkt of er eten in de keuken is, want je hebt honger.')

		var levelB1Div = document.createElement("div")
		levelB1.appendChild(levelB1Div)
		levelB1Div.id = "B1div"

		levelB1Div.innerHTML = ('Denk je nou echt dat er in een verlaten huis iemand thuis is?')

		levelB1.onclick = function() {
			levelB1Div.style.display = 'block'
			levelB2Div.style.display = 'none'
			levelB3div.style.display = 'none'
		}

		levelB3.onclick	= function() {
			document.body.style.backgroundImage = "url('img/keuken.jpg')"
			levelB1.style.display = 'none'
			levelB2.style.display = 'none'
			levelB3.style.display = 'none'
			level1Title.style.display = 'none'

			var levelC3div = document.createElement("div")
			document.body.appendChild(levelC3div)
			levelC3div.id = "C3div"

			levelC3div.innerHTML = ('Kijk goed rond, er kan wat belangerijks liggen in deze kamer...')

			taart = document.createElement("img");
			taart.src = "img/taart.png";
			container.appendChild(taart);
			taart.id = "taart";

			var buttonTaart = document.createElement("button")
			document.body.appendChild(buttonTaart)
			buttonTaart.id = "buttonTaart"

			buttonTaart.innerHTML = ('Ga door naar de volgende kamer.')
			buttonTaart.style.display = 'none'

			taart.onclick = function(){
				hasTaart = true;
				taart.style.display = 'none'
				inventaris.push('taart')
				setTimeout(function(){ 
					buttonTaart.style.display = 'block' 
				}, 3500);
				
				plop.play();
				wii.pause();
			}


			buttonTaart.onclick = function(){
				buttonTaart.style.display = 'none'
				levelC3div.style.display = 'none'
				document.body.style.backgroundImage = "url('img/kamer6jpg.jpg')"
				wii.play();

				var level5Title = document.createElement("h1")
				document.body.appendChild(level5Title) 
				level5Title.id = "title5"

				level5Title.innerHTML = 'Je bent in een kamer gekomen die er wat minder gezellig uitziet... wat zijn je plannen?'

				var levelG1 = document.createElement("button")
				document.body.appendChild(levelG1)
				levelG1.id = "levelG1"

				levelG1.innerHTML = ('Je gaat de kamer doorzoeken en kijken of er nog wat te vinden is.')

				var levelG2 = document.createElement("button")
				document.body.appendChild(levelG2)
				levelG2.id = "levelG2"

				levelG2.innerHTML = ('Je laat de kamer voor wat het is.')

				levelG1.onclick = function(){
					document.body.style.backgroundImage = "url('img/bloed.jpg')";
					levelG2.style.display = 'none'
					levelG1.style.display = 'none'
					title5.style.display = 'none'
					oef.play();
					wii.pause();

					var faal3 = document.createElement("h1")
					document.body.appendChild(faal3)
					faal3.id = "faal3"

					faal3.innerHTML = ("Terwijl je de kamer aan het doorzoeken was raakte je een knopje aan die een bijl naar beneden liet vallen, je hebt de bijl niet overleefd. Klik <a href='adventure.html'> hier</a> om terug te gaan naar het begin.")
				}
				levelG2.onclick = function(){
					document.body.style.backgroundImage = "url('img/gang.jpg')";
					levelG2.style.display = 'none'
					levelG1.style.display = 'none'
					title5.style.display = 'none'

					var level6Title = document.createElement("h1")
					document.body.appendChild(level6Title) 
					level6Title.id = "title6"

					level6Title.innerHTML = 'Je bent weer terug in de gang, je hebt het hele huis doorzocht en er is niks te vinden, het is tijd om weer naar huis te gaan.'

					var levelT6 = document.createElement("button")
					document.body.appendChild(levelT6)
					levelT6.id = "levelT6"

					levelT6.innerHTML = 'Ga naar buiten.'

					levelT6.onclick = function(){
						document.body.style.backgroundImage = "url('img/vrouw.jpg')";
						levelT6.style.display = 'none'
						title6.style.display = 'none'
						pokemon.play();
						wii.pause();

					var level7title = document.createElement("h1")
					document.body.appendChild(level7title)
					level7title.id = "levelT7"

					levelT7.innerHTML = 'De non heeft je gevonden en staat klaar om je te vermoorden, bedenk snel iets.'

					var levelM1 = document.createElement("button")
					document.body.appendChild(levelM1)
					levelM1.id = "levelM1"

					levelM1.innerHTML = 'Je gooit de taart op haar.'

						levelM1.onclick = function(){
						document.body.style.backgroundImage = "url('img/win.jpg')";
						levelT7.style.display = 'none'
						levelM1.style.display = 'none'
						levelM2.style.display = 'none'
						levelM3.style.display = 'none'
						win.play()
						pokemon.pause();

						var win5 = document.createElement("h1")
						document.body.appendChild(win5)
						win5.id = "win5"

						win5.innerHTML = "je hebt de non verslagen,  klik <a href='adventure.html'> hier</a> om terug te gaan naar het begin."

					}
					
					var levelM2  = document.createElement("button")
					document.body.appendChild(levelM2)
					levelM2.id = "levelM2"

					levelM2.innerHTML = 'je slaat haar op dr gezicht.'

					levelM2.onclick = function(){
						document.body.style.backgroundImage = "url('img/bloed.jpg')";
						levelT7.style.display = 'none'
						levelM1.style.display = 'none'
						levelM2.style.display = 'none'
						levelM3.style.display = 'none'
						oef.play();
						pokemon.pause();

						var faal5 = document.createElement("h1")
						document.body.appendChild(faal5)
						faal5.id = "faal5"

						faal5.innerHTML = "Het word een hevig gevecht maar de non is te sterk voor je. klik <a href='adventure.html'> hier</a> om terug te gaan naar het begin."
					}
					
					var levelM3 = document.createElement("button")
					document.body.appendChild(levelM3)
					levelM3.id = "levelM3"

					levelM3.innerHTML = 'Jullie raken aan de praat en vinden elkaar eigenlijk best wel leuk.'

					levelM3.onclick = function(){
						document.body.style.backgroundImage = "url('img/bruiloft.jpg')";
						levelT7.style.display = 'none'
						levelM1.style.display = 'none'
						levelM2.style.display = 'none'
						levelM3.style.display = 'none'
						pokemon.pause();
						bruiloft.play();

						var win6 = document.createElement("h1")
						document.body.appendChild(win6)
						win6.id = "win6"

						win6.innerHTML = "Na lang geklets met de non blijken jullie elkaar leuk te vinden en na een aantal jaar trouwen jullie, en jullie leefden nog lang en gelukkig. klik <a href='adventure.html'> hier</a> om terug te gaan naar het begin. "

					}
				}
			}		
		}
	}
		var levelB2Div = document.createElement("div")
		levelB2.appendChild(levelB2Div)
		levelB2Div.id = "B2div"

		levelB2Div.innerHTML = ('oke')

		levelB2.onclick = function() {
			document.body.style.backgroundImage = "url('img/slaapkamer2.png')";
			levelB1.style.display = 'none'
			levelB2.style.display = 'none'
			levelB3.style.display = 'none'
			title1.style.display = 'none'
		

		var level2Title = document.createElement("h1")
		document.body.appendChild(level2Title) 
		level2Title.id = "title2"

		level2Title.innerHTML = 'Je hebt de slaapkamer gevonden'

		var levelA1 = document.createElement("button")
		document.body.appendChild(levelA1)
		levelA1.id = "levelA1"

		levelA1.innerHTML = ('Je bent gestrest dus je gaat een sigaretje roken.')

		var levelA2 = document.createElement("button")
		document.body.appendChild(levelA2)
		levelA2.id = "levelA2"

		levelA2.innerHTML = ('Je bent moe dus je gaat een dutje doen.')

		var levelA3 = document.createElement("button")
		document.body.appendChild(levelA3)
		levelA3.id = "levelA3"

		levelA3.innerHTML = ('Niks, je gaat naar de volgende kamer.')

		levelA1.onclick = function() {
			levelA1Div.style.display = 'block'
			levelA2Div.style.display = 'none'
			levelA3Div.style.display = 'none'
		}

		var levelA1Div = document.createElement("div")
		levelA1.appendChild(levelA1Div)
		levelA1Div.id = "A1div"

		levelA1Div.innerHTML = ('Doe wat je niet laten kan.')

		levelA2.onclick = function() {
			document.body.style.backgroundImage = "url('img/eng.png')";
			levelA1.style.display = 'none'
			levelA2.style.display = 'none'
			levelA3.style.display = 'none'
			title2.style.display = 'none'
			audio();
			wii.pause();

			var faal2 = document.createElement("h1")
			document.body.appendChild(faal2)
			faal2.id = "faal2"

			faal2.innerHTML = ("De non heeft je te pakken, klik <a href='adventure.html'> hier</a> om terug te gaan naar het begin.")
		}

		levelA3.onclick = function(){
			document.body.style.backgroundImage = "url('img/kamer3.png')";
			levelA1.style.display = 'none'
			levelA2.style.display = 'none'
			levelA3.style.display = 'none'
			title2.style.display = 'none'

			var title3 = document.createElement("h1")
			document.body.appendChild(title3) 
			title3.id = "title3"
			
			title3.innerHTML = ('Dit lijkt op een soort kinderkamer... wat ga je doen?')

			var levelE1 = document.createElement("button")
			document.body.appendChild(levelE1)
			levelE1.id = "levelE1"

			levelE1.innerHTML = ('Je gaat naar de wc want je moet plassen.')

			var levelE2 = document.createElement("button")
			document.body.appendChild(levelE2)
			levelE2.id = "levelE2"

			levelE2.innerHTML = ('Je spring uit het raam.')

			levelE2.onclick = function() {
				document.body.style.backgroundImage = "url('img/bloed.jpg')";
				levelE2.style.display = 'none'
				levelE1.style.display = 'none'
				title3.style.display = 'none'
				oef.play();
				wii.pause();

				var faal3 = document.createElement("h1")
				document.body.appendChild(faal3)
				faal3.id = "faal3"

				faal3.innerHTML = ("Je bent doodgevallen, klik <a href='adventure.html'> hier</a> om terug te gaan naar het begin.")
			}

			levelE1.onclick = function() {
				document.body.style.backgroundImage = "url('img/toilet.jpg')"
				levelE1.style.display = 'none'
				levelE2.style.display = 'none'
				title3.style.display = 'none'

				var level4Title = document.createElement("h1")
				document.body.appendChild(level4Title) 
				level4Title.id = "title4"

				level4Title.innerHTML = 'Je bent in de wc, ga je iets doen?'

				var levelF1 = document.createElement("button")
				document.body.appendChild(levelF1)
				levelF1.id = "levelF1"

				levelF1.innerHTML = ('Je moet al heel de tijd poepen. je gaat het wc hokje in.')

				levelF1.onclick = function(){
					document.body.style.backgroundImage = "url('img/bloed.jpg')";
					levelF2.style.display = 'none'
					levelF3.style.display = 'none'
					levelF1.style.display = 'none'
					title4.style.display = 'none'
					oef.play();
					wii.pause();
					
					var faal8 = document.createElement("h1")
					document.body.appendChild(faal8)
					faal8.id = "faal8"

					faal8.innerHTML = "nadat je lekker hebt gekakt stond de non je op te wachten.klik <a href='adventure.html'> hier</a> om terug te gaan naar het begin."
				}

				var levelF2 = document.createElement("button")
				document.body.appendChild(levelF2)
				levelF2.id = "levelF2"

				levelF2.innerHTML = ('Je hebt in je broek geplast, je gaat je luier even verschonen.')

				var levelF3 = document.createElement("button")
				document.body.appendChild(levelF3)
				levelF3.id = "levelF3"

				levelF3.innerHTML = ('Je hebt dorst dus je gaat wat water drinken.')

				var levelF2div = document.createElement("div")
				levelF2.appendChild(levelF2div)
				levelF2div.id = "F2div"

				levelF2div.innerHTML = ('Helaas zijn er geen schone luiers dus je moet verder met een vieze.')

				levelF2.onclick = function(){
					levelF2div.style.display = 'block'
				}

				var levelF3div = document.createElement("div")
				levelF3.appendChild(levelF3div)
				levelF3div.id = "F3div"

				levelF3.onclick = function() {
				document.body.style.backgroundImage = "url('img/bloed.jpg')";
				levelF2.style.display = 'none'
				levelF3.style.display = 'none'
				levelF1.style.display = 'none'
				title4.style.display = 'none'
				oef.play();
				wii.pause();

				var faal4 = document.createElement("h1")
				document.body.appendChild(faal4)
				faal4.id = "faal4"

				faal4.innerHTML = ("Het water was vergiftigd, klik <a href='adventure.html'> hier</a> om terug te gaan naar het begin.")


				}
			}
		}
	}
}



	










