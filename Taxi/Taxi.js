let santeMentale = 10;
let nbEssais = 31; //31 essais pour que le message "Il lui reste 0 feux rouges à passer." ne s'affiche pas car il serait illogique et pour que la boucle commence au feu 30 et non 29

function ListeMusique() {
  nbEssais--;
  
  const MusiqueJouée = Math.floor(Math.random() * 5) + 1;

  if (MusiqueJouée === 1) { //effet de chaque musique sur la santé mentale de John, 4 ne font rien, 1 lui enlève 1 point de santé mentale.
    santeMentale += 0;
  } else if (MusiqueJouée === 2) {
    santeMentale += 0;
  } else if (MusiqueJouée === 3) {
    santeMentale += 0;
  } else if (MusiqueJouée === 4) {
    santeMentale += 0;
  } else if (MusiqueJouée === 5) {
    santeMentale -= 1;
  }

  return MusiqueJouée;
}

while (santeMentale > 0 && nbEssais > 1) { //constante pour afficher un message en rapport avec la musique écoutée et la conséquence.
  const musique = ListeMusique();
  if (musique === 1) {
    console.log(`John écoute Dernière de Bigflo & Oli. Il lui reste ` + `${nbEssais}` + ` feux rouges à passer.`);
  } else if (musique === 2) {
    console.log(`John écoute Casanova de Soolking. Il lui reste ` + `${nbEssais}` + ` feux rouges à passer.`);
  } else if (musique === 3) {
    console.log(`John écoute Chez toi de Slimane. Il lui reste ` + `${nbEssais}` + ` feux rouges à passer.`);
  } else if (musique === 4) {
    console.log(`John écoute Le feu de Kendji Girac. Il lui reste ` + `${nbEssais}` + ` feux rouges à passer.`);
  } else if (musique === 5) {
    console.log(`John écoute Anissa de Wejdene, ses oreilles saignent. Il lui reste ` + `${nbEssais}` + ` feux rouges à passer et ` + `${santeMentale}` + ` de santé mentale.`);
  }
}

if (santeMentale <= 0) {
  console.log("EXPLOSION BOOM T'ES MORT (en toute amitié)"); //message affiché si John perd la boule.
} else {
  console.log("John est bien rentré chez lui en changeant de taxi "+ (10 - santeMentale) + " fois"); //message affiché si John rentre chez lui.
}