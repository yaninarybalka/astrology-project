let button = document.querySelector("button");
button.addEventListener("click", newHeading);

function newHeading() {
  let name = prompt("Hello! What is your name?");
  let dayOfBirth = prompt("What day were you born? (e.g. 1/2/14/31)");
  let monthOfBirth = prompt(
    "What month were you born in? (e.g.march/december)"
  );
  monthOfBirth = monthOfBirth.toLocaleLowerCase();

  let h2 = document.querySelector("h2");
  let h3 = document.querySelector("h3");

  if (monthOfBirth === "july" && dayOfBirth >= 23) {
    h3.innerHTML =
      name +
      ", you are Leo ♌ <br/> Roll out the red carpet because Leo has arrived. Passionate, loyal, and infamously dramatic, Leo is represented by the lion and these spirited fire signs are the kings and queens of the celestial jungle. They're delighted to embrace their royal status: Vivacious, theatrical, and fiery, Leos love to bask in the spotlight and celebrate… well, themselves.";
    button.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/0561/8477/products/Leo-Constealltion-Cocorrina-Gold_720x.jpg?v=1541933123" width="300" />`;
  }
  if (monthOfBirth === "august" && dayOfBirth <= 22) {
    h3.innerHTML =
      name +
      ", you are Leo ♌ <br/> Roll out the red carpet because Leo has arrived. Passionate, loyal, and infamously dramatic, Leo is represented by the lion and these spirited fire signs are the kings and queens of the celestial jungle. They're delighted to embrace their royal status: Vivacious, theatrical, and fiery, Leos love to bask in the spotlight and celebrate… well, themselves.";
    button.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/0561/8477/products/Leo-Constealltion-Cocorrina-Gold_720x.jpg?v=1541933123"  width="300" />`;
  }
  if (monthOfBirth === "august" && dayOfBirth >= 23) {
    h3.innerHTML =
      name +
      ", you are Virgo ♍ <br/> Virgos are logical, practical, and systematic in their approach to life. Virgo is an earth sign historically represented by the goddess of wheat and agriculture, an association that speaks to Virgo's deep-rooted presence in the material world. This earth sign is a perfectionist at heart and isn’t afraid to improve skills through diligent and consistent practice.";
    button.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/0561/8477/products/Virgo-Constealltion-Cocorrina-Gold_720x.jpg?v=1541934204"  width="300" />`;
  }
  if (monthOfBirth === "september" && dayOfBirth <= 22) {
    h3.innerHTML =
      name +
      ", you are Virgo ♍ <br/> Virgos are logical, practical, and systematic in their approach to life. Virgo is an earth sign historically represented by the goddess of wheat and agriculture, an association that speaks to Virgo's deep-rooted presence in the material world. This earth sign is a perfectionist at heart and isn’t afraid to improve skills through diligent and consistent practice.";
    button.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/0561/8477/products/Virgo-Constealltion-Cocorrina-Gold_720x.jpg?v=1541934204"  width="300" />`;
  }
  if (monthOfBirth === "september" && dayOfBirth >= 23) {
    h3.innerHTML =
      name +
      ", you are Libra ♎ <br/> Balance, harmony, and justice define Libra energy. As a cardinal air sign, Libra is represented by the scales (interestingly, the only inanimate object of the zodiac), an association that reflects Libra's fixation on establishing equilibrium. Libra is obsessed with symmetry and strives to create equilibrium in all areas of life — especially when it comes to matters of the heart.";
    button.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/0561/8477/products/Libra-Constealltion-Cocorrina-Gold_720x.jpg?v=1541933613"  width="300" />`;
  }
  if (monthOfBirth === "october" && dayOfBirth <= 22) {
    h3.innerHTML =
      name +
      ", you are Libra ♎ <br/> Balance, harmony, and justice define Libra energy. As a cardinal air sign, Libra is represented by the scales (interestingly, the only inanimate object of the zodiac), an association that reflects Libra's fixation on establishing equilibrium. Libra is obsessed with symmetry and strives to create equilibrium in all areas of life — especially when it comes to matters of the heart.";
    button.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/0561/8477/products/Libra-Constealltion-Cocorrina-Gold_720x.jpg?v=1541933613"  width="300" />`;
  }
  if (monthOfBirth === "october" && dayOfBirth >= 23) {
    h3.innerHTML =
      name +
      ", you are Scorpio ♏ <br/> Elusive and mysterious, Scorpio is one of the most misunderstood signs of the zodiac. Scorpio is a water sign that uses emotional energy as fuel, cultivating powerful wisdom through both the physical and unseen realms. In fact, Scorpio derives its extraordinary courage from its psychic abilities, which is what makes this sign one of the most complicated, dynamic signs of the zodiac.";
    button.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/0561/8477/products/Scorpio-Constealltion-Cocorrina-Gold_720x.jpg?v=1541933924"  width="300" />`;
  }
  if (monthOfBirth === "november" && dayOfBirth <= 21) {
    h3.innerHTML =
      name +
      ", you are Scorpio ♏ <br/> Elusive and mysterious, Scorpio is one of the most misunderstood signs of the zodiac. Scorpio is a water sign that uses emotional energy as fuel, cultivating powerful wisdom through both the physical and unseen realms. In fact, Scorpio derives its extraordinary courage from its psychic abilities, which is what makes this sign one of the most complicated, dynamic signs of the zodiac.";
    button.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/0561/8477/products/Scorpio-Constealltion-Cocorrina-Gold_720x.jpg?v=1541933924"  width="300" />`;
  }
  if (monthOfBirth === "november" && dayOfBirth >= 22) {
    h3.innerHTML =
      name +
      ", you are Sagittarius ♐ <br/> Oh, the places Sagittarius goes! But… actually. This fire sign knows no bounds. Represented by the archer, Sagittarians are always on a quest for knowledge. The last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows, chasing after geographical, intellectual, and spiritual adventures. ";
    button.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/0561/8477/products/Sagittarius-Constealltion-Cocorrina-Gold_720x.jpg?v=1541933771"  width="300" />`;
  }
  if (monthOfBirth === "december" && dayOfBirth <= 21) {
    h3.innerHTML =
      name +
      ", you are Sagittarius ♐ <br/> Oh, the places Sagittarius goes! But… actually. This fire sign knows no bounds. Represented by the archer, Sagittarians are always on a quest for knowledge. The last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows, chasing after geographical, intellectual, and spiritual adventures. ";
    button.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/0561/8477/products/Sagittarius-Constealltion-Cocorrina-Gold_720x.jpg?v=1541933771"  width="300" />`;
  }
  if (monthOfBirth === "december" && dayOfBirth >= 22) {
    h3.innerHTML =
      name +
      ", you are Capricorn ♑ <br/> Capricorn is climbing the mountain straight to the top and knows that patience, perseverance, and dedication is the only way to scale. The last earth sign of the zodiac, Capricorn, is represented by the sea-goat, a mythological creature with the body of a goat and the tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms.";
    button.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/0561/8477/products/Capricorn-Constealltion-Cocorrina-Gold_720x.jpg?v=1541932776"  width="300" />`;
  }
  if (monthOfBirth === "january" && dayOfBirth <= 19) {
    h3.innerHTML =
      name +
      ", you are Capricorn ♑ <br/> Capricorn is climbing the mountain straight to the top and knows that patience, perseverance, and dedication is the only way to scale. The last earth sign of the zodiac, Capricorn, is represented by the sea-goat, a mythological creature with the body of a goat and the tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms.";
    button.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/0561/8477/products/Capricorn-Constealltion-Cocorrina-Gold_720x.jpg?v=1541932776"  width="300" />`;
  }
  if (monthOfBirth === "january" && dayOfBirth >= 20) {
    h3.innerHTML =
      name +
      ", you are Aquarius ♒ <br/> Despite the aqua in its name, Aquarius is actually the last air sign of the zodiac. Innovative, progressive, and shamelessly revolutionary, Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land. Accordingly, Aquarius is the most humanitarian astrological sign. At the end of the day, Aquarius is dedicated to making the world a better place.";
    button.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/0561/8477/products/Aquarius-Constealltion-Cocorrina-Gold_14cc1b46-5abf-437b-af90-cebabd9a585e_720x.jpg?v=1541932180"  width="300" />`;
  }
  if (monthOfBirth === "february" && dayOfBirth <= 18) {
    h3.innerHTML =
      name +
      ", you are Aqarius ♒ <br/> Despite the aqua in its name, Aquarius is actually the last air sign of the zodiac. Innovative, progressive, and shamelessly revolutionary, Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land. Accordingly, Aquarius is the most humanitarian astrological sign. At the end of the day, Aquarius is dedicated to making the world a better place.";
    button.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/0561/8477/products/Aquarius-Constealltion-Cocorrina-Gold_14cc1b46-5abf-437b-af90-cebabd9a585e_720x.jpg?v=1541932180"  width="300" />`;
  }
  if (monthOfBirth === "february" && dayOfBirth >= 19) {
    h3.innerHTML =
      name +
      ", you are Pisces ♓ <br/> If you looked up the word psychic in the dictionary, there would definitely be a picture of Pisces next to it. Pisces is the most intuitive, sensitive, and empathetic sign of the entire zodiac — and that’s because it’s the last of the last. As the final sign, Pisces has absorbed every lesson — the joys and the pain, the hopes and the fears — learned by all of the other signs. It's symbolized by two fish swimming in opposite directions, representing the constant division of Pisces' attention between fantasy and reality.";
    button.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/0561/8477/products/Pisces-Constealltion-Cocorrina-Gold_720x.jpg?v=1541933575"  width="300" />`;
  }
  if (monthOfBirth === "march" && dayOfBirth <= 20) {
    h3.innerHTML =
      name +
      ", you are Pisces ♓ <br/> If you looked up the word psychic in the dictionary, there would definitely be a picture of Pisces next to it. Pisces is the most intuitive, sensitive, and empathetic sign of the entire zodiac — and that’s because it’s the last of the last. As the final sign, Pisces has absorbed every lesson — the joys and the pain, the hopes and the fears — learned by all of the other signs. It's symbolized by two fish swimming in opposite directions, representing the constant division of Pisces' attention between fantasy and reality.";
    button.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/0561/8477/products/Pisces-Constealltion-Cocorrina-Gold_720x.jpg?v=1541933575"  width="300" />`;
  }
  if (monthOfBirth === "march" && dayOfBirth >= 21) {
    h3.innerHTML =
      name +
      ", you are Aries ♈ <br/> Aries loves to be number one. Naturally, this dynamic fire sign is no stranger to competition. Bold and ambitious, Aries dives headfirst into even the most challenging situations—and they'll make sure they always come out on top!";
    button.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/0561/8477/products/Aries-Constealltion-Cocorrina-Gold_720x.jpg?v=1541932459"  width="300" />`;
  }
  if (monthOfBirth === "april" && dayOfBirth <= 19) {
    h3.innerHTML =
      name +
      ", you are Aries ♈ <br/> Aries loves to be number one. Naturally, this dynamic fire sign is no stranger to competition. Bold and ambitious, Aries dives headfirst into even the most challenging situations—and they'll make sure they always come out on top!";
    button.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/0561/8477/products/Aries-Constealltion-Cocorrina-Gold_720x.jpg?v=1541932459"  width="300" />`;
  }

  if (monthOfBirth === "april" && dayOfBirth >= 20) {
    h3.innerHTML =
      name +
      ", you are Taurus ♉ <br/> Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors.";
    button.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/0561/8477/products/Taurus-Constealltion-Cocorrina-Gold_720x.jpg?v=1541934071"  width="300" />`;
  }
  if (monthOfBirth === "may" && dayOfBirth <= 20) {
    h3.innerHTML =
      name +
      ", you are Taurus ♉ <br/> Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors.";
    button.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/0561/8477/products/Taurus-Constealltion-Cocorrina-Gold_720x.jpg?v=1541934071"  width="300" />`;
  }
  if (monthOfBirth === "may" && dayOfBirth >= 21) {
    h3.innerHTML =
      name +
      ", you are Gemini ♊ <br/> Spontaneous, playful, and adorably erratic, Gemini is driven by its insatiable curiosity. Appropriately symbolized by the celestial twins, this air sign was interested in so many pursuits that it had to double itself.";
    button.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/0561/8477/products/Gemini-Constealltion-Cocorrina-Gold_720x.jpg?v=1541932930"  width="300" />`;
  }
  if (monthOfBirth === "june" && dayOfBirth <= 20) {
    h3.innerHTML =
      name +
      ", you are Gemini ♊ <br/> Spontaneous, playful, and adorably erratic, Gemini is driven by its insatiable curiosity. Appropriately symbolized by the celestial twins, this air sign was interested in so many pursuits that it had to double itself.";
    button.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/0561/8477/products/Gemini-Constealltion-Cocorrina-Gold_720x.jpg?v=1541932930"  width="300" />`;
  }
  if (monthOfBirth === "june" && dayOfBirth >= 21) {
    h3.innerHTML =
      name +
      ", you are Cancer ♋ <br/> Represented by the crab, Cancer seamlessly weaves between the sea and shore representing Cancer’s ability to exist in both emotional and material realms. Cancers are highly intuitive and their psychic abilities manifest in tangible spaces. But—just like the hard-shelled crustaceans—this water sign is willing to do whatever it takes to protect itself emotionally. ";
    button.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/0561/8477/products/Cancer-Constealltion-Cocorrina-Gold_720x.jpg?v=1541932629"  width="300" />`;
  }
  if (monthOfBirth === "july" && dayOfBirth <= 22) {
    h3.innerHTML =
      name +
      ", you are Cancer ♋ <br/> Represented by the crab, Cancer seamlessly weaves between the sea and shore representing Cancer’s ability to exist in both emotional and material realms. Cancers are highly intuitive and their psychic abilities manifest in tangible spaces. But—just like the hard-shelled crustaceans—this water sign is willing to do whatever it takes to protect itself emotionally. ";
    button.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/0561/8477/products/Cancer-Constealltion-Cocorrina-Gold_720x.jpg?v=1541932629"  width="300" />`;
  }
  button.removeEventListener("click", newHeading);
}
