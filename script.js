// Create enhanced starfield
const starfield = document.getElementById('starfield');
for (let i = 0; i < 200; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  const size = Math.random() * 3 + 0.5;
  star.style.width = size + 'px';
  star.style.height = size + 'px';
  star.style.left = Math.random() * 100 + '%';
  star.style.top = Math.random() * 100 + '%';
  star.style.animationDelay = Math.random() * 3 + 's';
  star.style.animationDuration = (Math.random() * 2 + 2) + 's';
  if (Math.random() > 0.7) {
    star.style.background = 'linear-gradient(45deg, #fff, #b19cd9)';
  }
  starfield.appendChild(star);
}

const highTierList = document.getElementById("highTierList");
const recentTestList = document.getElementById("recentTestList");

const highTiers = ["ht3", "ht2", "ht1", "lt2", "lt1"];
const lowTiers = ["lt5", "lt4", "lt3", "ht4", "ht5"];
const modes = ["sword", "smp", "crystal", "pot", "uhc", "axe"];
const regions = ["na", "eu"];

function createEntry(p) {
  return `
  <div class="player-entry">
    <img class="player-avatar" src="https://mc-heads.net/avatar/Steve/40" alt="${p.name}">
    <div class="player-info">
      <div class="player-name">${p.name}</div>
      <div class="player-badges">
        <div class="game-badge"><img src="https://pvptiers.com/icons/modes/${p.mode}.webp" alt="${p.mode}"></div>
        <span class="tier-badge-sm ${p.tier}">${p.tier.toUpperCase()}</span>
        <span class="region-badge-sm ${p.region}">${p.region.toUpperCase()}</span>
      </div>
    </div>
  </div>`;
}

function populateHighTier() {
  const highTierPlayers = highTiers.map((tier, i) => ({
    name: `Testing${i + 1}`,
    mode: modes[Math.floor(Math.random() * modes.length)],
    tier: tier,
    region: regions[Math.floor(Math.random() * regions.length)]
  }));
  highTierList.innerHTML = highTierPlayers.map(createEntry).join('');
}

function populateRecentTests() {
  const recent = [];
  for (let i = 0; i < 12; i++) {
    recent.push({
      name: `Testing${i + 6}`,
      mode: modes[Math.floor(Math.random() * modes.length)],
      tier: lowTiers[Math.floor(Math.random() * lowTiers.length)],
      region: regions[Math.floor(Math.random() * regions.length)]
    });
  }
  recentTestList.innerHTML = recent.map(createEntry).join('');
}

populateHighTier();
populateRecentTests();
setInterval(populateRecentTests, 300000);
