import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Query to get all animals
export const getAnimals = query({
  handler: async (ctx) => {
    return await ctx.db.query("animals").collect();
  },
});

// Query to get leaderboard (sorted by score)
export const getLeaderboard = query({
  handler: async (ctx) => {
    const animals = await ctx.db.query("animals").collect();
    return animals.sort((a, b) => b.score - a.score);
  },
});

// Query to get two random animals
export const getRandomPair = query({
  handler: async (ctx) => {
    const animals = await ctx.db.query("animals").collect();
    
    if (animals.length < 2) {
      throw new Error("Not enough animals in database");
    }
    
    // Shuffle and get first two
    const shuffled = [...animals].sort(() => Math.random() - 0.5);
    return [shuffled[0], shuffled[1]];
  },
});

// Mutation to update scores after a vote
export const updateScore = mutation({
  args: {
    winnerId: v.id("animals"),
    loserId: v.id("animals"),
  },
  handler: async (ctx, args) => {
    const winner = await ctx.db.get(args.winnerId);
    const loser = await ctx.db.get(args.loserId);
    
    if (!winner || !loser) {
      throw new Error("Animal not found");
    }
    
    // Update winner score (+1)
    await ctx.db.patch(args.winnerId, {
      score: winner.score + 1,
    });
    
    // Update loser score (-1)
    await ctx.db.patch(args.loserId, {
      score: loser.score - 1,
    });
  },
});

// Mutation to initialize animals (run once to populate database)
export const initializeAnimals = mutation({
  handler: async (ctx) => {
    // Check if animals already exist
    const existing = await ctx.db.query("animals").collect();
    if (existing.length > 0) {
      return { message: "Animals already initialized", count: existing.length };
    }
    
    const animals = [
      { name: "Lion", emoji: "🦁", score: 0 },
      { name: "Tiger", emoji: "🐯", score: 0 },
      { name: "Bear", emoji: "🐻", score: 0 },
      { name: "Elephant", emoji: "🐘", score: 0 },
      { name: "Giraffe", emoji: "🦒", score: 0 },
      { name: "Zebra", emoji: "🦓", score: 0 },
      { name: "Panda", emoji: "🐼", score: 0 },
      { name: "Koala", emoji: "🐨", score: 0 },
      { name: "Monkey", emoji: "🐵", score: 0 },
      { name: "Gorilla", emoji: "🦍", score: 0 },
      { name: "Fox", emoji: "🦊", score: 0 },
      { name: "Wolf", emoji: "🐺", score: 0 },
      { name: "Dog", emoji: "🐕", score: 0 },
      { name: "Cat", emoji: "🐈", score: 0 },
      { name: "Rabbit", emoji: "🐰", score: 0 },
      { name: "Hamster", emoji: "🐹", score: 0 },
      { name: "Mouse", emoji: "🐭", score: 0 },
      { name: "Rat", emoji: "🐀", score: 0 },
      { name: "Pig", emoji: "🐷", score: 0 },
      { name: "Cow", emoji: "🐮", score: 0 },
      { name: "Horse", emoji: "🐴", score: 0 },
      { name: "Unicorn", emoji: "🦄", score: 0 },
      { name: "Chicken", emoji: "🐔", score: 0 },
      { name: "Duck", emoji: "🦆", score: 0 },
      { name: "Eagle", emoji: "🦅", score: 0 },
      { name: "Owl", emoji: "🦉", score: 0 },
      { name: "Parrot", emoji: "🦜", score: 0 },
      { name: "Penguin", emoji: "🐧", score: 0 },
      { name: "Flamingo", emoji: "🦩", score: 0 },
      { name: "Swan", emoji: "🦢", score: 0 },
      { name: "Peacock", emoji: "🦚", score: 0 },
      { name: "Dove", emoji: "🕊️", score: 0 },
      { name: "Frog", emoji: "🐸", score: 0 },
      { name: "Crocodile", emoji: "🐊", score: 0 },
      { name: "Turtle", emoji: "🐢", score: 0 },
      { name: "Lizard", emoji: "🦎", score: 0 },
      { name: "Snake", emoji: "🐍", score: 0 },
      { name: "Dragon", emoji: "🐉", score: 0 },
      { name: "T-Rex", emoji: "🦖", score: 0 },
      { name: "Sauropod", emoji: "🦕", score: 0 },
      { name: "Whale", emoji: "🐋", score: 0 },
      { name: "Dolphin", emoji: "🐬", score: 0 },
      { name: "Shark", emoji: "🦈", score: 0 },
      { name: "Octopus", emoji: "🐙", score: 0 },
      { name: "Squid", emoji: "🦑", score: 0 },
      { name: "Shrimp", emoji: "🦐", score: 0 },
      { name: "Crab", emoji: "🦀", score: 0 },
      { name: "Lobster", emoji: "🦞", score: 0 },
      { name: "Fish", emoji: "🐟", score: 0 },
      { name: "Tropical Fish", emoji: "🐠", score: 0 },
      { name: "Blowfish", emoji: "🐡", score: 0 },
      { name: "Seal", emoji: "🦭", score: 0 },
      { name: "Otter", emoji: "🦦", score: 0 },
      { name: "Beaver", emoji: "🦫", score: 0 },
      { name: "Butterfly", emoji: "🦋", score: 0 },
      { name: "Bee", emoji: "🐝", score: 0 },
      { name: "Ladybug", emoji: "🐞", score: 0 },
      { name: "Ant", emoji: "🐜", score: 0 },
      { name: "Spider", emoji: "🕷️", score: 0 },
      { name: "Scorpion", emoji: "🦂", score: 0 },
      { name: "Mosquito", emoji: "🦟", score: 0 },
      { name: "Cricket", emoji: "🦗", score: 0 },
      { name: "Snail", emoji: "🐌", score: 0 },
      { name: "Slug", emoji: "🐛", score: 0 },
      { name: "Worm", emoji: "🪱", score: 0 },
      { name: "Camel", emoji: "🐪", score: 0 },
      { name: "Llama", emoji: "🦙", score: 0 },
      { name: "Kangaroo", emoji: "🦘", score: 0 },
      { name: "Badger", emoji: "🦡", score: 0 },
      { name: "Skunk", emoji: "🦨", score: 0 },
      { name: "Raccoon", emoji: "🦝", score: 0 },
      { name: "Hedgehog", emoji: "🦔", score: 0 },
      { name: "Bat", emoji: "🦇", score: 0 },
      { name: "Sloth", emoji: "🦥", score: 0 },
      { name: "Hippopotamus", emoji: "🦛", score: 0 },
      { name: "Rhinoceros", emoji: "🦏", score: 0 },
      { name: "Deer", emoji: "🦌", score: 0 },
      { name: "Bison", emoji: "🦬", score: 0 },
      { name: "Ox", emoji: "🐂", score: 0 },
      { name: "Water Buffalo", emoji: "🐃", score: 0 },
      { name: "Ram", emoji: "🐏", score: 0 },
      { name: "Goat", emoji: "🐐", score: 0 },
      { name: "Sheep", emoji: "🐑", score: 0 },
      { name: "Boar", emoji: "🐗", score: 0 },
      { name: "Chipmunk", emoji: "🐿️", score: 0 },
      { name: "Turkey", emoji: "🦃", score: 0 },
      { name: "Rooster", emoji: "🐓", score: 0 },
      { name: "Hatching Chick", emoji: "🐣", score: 0 },
      { name: "Baby Chick", emoji: "🐤", score: 0 },
      { name: "Dodo", emoji: "🦤", score: 0 },
      { name: "Mammoth", emoji: "🦣", score: 0 },
      { name: "Orangutan", emoji: "🦧", score: 0 },
      { name: "Guide Dog", emoji: "🦮", score: 0 },
      { name: "Service Dog", emoji: "🐕‍🦺", score: 0 },
      { name: "Poodle", emoji: "🐩", score: 0 },
      { name: "Black Cat", emoji: "🐈‍⬛", score: 0 },
      { name: "Polar Bear", emoji: "🐻‍❄️", score: 0 },
      { name: "Feather", emoji: "🪶", score: 0 },
      { name: "Microbe", emoji: "🦠", score: 0 },
      { name: "Fly", emoji: "🪰", score: 0 },
    ];
    
    // Insert all animals
    for (const animal of animals) {
      await ctx.db.insert("animals", animal);
    }
    
    return { message: "Animals initialized successfully", count: animals.length };
  },
});

// Mutation to reset all scores to 0
export const resetScores = mutation({
  handler: async (ctx) => {
    const animals = await ctx.db.query("animals").collect();
    
    for (const animal of animals) {
      await ctx.db.patch(animal._id, { score: 0 });
    }
    
    return { message: "All scores reset to 0", count: animals.length };
  },
});

