getTime();
setInterval(function() {
  getTime();
}, 20000);

function getTime() {
  var time = new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric",minute: "numeric"});                           //String, speichert Uhrzeit (HH:MM)
  var timeDecimal = parseInt(time.substring(0, 2), 10);                                                                                                           //Zahl, speichert Uhrzeit als Zahl, nimmt dafür die Stunden aus Time (& wird zu einer Zahl konvertiert)
  timeDecimal = timeDecimal+ ((1/60)*(time.substring(3, 5)));                                                                                              //Die Stunden werden mit der Anzahl von Minuten addiert (100(Dezimal) / 60 Minuten * Anzahl Minuten gibt als Resultat die Minuten in Dezimal)
  if (timeDecimal > 12) {                                                                                                                                                          //Ist die Dezimalzahl grösser als 12, weil es zum Beispiel 16 Uhr ist, werden 12 Stunden abgezogen = 16 Uhr -> 4 Uhr
    timeDecimal = timeDecimal- 12;
  }
  document.getElementById('clock-hour-pointer').style.transform = "rotate("+360/12*timeDecimal+"deg)";                      //Der Stundenzeiger wird an die korrekte Stelle rotiert
  document.getElementById('clock-minute-pointer').style.transform = "rotate("+360/60*time.substring(3, 5)+"deg)";       //Der Minutenzeiger wird an die korrekte Stelle rotiert
}
