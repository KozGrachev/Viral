//? put obljects here as we use/store stuff

//Time to save the world!!

//hi this is Till does that work?


interface Gamestate{
  sources:Source[];
  players: Player[];
  spreadLevel: number[]; // [2, 2, 3, 4]
  chaosMeter: number;
  misinformation: Misinformation[];
  connectionDeck: ConnectionDeck; 
  misinformationDeck: MisinformationDeck; 
}

interface Player { 
  name: string; 
  cards:ConnectionCard[]; 
  isCurrent: boolean; 
  pawnColor:string; 
  role:Role, 
}

interface Role {
  name:string; 
  moves: number; 
  otherSpecialAbility:string; 

}

interface Source {
  // id:number; ? is this needed ?
  name:string; 
  color: string; 
  players:Player[]; 
  markers: Marker[];
  //!  population removed as not needed
}


interface Marker { 
  color:string;
}

interface Misinformation {
  color: string;
  debunked: boolean;
  //! Eradicated removed as not in this verison of the game
  markersLeft: number; 
}


type ViralCard = { // Constant
  
}

interface ConnectionCard { // Contant
  source: Source;
  color:Source['color']; 
}

interface ConnectionDeck {
  deckActive:[ConnectionCard | ViralCard];
  deckPassive: ConnectionCard|ViralCard[]; 
}


interface MisinformationCard {
  source: Source; 
}


interface MisinformationDeck {
  deckActive: MisinformationCard[]; 
  deckPassive: MisinformationCard[]; 
  
}

interface Source {
  name:string,
  connections:string[]
  color:string
}






