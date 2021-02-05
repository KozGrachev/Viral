// import { GameState, Turn, Player, Source, Misinformation, MarkerStatus, MisinformationCard, ConnectionDeck, MisinformationDeck, ConnectionCard } from '../types/gameStateTypes'
// // import { sources } from '../../../notes/sources'


// //! currently not used in MVP
// // const Role  = {
// //   name:'Doctor', 
// //   moves: 3, 
// //   otherSpecialAbility:'none'
// // }


// const source: Source = {
//   // id:number; ? is this needed ?
//   name: 'high school',
//   color: 'red',
//   //! Removed player from source, current location fits better on Player
//   // markers: Marker[]; 
//   //! replace marker array with object holding status of each marker
//   markers: [],
//   //? these below checks indicate whether a player can perform actions on the source at any point, such as moving to it, logging on/off, etc
//   canMove: true,
//   canLogOn: true,
//   canLogOff: true,
//   canClearRed: true,
//   canClearBlue: false,
//   canClearYellow: false,
//   canShare: [],  //? array of Players at same location
//   canDebunk: ['don\'t know what this is '],  //? array of misinfos possible to debunk at this location?
// }
// const player: Player = {
//   name: 'Rambo',
//   cards: [],
//   //! added below to trigger card swap action
//   cardHandFull: false,
//   isCurrent: true,
//   pawnColor: 'blue',
//   // role:Role, 
//   currentSource: source
// }

// // const Connections:Connections  = { //! kept client-side
// //   source01:['Hair Salon', 'Yoga Studio'],
// //   source02: string[],
// //   source03: string[],
// //   source04: string[],
// //   //! these will all be the location names as keys
// // }

// //! this replaces Marker type, and holds the amount of each marker on a given source 
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const markerStatus: MarkerStatus = {
//   red: 2,
//   blue: 3,
//   yellow: 1,
// }

// const misinformation: Misinformation = {
//   name: 'tweet',
//   debunked: true,
//   //! Eradicated removed as not in this verison of the game
//   markersLeft: 1,
// }

// const turn: Turn = {
//   // do we need a turn interface to keep track of how many actions left etc?
//   player: player,
//   movesLeft: 40,
// }

// // const ViralCard = { // Constant
// //   action:'some action', 
// //   //? what does viral card need to contain? can cards be integrated?
// // }

// const connectionCard: ConnectionCard = { // Contant
//   source: source,
//   color: source['color']
// }

// const connectionDeck: ConnectionDeck = {
//   active: [connectionCard]
//   //! passive removed as cards just destroyed
// }


// const misinformationCard: MisinformationCard = {
//   source: source,
// }


// const misinformationDeck: MisinformationDeck = {
//   active: [misinformationCard],
//   passive: []

// }



// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// export const gameState: GameState = {
//   received: false,
//   sources: [source],
//   players: [player],
//   spreadLevel: 2,  // [2, 2, 3, 4]
//   chaosMeter: 1,
//   misinformation: {
//     red: misinformation,
//     blue: misinformation,
//     yellow: misinformation
//   },  //! sits better as an object
//   connectionDeck: connectionDeck,
//   misinformationDeck: misinformationDeck,
//   currentTurn: turn
// }


