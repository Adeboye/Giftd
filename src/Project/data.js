import GiftImage1 from '../assets/Illustration-Gifts1.svg';
import GiftImage2 from '../assets/Illustration-Gifts2.svg';
import GiftImage3 from '../assets/Illustration-Gifts3.svg';
import GiftImage4 from '../assets/Illustration-Gifts4.svg';
import GiftImage5 from '../assets/Illustration-Gifts5.svg';
import GiftImage6 from '../assets/Illustration-Gifts6.svg';
import GiftImage7 from '../assets/Illustration-Gifts7.svg';
import GiftImage8 from '../assets/Illustration-Gifts-full.svg';

import { Taxonomy, Occasion, Relation, Demographic } from '../shared/constants/etsy';

function demographicMsg(demographic) {
  return `${demographic.name === 'Adult' ? `an ${demographic.name}` : `a ${demographic.name}`}`;
}

const ProjectData = [
  {
    header: "Lighthearted Gifts for People You Just Don't Know That Well...",
    subHeader: () =>
      'Secret Santa, White Elephant, work anniversaries? We know how stressful it is to pick gifts for you co-workers and acquaintances. We make it easier by providing curated gift  options or customizable gift ideas.',
    button: "Let's Get Started!",
    back: false,
    image: GiftImage1
  },
  {
    header: "Let's find that perfect gift!",
    subHeader: () => 'Tell us a little about who your fun gift is for.',
    bubbleTitle: () => 'The gift is for someone who is a/an:',
    bubble: Demographic,
    back: true,
    image: GiftImage2
  },
  {
    header: "Let's find that perfect gift!",
    subHeader: () => 'Tell us a little about who your gift is for.',
    bubbleTitle: (msg) => `The gift is for an ${msg.demographic.name} who loves`,
    bubble: Taxonomy,
    back: true,
    image: GiftImage3
  },
  {
    header: "Let's find that perfect gift!",
    subHeader: (msg) => `Tell us who the ${msg.demographic} that loves ${msg.giftType} is:`,
    bubbleTitle: () => 'The gift recipient is my:',
    bubble: Relation,
    back: true,
    image: GiftImage4
  },
  {
    header: "Let's find that perfect gift!",
    subHeader: (msg) =>
      `Tell us what this gift for my ${msg.relation.name} who is ${demographicMsg(
        msg.demographic
      )} that loves ${msg.giftType.name} is for:`,
    bubbleTitle: () => 'The gift is for:',
    bubble: Occasion,
    back: true,
    image: GiftImage5
  },
  {
    header: "Let's find that perfect gift!",
    subHeader: (msg) =>
      `Tell us how much you want to spend on this gift for my ${
        msg.relation
      } who is ${demographicMsg(msg.demographic)} that loves ${msg.giftType.name}:`,
    bubbleTitle: () => 'I want to spend',
    input: ['Min', 'Max'],
    back: true,
    image: GiftImage6
  },
  {
    header: 'We are finding you the perfect gift!',
    image: GiftImage7
  },
  {
    header: "We've searched high and low to find the perfect matches",
    subHeader: (msg) =>
      `These are your results for ${msg.occasion.name} gifts for ${demographicMsg(
        msg.demographic
      )} ${msg.relation.name} who loves ${msg.giftType.name} that cost between $${
        msg.priceRange.min
      } - $${msg.priceRange.max}:`,
    image: GiftImage8
  }
];

export default ProjectData;
