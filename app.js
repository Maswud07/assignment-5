
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