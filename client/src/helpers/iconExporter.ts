
import { ReactComponent as twitterIcon } from '../assets/allIcons/twitter-icon.svg';
import { ReactComponent as instagramIcon } from '../assets/allIcons/instagram-icon.svg';
import { ReactComponent as facebookIcon } from '../assets/allIcons/facebook-icon.svg';
import { ReactComponent as tiktokIcon } from '../assets/allIcons/tiktok-icon.svg';
import { ReactComponent as whatsappIcon } from '../assets/allIcons/whatsapp-icon.svg';
import { ReactComponent as redditIcon } from '../assets/allIcons/reddit-icon.svg';
import { ReactComponent as youtubeIcon } from '../assets/allIcons/youtube-icon.svg';
import { ReactComponent as illuminatifyIcon } from '../assets/allIcons/illuminatify-icon.svg';

import { ReactComponent as highSchoolIcon } from '../assets/allIcons/high-school-icon.svg';
import { ReactComponent as taxiIcon } from '../assets/allIcons/taxi-icon.svg';
import { ReactComponent as localCultIcon } from '../assets/allIcons/local-cult-icon.svg';
import { ReactComponent as hairSalonIcon } from '../assets/allIcons/hair-salon-icon.svg';
import { ReactComponent as gymIcon } from '../assets/allIcons/gym-icon.svg';
import { ReactComponent as asdaIcon } from '../assets/allIcons/asda-icon.svg';
import { ReactComponent as pubIcon } from '../assets/allIcons/pub-icon.svg';
import { ReactComponent as universityIcon } from '../assets/allIcons/university-icon.svg';

import { ReactComponent as cousinIcon } from '../assets/allIcons/cousin-icon.svg';
import { ReactComponent as guyAtTheBusStopIcon } from '../assets/allIcons/guy-at-the-bus-stop-icon.svg';
import { ReactComponent as crazyDaveIcon } from '../assets/allIcons/crazy-dave-icon.svg';
import { ReactComponent as motherInLawIcon } from '../assets/allIcons/mother-in-law-icon.svg';
import { ReactComponent as franFromHrIcon } from '../assets/allIcons/fran-from-hr-icon.svg';
import { ReactComponent as evilExIcon } from '../assets/allIcons/evil-ex-icon.svg';
import { ReactComponent as opinionatedGrandpaIcon } from '../assets/allIcons/opinionated-grandpa-icon.svg';
import { ReactComponent as uncleEugeneIcon } from '../assets/allIcons/uncle-eugene-icon.svg';

import { ReactComponent as emptyAppIcon } from '../assets/allIcons/empty-app-icon.svg';

import { ReactComponent as markerSocial1 } from '../assets/allIcons/marker-social-1.svg';
import { ReactComponent as markerSocial2 } from '../assets/allIcons/marker-social-2.svg';
import { ReactComponent as markerSocial3 } from '../assets/allIcons/marker-social-3.svg';
import { ReactComponent as markerCommunity1 } from '../assets/allIcons/marker-community-1.svg';
import { ReactComponent as markerCommunity2 } from '../assets/allIcons/marker-community-2.svg';
import { ReactComponent as markerCommunity3 } from '../assets/allIcons/marker-community-3.svg';
import { ReactComponent as markerRelations1 } from '../assets/allIcons/marker-relations-1.svg';
import { ReactComponent as markerRelations2 } from '../assets/allIcons/marker-relations-2.svg';
import { ReactComponent as markerRelations3 } from '../assets/allIcons/marker-relations-3.svg';



import { ReactComponent as map } from '../assets/allIcons/map.svg';
import { ReactComponent as gameBoard } from '../assets/allIcons/game-board.svg';
import { ReactComponent as gameBoardWithoutSources } from '../assets/allIcons/game-board-without-sources.svg';

import { ReactComponent as firePawn } from '../assets/allIcons/fire-icon.svg';
import { ReactComponent as flowerPawn } from '../assets/allIcons/flower-pawn.svg';
import { ReactComponent as rombPawn } from '../assets/allIcons/romb-pawn.svg';
import { ReactComponent as sunPawn } from '../assets/allIcons/sun-pawn.svg';
import { ReactComponent as squarePawn } from '../assets/allIcons/square-pawn.svg';
import { ReactComponent as hexagonPlayerPawn } from '../assets/allIcons/hexagon-player-pawn.svg';
import { ReactComponent as infoIcon } from '../assets/allIcons/info-icon.svg';

// CONNECTIONS
import { ReactComponent as connectionsWithFrame } from '../assets/allIcons/connections-with-frame.svg';


// CONNECTIONS
// import { ReactComponent as connection1 } from '../assets/hexagon-player-pawn.svg'

// interface svgsMap {
//   [name: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
// }
// const svgs: svgsMap = {


const svgs: Record<string, React.FunctionComponent<React.SVGProps<SVGSVGElement>>> = {
  twitterIcon,
  instagramIcon,
  facebookIcon,
  tiktokIcon,
  whatsappIcon,
  redditIcon,
  youtubeIcon,
  illuminatifyIcon,
  highSchoolIcon,
  taxiIcon,
  localCultIcon,
  hairSalonIcon,
  gymIcon,
  asdaIcon,
  pubIcon,
  universityIcon,
  cousinIcon,
  guyAtTheBusStopIcon,
  crazyDaveIcon,
  motherInLawIcon,
  franFromHrIcon,
  evilExIcon,
  opinionatedGrandpaIcon,
  uncleEugeneIcon,
  emptyAppIcon,
  markerSocial1,
  markerSocial2,
  markerSocial3,
  markerCommunity1,
  markerCommunity2,
  markerCommunity3,
  markerRelations1,
  markerRelations2,
  markerRelations3,
  map,
  gameBoard,
  gameBoardWithoutSources,
  firePawn,
  hexagonPlayerPawn,
  flowerPawn,
  rombPawn,
  sunPawn,
  squarePawn,
  // connection1,
  infoIcon,
  connectionsWithFrame,

};





export const getIcon = (name: string): React.FunctionComponent<React.SVGProps<SVGSVGElement>> => {
  // return youtubeIcon;
  // return svgs['youtubeIcon'];
  return svgs[name] ?? svgs.markerSocial3;  //? if the left hand side is undefined or null, return the right hand side
};
