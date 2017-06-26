var currentPage = 1;                                                                                                      //Aktuelle Seite - Mindestens 1 & Maximal 20
var answeredQuestions = [ 0, 0, 0, 0, 0,                                                                         //Beantwortete Fragen, 0 = Unbeantwortet, 1 = Beantwortet
                                            0, 0, 0, 0, 0,
                                            0, 0, 0, 0, 0,
                                            0, 0, 0, 0, 0 ];

var disabledButtons = [ 0, 0, 0, 0, 0,                                                                              //Der Angeklickte AntwortButton wird hier gespeichert, 0 = keiner Angeklicht, 1 die erste Antwort, 2 die zweite..
                                      0, 0, 0, 0, 0,
                                      0, 0, 0, 0, 0,
                                      0, 0, 0, 0, 0 ];

var questions = [ "Wer war der erste Präsident der USA?",                                          //Fragen 1 - 20
                            "Was heisst ROM ausgeschrieben?",
                            "Wofür stehen die Begriffe analog und digital?",
                            "Aus wie vielen Personen besteht unser Bundesrat?",
                            "Von 85 Wahlberechtigten haben 68 gewählt. Wie viel Prozent der Wahlberechtigten haben gewählt?",
                            "6 – (6 + 2 * 0) *5 = ?",
                            "Welche Schlussfolgerung ist logisch richtig, wenn die folgende Behauptung zugrunde gelegt wird? „Wenn Claudia Klaus liebt, dann wird sie ihm vorschlagen, gemeinsam eine Wohnung zu mieten. Claudia schlägt Klaus vor, gemeinsam eine Wohnung zu mieten.“",
                            "Wieviel Byte hat ein KiloByte?",
                            "Welches ist kein Eingabegerät?",
                            "Was versteht man unter Plug and Play?",
                            "Sven verbraucht mit seinem Audi auf 100 km genau 8 Liter. Wie viel Liter würde das Fahrzeug bei gleichem Fahrverhalten auf einer Strecke von 250 km verbrauchen?",
                            "Wie viele Kilometer sind 25 Dezimeter?",
                            "Übersetze 'Vertrag' auf Englisch",
                            "Was heisst RAM ausgeschrieben?",
                            "Welchen Wert kann ein Boolean annehmen?",
                            "Wie nennt man die zentrale Recheneinheit eines Computers?",
                            "Übersetze 'equal' auf Deutsch",
                            "Wie nennt man völlig kostenlose Programme für Computer?",
                            "Welches ist der höchste Berg der Schweiz?",
                            "Welches ist die Stadt mit den meisten Einwohnern?" ];

var userAnswer =       [  1, 1, 1, 1, 1,                                                                               //User Antwort 1, 2, 3 oder 4
                                      1, 1, 1, 1, 1,
                                      1, 1, 1, 1, 1,
                                      1, 1, 1, 1, 1 ];

var correctAnswerOld =  [  2, 1, 3, 2, 3,                                                                         //Korrekte Antwort 1, 2, 3 oder 4
                                           1, 4, 2, 4, 1,
                                           3, 2, 1, 4, 4,
                                           2, 3, 1, 2, 1 ];
                                                                                                                                      //Mögliche Antworten -> Werden z.B. auf den Buttons angezeigt
var answerOnButtonOld = [  "Abraham Lincoln", "George Washington", "Franklin D. Roosevelt", "Benjamin Franklin",
                                              "Read Only Memory", "Random Override Memory", "Read Over Memory", "Read On Memory",
                                              "Verschiedene Arten von Mikroprozessoren", "Ein- & Ausgabegeräte", "unterschiedliche Signalarten", "manuelle und automatische Prozesse",
                                              "5", "7", "9", "12",
                                              "60%", "70%", "80%", "90%",
                                              "-24", "6", "-10", "10",
                                              "Klaus liebt Claudia nicht", "Klaus liebt Claudia", "Claudia liebt Klaus nicht", "Claudia liebt Klaus",
                                              "1000", "1024", "8000", "8192",
                                              "Maus", "Scanner", "Mikrofon", "Monitor",
                                              "Prinzip der Selbstkonfiguration beim Anschliessen von neuen Geräten", "Ein Programm um Audio abzuspielen", "Verwendung eines Joysticks in einem Computerspiel", "Mischen von Soundeffekten in einer Multimedia Anwendung",
                                              "18 Liter", "24 Liter", "20 Liter", "16 Liter",
                                              "2.5 Km", "0.0025 Km", "0.25 Km", "0.025 Km",
                                              "contract", "audition", "letter", "education",
                                              "Read Access Memory", "Random All Memory", "Read All Memory", "Random Access Memory",
                                              "Kommazahlen", "Ganzzahlen", "Text", "True/False",
                                              "RAM", "CPU", "GPU", "ROM",
                                              "entweder", "während", "gleich", "umfang",
                                              "Freeware", "Software", "Shareware", "Adware",
                                              "Matterhorn", "Dufourspitze", "Pilatus", "Monte Generoso",
                                              "Zürich", "Basel", "Genf", "Freiburg" ];

var correctAnswer = [];
var answerOnButton = [];

function answerMischen() {                                                                                           //Setze die Antworten an eine andere Position
  for (var i = 0; i < 20; i++) {
      var number1 = getRandomInt(1, 4);
      var number2;
      var number3;
      var number4;
      var number21;
      var number22;
      var number23;
      do { number2 = getRandomInt(1, 4); } while (number2 == number1);
      do { number3 = getRandomInt(1, 4); } while (number3 == number1 || number3 == number2);
      do { number4 = getRandomInt(1, 4); } while (number4 == number1 || number4 == number2 || number4 == number3);
      do { number21 = getRandomInt(1, 4); } while (number21 == correctAnswerOld[i]);
      do { number22 = getRandomInt(1, 4); } while (number22 == number21 || number22 == correctAnswerOld[i]);
      do { number23 = getRandomInt(1, 4); } while (number23 == number21 || number23 == number22 || number23 == correctAnswerOld[i]);
      correctAnswer.push(number1);
      answerOnButton[number1- 1 + (i*4)] = answerOnButtonOld[i*4 + correctAnswerOld[i]-1];
      answerOnButton[number2- 1 + (i*4)] = answerOnButtonOld[i*4 + number21-1];
      answerOnButton[number3- 1 + (i*4)] = answerOnButtonOld[i*4 + number22-1];
      answerOnButton[number4- 1 + (i*4)] = answerOnButtonOld[i*4 + number23-1];
  }
  fragenMischen();
}

function fragenMischen() {                                                                                            //Fragen der Reihe nach Mischen
  var arrayMischen = [];
  var tempCorrectAnswer = [];
  var tempAnswerOnButton = [];
  var tempQuestions = [];
  for (var i = 0; i < 20; i++) {
    var randNumber;
    do { randNumber = getRandomInt(0, 19); } while (arrayMischen.includes(randNumber));
    arrayMischen[i] = randNumber;
  }
  for (var i = 0; i < 20; i++) {
    tempCorrectAnswer[i] = correctAnswer[i];
    tempQuestions[i] = questions[i];
  }
  for (var i = 0; i < 80; i++) {
    tempAnswerOnButton[i] = answerOnButton[i];
  }
  for (var i = 0; i < 20; i++) {
    correctAnswer[i] = tempCorrectAnswer[arrayMischen[i]];
    questions[i] = tempQuestions[arrayMischen[i]];
  }
  for (var i = 0; i < 20; i++) {
    answerOnButton[i*4] = tempAnswerOnButton[arrayMischen[i]*4];
    answerOnButton[i*4+1] = tempAnswerOnButton[arrayMischen[i]*4+1];
    answerOnButton[i*4+2] = tempAnswerOnButton[arrayMischen[i]*4+2];
    answerOnButton[i*4+3] = tempAnswerOnButton[arrayMischen[i]*4+3];
  }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pageNumberCheck() {                                                                                     //Überprüfung ob die Seite geladen wird
  if (currentPage > 0 && currentPage <= 20) {
      answerMischen();
      pageLoad();
  }
}

function pageNumberCheckBF(number) {                                                                    //Wenn auf Seite zurück/nächste geklickt wird wird hier vorher überprüft, ob dies möglich ist (neue Seite immernoch min 1, max 20), erfolgreich -> Seite wird geladen
  if (currentPage + number > 0 && currentPage + number <= 20) {
      currentPage += number;
      pageLoad();
  }
}

function pageLoad() {                                                                                                    //Lädt die Seite indem die einzelnen Bestandteile (Funktionen) ausgeführt werden
  questionNumber();
  questionAsk();
  disableNavBtn();
  disableQuestionBtn();
  drawBalken();
}

function answerbuttondisable(id) {                                                                               //Wird auf einen der 4 Antwort-Buttons geklickt, werden alle zuerst enabled, dann wird der angeklickte disabled und der Wert (1-4) im disabledButtons-Array gespeichert
  for (var i = 1; i <= 4; i++) {
    document.getElementById("answer"+ i +"btn").disabled=false;
  }
  document.getElementById(id).disabled=true;
  var idZahl = id.replace("answer", "");
  disabledButtons[currentPage-1] = idZahl.replace("btn", "");
  userAnswer[currentPage-1] = idZahl.replace("btn", "");                                             //Antwort des benutzers (1 - 4) wird in dem array userAnswer gespeichert
  answeredQuestions[currentPage-1] = 1;                                                                    //aktuelle Frage wird als beantwortet mit einer 1 im answeredQuestions-Array gespeichert
  questionNumber();                                                                                                      //aktualisierung des h2-Headers denn möglicherweise wurde eine neue Frage beantwortet
  disableNavBtn();                                                                                                          //Navigations Buttons werden aktualisiert -> Überprüfung ob der Abgabe Button enabled werden kann
}

function questionNumber() {                                                                                         //Zeigt die aktuelle Frage sowie wie viele der 20 Fragen beantwortet wurden
  var number = 0;
  for (var i = 0; i < 20; i++) {
    if (answeredQuestions[i] == 1) {
      number++;
    }
  }
  document.getElementById("headerh2").textContent="Frage "+ currentPage +" ("+ number + " von 20)";
}

function drawBalken() {                                                                                                 //Zeichnet den Fortschrittsbalken -> Beantwortete Fragen werden blau, die aktuelle Farbe Hellblau und die restlichen Fragen farblos(weiss) im Balken gekennzeichnet
  var c = document.getElementById("balken");
  var ctx = c.getContext("2d");
  ctx.clearRect(0,0,1000,15);
  ctx.fillStyle = "#008CBA";
  for (var i = 0; i < 20; i++) {                                                                                          //Frage beantwortet? markiere sie blau
    if (answeredQuestions[i] == 1) {                                                                                //Warum 50? 1000px (Breite Canvas) / 20 Fragen = 50px pro Frage
        ctx.fillRect(i*50, 0, 50, 15);
    }
  }
  ctx.fillStyle = "#00baf7";
  ctx.fillRect((currentPage-1)*50, 0, 50, 15);                                                                   //Aktuelle Farbe Hellblau markieren
}

function disableQuestionBtn() {                                                                                    //Wenn eine neue Seite geladen wird!
  for (var i = 1; i <= 4; i++) {                                                                                          //Alle Antwort-Buttons zuerst enablen und dann wenn die Frage bereits beantwortet wurde den damals angeklickten Button disablen
    document.getElementById("answer"+ i +"btn").disabled=false;
    if (disabledButtons[currentPage-1] == i) {
      document.getElementById("answer"+ i +"btn").disabled=true;
    }
  }
}

function questionAsk() {                                                                                                //Zeigt die Frage der aktuellen Seite sowie die 4 Antworten zur Frage
  document.getElementById("headerh3").textContent=questions[currentPage-1];
  document.getElementById("answer1btn").textContent=answerOnButton[(currentPage-1)*4];
  document.getElementById("answer2btn").textContent=answerOnButton[(currentPage-1)*4+1];
  document.getElementById("answer3btn").textContent=answerOnButton[(currentPage-1)*4+2];
  document.getElementById("answer4btn").textContent=answerOnButton[(currentPage-1)*4+3];
}

function disableNavBtn() {                                                                                            //Alle Navigations-Buttons (Zurück, Nächste & Abgeben) aktualisieren -> zuerst alle enablen
  document.getElementById("pagebackbtn").disabled=false;
  document.getElementById("pagenextbtn").disabled=false;
  document.getElementById("abgabebtn").disabled=false;
  if (currentPage == 1) {                                                                                                 //Ist man auf Seite 1 gibt es keine vorherige Seite -> Zurück Button disablen
    document.getElementById("pagebackbtn").disabled=true;
  }
  else if (currentPage == 20) {                                                                                       //Ist man auf Seite 20 gibt es keine nächste Seite -> Nächste Button disablen
    document.getElementById("pagenextbtn").disabled=true;
  }
  if (answeredQuestions.includes(0)) {                                                                            //Sind noch nicht alle Fragen beantwortet -> disable den Abgabe Button
    document.getElementById("abgabebtn").disabled=true;
  }
}

function abgabe() {
  if (!answeredQuestions.includes(0)) {                                                                          //Sind alle Fragen beantwortet? Ja -> abgeben
    if (confirm('Quiz Abschliessen?')) {
      showResult();
    }
  }
}

function showResult() {                                                                                                 //Auswertung & Score erstellen, Fragen verstecken, Auswertung anzeigen & im Footer zum Anfang/Ende ausblenden
  getResult();
  getScore();
  document.getElementById("mainHeader").style.display = 'none';
  document.getElementById("main").style.display = 'none';
  document.getElementById("result").style.display = 'block';
  document.getElementById("left").style.display = 'none';
  document.getElementById("right").style.display = 'none';
}

function getResult() {                                                                                                    //http://stackoverflow.com/questions/11128700/create-a-ul-and-fill-it-based-on-a-passed-array
  drawResultBalken();                                                                                                     //Zeichne den Auswertungsbalken -> Grün Korrekte Antwort, Rot Falsche Antwort des Users
  var ul = document.createElement('ul');                                                                       //Ungeordnete Liste erstellen
  for (var i = 0; i < 20; i++) {                                                                                          //Wiederhole Schleife für jede Frage
    var li = document.createElement('li');                                                                        //Für die U-Liste List Items erstellen
    if (userAnswer[i] == correctAnswer[i]) {                                                                    //Wurde die Frage korrekt beantwortet -> Frage X grün markiert, sonst Rot
      li.innerHTML="<p class='resultCorrect'>" + "Frage: " + (i+1) + "</p>";
    }
    else {
      li.innerHTML="<p class='resultWrong'>" + "Frage: " + (i+1) + "</p>";
    }                                                                                                                                 //Frage + Korekkte Antwort auf diese Frage + Benutzer Antwort auf die Frage
    li.innerHTML+="<p class='resultAnswer'>" + questions[i] + " - " + answerOnButton[(i*4) + (correctAnswer[i]-1)] +"</p>";
    li.innerHTML+="<p class='resultAnswer'>" + "Deine Antwort - " + answerOnButton[(i*4) + (userAnswer[i]-1)] +"</p>";
    ul.appendChild(li);
  }
  document.getElementById('result').appendChild(ul);                                                  //Die U-Liste im DOM anzeigen
}

function drawResultBalken() {                                                                                       //Die Antworten des Users werden mit den Lösungen verglichen, sind diese gleich wird dies im Auswertungsbalken mit Grün markiert, sonst mit Rot
  var c = document.getElementById("resultBalken");
  var ctx = c.getContext("2d");
  ctx.clearRect(0,0,1000,15);
  for (var i = 0; i < 20; i++) {
    if (userAnswer[i] == correctAnswer[i]) {
      ctx.fillStyle = "#4CAF50";
      ctx.fillRect(i*50, 0, 50, 15);
    }
    else {
      ctx.fillStyle = "#f44336";
      ctx.fillRect(i*50, 0, 50, 15);
    }
  }
}

function getScore() {                                                                                                     //Zeigt wie viele der 20 Fragen korrekt beantwortet wurden
  var number = 0;
  for (var i = 0; i < 20; i++) {
    if (userAnswer[i] == correctAnswer[i]) {
      number++;
    }
  }
  document.getElementById("score").textContent= number + " von 20 korrekt";
}

function pageAnfang() {                                                                                                //Wird im Footer auf Zum Anfang geklickt -> aktuelle Seite 1 & aktualisieren
  currentPage = 1;
  pageLoad();
}

function pageEnde() {                                                                                                   //Wird im Footer auf Zum Anfang geklickt -> aktuelle Seite 20 & aktualisieren
  currentPage = 20;
  pageLoad();
}
