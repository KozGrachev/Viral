//? put obljects here as we use/store stuff

//Time to save the world!!


interface Gamestate{
  sources:Source[];
  players: Player[];
  spreadLevel: number; // [2, 2, 3, 4]
  chaosMeter: number;
  misinformation: {
    red:Misinformation,
    blue:Misinformation,
    yellow:Misinformation
  }; //! sits better as an object
  connectionDeck: ConnectionDeck; 
  misinformationDeck: MisinformationDeck; 
}

interface Player { 
  name: string; 
  cards:ConnectionCard[]; 
  isCurrent: boolean; 
  pawnColor:string; 
  role:Role, 
  currentSource: Source,
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
  //! Removed player from source, current location fits better on Player
  markers: Marker[];
  //? these below checks indicate whether a player can perform actions on the source at any point, such as moving to it, logging on/off, etc
  canMove: boolean;
  canLogOn: boolean;
  canLogOff: boolean;
  canShare: Player[]; //? arrray of Players at same location
  canDebunk: Misinformation[]; //? array of misinfos possible to debunk at this location?
}

interface Connections { //! kept client-side
  source01: string[],
  source02: string[],
  source03: string[],
  source04: string[],
  //! these will all be the location names as keys
}


interface Marker { 
  color:string;
}

interface Misinformation {
  name: string;
  debunked: boolean;
  //! Eradicated removed as not in this verison of the game
  markersLeft: number; 
}


type ViralCard = { // Constant
  action:string
  //? what does viral card need to contain? can cards be integrated?
}

interface ConnectionCard { // Contant
  source: Source;
  color:Source['color']; 
}

interface ConnectionDeck {
  active:[ConnectionCard | ViralCard];
  //! passive removed as cards just destroyed
}


interface MisinformationCard {
  source: Source; 
}


interface MisinformationDeck {
  active: MisinformationCard[]; 
  passive: MisinformationCard[]; 
  
}






