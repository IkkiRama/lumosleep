import {
  Mood1,
  Mood2,
  Mood3,
  Mood4,
  Mood5,
  Mood6,
  Mood7,
  Mood8,
  SoundImg1,
  SoundImg2,
  SoundImg3,
  SoundImg4,
  SoundImg5,
  SoundImg6,
  SoundImg7,
  SoundImg8,
} from ".";

export const listTextTutorialDJ = [
  "Tuliskan detail mimpimu",
  "Pilih tanggal saat mimpi itu terjadi",
  "Tekan tombol Interpretasikan dan hasilnya akan muncul",
  "Anda dapat melihat semua riwayat hasil interpretasi mimpi Anda",
];

export const listTextTutorialBreathing = [
  "Pilih berapa menit Anda ingin melakukan pernapasan",
  "Audio Akan Diputar Secara Otomatis",
  "Ikuti petunjuk di layar",
];

export const listMood = [
  {
    id: 1,
    numberImg: Mood1,
    delay: 50,
    name: "Cemas",
  },
  {
    id: 2,
    numberImg: Mood2,
    delay: 150,
    name: "Tenang",
  },
  {
    id: 3,
    numberImg: Mood3,
    delay: 250,
    name: "Takut",
  },
  {
    id: 4,
    numberImg: Mood4,
    delay: 350,
    name: "Frustrasi",
  },
  {
    id: 5,
    numberImg: Mood5,
    delay: 450,
    name: "Senang",
  },
  {
    id: 6,
    numberImg: Mood6,
    delay: 550,
    name: "Kesendirian",
  },
  {
    id: 7,
    numberImg: Mood7,
    delay: 650,
    name: "Sedih",
  },
  {
    id: 8,
    numberImg: Mood8,
    delay: 750,
    name: "Lelah",
  },
];

// delays for page breathing
export const delays = [0, 50, 100, 150];

// data for: diaphragmatic breathing
export const datasd: { start: number; end: number; text: string }[] = [];
for (let i = 0; i < 300; i += 5) {
  if (i % 10 < 5) {
    datasd.push({
      start: i,
      end: i + 4,
      text: "tarik napas melalui hidung, kencangkan perut Anda",
    });
  } else {
    datasd.push({
      start: i,
      end: i + 4,
      text: "hembuskan napas melalui hidung, biarkan perutmu",
    });
  }
}

// data for: reverse breathing
export const datasrb: { start: number; end: number; text: string }[] = [];
for (let i = 0; i < 300; i += 5) {
  if (i % 10 < 5) {
    datasrb.push({
      start: i,
      end: i + 4,
      text: "tarik napas melalui hidung, kencangkan perut Anda",
    });
  } else {
    datasrb.push({
      start: i,
      end: i + 4,
      text: "hembuskan napas melalui hidung, biarkan perutmu",
    });
  }
}

// data for: three dimensional breathing
export const datastd: { start: number; end: number; text: string }[] = [];
for (let i = 0; i < 300; i += 5) {
  if (i % 15 < 5) {
    datastd.push({
      start: i,
      end: i + 4,
      text: "tarik napas melalui hidung, kencangkan perut Anda",
    });
  } else if (i % 15 < 10) {
    datastd.push({ start: i, end: i + 4, text: "tahan nafasmu" });
  } else {
    datastd.push({
      start: i,
      end: i + 4,
      text: "hembuskan napas melalui hidung, biarkan perutmu",
    });
  }
}

// data for: 4-7-8 breathing
export const datas478: { start: number; end: number; text: string }[] = [];
for (let i = 0; i < 300; i += 19) {
  datas478.push({
    start: i,
    end: i + 3,
    text: "tarik napas melalui hidung, kencangkan perut Anda",
  });
  datas478.push({ start: i + 4, end: i + 10, text: "tahan nafasmu" });
  datas478.push({
    start: i + 11,
    end: i + 18,
    text: "hembuskan napas melalui hidung, biarkan perutmu",
  });
}

export const dataCardBreath = [
  {
    id: 0,
    title: "Pernapasan Diafragma",
    description:
      "Pernapasan diafragma, yang juga dikenal sebagai pernapasan dalam atau pernapasan perut, melibatkan penggunaan diafragma untuk mengambil napas dalam, yang menyebabkan perut mengembang sambil menjaga dada tetap diam. Teknik ini meningkatkan pertukaran oksigen secara penuh, yang dapat mengurangi stres dan kecemasan dengan mengaktifkan sistem saraf parasimpatis. Manfaatnya meliputi peningkatan fungsi paru-paru, peningkatan pasokan oksigen ke tubuh, tekanan darah rendah, dan peningkatan stabilitas otot inti. Teknik ini umumnya digunakan dalam praktik seperti yoga dan meditasi untuk mendukung kesejahteraan fisik dan mental secara keseluruhan.",
    timeRanges: datasd,
  },
  {
    id: 1,
    title: "Pernapasan Terbalik",
    description:
      "Pernapasan terbalik, yang juga dikenal sebagai pernapasan Tao, adalah teknik yang membuat perut berkontraksi saat menghirup dan mengembang saat mengembuskan napas, kebalikan dari pernapasan diafragma normal. Metode ini sering digunakan dalam seni bela diri, qigong, dan bentuk meditasi tertentu. Manfaat utama pernapasan terbalik adalah untuk memperkuat otot inti dan meningkatkan aliran energi internal, yang diyakini dapat meningkatkan vitalitas dan ketahanan secara keseluruhan. Ini juga dapat membantu meningkatkan fokus dan kejernihan mental dengan meningkatkan kesadaran akan napas dan tubuh. Selain itu, pernapasan terbalik dapat membantu mengembangkan kontrol yang lebih besar atas otot-otot pernapasan dan perut tubuh, yang berkontribusi pada peningkatan postur dan stabilitas.",
    timeRanges: datasrb,
  },
  {
    id: 2,
    title: "Pernapasan Tiga Dimensi",
    description:
      "Pernapasan tiga dimensi adalah teknik yang melibatkan perluasan napas ke dalam tiga dimensi: depan ke belakang, samping ke samping, dan atas ke bawah. Metode ini memastikan bahwa seluruh kapasitas paru-paru digunakan, sehingga menghasilkan napas penuh dan dalam. Fokus utamanya adalah pada perluasan lateral (samping ke samping) dan posterior (belakang), yang sering kali diabaikan dalam pernapasan dangkal. Manfaat pernapasan tiga dimensi meliputi peningkatan asupan oksigen, peningkatan efisiensi pernapasan, dan pengurangan stres. Teknik ini juga dapat mendukung postur tubuh dan kekuatan inti yang lebih baik dengan melibatkan diafragma dan otot interkostal. Teknik ini umumnya dipraktikkan dalam yoga, Pilates, dan terapi fisik untuk meningkatkan kesadaran tubuh dan kesehatan pernapasan secara keseluruhan.",
    timeRanges: datastd,
  },
  {
    id: 3,
    title: "Teknik Pernapasan 4-7-8",
    description:
      "Teknik Pernapasan 4-7-8, yang dikembangkan oleh Dr. Andrew Weil, adalah latihan relaksasi yang sederhana namun ampuh. Latihan ini melibatkan menghirup napas melalui hidung selama 4 detik, menahan napas selama 7 detik, dan mengembuskan napas perlahan melalui mulut selama 8 detik. Latihan ini membantu menenangkan sistem saraf dan mengurangi stres dengan meningkatkan pertukaran oksigen dan mengatur napas. Teknik ini dapat meningkatkan kualitas tidur, mengurangi kecemasan, dan menurunkan tekanan darah dengan mendorong pola pernapasan yang lebih lambat dan lebih teratur. Selain itu, teknik ini dapat membantu mengelola keinginan dan mengendalikan respons emosional, menjadikannya alat yang berharga untuk kesehatan mental dan fisik secara keseluruhan.",
    timeRanges: datas478,
  },
];

export const soundList = [
  {
    id: 1,
    name: "Bird Song",
    img: SoundImg1,
    delay: 50,
    audio: "/assets/audio/birdsong.mp3",
  },
  {
    id: 2,
    name: "Forest Lullaby",
    img: SoundImg2,
    delay: 150,
    audio: "/assets/audio/forest-lullaby.mp3",
  },
  {
    id: 3,
    name: "Night Sound",
    img: SoundImg3,
    delay: 250,
    audio: "/assets/audio/night-sound.mp3",
  },
  {
    id: 4,
    name: "Ocean Waves",
    img: SoundImg4,
    delay: 350,
    audio: "/assets/audio/ocean-waves.mp3",
  },
  {
    id: 5,
    name: "Sleepy Rain",
    img: SoundImg5,
    delay: 450,
    audio: "/assets/audio/sleepy-rain.mp3",
  },
  {
    id: 6,
    name: "Stream",
    img: SoundImg6,
    delay: 550,
    audio: "/assets/audio/stream.mp3",
  },
  {
    id: 7,
    name: "Waterfall",
    img: SoundImg7,
    delay: 650,
    audio: "/assets/audio/waterfall.mp3",
  },
  {
    id: 8,
    name: "Wind",
    img: SoundImg8,
    delay: 750,
    audio: "/assets/audio/wind.mp3",
  },
];
