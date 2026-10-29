
const friends = {
  "miss-winda": {
    name: "MISS WINDA",
    title: "Your effort is never wasted.",
    message: `Miss Winda, jangan kecil hati ketika pukulanmu belum selalu tepat atau permainan tidak berjalan sesuai harapan.

Setiap latihan dan setiap keberanian untuk mencoba lagi adalah bagian dari prosesmu bertumbuh. Tetaplah melangkah bersama Tuhan, bahkan ketika hasilnya belum terlihat.

"Segala perkara dapat kutanggung di dalam Dia yang memberi kekuatan kepadaku." — Filipi 4:13

Semoga Tuhan memberimu kekuatan, sukacita, dan hati yang tetap bersyukur. Keep going!`
  },

  "miss-delva": {
    name: "MISS DELVA",
    title: "One point at a time.",
    message: `Miss Delva, ketika skor tertinggal, jangan biarkan satu angka membuatmu kehilangan semangat. Tarik napas, fokus pada servis berikutnya, dan berikan usaha terbaikmu.

"Janganlah kita jemu-jemu berbuat baik." — Galatia 6:9

Tidak semua poin harus dimenangkan untuk membuatmu menjadi pribadi yang lebih kuat. Tuhan menyertaimu dalam setiap proses.`
  },

  "miss-mei": {
    name: "MISS MEI",
    title: "Mistakes are part of growth.",
    message: `Miss Mei, tidak apa-apa jika sesekali salah memukul shuttlecock. Kesalahan bukan bukti bahwa kamu tidak mampu, melainkan kesempatan untuk belajar.

"Sebab tujuh kali orang benar jatuh, namun ia bangun kembali." — Amsal 24:16

Bangkit lagi. Satu kesalahan tidak menentukan seluruh pertandinganmu. Terus belajar dan bertumbuh bersama Tuhan.`
  },

  "miss-thesa": {
    name: "MISS THESA",
    title: "Play with joy, not fear.",
    message: `Miss Thesa, bermainlah dengan hati yang gembira. Jangan sampai rasa takut melakukan kesalahan membuatmu lupa menikmati permainan.

"Bersukacitalah senantiasa dalam Tuhan!" — Filipi 4:4

Bermainlah dengan berani, bersyukur dalam setiap proses, dan nikmati kebersamaan. Kiranya Tuhan memenuhi hatimu dengan sukacita dan damai sejahtera.`
  },

  "miss-rahel": {
    name: "MISS RAHEL",
    title: "Rest is part of the game.",
    message: `Miss Rahel, kamu boleh berjuang dengan sungguh-sungguh, tetapi jangan lupa bahwa tubuh dan hatimu juga membutuhkan istirahat.

"Marilah kepada-Ku, semua yang letih lesu dan berbeban berat, Aku akan memberi kelegaan kepadamu." — Matius 11:28

Kamu boleh beristirahat tanpa merasa bersalah. Kiranya Tuhan memperbarui kekuatanmu untuk kembali melangkah dengan hati yang tenang.`
  },

  "miss-lestari": {
    name: "MISS LESTARI",
    title: "Better together.",
    message: `Miss Lestari, badminton mengajarkan bahwa komunikasi, kepercayaan, dan kerja sama sangat berarti. Dalam permainan ganda, kita belajar saling mendukung dan mengisi kekurangan.

"Berdua lebih baik dari pada seorang diri." — Pengkhotbah 4:9

Kiranya kamu menjadi pribadi yang bukan hanya bersemangat untuk menang, tetapi juga membawa semangat bagi orang lain.`
  },

  "miss-selly": {
    name: "MISS SELLY",
    title: "You are stronger than a bad day.",
    message: `Miss Selly, tidak setiap pertandingan berjalan mudah. Jangan biarkan satu hari yang buruk membuatmu meragukan seluruh kemampuanmu.

"Tetapi orang-orang yang menanti-nantikan TUHAN mendapat kekuatan baru." — Yesaya 40:31

Semoga kamu selalu menemukan kekuatan baru ketika lelah. Kamu masih punya banyak kesempatan untuk belajar, bertumbuh, dan merasakan sukacita kembali.`
  },

  "seam-daniel": {
    name: "SEAM DANIEL",
    title: "Discipline builds your strength.",
    message: `Seam Daniel, kemampuan bermain badminton membutuhkan latihan, disiplin, dan kesabaran. Karakter yang kuat juga dibangun dari pilihan-pilihan kecil yang dilakukan secara konsisten.

"Latihlah dirimu beribadah." — 1 Timotius 4:7

Kiranya Tuhan menolongmu bertumbuh dalam kemampuan, karakter, kebijaksanaan, dan iman. Terus berlatih, tetap rendah hati, dan lakukan yang terbaik!`
  },

  "seam-jason": {
    name: "SEAM JASON",
    title: "Keep your eyes on the goal.",
    message: `Seam Jason, dalam badminton, fokus membantu kita membaca permainan dan menentukan langkah berikutnya.

"Marilah kita melakukannya dengan mata yang tertuju kepada Yesus." — Ibrani 12:2

Tetapkan tujuan yang baik, jalani proses dengan tekun, dan serahkan kekhawatiranmu kepada Tuhan. Semoga kamu memiliki hati yang teguh dan keberanian untuk terus melangkah.`
  },

  "seam-andi": {
    name: "SEAM ANDI",
    title: "Grace for yourself, too.",
    message: `Seam Andi, jangan hanya menjadi orang yang menyemangati orang lain. Ingatlah untuk memberikan semangat yang sama kepada dirimu sendiri.

Kamu tidak harus selalu menang untuk membuktikan bahwa usahamu berarti. Teruslah berlatih, perbaiki kesalahan, dan rayakan kemajuan kecilmu.

"Cukuplah kasih karunia-Ku bagimu." — 2 Korintus 12:9

Terus bertumbuh menjadi pribadi yang kuat, rendah hati, dan penuh kasih. Bukan hanya pemain yang lebih baik, tetapi juga seseorang yang kehadirannya menguatkan orang lain. Tuhan menyertai setiap langkahmu.`
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

// Ambil ID teman dari URL, misalnya ?to=miss-winda
const params = new URLSearchParams(window.location.search);
const recipientId = (params.get("to") || "").trim().toLowerCase();
const cardData = friends[recipientId] || defaultMessage;

// Ambil elemen dari index.html
const intro = document.getElementById("intro");
const message = document.getElementById("message");
const openButton = document.getElementById("openButton");
const replayButton = document.getElementById("replayButton");
const musicButton = document.getElementById("musicButton");
const musicLabel = document.getElementById("musicLabel");
const musicIcon = document.getElementById("musicIcon");
const audio = document.getElementById("backgroundMusic");

// Tampilkan nama, judul, dan pesan sesuai URL
document.getElementById("recipient").textContent = cardData.name;
document.getElementById("messageTitle").textContent = cardData.title;
document.getElementById("messageText").textContent = cardData.message;

let isOpened = false;

// Menampilkan pesan dengan animasi fade
function showMessage() {
  message.classList.remove("hidden");
  message.classList.remove("visible");

  // Memulai ulang animasi fade
  void message.offsetWidth;

  message.classList.add("visible");
}

// Memutar backsound
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

// Tombol untuk membuka kartu
openButton.addEventListener("click", async () => {
  if (!isOpened) {
    isOpened = true;

    intro.classList.add("hidden");
    showMessage();

    // Aktifkan tombol musik setelah interaksi pengguna
    musicButton.disabled = false;

    // Mulai musik setelah tombol pembuka ditekan
    await startMusic();
  }
});

// Tombol untuk membaca ulang pesan
replayButton.addEventListener("click", () => {
  showMessage();
});

// Tombol untuk memutar atau menghentikan musik
musicButton.addEventListener("click", async () => {
  if (audio.paused) {
    await startMusic();
  } else {
    audio.pause();
  }
});

// Perbarui tulisan saat musik mulai diputar
audio.addEventListener("playing", () => {
  musicLabel.textContent = "Music is playing";
  musicIcon.textContent = "♫";
});

// Perbarui tulisan saat musik dihentikan
audio.addEventListener("pause", () => {
  musicLabel.textContent = "Music is off";
  musicIcon.textContent = "♫";
});

// Beri tahu jika file musik gagal dimuat
audio.addEventListener("error", () => {
  musicLabel.textContent = "Music unavailable";
  musicIcon.textContent = "♫";
});
