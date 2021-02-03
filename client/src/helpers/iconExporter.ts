
import { ReactComponent as twitterIcon } from '../../assets/social/twitter-icon.svg'
import { ReactComponent as instagramIcon } from '../../assets/social/instagram-icon.svg'
import { ReactComponent as facebookIcon } from '../../assets/social/facebook-icon.svg'
import { ReactComponent as tiktokIcon } from '../../assets/social/tiktok-icon.svg'
import { ReactComponent as whatsappIcon } from '../../assets/social/whatsapp-icon.svg'
import { ReactComponent as redditIcon } from '../../assets/social/reddit-icon.svg'
import { ReactComponent as youtubeIcon } from '../../assets/social/youtube-icon.svg'
import { ReactComponent as illuminatifyIcon } from '../../assets/social/illuminatify-icon.svg'

import { ReactComponent as highSchoolIcon } from '../../assets/community/highschool-icon.svg'
import { ReactComponent as taxiIcon } from '../../assets/community/taxi-icon.svg'
import { ReactComponent as localCultIcon } from '../../assets/community/local-cult-icon.svg'
import { ReactComponent as hairSalonIcon } from '../../assets/community/hair-salon-icon.svg'
import { ReactComponent as gymIcon } from '../../assets/community/gym-icon.svg'
import { ReactComponent as asdaIcon } from '../../assets/community/asda-icon.svg'
import { ReactComponent as pubIcon } from '../../assets/community/pub-icon.svg'
import { ReactComponent as universityIcon } from '../../assets/community/university-icon.svg'

import { ReactComponent as cousinIcon } from '../../assets/relations/cousin-icon.svg'
import { ReactComponent as guyAtTheBusStop } from '../../assets/relations/guy-at-the-bus-stop.svg'
import { ReactComponent as crazyDaveIcon } from '../../assets/relations/crazy-dave-icon.svg'
import { ReactComponent as motherInLawIcon } from '../../assets/relations/mother-in-law-icon.svg'
import { ReactComponent as franFromHRIcon } from '../../assets/relations/fran-from-hr-icon.svg'
import { ReactComponent as evilExIcon } from '../../assets/relations/evil-ex-icon.svg'
import { ReactComponent as opinionatedGrandpaIcon } from '../../assets/relations/opinionated-grandpa-icon.svg'
import { ReactComponent as uncleEugeneIcon } from '../../assets/relations/uncle-eugene-icon.svg'


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
  guyAtTheBusStop,
  crazyDaveIcon,
  motherInLawIcon,
  franFromHRIcon,
  evilExIcon,
  opinionatedGrandpaIcon,
  uncleEugeneIcon,
}




export const getIcon = (name: string): React.FunctionComponent<React.SVGProps<SVGSVGElement>> => {
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