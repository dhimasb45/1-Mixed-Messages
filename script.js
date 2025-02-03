const awalan = [
  "Jangan pernah lupa bahwa",
  "Ingatlah selalu",
  "Setiap hari adalah kesempatan untuk",
  "Percayalah bahwa",
  "Mimpi-mimpimu akan terwujud jika",
  "Kekuatan terbesarmu terletak pada",
  "Setiap langkah kecilmu membawa",
  "Kebahagiaan sejati dimulai ketika",
  "Jangan takut untuk",
  "Kesuksesan adalah tentang",
];

const kataKerja = [
  "melangkah maju",
  "mencoba hal baru",
  "belajar dari kegagalan",
  "berani bermimpi besar",
  "percaya pada diri sendiri",
  "menciptakan perubahan",
  "membangun harapan",
  "menggapai impian",
  "menghargai proses",
  "berjuang tanpa menyerah",
];

const penutup = [
  "menuju masa depan yang cerah.",
  "mencapai tujuanmu.",
  "menjadi versi terbaik dari dirimu.",
  "mengubah dunia sekitarmu.",
  "menciptakan kehidupan yang berarti.",
  "menemukan kebahagiaan sejati.",
  "meraih kesuksesan yang kamu impikan.",
  "memberikan dampak positif bagi orang lain.",
  "membuka pintu peluang baru.",
  "menginspirasi banyak orang.",
];

const mixed_messages = (arr1, arr2, arr3) => {
  indeks_arr1 = Math.floor(Math.random() * arr1.length);
  indeks_arr2 = Math.floor(Math.random() * arr2.length);
  indeks_arr3 = Math.floor(Math.random() * arr3.length);

  return awalan[indeks_arr1] + " " + kataKerja[indeks_arr2] + " " + penutup[indeks_arr3];
};

console.log(mixed_messages(awalan, kataKerja, penutup));
