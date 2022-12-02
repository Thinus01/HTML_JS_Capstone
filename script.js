const HamLine1 = document.querySelector('.HamLine1');
const HamLine2 = document.querySelector('.HamLine2');
const HamLine3 = document.querySelector('.HamLine3');
const mobileMenu = document.querySelector('.MobileMenu');
const hamburgerButton = document.querySelector('.hamburger');
const judgements = document.querySelector('#Judgements');
const section = document.createElement('section');
judgements.appendChild(section);

const projectData = [
  {
    Warframe: 'Wukong',
    Rank: '1',
    Position: 'Comming in number one',
    Images: 'images/wukong.jpg',
    description: 'With wukongs celestial twin, he is able to cover both melee and ranged attacks.',
  },
  {
    Warframe: 'Volt',
    Rank: '2',
    Position: 'At number two',
    Images: 'images/volt.jpg',
    description: 'Speed, damage, nuking and tanking...what more do I need to say.',
  },
  {
    Warframe: 'Wisp',
    Rank: '3',
    Position: 'At number three',
    Images: 'images/wisp.jpg',
    description: 'Need to be healed, Wisp has your back. Need speed, Wisp has your back. Need electric damage, Wisp has your back.',
  },
  {
    Warframe: 'Baruuk',
    Rank: '4',
    Position: 'At number four',
    Images: 'images/Baruuk.jpg',
    description: 'With his adaptive elemental damage he is ready for everything and everyone.',
  },
  {
    Warframe: 'Mirage',
    Rank: '5',
    Position: 'At number five',
    Images: 'images/mirage.jpg',
    description: 'If damage negation and increased damage dealt is not enough...just summon a few clones and your good to go.',
  },
  {
    Warframe: 'Saryn',
    Rank: '6',
    Position: 'At number six',
    Images: 'images/saryn.jpg',
    description: 'Saryn is not someone to be reckoned with. With her spores seeking enemies, making then take extra damage.',
  },
];

function featuredFunction() {
  let featureCard = '';

  projectData.forEach((item) => {
    const Ranking = item.Rank;
    const WarframeTitle = item.Warframe;
    const { Images } = item;
    const { Position } = item;
    const { description } = item;
    if (Ranking <= 2) {
      featureCard += `<div class="FeaturedSpeakers col-lg-5 row col-11 offset-lg-1 offset-1">
      <img src="${Images}" alt="" class="FrameImage col-lg-3 col-4 col-sm-4">
      <div class="col-lg-6 col-6 col-sm-6">
          <h2 class="Name col-lg-12 col-12 col-sm-12">${WarframeTitle}</h2>
          <p class="Position col-lg-12 col-12 col-sm-12">${Position}</p>
          <p class="Desc col-lg-12 col-12 col-sm-12">${description}</p>
      </div>
    </div>`;
    } else {
      featureCard += `<div class="FeaturedSpeakers hide col-lg-5 row col-11 offset-lg-1 offset-1">
      <img src="${Images}" alt="" class="FrameImage col-lg-3 col-4 col-sm-4">
      <div class="col-lg-6 col-6 col-sm-6">
          <h2 class="Name col-lg-12 col-12 col-sm-12">${WarframeTitle}</h2>
          <p class="Position col-lg-12 col-12 col-sm-12">${Position}</p>
          <p class="Desc col-lg-12 col-12 col-sm-12">${description}</p>
      </div>
    </div>`;
    }
  });
document.getElementById('WarframeList Show').innerHTML = featureCard;
}
featuredFunction();

hamburgerButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  HamLine1.classList.toggle('Change1');
  HamLine2.classList.toggle('Change2');
  HamLine3.classList.toggle('Change3');
});