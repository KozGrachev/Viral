
import { ReactComponent as twitterIcon } from '../assets/allIcons/twitter-icon.svg'
import { ReactComponent as instagramIcon } from '../assets/allIcons/instagram-icon.svg'
import { ReactComponent as facebookIcon } from '../assets/allIcons/facebook-icon.svg'
import { ReactComponent as tiktokIcon } from '../assets/allIcons/tiktok-icon.svg'
import { ReactComponent as whatsappIcon } from '../assets/allIcons/whatsapp-icon.svg'
import { ReactComponent as redditIcon } from '../assets/allIcons/reddit-icon.svg'
import { ReactComponent as youtubeIcon } from '../assets/allIcons/youtube-icon.svg'
import { ReactComponent as illuminatifyIcon } from '../assets/allIcons/illuminatify-icon.svg'

import { ReactComponent as highSchoolIcon } from '../assets/allIcons/high-school-icon.svg'
import { ReactComponent as taxiIcon } from '../assets/allIcons/taxi-icon.svg'
import { ReactComponent as localCultIcon } from '../assets/allIcons/local-cult-icon.svg'
import { ReactComponent as hairSalonIcon } from '../assets/allIcons/hair-salon-icon.svg'
import { ReactComponent as gymIcon } from '../assets/allIcons/gym-icon.svg'
import { ReactComponent as asdaIcon } from '../assets/allIcons/asda-icon.svg'
import { ReactComponent as pubIcon } from '../assets/allIcons/pub-icon.svg'
import { ReactComponent as universityIcon } from '../assets/allIcons/university-icon.svg'

import { ReactComponent as cousinIcon } from '../assets/allIcons/cousin-icon.svg'
import { ReactComponent as guyAtTheBusStopIcon } from '../assets/allIcons/guy-at-the-bus-stop-icon.svg'
import { ReactComponent as crazyDaveIcon } from '../assets/allIcons/crazy-dave-icon.svg'
import { ReactComponent as motherInLawIcon } from '../assets/allIcons/mother-in-law-icon.svg'
import { ReactComponent as franFromHrIcon } from '../assets/allIcons/fran-from-hr-icon.svg'
import { ReactComponent as evilExIcon } from '../assets/allIcons/evil-ex-icon.svg'
import { ReactComponent as opinionatedGrandpaIcon } from '../assets/allIcons/opinionated-grandpa-icon.svg'
import { ReactComponent as uncleEugeneIcon } from '../assets/allIcons/uncle-eugene-icon.svg'





// interface svgsMap {
//   [name: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
// }
// const svgs: svgsMap = {


const svgs: Record<string, React.FunctionComponent<React.SVGProps<SVGSVGElement>>> ={
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
}




export const getIcon = (name: string): React.FunctionComponent<React.SVGProps<SVGSVGElement>> => {
  // return youtubeIcon;
  // return svgs['youtubeIcon'];
  return svgs[name];
}



const one = 1234;
const two = 2345;
const three = 3456;


const nums: Record<string,number> = {
  one, two, three
}

const getNums = (name: string): number => {
  return nums[name];
}

console.log(getNums('two'));