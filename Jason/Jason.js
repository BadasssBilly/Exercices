/*
-Création de 2 class, une Jason et une survivant.
-Liste de noms et de classes à donner aléatoirement aux survivants.
-Création de stats aléatoire grâce à la commande math.floor(math.random())
-Chance de réaliser chaque action répartie de façon équitable avec soit mort, soit esquive, soit contre attaque
*/

class Personnage { //création de personnages avec nom, classe et stats aléatoires.
    constructor() {
      this.nom = nom[(Math.floor(Math.random() * nom.length))] + " le " + classe[(Math.floor(Math.random() * classe.length))];
      //nom et classe basé sur une liste de nom et classe faites mains rendu aléatoire grâce à un chiffre généré aléatoirement entre 0 et 1.
      this.probabiliteMourir = Math.floor(Math.random() * 10);
      //probabilité qu'un survivant meurt, multiplié par 10 sinon les survivants restent bloqué sur l'action "Dernier souffle" en boucle aucune idée de pourquoi.
      this.probabiliteEsquive = Math.floor(Math.random() * (10 - this.probabiliteMourir));
      //probabilité qu'un survivant esquive, on l'enlève à la précedente probabilité car le tout des probabilités doit faire 10. 
      this.probabiliteDernierSouffle = 10 - this.probabiliteMourir - this.probabiliteEsquive;
      this.probabilité = [];
      for(let i=0;i<this.probabiliteMourir;i++){
        this.probabilité.push("Meurt");
    }
      for(let i=0;i<this.probabiliteEsquive;i++){
        this.probabilité.push("Esquive");
    }
      for(let i=0;i<this.probabiliteDernierSouffle;i++){
        this.probabilité.push("Dernier souffle");
    }
  }
}

class Boss { //création de personnage Boss, Jason, sans aléatoire puique contant.
    constructor(nom, pointsDeVie) {
      this.nom = nom;
      this.pointsDeVie = pointsDeVie;
    }
  }

  let nom = ["John", "Johnny", "Victor", "Kevin", "James", "Robert", "Michael", "Joseph", "Brandon", "David", "Charles", "Oliver", "William", "Jules", "Jean", "Adrien", "Milan", "Ilan", "Ylhan", "Gaspard"];

  let classe = ["nerd", "flic", "sportif", "sceptique", "gamin", "love interest", "gros", "chiant", "vieux", "moche", "sale", "fort", "faible", "courageux", "peureux", "prudent", "bruyant", "silencieux"]

  let survivant1 = new Personnage();
  let survivant2 = new Personnage();
  let survivant3 = new Personnage();
  let survivant4 = new Personnage();
  let survivant5 = new Personnage();
  let jason = new Boss("Jason", 100);

  let enVie = [survivant1, survivant2, survivant3, survivant4, survivant5];
  let mort = [];
  //création de deux listes pour pouvoir changer de combatant au milieu du combat et déterminer quand est-ce que tous les survivants sont morts
  console.log("L'équipe de choc est composée de : " + survivant1.nom + ", " + survivant2.nom + ", " + survivant3.nom + ", " + survivant4.nom + ", " + survivant5.nom); 

while (enVie.length > 0 && jason.pointsDeVie > 0) {
  let survivantRandom = enVie[(Math.floor(Math.random() * enVie.length))];
  let action = survivantRandom.probabilité[Math.floor(Math.random() * survivantRandom.probabilité.length)];
  console.log("Jason attaque !");
  if (action=="Meurt"){
    mort.push(survivantRandom.nom);
    enVie.splice(enVie.indexOf(enVie), 1);
    console.log("Jason a tué " + survivantRandom.nom);
  }
  if (action=="Esquive"){
    jason.pointsDeVie -= 10;
    console.log(survivantRandom.nom + " esquive et inflige 10 points de dégâts à Jason !");
    console.log("Jason a " + `${jason.pointsDeVie}` + " points de vie.");
  }
  if (action=="Dernier souffle"){
    mort.push(survivantRandom.nom);
    enVie.splice(enVie.indexOf(survivantRandom), 1);
    jason.pointsDeVie -= 15;
    console.log(survivantRandom.nom + " a été tué mais inflige 15 points de dégâts dans son dernier souffle.");
    console.log("Jason a " + `${jason.pointsDeVie}` + " points de vie.");
  }
}

  if (jason.pointsDeVie <= 0) {
    console.log("Les survivants ont vaincu Jason !");
    console.log(`Les survivants ont gagnés mais ` + `${mort}` + ` sont morts...`);
}else{
  console.log("Jason a tué tous les survivants.");
}