// Data Definitions
const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
const animalSounds = "moo neigh baa oink cluck";
const [cowSound, horseSound, sheepSound, pigSound, chickenSound] = animalSounds.split(' ');

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
const [bessie, dolly, babe, little] = farmAnimals.split(' ').slice(0, 4);

// 3. Little the chicken had to go back to the coop, so now we're left with three traditional animal colors.
const [blackAndWhite, black, pink] = ['black and white', 'black', muppet.color]; // Change here

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.
const [red, orange, yellow, green, blue, indigo, violet] = colors; // Added violet here

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
const [r, o, y, g, b] = colors.slice(0, -1); // Exclude violet

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg.
const [, , , , , indg] = colors; // This assigns indigo to the variable indg

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names.
const { muppetName, color, song, job, partner } = muppet;

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner.
const {
  album: {
    theMuppetMovie: { song2, song4 }
  },
  nestedJob,           // Fixed access for nestedJob
  nestedPartner: kermitPartner
} = nestedMuppet;

// Output results to verify
console.log(cowSound, horseSound, sheepSound, pigSound, chickenSound); // Animal sounds
console.log(bessie, dolly, babe, little); // Bessie, Dolly, Babe, and Little
console.log(blackAndWhite, black, pink); // Color variables
console.log(red, orange, yellow, green, blue, indigo, violet); // Color names including violet
console.log(r, o, y, g, b); // Initials for colors
console.log(indg); // Indigo
console.log(muppetName, color, song, job, partner); // Muppet info
console.log(song2, song4, nestedMuppet.nestedJob, kermitPartner); // Songs and Kermit's info


