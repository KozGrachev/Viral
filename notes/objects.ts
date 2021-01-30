//? put obljects here as we use/store stuff

//Time to save the world!!

//hi this is Till does that work?


interface Gamestate{
  cities: City[];
  players: Player[];
  infectionIntensity: number[]; // [2, 2, 3, 4]
  outbreaks: number;
  diseases: Disease[];
  cityCardDeck: CityCardDeck; 
  infectionCardDeck: InfectionDeck; 
}

interface Player { 
  name: string; 
  cards:CityCard[]; 
  isCurrent: boolean; 
  pawnColor:string; 
  role:Role, 
}

interface Role {
  name:string; 
  moves: number; 
  otherSpecialAbility:string; 

}

interface City {
  id:number; 
  name:string; 
  color: string; 
  players:Player[]; 
  population:number;
  cubes: Cube[];
}


interface Cube { 
  color:string;
}

interface Disease {
  color: string;
  cured: boolean;
  //! Eradicated removed as not in this verison of the game
  cubesLeft: number; 
}


type EpidemicCard = { // Constant
  
}

interface CityCard { // Contant
  city: City;
  color:City['color']; 
}

interface CityCardDeck {
  deckActive:[CityCard | EpidemicCard];
  deckPassive: CityCard[]; 
}


interface InfectionCard {
  city: City; 
}


interface InfectionDeck {
  deckActive: InfectionCard[]; 
  deckPassive: InfectionCard[]; 
  
}

interface Source {
  name:string,
  connections:string[]
  color:string
}






