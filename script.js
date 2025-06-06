// Tiup lilin -> matikan lilin, munculkan asap
const blowBtn = document.getElementById('blow-btn');
const cakeImg = document.getElementById('cake-img');

blowBtn.addEventListener('click', () => {
  cakeImg.src = 'assets/cake-without-candle.png'; // versi tanpa api
  blowBtn.disabled = true;
  blowBtn.textContent = 'Lilin sudah ditiup 🎉';
});

// Efek mesin tik untuk surat cinta
const letterBtn = document.getElementById('love-btn');
const letterBox = document.getElementById('love-letter');
const letterText = document.getElementById('letter-text');

const message = `Dear Viona,

Happy birthday yaa sayangku 💖
Semoga di umur yang sekarang kamu makin strong, makin glowing,
makin sabar menghadapi aku hehe~

Thank you for being the light in my life, seriously.
I’m so lucky to have you.

Enjoy your special day, dan semoga semua harapan kamu tercapai yaaa 🥰

Love,
Someone yang sayang kamu selalu ✨`;

let typingIndex = 0;
let typingInterval;

letterBtn.addEventListener('click', () => {
  letterBox.classList.remove('hidden');
  letterBtn.disabled = true;
  typingIndex = 0;
  letterText.textContent = '';

  typingInterval = setInterval(() => {
    if (typingIndex < message.length) {
      letterText.textContent += message.charAt(typingIndex);
      typingIndex++;
    } else {
      clearInterval(typingInterval);
    }
  }, 40);
});
