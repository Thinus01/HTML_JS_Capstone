const body = document.querySelector('body');
const section = document.createElement('section');
body.appendChild(section);

//   section.innerHTML =`
//   <section id="FeaturedSpeakers">
//   <h2 class="TopSix col-lg-3 offset-lg-4 col-8 col-sm-8 offset-sm-3 offset-3">Top six used warframes</h2>
//   <ul class="nav_top row col-lg-12 col-12 col-sm-12">
//       <li class="Image col-lg-5 col-12 col-sm-12 offset-lg-1 row"> <img class="col-lg-5 col-5 col-sm-5" src="images/wukong.jpg" alt="wukong">
//           <ul class="nav_top col-lg-6 col-6 col-sm-7">
//           <li><h2 class="col-lg-12 col-12 col-sm-12">Wukong</h2></li>
//           <li><p class="Desc col-lg-12 col-12 col-sm-12">With wukongs celestial twin, he is able to cover both melee and ranged attacks and his cloud walk makes him unstopable when it comes to spy missions.</p></li>
//       </ul></li>
//       <li class="Image col-lg-5 col-12 col-sm-12 row"> <img class="col-lg-5 col-5 col-sm-5" src="images/volt.jpg" alt="volt">
//           <ul class="nav_top col-lg-7 col-7 col-sm-7">
//           <li><h2 class="col-lg-12 col-12 col-sm-12">Volt</h2></li>
//           <li><p class="Desc col-lg-12 col-12 col-sm-12">Speed, damage, nuking and tanking...what more do I need to say.</p></li>
//       </ul></li>
//       <li class="Image col-lg-5 col-12 col-sm-12 offset-lg-1 row"> <img class="col-lg-5 col-5 col-sm-5" src="images/wisp.jpg" alt="wisp">
//           <ul class="nav_top col-lg-7 col-7 col-sm-7">
//           <li><h2 class="col-lg-12 col-12 col-sm-12">wisp</h2></li>
//           <li><p class="Desc col-lg-12 col-12 col-sm-12">Need to be healed, Wisp has your back. Need speed, Wisp has your back. Need electric damage, Wisp has your back. Need to be teleported, Wisp does not have your back. So selfish.</p></li>
//       </ul></li>
//       <li class="Image col-lg-5 col-12 col-sm-12 row"> <img class="col-lg-5 col-5 col-sm-5" src="images/Baruuk.jpg" alt="Baruuk">
//           <ul class="nav_top col-lg-7 col-7 col-sm-7">
//           <li><h2 class="col-lg-12 col-12 col-sm-12">Baruuk</h2></li>
//           <li><p class="Desc col-lg-12 col-12 col-sm-12">Corpus, Grineer, Infested, Corrupted, you name it, Brauuk has you covered, with his adaptive elemental damage he is ready for everything and everyone.Such a gental soul.</p></li>
//       </ul></li>
//       <li class="Image col-lg-5 col-12 col-sm-12 offset-lg-1 row"> <img class="col-lg-5 col-5 col-sm-5" src="images/mirage.jpg" alt="mirage">
//           <ul class="nav_top col-lg-7 col-7 col-sm-7">
//           <li><h2 class="col-lg-12 col-12 col-sm-12">mirage</h2></li>
//           <li><p class="Desc col-lg-12 col-12 col-sm-12">If damage negation and increased damage dealt is not enough...just summon a few clones and your good to go.She has a dico ball thats fun too, maybe not for the enemy but meh...</p></li>
//       </ul></li>
//       <li class="Image col-lg-5 col-12 col-sm-12 row"> <img class="col-lg-5 col-5 col-sm-5" src="images/saryn.jpg" alt="saryn">
//           <ul class="nav_top col-lg-7 col-7 col-sm-7">
//           <li><h2 class="col-lg-12 col-12 col-sm-12">saryn</h2></li>
//           <li><p class="Desc col-lg-12 col-12 col-sm-12">Saryn is not someone to be reckoned with. With her spores seeking enemies, making then take extra damage and miasma reducing their armor. Not a gril whos heart you want to break.</p></li>
//       </ul></li>
//   </ul>
// </section>
// `;