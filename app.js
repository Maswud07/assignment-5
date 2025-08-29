
const services = [
  { id: 1, icon: '🛡️', name: 'National Emergency Number', subtitle: 'National Emergency', number: '999', tag: 'All' },
  { id: 2, icon: '🚓', name: 'Police Helpline Number', subtitle: 'Police', number: '999', tag: 'Police' },
  { id: 3, icon: '🚒', name: 'Fire Service Number', subtitle: 'Fire Service', number: '999', tag: 'Fire' },
  { id: 4, icon: '🚑', name: 'Ambulance Service', subtitle: 'Ambulance', number: '1994-999999', tag: 'Health' },
  { id: 5, icon: '👩‍👧', name: 'Women & Child Helpline', subtitle: 'Women & Child Helpline', number: '109', tag: 'Help' },
  { id: 6, icon: '🛡️', name: 'Anti-Corruption Helpline', subtitle: 'Anti-Corruption', number: '106', tag: 'Govt.' },
  { id: 7, icon: '💡', name: 'Electricity Helpline', subtitle: 'Electricity Outage', number: '16216', tag: 'Electricity' },
  { id: 8, icon: '🤝', name: 'Brac Helpline', subtitle: 'Brac', number: '16445', tag: 'NGO' },
  { id: 9, icon: '🚆', name: 'Bangladesh Railway Helpline', subtitle: 'Bangladesh Railway', number: '163', tag: 'Travel' }
];


let likeCount = 0;
let copyCount = 0;
let coins = 100;

const likeCountEl = document.getElementById('likeCount');
const copyCountEl = document.getElementById('copyCount');
const coinCountEl = document.getElementById('coinCount');

const cardsContainer = document.getElementById('cardsContainer');
const historyList = document.getElementById('historyList');
const emptyHistory = document.getElementById('emptyHistory');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');


function renderCards() {
  const grid = document.createElement('div');
  grid.className = 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6';
  services.forEach(svc => {
    const card = document.createElement('article');
    card.className = 'bg-white rounded-xl border border-gray-200 shadow-card p-4 sm:p-5 flex flex-col';
    card.innerHTML = `
  <div class="flex justify-between items-start">
    <div>
      <div class="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-2xl mb-2">${svc.icon}</div>
      <h3 class="font-semibold text-gray-800">${svc.name}</h3>
      <p class="text-sm text-gray-500">${svc.subtitle}</p>
    </div>
    <button class="like-btn text-gray-400 hover:text-rose-500 transition" title="Like">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.645 20.91l-.007-.003-.022-.01a15.247 15.247 0 01-1.31-.717 25.18 25.18 0 01-4.255-3.17C3.688 14.618 2 12.247 2 9.5 2 7.015 3.99 5 6.5 5A4.5 4.5 0 0112 7.243 4.5 4.5 0 0117.5 5C20.01 5 22 7.015 22 9.5c0 2.747-1.688 5.118-4.051 7.51a25.18 25.18 0 01-4.255 3.17 15.247 15.247 0 01-1.31.717l-.022.01-.007.003a.75.75 0 01-.622 0z"/>
      </svg>
    </button>
  </div>
  <div class="mt-4">
    <div class="text-3xl font-bold tracking-tight">${svc.number}</div>
    <span class="badge mt-2">${svc.tag}</span>
  </div>
  <div class="mt-4 grid grid-cols-2 gap-3">
    <button class="copy-btn flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2 hover:bg-gray-50 transition" data-number="${svc.number}" data-name="${svc.name}">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" stroke="currentColor"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
      <span>Copy</span>
    </button>
    <button class="call-btn flex items-center justify-center gap-2 bg-[#00A63E] text-white rounded-lg py-2 hover:bg-emerald-700 transition" data-number="${svc.number}" data-name="${svc.name}">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" stroke="currentColor"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.8 19.8 0 012.08 4.18 2 2 0 014 2h3a2 2 0 012 1.72c.12.91.31 1.79.57 2.65a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.43-1.03a2 2 0 012.11-.45c.86.26 1.74.45 2.65.57A2 2 0 0122 16.92z"/></svg>
      <span>Call</span>
    </button>
  </div>
`;

    grid.appendChild(card);
  });
  cardsContainer.appendChild(grid);

  
  cardsContainer.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      likeCount++;
      likeCountEl.textContent = likeCount;
      
      btn.classList.add('text-rose-500');
      setTimeout(()=>btn.classList.remove('text-rose-500'), 300);
    });
  });

  cardsContainer.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const number = e.currentTarget.dataset.number;
      const name = e.currentTarget.dataset.name;
      try {
        await navigator.clipboard.writeText(number);
        copyCount++;
        copyCountEl.textContent = copyCount;
        alert(`Copied ${name} number: ${number}`);
      } catch {
        alert('Copy failed. Please copy manually.');
      }
    });
  });

  cardsContainer.querySelectorAll('.call-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const number = e.currentTarget.dataset.number;
      const name = e.currentTarget.dataset.name;
     
      if (coins < 20) {
        alert('Not enough coins. You need 20 coins to make a call.');
        return;
      }
      coins -= 20;
      coinCountEl.textContent = coins;

      alert(`Calling ${name} at ${number}...`);
      addToHistory({ name, number });
    });
  });
}


function addToHistory(item) {
  emptyHistory.classList.add('hidden');
  const li = document.createElement('li');
  li.className = 'flex items-start justify-between gap-3 rounded-lg border border-gray-100 p-3 hover:bg-gray-50';
  const time = new Date();
  const timeStr = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  li.innerHTML = `
    <div>
      <div class="font-medium">${item.name}</div>
      <div class="text-xs text-gray-500">${item.number}</div>
    </div>
    <div class="text-xs text-gray-400">${timeStr}</div>
  `;
  historyList.prepend(li);
}

clearHistoryBtn.addEventListener('click', () => {
  historyList.innerHTML = '';
  emptyHistory.classList.remove('hidden');
});


renderCards();
