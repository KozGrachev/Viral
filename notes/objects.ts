// //? put obljects here as we use/store stuff

// //Time to save the world!!

// interface Turn {
//   // do we need a turn interface to keep track of how many actions left etc?
//   player: Player;
//   movesLeft: number;
// }


// interface Gamestate{
//   sources:Source[];
//   players: Player[];
//   spreadLevel: number; // [2, 2, 3, 4]
//   chaosMeter: number;
//   misinformation: {
//     red:Misinformation,
//     blue:Misinformation,
//     yellow:Misinformation
//   }; //! sits better as an object
//   connectionDeck: ConnectionDeck; 
//   misinformationDeck: MisinformationDeck;
//   currentTurn: Turn;
//   //! added below win/lose triggers to state to trigger relevant ending events 
//   gameWon: boolean;
//   gameLost: boolean;
// }

// interface Player { 
//   name: string; 
//   cards:ConnectionCard[];
//   cardHandOverflow: boolean; //? this should trigger card discard situation
//   isCurrent: boolean; 
//   pawnColor:string; 
//   // role:Role, 
//   currentSource: Source,
// }

// //! currently not used in MVP
// // interface Role {
// //   name:string; 
// //   moves: number; 
// //   otherSpecialAbility:string; 
// // }

// interface Source {
//   // id:number; ? is this needed ?
//   name: string; 
//   color: string; 
//   //! Removed player from source, current location fits better on Player
//   // markers: Marker[]; 
//   //! replace marker array with object holding status of each marker
//   markers: MarkerStatus;
//   //? these below checks indicate whether a player can perform actions on the source at any point, such as moving to it, logging on/off, etc
//   canMove: boolean;
//   canLogOn: boolean;
//   canLogOff: boolean;
//   canClearRed: boolean;
//   canClearBlue: boolean;
//   canClearYellow: boolean;
//   canShare: Player[]; //? arrray of Players at same location
//   canDebunk: string[]; //? array of misinfos possible to debunk at this location?
// }

// interface Connections { //! kept client-side
//   source01: string[],
//   source02: string[],
//   source03: string[],
//   source04: string[],
//   //! these will all be the location names as keys
// }

// //! this replaces Marker type, and holds the amount of each marker on a given source 
// interface MarkerStatus { 
//   red: number;
//   blue: number;
//   yellow: number;
// }

// interface Misinformation {
//   name: string;
//   debunked: boolean;
//   //! Eradicated removed as not in this verison of the game
//   markersLeft: number; 
// }


// type ViralCard = { // Constant
//   action:string
//   //? what does viral card need to contain? can cards be integrated?
// }

// interface ConnectionCard { // Contant
//   source: Source;
//   color:Source['color']; //? whats this?
// }

// interface ConnectionDeck {
//   active:[ConnectionCard | ViralCard];
//   //! passive removed as cards just destroyed
// }


// interface MisinformationCard {
//   source: Source; 
// }


// interface MisinformationDeck {
//   active: MisinformationCard[]; 
//   passive: MisinformationCard[]; 
  
// }






