/* 
il risultato è la creazione di cards con stampate le informazioni di ciascun membro del team

creo un array vuoto dove raccolglierò gli oggetti

creo una funzione crea oggetto che assegna ad ogni prorietà il valore degli argomenti

array.push(fcreaoggetto(,,,))

gli argomenti della funzione DOVE LI PRENDO????_____________DILEMMA ESISTENZIALE

questa cosa io la vedo troppo da ciclo...
ma fare un array di 3 array da ciclare negli oggetti creati allungherebbe solo il brodo quindi NO! nooo!

creo contenitore
ciclo
funzione crea elemento Card
card_El.title.append(Array[i].member.name)
card_El.subtitle.append(Array[i].member.role)
card_El.img.append(Array[i].member.foto)
fine ciclo
stampo contenitore
*/


//avrei voluto fosse generica e decidere il nome delle classi,___________ dopo se avanza tempo smanetto 
const team = [];

function generateTeamMember_Obj(name, role, urlImg) {

    const teamMember_Obj = {
        name: name,
        role: role,
        urlImg: urlImg
    }
    return teamMember_Obj
}

//console.log(generateTeamMember_Obj("a", "b", "c"));
// _______________________________________________________________________devo controllare se ci vogliono altri apici
team.push(generateTeamMember_Obj("Wayne Barnett","Founder & CEO","wayne-barnett-founder-ceo.jpg"));
team.push(generateTeamMember_Obj("Angela Caroll","Chief Editor","angela-caroll-chief-editor.jpg"));
team.push(generateTeamMember_Obj("Walter Gordon","Office Manager","walter-gordon-office-manager.jpg"));
team.push(generateTeamMember_Obj("Angela Lopez","Social Media Manager","angela-lopez-social-media-manager.jpg"));
team.push(generateTeamMember_Obj("Scott Estrada","Developer","scott-estrada-developer.jpg"));
team.push(generateTeamMember_Obj("Barbara Ramos","Graphic Designer","barbara-ramos-graphic-designer.jpg"));

console.log(team)

















/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro!
Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	            scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg */