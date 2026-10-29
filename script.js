
const friends = {
  andi: {
    name: "ANDI",
    title: "You are doing better than you think.",
    message:
      "Hei, Andi.\n\n" +
      "Kalau hari ini terasa berat, ingat bahwa kamu tidak harus menyelesaikan semuanya sekaligus.\n\n" +
      "Pelan-pelan saja. Setiap langkah kecil tetap berarti. Jangan lupa memberi dirimu waktu untuk beristirahat.\n\n" +
      "I hope you know that you matter."
  },

  budi: {
    name: "BUDI",
    title: "Keep believing in yourself.",
    message:
      "Hai, Budi.\n\n" +
      "Mungkin tidak semua hal berjalan sesuai rencana, dan itu tidak apa-apa.\n\n" +
      "Kamu masih punya kesempatan untuk belajar, mencoba lagi, dan menemukan jalanmu sendiri.\n\n" +
      "One day at a time. You've got this."
  },

  cici: {
    name: "CICI",
    title: "You deserve gentle days, too.",
    message:
      "Hai, Cici.\n\n" +
      "Terima kasih sudah terus berusaha, bahkan ketika tidak semuanya mudah.\n\n" +
      "Kamu tidak harus selalu kuat atau selalu punya jawaban. Beristirahat juga bagian dari perjalanan.\n\n" +
      "May something good find you today."
  }
};

const defaultMessage = {
  name: "YOU",
  title: "A little reminder for you.",
  message:
    "Apa pun yang sedang kamu hadapi, semoga kamu ingat bahwa kamu tidak harus melakukan semuanya dengan sempurna.\n\n" +
    "Ambil napas, jalani satu langkah demi satu langkah, dan beri dirimu kesempatan untuk bertumbuh.\n\n" +
    "You are allowed to grow at your own pace."
};

const params = new URLSearchParams(window.location.search);
const recipientId = (params.get("to") || "").toLowerCase();
const cardData = friends[recipientId] || defaultMessage;

const intro = document.getElementById("intro");
const message = document.getElementById("message");
const openButton = document.getElementById("openButton");
const replayButton = document.getElementById("replayButton");
const musicButton = document.getElementById("musicButton");
const musicLabel = document.getElementById("musicLabel");
const musicIcon = document.getElementById("musicIcon");
const audio = document.getElementById("backgroundMusic");

document.getElementById("recipient").textContent = cardData.name;
document.getElementById("messageTitle").textContent = cardData.title;
document.getElementById("messageText").textContent = cardData.message;

let isOpened = false;

function showMessage() {
  message.classList.remove("hidden");
  message.classList.remove("visible");

  // Memulai ulang animasi fade.
  void message.offsetWidth;

  message.classList.add("visible");
}

async function startMusic() {
  try {
    await audio.play();
    musicLabel.textContent = "Music is playing";
    musicIcon.textContent = "♫";
  } catch (error) {
    musicLabel.textContent = "Tap to play music";
    musicIcon.textContent = "♫";
  }
}

openButton.addEventListener("click", async () => {
  if (!isOpened) {
    isOpened = true;
    intro.classList.add("hidden");
    showMessage();

    // Musik baru dimulai setelah interaksi pengguna.
    musicButton.disabled = false;
    await startMusic();
  }
});

replayButton.addEventListener("click", () => {
  showMessage();
});

musicButton.addEventListener("click", async () => {
  if (audio.paused) {
    await startMusic();
  } else {
    audio.pause();
    musicLabel.textContent = "Music is off";
    musicIcon.textContent = "♫";
  }
});

audio.addEventListener("playing", () => {
  musicLabel.textContent = "Music is playing";
});

audio.addEventListener("pause", () => {
  musicLabel.textContent = "Music is off";
});

audio.addEventListener("error", () => {
  musicLabel.textContent = "Music unavailable";
});

