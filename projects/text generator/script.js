"use strict";
const texts = [
    `In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from this that the freedom of elections, which is reckoned most important and very essential to the English Church, we, of our pure and unconstrained will, did grant, and did by our charter confirm and did obtain the ratification of the same from our lord, Pope Innocent III, before the quarrel arose between us and our barons: and this we will observe, and our will is that it be observed in good faith by our heirs forever. We have also granted to all freemen of our kingdom, for us and our heirs forever, all the underwritten liberties, to be had and held by them and their heirs, of us and our heirs forever.`,
    `Fog everywhere. Fog up the river, where it flows among green aits and meadows; fog down the river, where it rolls deified among the tiers of shipping and the waterside pollutions of a great (and dirty) city. Fog on the Essex marshes, fog on the Kentish heights. Fog creeping into the cabooses of collier-brigs; fog lying out on the yards and hovering in the rigging of great ships; fog drooping on the gunwales of barges and small boats. Fog in the eyes and throats of ancient Greenwich pensioners, wheezing by the firesides of their wards; fog in the stem and bowl of the afternoon pipe of the wrathful skipper, down in his close cabin; fog cruelly pinching the toes and fingers of his shivering little apprentice boy on deck. Chance people on the bridges peeping over the parapets into a nether sky of fog, with fog all round them, as if they were up in a balloon and hanging in the misty clouds.`,
    `yes and those handsome Moors all in white and turbans like kings asking you to sit down in their little bit of a shop and Ronda with the old windows of the posadas 2 glancing eyes a lattice hid for her lover to kiss the iron and the wineshops half open at night and the castanets and the night we missed the boat at Algeciras the watchman going about serene with his lamp and O that awful deepdown torrent O and the sea the sea crimson sometimes like fire and the glorious sunsets and the figtrees in the Alameda gardens yes and all the queer little streets and the pink and blue and yellow houses and the rosegardens and the jessamine and geraniums and cactuses and Gibraltar as a girl where I was a Flower of the mountain yes when I put the rose in my hair like the Andalusian girls used or shall I wear a red yes and how he kissed me under the Moorish wall and I thought well as well him as another and then I asked him with my eyes to ask again yes and then he asked me would I yes to say yes my mountain flower and first I put my arms around him yes and drew him down to me so he could feel my breasts all perfume yes and his heart was going like mad and yes I said yes I will Yes.`,
    `And Eurypylus, son of Euaemon, killed Hypsenor, the son of noble Dolopion, who had been made priest of the river Scamander, and was honoured among the people as though he were a god. Eurypylus gave him chase as he was flying before him, smote him with his sword upon the arm, and lopped his strong hand from off it. The bloody hand fell to the ground, and the shades of death, with fate that no man can withstand, came over his eyes. Thus furiously did the battle rage between them. As for the son of Tydeus, you could not say whether he was more among the Achaeans or the Trojans. He rushed across the plain like a winter torrent that has burst its barrier in full flood; no dykes, no walls of fruitful vineyards can embank it when it is swollen with rain from heaven, but in a moment it comes tearing onward, and lays many a field waste that many a strong man hand has reclaimed- even so were the dense phalanxes of the Trojans driven in rout by the son of Tydeus, and many though they were, they dared not abide his onslaught.`,
    `Now is the winter of our discontent
Made glorious summer by this sun of York;
And all the clouds that lour'd upon our house
In the deep bosom of the ocean buried.
Now are our brows bound with victorious wreaths;
Our bruised arms hung up for monuments;
Our stern alarums changed to merry meetings,
Our dreadful marches to delightful measures.
Grim-visaged war hath smooth'd his wrinkled front;
And now, instead of mounting barded steeds
To fright the souls of fearful adversaries,
He capers nimbly in a lady's chamber
To the lascivious pleasing of a lute.
But I, that am not shaped for sportive tricks,
Nor made to court an amorous looking-glass;
I, that am rudely stamp'd, and want love's majesty
To strut before a wanton ambling nymph;
I, that am curtail'd of this fair proportion`,
    `A computer program can easily produce gibberish - especially if it has been provided with garbage beforehand. This program does something a little different. It takes a block of text as input and works out the proportion of characters within the text according to a chosen order. For example, an order of 2 means the program looks at pairs of letters, an order of 3 means triplets of letters and so on. The software can regurgitate random text that is controlled by the proportion of characters. The results can be quite surprising.`,
    `The technique is to scan through the content of a block of text and create a frequency table of what letters come after others. For example after the letter "q" there will always be a "u", but after an "e" there can be a range of letters - 12 "r", 14 "e", 5 "l" and so on. The frequency table can cover different orders. 2nd order text is where 2 consecutive letters are matched, 3rd order is 3 consecutive letters, 4th order is 4 letters and so on. We then generate text which is randomly produced but has the same distribution of letter groups as the input text. The result depends greatly on the source text and on the order. Technically, this process is based on Markov chains.`,
    `It is Spring, moonless night in the small town, starless and bible-black, the cobblestreets silent and the hunched, courters'-and- rabbits' wood limping invisible down to the sloeblack, slow, black, crowblack, fishingboat-bobbing sea. The houses are blind as moles (though moles see fine to-night in the snouting, velvet dingles) or blind as Captain Cat there in the muffled middle by the pump and the town clock, the shops in mourning, the Welfare Hall in widows' weeds. And all the people of the lulled and dumbfound town are sleeping now.`,
    `Hush, the babies are sleeping, the farmers, the fishers, the tradesmen and pensioners, cobbler, schoolteacher, postman and publican, the undertaker and the fancy woman, drunkard, dressmaker, preacher, policeman, the webfoot cocklewomen and the tidy wives. Young girls lie bedded soft or glide in their dreams, with rings and trousseaux, bridesmaided by glow-worms down the aisles of the organplaying wood. The boys are dreaming wicked or of the bucking ranches of the night and the jollyrogered sea. And the anthracite statues of the horses sleep in the fields, and the cows in the byres, and the dogs in the wet-nosed yards; and the cats nap in the slant corners or lope sly, streaking and needling, on the one cloud of the roofs.`,
    `We passed the school where children played,
Their lessons scarcely done;
We passed the fields of gazing grain,
We passed the setting sun.
We paused before a house that seemed
A swelling of the ground;
The roof was scarcely visible,
The cornice but a mound.`
];
const form = document.querySelector(".lorem");
const article = document.querySelector(".article");
const input = document.querySelector(".input");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = Number(input.value);
    const random = Math.floor(Math.random() * texts.length);
    if (isNaN(inputValue) || inputValue <= 0 || inputValue > 10) {
        article.innerHTML = `<p>${texts[random]}</p>`;
    }
    else {
        let tempText = texts.map(text => {
            return text;
        });
        tempText.slice(0, inputValue).map(item => {
            return article.innerHTML += `<p>${item}</p>`;
        });
    }
    input.value = "";
});
