export interface Animal {
  id: number;
  name: string;
  emoji: string;
  score: number;
}

// Initialize 100 animals with score of 0
export const animals: Animal[] = [
  { id: 1, name: "Lion", emoji: "🦁", score: 0 },
  { id: 2, name: "Tiger", emoji: "🐯", score: 0 },
  { id: 3, name: "Bear", emoji: "🐻", score: 0 },
  { id: 4, name: "Elephant", emoji: "🐘", score: 0 },
  { id: 5, name: "Giraffe", emoji: "🦒", score: 0 },
  { id: 6, name: "Zebra", emoji: "🦓", score: 0 },
  { id: 7, name: "Panda", emoji: "🐼", score: 0 },
  { id: 8, name: "Koala", emoji: "🐨", score: 0 },
  { id: 9, name: "Monkey", emoji: "🐵", score: 0 },
  { id: 10, name: "Gorilla", emoji: "🦍", score: 0 },
  { id: 11, name: "Fox", emoji: "🦊", score: 0 },
  { id: 12, name: "Wolf", emoji: "🐺", score: 0 },
  { id: 13, name: "Dog", emoji: "🐕", score: 0 },
  { id: 14, name: "Cat", emoji: "🐈", score: 0 },
  { id: 15, name: "Rabbit", emoji: "🐰", score: 0 },
  { id: 16, name: "Hamster", emoji: "🐹", score: 0 },
  { id: 17, name: "Mouse", emoji: "🐭", score: 0 },
  { id: 18, name: "Rat", emoji: "🐀", score: 0 },
  { id: 19, name: "Pig", emoji: "🐷", score: 0 },
  { id: 20, name: "Cow", emoji: "🐮", score: 0 },
  { id: 21, name: "Horse", emoji: "🐴", score: 0 },
  { id: 22, name: "Unicorn", emoji: "🦄", score: 0 },
  { id: 23, name: "Chicken", emoji: "🐔", score: 0 },
  { id: 24, name: "Duck", emoji: "🦆", score: 0 },
  { id: 25, name: "Eagle", emoji: "🦅", score: 0 },
  { id: 26, name: "Owl", emoji: "🦉", score: 0 },
  { id: 27, name: "Parrot", emoji: "🦜", score: 0 },
  { id: 28, name: "Penguin", emoji: "🐧", score: 0 },
  { id: 29, name: "Flamingo", emoji: "🦩", score: 0 },
  { id: 30, name: "Swan", emoji: "🦢", score: 0 },
  { id: 31, name: "Peacock", emoji: "🦚", score: 0 },
  { id: 32, name: "Dove", emoji: "🕊️", score: 0 },
  { id: 33, name: "Frog", emoji: "🐸", score: 0 },
  { id: 34, name: "Crocodile", emoji: "🐊", score: 0 },
  { id: 35, name: "Turtle", emoji: "🐢", score: 0 },
  { id: 36, name: "Lizard", emoji: "🦎", score: 0 },
  { id: 37, name: "Snake", emoji: "🐍", score: 0 },
  { id: 38, name: "Dragon", emoji: "🐉", score: 0 },
  { id: 39, name: "T-Rex", emoji: "🦖", score: 0 },
  { id: 40, name: "Sauropod", emoji: "🦕", score: 0 },
  { id: 41, name: "Whale", emoji: "🐋", score: 0 },
  { id: 42, name: "Dolphin", emoji: "🐬", score: 0 },
  { id: 43, name: "Shark", emoji: "🦈", score: 0 },
  { id: 44, name: "Octopus", emoji: "🐙", score: 0 },
  { id: 45, name: "Squid", emoji: "🦑", score: 0 },
  { id: 46, name: "Shrimp", emoji: "🦐", score: 0 },
  { id: 47, name: "Crab", emoji: "🦀", score: 0 },
  { id: 48, name: "Lobster", emoji: "🦞", score: 0 },
  { id: 49, name: "Fish", emoji: "🐟", score: 0 },
  { id: 50, name: "Tropical Fish", emoji: "🐠", score: 0 },
  { id: 51, name: "Blowfish", emoji: "🐡", score: 0 },
  { id: 52, name: "Seal", emoji: "🦭", score: 0 },
  { id: 53, name: "Otter", emoji: "🦦", score: 0 },
  { id: 54, name: "Beaver", emoji: "🦫", score: 0 },
  { id: 55, name: "Butterfly", emoji: "🦋", score: 0 },
  { id: 56, name: "Bee", emoji: "🐝", score: 0 },
  { id: 57, name: "Ladybug", emoji: "🐞", score: 0 },
  { id: 58, name: "Ant", emoji: "🐜", score: 0 },
  { id: 59, name: "Spider", emoji: "🕷️", score: 0 },
  { id: 60, name: "Scorpion", emoji: "🦂", score: 0 },
  { id: 61, name: "Mosquito", emoji: "🦟", score: 0 },
  { id: 62, name: "Cricket", emoji: "🦗", score: 0 },
  { id: 63, name: "Snail", emoji: "🐌", score: 0 },
  { id: 64, name: "Slug", emoji: "🐛", score: 0 },
  { id: 65, name: "Worm", emoji: "🪱", score: 0 },
  { id: 66, name: "Camel", emoji: "🐪", score: 0 },
  { id: 67, name: "Llama", emoji: "🦙", score: 0 },
  { id: 68, name: "Kangaroo", emoji: "🦘", score: 0 },
  { id: 69, name: "Badger", emoji: "🦡", score: 0 },
  { id: 70, name: "Skunk", emoji: "🦨", score: 0 },
  { id: 71, name: "Raccoon", emoji: "🦝", score: 0 },
  { id: 72, name: "Hedgehog", emoji: "🦔", score: 0 },
  { id: 73, name: "Bat", emoji: "🦇", score: 0 },
  { id: 74, name: "Sloth", emoji: "🦥", score: 0 },
  { id: 75, name: "Hippopotamus", emoji: "🦛", score: 0 },
  { id: 76, name: "Rhinoceros", emoji: "🦏", score: 0 },
  { id: 77, name: "Deer", emoji: "🦌", score: 0 },
  { id: 78, name: "Bison", emoji: "🦬", score: 0 },
  { id: 79, name: "Ox", emoji: "🐂", score: 0 },
  { id: 80, name: "Water Buffalo", emoji: "🐃", score: 0 },
  { id: 81, name: "Ram", emoji: "🐏", score: 0 },
  { id: 82, name: "Goat", emoji: "🐐", score: 0 },
  { id: 83, name: "Sheep", emoji: "🐑", score: 0 },
  { id: 84, name: "Boar", emoji: "🐗", score: 0 },
  { id: 85, name: "Chipmunk", emoji: "🐿️", score: 0 },
  { id: 86, name: "Turkey", emoji: "🦃", score: 0 },
  { id: 87, name: "Rooster", emoji: "🐓", score: 0 },
  { id: 88, name: "Hatching Chick", emoji: "🐣", score: 0 },
  { id: 89, name: "Baby Chick", emoji: "🐤", score: 0 },
  { id: 90, name: "Dodo", emoji: "🦤", score: 0 },
  { id: 91, name: "Mammoth", emoji: "🦣", score: 0 },
  { id: 92, name: "Orangutan", emoji: "🦧", score: 0 },
  { id: 93, name: "Guide Dog", emoji: "🦮", score: 0 },
  { id: 94, name: "Service Dog", emoji: "🐕‍🦺", score: 0 },
  { id: 95, name: "Poodle", emoji: "🐩", score: 0 },
  { id: 96, name: "Black Cat", emoji: "🐈‍⬛", score: 0 },
  { id: 97, name: "Polar Bear", emoji: "🐻‍❄️", score: 0 },
  { id: 98, name: "Feather", emoji: "🪶", score: 0 },
  { id: 99, name: "Microbe", emoji: "🦠", score: 0 },
  { id: 100, name: "Fly", emoji: "🪰", score: 0 },
];

// Get two random animals that are different
export function getRandomPair(): [Animal, Animal] {
  const shuffled = [...animals].sort(() => Math.random() - 0.5);
  return [shuffled[0], shuffled[1]];
}

// Update animal score
export function updateScore(winnerId: number, loserId: number): void {
  const winner = animals.find(a => a.id === winnerId);
  const loser = animals.find(a => a.id === loserId);
  
  if (winner && loser) {
    winner.score += 1;
    loser.score -= 1;
  }
}

// Get sorted leaderboard
export function getLeaderboard(): Animal[] {
  return [...animals].sort((a, b) => b.score - a.score);
}

