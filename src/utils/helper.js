// Helper to calculate "time ago"
export const timeAgo = (timestamp) => {
    const diff = Date.now() - new Date(timestamp);
    const units = [
        { label: "year", value: 31536000 }, // 365 days
        { label: "month", value: 2592000 }, // 30 days
        { label: "day", value: 86400 },
        { label: "hour", value: 3600 },
        { label: "minute", value: 60 },
        { label: "second", value: 1 },
    ];

    for (const { label, value } of units) {
        const amount = Math.floor(diff / (value * 1000));
        if (amount > 0) return `${amount} ${label}${amount > 1 ? "s" : ""} ago`;
    }
    return "just now";
};

// Helper to format ISO duration
export const formatDuration = (iso) => {
    const match = iso.match(/\d+[HMS]/g);
    if (!match) return "0:00";

    const timeParts = match.map((t) => t.slice(0, -1).padStart(2, "0"));

    // Ensure minutes and seconds are always two digits
    if (timeParts.length === 1) {
        return `${timeParts[0]}:00`; // If only seconds are provided (e.g., PT32S)
    }

    return timeParts.join(":").replace(/^00:/, "") || "0:00";
};
//function to generate random name
var nameList = [
    'Time', 'Past', 'Future', 'Dev',
    'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
    'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
    'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
    'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
    'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
    'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
    'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
    'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
    'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
    'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
    'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
    'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
    'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
    'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
    'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
    'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
    'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
    'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
    'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
    'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
];
export function getRandomName() {
    return nameList[Math.floor(Math.random() * nameList.length)];
};
//function to generate random message
export function getRandomMessage() {
    const messages = [
        "Hello there! How's it going?",
        "Keep pushing forward; you're doing great!",
        "Don't forget to take a break and relax.",
        "Success is just around the corner!",
        "Stay positive, stay productive.",
        "Remember: Every step counts, no matter how small.",
        "Great things take time, so keep going!",
        "You're capable of amazing things!",
        "Always believe in yourself.",
        "Your hard work will pay off soon!"
    ];

    // Generate a random index
    const randomIndex = Math.floor(Math.random() * messages.length);

    // Return a random message
    return messages[randomIndex];
}


