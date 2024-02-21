const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

const initPlayers = (players) => players.map(player => ({
    name: player,
    strength: getRandomStrength(),
}));

const getRandomStrength = () => Math.ceil(Math.random() * 100);

const buildPlayers = (players, type) => players
    .filter(player => player.name.includes(type))
    .map(player => `<div class="player">
        <img src="${player.image}" alt="${player.name}" class="player-image">
        <p class="player-name">${player.name}</p>
        <p class="player-strength">${player.strength}</p>
    </div>`)
    .join('');

const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
};

window.onload = () => {
    const shuffledPlayers = PLAYERS.sort(() => Math.random() - 0.5);
    viewPlayers(initPlayers(shuffledPlayers));
};
