/* =========================================================
   QUESTIONS.JS - BANK SOAL SIMULASI ABM SMK 2026 (160 SOAL)
   Terdiri dari 14 Subtes dalam 7 Kelompok Kemampuan
   ========================================================= */
const ABM_SUBTESTS = [
  {
    "id": 1,
    "name": "Verbal Analogi",
    "group": "Verbal",
    "count": 10,
    "minutes": 5,
    "desc": "Pilihlah pasangan kata yang memiliki hubungan paling serupa dengan pasangan kata pada soal.",
    "questions": [
      {
        "id": 1,
        "q": "OBENG : SEKRUP = ... : ...",
        "opts": [
          "Palu : Kayu",
          "Kunci Pas : Mur",
          "Gergaji : Paku",
          "Tang : Cat",
          "Bor : Kertas"
        ],
        "ans": 1,
        "exp": "Obeng digunakan untuk mengencangkan sekrup, kunci pas untuk mur."
      },
      {
        "id": 2,
        "q": "KOMPILATOR : KODE SUMBER = ... : ...",
        "opts": [
          "Koki : Bahan Makanan",
          "Sopir : Penumpang",
          "Dokter : Pasien",
          "Guru : Sekolah",
          "Kasir : Uang"
        ],
        "ans": 0,
        "exp": "Kompilator mengolah kode sumber menjadi program; koki mengolah bahan makanan menjadi masakan."
      },
      {
        "id": 3,
        "q": "TERMOMETER : SUHU = ... : ...",
        "opts": [
          "Jam : Waktu",
          "Penggaris : Berat",
          "Kompas : Kecepatan",
          "Timbangan : Panjang",
          "Barometer : Cahaya"
        ],
        "ans": 0,
        "exp": "Termometer alat ukur suhu; jam alat ukur waktu."
      },
      {
        "id": 4,
        "q": "BATERAI : DAYA = ... : ...",
        "opts": [
          "Tandon : Air",
          "Lampu : Gelap",
          "Kabel : Plastik",
          "Sakelar : Lampu",
          "Stopkontak : Tembok"
        ],
        "ans": 0,
        "exp": "Baterai menyimpan daya listrik; tandon menyimpan air."
      },
      {
        "id": 5,
        "q": "ARSITEK : DENAH = ... : ...",
        "opts": [
          "Programmer : Algoritma",
          "Montir : Bengkel",
          "Petani : Sawah",
          "Nelayan : Laut",
          "Pedagang : Pasar"
        ],
        "ans": 0,
        "exp": "Arsitek merancang denah bangunan; programmer merancang algoritma."
      },
      {
        "id": 6,
        "q": "KABEL : TEMBAGA = ... : ...",
        "opts": [
          "Ban : Karet",
          "Kaca : Air",
          "Kertas : Besi",
          "Baju : Kayu",
          "Meja : Kapas"
        ],
        "ans": 0,
        "exp": "Kabel berbahan dasar tembaga; ban berbahan dasar karet."
      },
      {
        "id": 7,
        "q": "VIRUS : ANTIVIRUS = ... : ...",
        "opts": [
          "Racun : Penawar",
          "Api : Bensin",
          "Penyakit : Pasien",
          "Lapar : Haus",
          "Panas : Matahari"
        ],
        "ans": 0,
        "exp": "Antivirus menangkal virus; penawar menangkal racun."
      },
      {
        "id": 8,
        "q": "REM : LAJU = ... : ...",
        "opts": [
          "Bendungan : Arus",
          "Gas : Kecepatan",
          "Roda : Jalan",
          "Setir : Arah",
          "Klakson : Suara"
        ],
        "ans": 0,
        "exp": "Rem menahan laju kendaraan; bendungan menahan arus air."
      },
      {
        "id": 9,
        "q": "KATA : KALIMAT = ... : ...",
        "opts": [
          "Bata : Dinding",
          "Atap : Genteng",
          "Pintu : Kunci",
          "Jendela : Kaca",
          "Lantai : Keramik"
        ],
        "ans": 0,
        "exp": "Kumpulan kata membentuk kalimat; kumpulan bata membentuk dinding."
      },
      {
        "id": 10,
        "q": "DIAGNOSIS : KERUSAKAN = ... : ...",
        "opts": [
          "Audit : Keuangan",
          "Perbaikan : Bengkel",
          "Komponen : Mesin",
          "Pelumas : Gesekan",
          "Kunci : Gembok"
        ],
        "ans": 0,
        "exp": "Diagnosis memeriksa kerusakan; audit memeriksa keuangan."
      }
    ]
  },
  {
    "id": 2,
    "name": "Verbal Pemahaman Bacaan",
    "group": "Verbal",
    "count": 10,
    "minutes": 10,
    "desc": "Bacalah teks dengan cermat, kemudian pilihlah jawaban yang paling tepat berdasarkan isi bacaan.",
    "questions": [
      {
        "id": 11,
        "stimulus": "<strong>Teks 1:</strong> Penerapan <em>Internet of Things</em> (IoT) pada sektor pertanian modern memungkinkan petani memantau kelembapan tanah, suhu udara, dan intensitas cahaya secara waktu nyata melalui perangkat seluler. Sensor yang ditanam di lahan mengirimkan data ke server berbasis komputasi awan, sehingga sistem irigasi otomatis dapat aktif hanya ketika kadar air tanah berada di bawah ambang batas tertentu. Dengan demikian, pemborosan air dapat ditekan hingga 40% sekaligus menjaga kestabilan produktivitas panen.",
        "q": "Simpulan yang paling tepat berdasarkan Teks 1 adalah...",
        "opts": [
          "Petani tidak lagi perlu mengunjungi lahan pertanian secara fisik.",
          "Sistem irigasi otomatis bekerja terus-menerus sepanjang hari.",
          "Penggunaan teknologi IoT meningkatkan efisiensi penggunaan air dan menjaga hasil panen.",
          "Komputasi awan hanya dapat diakses menggunakan komputer desktop.",
          "Kelembapan tanah tidak memengaruhi produktivitas panen."
        ],
        "ans": 2,
        "exp": "Kalimat terakhir merangkum dampak utama IoT: menekan pemborosan air 40% dan menjaga kestabilan panen."
      },
      {
        "id": 12,
        "stimulus": "<strong>Teks 1:</strong> (Sama seperti soal nomor 11)",
        "q": "Berdasarkan Teks 1, kapan sistem irigasi otomatis akan aktif?",
        "opts": [
          "Setiap pagi dan sore secara terjadwal.",
          "Saat suhu udara meningkat drastis.",
          "Ketika kadar air tanah turun di bawah batas yang ditentukan.",
          "Setelah data diunduh manual oleh petani.",
          "Ketika intensitas cahaya matahari mencapai titik maksimum."
        ],
        "ans": 2,
        "exp": "Disebutkan bahwa irigasi otomatis aktif hanya ketika kadar air tanah di bawah ambang batas tertentu."
      },
      {
        "id": 13,
        "stimulus": "<strong>Teks 1:</strong> (Sama seperti soal nomor 11)",
        "q": "Perangkat apa yang digunakan petani untuk memantau kondisi lahan secara waktu nyata?",
        "opts": [
          "Server lokal di gudang",
          "Perangkat seluler",
          "Panel surya",
          "Pompa air manual",
          "Stasiun cuaca analog"
        ],
        "ans": 1,
        "exp": "Kalimat pertama menyebutkan pemantauan dilakukan melalui perangkat seluler."
      },
      {
        "id": 14,
        "stimulus": "<strong>Teks 2:</strong> Keselamatan dan Kesehatan Kerja (K3) di bengkel praktik SMK merupakan prioritas utama untuk mencegah kecelakaan kerja. Penggunaan Alat Pelindung Diri (APD) seperti kacamata pelindung, sarung tangan kulit, dan sepatu keselamatan wajib dipatuhi saat mengoperasikan mesin bubut atau las listrik. Sebagian besar insiden di bengkel terjadi akibat kelalaian prosedur standar operasional (SOP) dan kurangnya fokus pekerja.",
        "q": "Penyebab utama sebagian besar insiden di bengkel menurut Teks 2 adalah...",
        "opts": [
          "Usia mesin praktik yang sudah tua",
          "Kelalaian SOP dan kurangnya fokus pekerja",
          "Kurangnya jumlah instruktur di bengkel",
          "Ruang praktik yang terlalu luas",
          "Harga APD yang mahal"
        ],
        "ans": 1,
        "exp": "Kalimat terakhir menjelaskan insiden terjadi akibat kelalaian SOP dan kurangnya fokus pekerja."
      },
      {
        "id": 15,
        "stimulus": "<strong>Teks 2:</strong> (Sama seperti soal nomor 14)",
        "q": "Manakah pernyataan yang sesuai dengan isi Teks 2?",
        "opts": [
          "APD hanya wajib dipakai saat menggunakan las listrik.",
          "Sepatu keselamatan tidak diperlukan saat mengoperasikan mesin bubut.",
          "K3 bertujuan mencegah kecelakaan kerja di bengkel praktik.",
          "Kelalaian SOP tidak berdampak pada keselamatan kerja.",
          "Kacamata pelindung hanya digunakan oleh instruktur."
        ],
        "ans": 2,
        "exp": "Kalimat pertama menyatakan K3 merupakan prioritas utama untuk mencegah kecelakaan kerja."
      },
      {
        "id": 16,
        "stimulus": "<strong>Teks 3:</strong> Kendaraan listrik berbasis baterai (KLBB) memiliki komponen bergerak yang jauh lebih sedikit dibandingkan kendaraan bermesin pembakaran dalam (ICE). Akibatnya, biaya perawatan rutin seperti penggantian oli mesin, busi, dan filter bahan bakar dapat dihilangkan. Namun, tantangan utama adopsi kendaraan listrik saat ini meliputi ketersediaan stasiun pengisian daya umum dan waktu pengisian baterai yang lebih lama dibandingkan pengisian bahan bakar konvensional.",
        "q": "Ide pokok paragraf pada Teks 3 adalah...",
        "opts": [
          "Keunggulan perawatan dan tantangan adopsi kendaraan listrik.",
          "Cara mengganti baterai kendaraan listrik dengan cepat.",
          "Kendaraan bermesin pembakaran dalam lebih hemat biaya.",
          "Pembangunan stasiun pengisian daya di seluruh daerah.",
          "Komponen mesin kendaraan konvensional lebih sederhana."
        ],
        "ans": 0,
        "exp": "Paragraf membahas keuntungan efisiensi perawatan KLBB sekaligus tantangan infrastrukturnya."
      },
      {
        "id": 17,
        "stimulus": "<strong>Teks 3:</strong> (Sama seperti soal nomor 16)",
        "q": "Mengapa biaya perawatan rutin kendaraan listrik lebih rendah?",
        "opts": [
          "Harga suku cadang baterai sangat murah.",
          "Jumlah komponen bergeraknya jauh lebih sedikit.",
          "Tidak memerlukan ban dan sistem pengereman.",
          "Dapat diisi daya di rumah tanpa listrik.",
          "Baterainya tidak pernah mengalami penurunan kapasitas."
        ],
        "ans": 1,
        "exp": "Kalimat pertama dan kedua menjelaskan komponen bergerak lebih sedikit sehingga perawatan rutin berkurang."
      },
      {
        "id": 18,
        "stimulus": "<strong>Teks 4:</strong> Literasi digital tidak sekadar kemampuan mengoperasikan perangkat lunak atau gawai, melainkan juga mencakup kecakapan mengevaluasi kebenaran informasi, menjaga keamanan data pribadi, serta beretika di ruang siber. Siswa vokasi yang memiliki literasi digital baik akan lebih siap beradaptasi dengan otomasi industri dan mampu melindungi aset digital perusahaan tempat mereka bekerja.",
        "q": "Berdasarkan Teks 4, yang BUKAN merupakan cakupan literasi digital adalah...",
        "opts": [
          "Mengevaluasi kebenaran informasi",
          "Menjaga keamanan data pribadi",
          "Beretika di ruang siber",
          "Membeli perangkat keras terbaru setiap tahun",
          "Mengoperasikan perangkat lunak"
        ],
        "ans": 3,
        "exp": "Membeli perangkat keras terbaru tidak disebutkan dalam teks."
      },
      {
        "id": 19,
        "stimulus": "<strong>Teks 4:</strong> (Sama seperti soal nomor 18)",
        "q": "Apa manfaat literasi digital yang baik bagi siswa vokasi menurut Teks 4?",
        "opts": [
          "Mendapatkan gawai gratis dari industri",
          "Siap beradaptasi dengan otomasi industri dan melindungi aset digital",
          "Tidak perlu mempelajari keterampilan teknis jurusan",
          "Dapat bekerja tanpa menggunakan komputer",
          "Menggantikan seluruh peran manajer perusahaan"
        ],
        "ans": 1,
        "exp": "Kalimat kedua menyatakan siswa lebih siap beradaptasi dengan otomasi industri dan melindungi aset digital."
      },
      {
        "id": 20,
        "stimulus": "<strong>Teks 4:</strong> (Sama seperti soal nomor 18)",
        "q": "Kata 'siber' pada teks tersebut berkaitan erat dengan...",
        "opts": [
          "Pertanian organik",
          "Jaringan komputer dan internet",
          "Peralatan mekanik berat",
          "Konstruksi bangunan fisik",
          "Transportasi laut"
        ],
        "ans": 1,
        "exp": "Ruang siber merujuk pada ekosistem jaringan komputer dan internet."
      }
    ]
  },
  {
    "id": 3,
    "name": "Kuantitatif Deret",
    "group": "Kuantitatif",
    "count": 8,
    "minutes": 10,
    "desc": "Tentukan angka berikutnya yang paling tepat untuk melengkapi pola deret bilangan berikut.",
    "questions": [
      {
        "id": 21,
        "q": "3, 6, 12, 24, 48, ...",
        "opts": [
          "60",
          "72",
          "84",
          "96",
          "108"
        ],
        "ans": 3,
        "exp": "Pola dikali 2: 48 × 2 = 96."
      },
      {
        "id": 22,
        "q": "2, 5, 10, 17, 26, ...",
        "opts": [
          "35",
          "36",
          "37",
          "38",
          "39"
        ],
        "ans": 2,
        "exp": "Selisih bilangan ganjil (+3, +5, +7, +9, +11): 26 + 11 = 37."
      },
      {
        "id": 23,
        "q": "100, 95, 85, 70, 50, ...",
        "opts": [
          "20",
          "25",
          "30",
          "35",
          "40"
        ],
        "ans": 1,
        "exp": "Pengurangan bertingkat (-5, -10, -15, -20, -25): 50 - 25 = 25."
      },
      {
        "id": 24,
        "q": "1, 1, 2, 3, 5, 8, 13, ...",
        "opts": [
          "18",
          "19",
          "20",
          "21",
          "22"
        ],
        "ans": 3,
        "exp": "Deret Fibonacci (jumlah dua suku sebelumnya): 8 + 13 = 21."
      },
      {
        "id": 25,
        "q": "4, 9, 16, 25, 36, ...",
        "opts": [
          "42",
          "45",
          "48",
          "49",
          "64"
        ],
        "ans": 3,
        "exp": "Bilangan kuadrat (2², 3², 4², 5², 6², 7²): 7² = 49."
      },
      {
        "id": 26,
        "q": "5, 10, 8, 16, 14, 28, ...",
        "opts": [
          "24",
          "26",
          "30",
          "32",
          "56"
        ],
        "ans": 1,
        "exp": "Pola bergantian ×2 lalu -2: 28 - 2 = 26."
      },
      {
        "id": 27,
        "q": "81, 27, 9, 3, 1, ...",
        "opts": [
          "0",
          "1/2",
          "1/3",
          "1/9",
          "-1"
        ],
        "ans": 2,
        "exp": "Pola dibagi 3: 1 ÷ 3 = 1/3."
      },
      {
        "id": 28,
        "q": "2, 6, 12, 20, 30, ...",
        "opts": [
          "38",
          "40",
          "42",
          "44",
          "46"
        ],
        "ans": 2,
        "exp": "Selisih +4, +6, +8, +10, +12: 30 + 12 = 42."
      }
    ]
  },
  {
    "id": 4,
    "name": "Kuantitatif Perbandingan",
    "group": "Kuantitatif",
    "count": 10,
    "minutes": 10,
    "desc": "Bandingkan nilai kuantitas P dan Q berdasarkan informasi yang diberikan.",
    "questions": [
      {
        "id": 29,
        "q": "Harga 1 rim kertas HVS = Rp50.000 (500 lembar).<br><strong>P</strong> = Harga 125 lembar kertas HVS<br><strong>Q</strong> = Rp13.500",
        "opts": [
          "P > Q",
          "P < Q",
          "P = Q",
          "P + Q = Rp25.000",
          "Tidak dapat ditentukan"
        ],
        "ans": 1,
        "exp": "P = (125/500) × 50.000 = Rp12.500. Maka P < Q."
      },
      {
        "id": 30,
        "q": "Diketahui <strong>x = 3⁴</strong> dan <strong>y = 4³</strong>. Manakah pernyataan yang benar?",
        "opts": [
          "x > y",
          "x < y",
          "x = y",
          "x = 2y",
          "Tidak dapat ditentukan"
        ],
        "ans": 0,
        "exp": "x = 81 dan y = 64, maka x > y."
      },
      {
        "id": 31,
        "q": "<strong>P</strong> = 25% dari 240<br><strong>Q</strong> = 30% dari 200",
        "opts": [
          "P > Q",
          "P < Q",
          "P = Q",
          "P = Q + 10",
          "Tidak dapat ditentukan"
        ],
        "ans": 2,
        "exp": "P = 0,25 × 240 = 60; Q = 0,30 × 200 = 60. Jadi P = Q."
      },
      {
        "id": 32,
        "q": "Sebuah motor menempuh 90 km dalam 1,5 jam.<br><strong>P</strong> = Kecepatan rata-rata motor (km/jam)<br><strong>Q</strong> = 55 km/jam",
        "opts": [
          "P > Q",
          "P < Q",
          "P = Q",
          "P + Q = 100",
          "Tidak dapat ditentukan"
        ],
        "ans": 0,
        "exp": "P = 90 / 1,5 = 60 km/jam. Maka P > Q."
      },
      {
        "id": 33,
        "q": "<strong>P</strong> = Luas persegi dengan sisi 8 cm<br><strong>Q</strong> = Luas persegi panjang berukuran 10 cm × 6 cm",
        "opts": [
          "P > Q",
          "P < Q",
          "P = Q",
          "Q - P = 10",
          "Tidak dapat ditentukan"
        ],
        "ans": 0,
        "exp": "P = 8 × 8 = 64 cm²; Q = 10 × 6 = 60 cm². Maka P > Q."
      },
      {
        "id": 34,
        "q": "Jika 2a + 4 = 14:<br><strong>P</strong> = Nilai a<br><strong>Q</strong> = 6",
        "opts": [
          "P > Q",
          "P < Q",
          "P = Q",
          "P = 2Q",
          "Tidak dapat ditentukan"
        ],
        "ans": 1,
        "exp": "2a = 10 → a = 5. Maka P (5) < Q (6)."
      },
      {
        "id": 35,
        "q": "<strong>P</strong> = 3/4 + 1/2<br><strong>Q</strong> = 1,25",
        "opts": [
          "P > Q",
          "P < Q",
          "P = Q",
          "P = 2Q",
          "Tidak dapat ditentukan"
        ],
        "ans": 2,
        "exp": "P = 0,75 + 0,50 = 1,25. Jadi P = Q."
      },
      {
        "id": 36,
        "q": "Waktu pengerjaan 4 orang pekerja adalah 6 hari.<br><strong>P</strong> = Waktu pengerjaan jika dikerjakan 8 orang (hari)<br><strong>Q</strong> = 4 hari",
        "opts": [
          "P > Q",
          "P < Q",
          "P = Q",
          "P + Q = 8",
          "Tidak dapat ditentukan"
        ],
        "ans": 1,
        "exp": "Perbandingan berbalik nilai: P = (4 × 6) / 8 = 3 hari. Maka P < Q."
      },
      {
        "id": 37,
        "q": "<strong>P</strong> = (-2)³<br><strong>Q</strong> = (-3)²",
        "opts": [
          "P > Q",
          "P < Q",
          "P = Q",
          "P + Q = 0",
          "Tidak dapat ditentukan"
        ],
        "ans": 1,
        "exp": "P = -8, sedangkan Q = +9. Maka P < Q."
      },
      {
        "id": 38,
        "q": "Harga barang Rp200.000 mendapat diskon 15%.<br><strong>P</strong> = Besar potongan harga (diskon)<br><strong>Q</strong> = Rp25.000",
        "opts": [
          "P > Q",
          "P < Q",
          "P = Q",
          "P = 2Q",
          "Tidak dapat ditentukan"
        ],
        "ans": 0,
        "exp": "P = 15% × 200.000 = Rp30.000. Maka P > Q."
      }
    ]
  },
  {
    "id": 5,
    "name": "Kuantitatif Grafik & Tabel",
    "group": "Kuantitatif",
    "count": 10,
    "minutes": 12,
    "desc": "Analisis data pada tabel atau grafik yang disajikan, kemudian hitung nilai yang diminta.",
    "questions": [
      {
        "id": 39,
        "stimulus": "<strong>Tabel Produksi Unit Bengkel Praktik SMK:</strong><table><tr><th>Jurusan</th><th>Minggu 1</th><th>Minggu 2</th><th>Minggu 3</th></tr><tr><td>Teknik Pemesinan</td><td>40 unit</td><td>45 unit</td><td>50 unit</td></tr><tr><td>Teknik Otomotif</td><td>30 unit</td><td>35 unit</td><td>40 unit</td></tr><tr><td>RPL</td><td>20 unit</td><td>25 unit</td><td>30 unit</td></tr></table>",
        "q": "Berapa persentase kenaikan produksi jurusan Teknik Pemesinan dari Minggu 1 ke Minggu 3?",
        "opts": [
          "10%",
          "15%",
          "20%",
          "25%",
          "30%"
        ],
        "ans": 3,
        "exp": "Kenaikan = 50 - 40 = 10. Persentase = (10/40) × 100% = 25%."
      },
      {
        "id": 40,
        "stimulus": "<strong>Tabel Produksi Unit Bengkel Praktik SMK:</strong> (Sama seperti soal nomor 39)",
        "q": "Berapa rata-rata produksi seluruh jurusan pada Minggu 2?",
        "opts": [
          "30 unit",
          "35 unit",
          "40 unit",
          "45 unit",
          "50 unit"
        ],
        "ans": 1,
        "exp": "(45 + 35 + 25) / 3 = 105 / 3 = 35 unit."
      },
      {
        "id": 41,
        "stimulus": "<strong>Tabel Produksi Unit Bengkel Praktik SMK:</strong> (Sama seperti soal nomor 39)",
        "q": "Berapa total seluruh unit yang diproduksi oleh jurusan RPL selama 3 minggu?",
        "opts": [
          "65 unit",
          "70 unit",
          "75 unit",
          "80 unit",
          "85 unit"
        ],
        "ans": 2,
        "exp": "20 + 25 + 30 = 75 unit."
      },
      {
        "id": 42,
        "stimulus": "<strong>Tabel Produksi Unit Bengkel Praktik SMK:</strong> (Sama seperti soal nomor 39)",
        "q": "Berapa selisih total produksi 3 minggu antara Teknik Pemesinan dan Teknik Otomotif?",
        "opts": [
          "15 unit",
          "20 unit",
          "25 unit",
          "30 unit",
          "35 unit"
        ],
        "ans": 3,
        "exp": "Pemesinan = 135; Otomotif = 105. Selisih = 135 - 105 = 30 unit."
      },
      {
        "id": 43,
        "stimulus": "<strong>Tabel Produksi Unit Bengkel Praktik SMK:</strong> (Sama seperti soal nomor 39)",
        "q": "Jika pola kenaikan mingguan tetap konstan, berapa perkiraan produksi Teknik Otomotif pada Minggu 4?",
        "opts": [
          "42 unit",
          "45 unit",
          "48 unit",
          "50 unit",
          "55 unit"
        ],
        "ans": 1,
        "exp": "Kenaikan tiap minggu +5 unit, maka Minggu 4 = 40 + 5 = 45 unit."
      },
      {
        "id": 44,
        "stimulus": "<strong>Data Penjualan Koperasi Siswa (Kopsis) Bulan Oktober:</strong><table><tr><th>Produk</th><th>Harga Satuan</th><th>Terjual</th></tr><tr><td>Buku Tulis</td><td>Rp4.000</td><td>150 pcs</td></tr><tr><td>Pulpen</td><td>Rp2.500</td><td>200 pcs</td></tr><tr><td>Penggaris</td><td>Rp3.000</td><td>100 pcs</td></tr></table>",
        "q": "Produk manakah yang memberikan pemasukan kotor terbesar bagi Kopsis?",
        "opts": [
          "Buku Tulis",
          "Pulpen",
          "Penggaris",
          "Buku Tulis dan Pulpen sama besar",
          "Semua sama besar"
        ],
        "ans": 0,
        "exp": "Buku = 600.000; Pulpen = 500.000; Penggaris = 300.000. Terbesar adalah Buku Tulis."
      },
      {
        "id": 45,
        "stimulus": "<strong>Data Penjualan Koperasi Siswa (Kopsis):</strong> (Sama seperti soal nomor 44)",
        "q": "Berapa total pendapatan kotor Kopsis dari ketiga produk tersebut?",
        "opts": [
          "Rp1.200.000",
          "Rp1.300.000",
          "Rp1.400.000",
          "Rp1.500.000",
          "Rp1.600.000"
        ],
        "ans": 2,
        "exp": "600.000 + 500.000 + 300.000 = Rp1.400.000."
      },
      {
        "id": 46,
        "stimulus": "<strong>Data Penjualan Koperasi Siswa (Kopsis):</strong> (Sama seperti soal nomor 44)",
        "q": "Berapa rasio jumlah unit terjual antara Buku Tulis dan Pulpen?",
        "opts": [
          "2 : 3",
          "3 : 4",
          "4 : 5",
          "3 : 5",
          "1 : 2"
        ],
        "ans": 1,
        "exp": "150 : 200 disederhanakan (dibagi 50) menjadi 3 : 4."
      },
      {
        "id": 47,
        "stimulus": "<strong>Data Penjualan Koperasi Siswa (Kopsis):</strong> (Sama seperti soal nomor 44)",
        "q": "Jika Kopsis mengambil keuntungan 20% dari total pendapatan kotor, berapa keuntungan bersihnya?",
        "opts": [
          "Rp240.000",
          "Rp260.000",
          "Rp280.000",
          "Rp300.000",
          "Rp320.000"
        ],
        "ans": 2,
        "exp": "20% × Rp1.400.000 = Rp280.000."
      },
      {
        "id": 48,
        "stimulus": "<strong>Data Penjualan Koperasi Siswa (Kopsis):</strong> (Sama seperti soal nomor 44)",
        "q": "Berapa persen kontribusi unit Penggaris terhadap total seluruh unit barang yang terjual?",
        "opts": [
          "20,0%",
          "22,2%",
          "25,0%",
          "30,0%",
          "33,3%"
        ],
        "ans": 1,
        "exp": "Total unit = 150 + 200 + 100 = 450. Kontribusi Penggaris = (100/450) × 100% = 22,2%."
      }
    ]
  },
  {
    "id": 6,
    "name": "Penalaran Analitis",
    "group": "Penalaran Analitis",
    "count": 8,
    "minutes": 12,
    "desc": "Bacalah aturan dan syarat pada kasus yang diberikan, lalu tarik kesimpulan logis yang paling tepat.",
    "questions": [
      {
        "id": 49,
        "stimulus": "<strong>Kasus 1:</strong> Lima siswa SMK (Andi, Budi, Citra, Dedi, Eka) presentasi bergantian:<br>&bull; Citra maju tepat setelah Andi.<br>&bull; Dedi tidak maju pada urutan pertama maupun terakhir.<br>&bull; Eka maju sebelum Budi, tetapi setelah Citra.",
        "q": "Siapakah yang tampil pada urutan pertama?",
        "opts": [
          "Andi",
          "Budi",
          "Citra",
          "Dedi",
          "Eka"
        ],
        "ans": 0,
        "exp": "Urutan wajib: Andi → Citra → Eka → Budi. Karena Dedi bukan urutan ke-1, maka Andi pasti pertama."
      },
      {
        "id": 50,
        "stimulus": "<strong>Kasus 1:</strong> (Sama seperti soal nomor 49)",
        "q": "Jika Dedi maju pada urutan keempat, siapakah yang maju pada urutan ketiga?",
        "opts": [
          "Andi",
          "Budi",
          "Citra",
          "Dedi",
          "Eka"
        ],
        "ans": 4,
        "exp": "Urutan menjadi: 1. Andi, 2. Citra, 3. Eka, 4. Dedi, 5. Budi."
      },
      {
        "id": 51,
        "stimulus": "<strong>Kasus 1:</strong> (Sama seperti soal nomor 49)",
        "q": "Siapakah yang selalu tampil pada urutan terakhir (kelima)?",
        "opts": [
          "Andi",
          "Budi",
          "Citra",
          "Dedi",
          "Eka"
        ],
        "ans": 1,
        "exp": "Budi berada setelah Eka dan Dedi dilarang di urutan terakhir, maka Budi pasti kelima."
      },
      {
        "id": 52,
        "stimulus": "<strong>Kasus 1:</strong> (Sama seperti soal nomor 49)",
        "q": "Pada posisi urutan ke berapa sajakah Dedi mungkin tampil?",
        "opts": [
          "Ke-1 atau ke-2",
          "Ke-2 atau ke-3",
          "Ke-3 atau ke-4",
          "Ke-4 atau ke-5",
          "Hanya ke-3"
        ],
        "ans": 2,
        "exp": "Andi(1)-Citra(2) berurutan, jadi Dedi hanya bisa masuk di posisi ke-3 atau ke-4."
      },
      {
        "id": 53,
        "stimulus": "<strong>Kasus 2:</strong> Empat lab komputer (Lab A, B, C, D) dipakai ujian pada sesi berbeda:<br>&bull; Lab B digunakan lebih awal daripada Lab D.<br>&bull; Lab A digunakan tepat setelah Lab C.<br>&bull; Lab D bukan sesi terakhir.",
        "q": "Lab manakah yang digunakan pada sesi terakhir (keempat)?",
        "opts": [
          "Lab A",
          "Lab B",
          "Lab C",
          "Lab D",
          "Tidak dapat ditentukan"
        ],
        "ans": 0,
        "exp": "B sebelum D, dan D bukan terakhir, sementara C-A berurutan. Maka urutannya: B, D, C, A."
      },
      {
        "id": 54,
        "stimulus": "<strong>Kasus 2:</strong> (Sama seperti soal nomor 53)",
        "q": "Lab manakah yang digunakan pada sesi pertama?",
        "opts": [
          "Lab A",
          "Lab B",
          "Lab C",
          "Lab D",
          "Lab A atau C"
        ],
        "ans": 1,
        "exp": "Urutan satu-satunya yang memenuhi syarat adalah: 1. Lab B, 2. Lab D, 3. Lab C, 4. Lab A."
      },
      {
        "id": 55,
        "stimulus": "<strong>Kasus 3:</strong> Dalam tim lomba LKS beranggotakan 3 orang dipilih dari Riko, Sinta, Tono, Umi, dan Vani:<br>&bull; Jika Riko dipilih, Sinta harus dipilih.<br>&bull; Tono dan Umi tidak bisa dipilih bersamaan.<br>&bull; Vani selalu terpilih.",
        "q": "Jika Riko terpilih dalam tim, siapakah anggota tim selengkapnya?",
        "opts": [
          "Riko, Sinta, Vani",
          "Riko, Tono, Vani",
          "Riko, Umi, Vani",
          "Riko, Sinta, Tono",
          "Sinta, Tono, Umi"
        ],
        "ans": 0,
        "exp": "Vani wajib (1), Riko dipilih (2), maka Sinta wajib ikut (3). Jumlah tim tepat 3 orang."
      },
      {
        "id": 56,
        "stimulus": "<strong>Kasus 3:</strong> (Sama seperti soal nomor 55)",
        "q": "Jika Sinta TIDAK dipilih, kombinasi tim mana yang mungkin terbentuk?",
        "opts": [
          "Riko, Tono, Vani",
          "Tono, Umi, Vani",
          "Riko, Umi, Vani",
          "Tono, Vani, dan satu cadangan",
          "Tidak ada kombinasi yang mungkin"
        ],
        "ans": 4,
        "exp": "Jika Sinta tidak dipilih, Riko gugur. Sisa Vani, Tono, Umi; namun Tono & Umi tak bisa bersama, jadi tim kurang dari 3 orang."
      }
    ]
  },
  {
    "id": 7,
    "name": "Spasial Klasifikasi Figural",
    "group": "Spasial",
    "count": 10,
    "minutes": 6,
    "desc": "Identifikasi sifat bentuk/figural yang tidak sekelompok dengan empat pilihan lainnya.",
    "questions": [
      {
        "id": 57,
        "q": "Manakah bangun datar yang memiliki sifat simetri lipat berbeda dari keempat bangun lainnya?",
        "opts": [
          "Persegi",
          "Segitiga sama sisi",
          "Lingkaran",
          "Segienam beraturan",
          "Jajar genjang"
        ],
        "ans": 4,
        "exp": "Jajar genjang tidak memiliki sumbu simetri lipat, sedangkan keempat lainnya punya."
      },
      {
        "id": 58,
        "q": "Manakah bangun ruang yang TIDAK memiliki titik sudut?",
        "opts": [
          "Kubus",
          "Limas segitiga",
          "Prisma segilima",
          "Bola",
          "Balok"
        ],
        "ans": 3,
        "exp": "Bola hanya memiliki satu sisi lengkung dan tidak memiliki titik sudut."
      },
      {
        "id": 59,
        "q": "Manakah simbol huruf kapital berikut yang TIDAK memiliki simetri lipat vertikal maupun horizontal?",
        "opts": [
          "H",
          "I",
          "O",
          "X",
          "N"
        ],
        "ans": 4,
        "exp": "Huruf N memiliki simetri putar 180°, tetapi tidak memiliki simetri lipat."
      },
      {
        "id": 60,
        "q": "Dari kelompok bangun berikut, manakah yang bukan merupakan poligon (segi banyak)?",
        "opts": [
          "Trapesium",
          "Belah ketupat",
          "Elips",
          "Segilima",
          "Layang-layang"
        ],
        "ans": 2,
        "exp": "Elips dibatasi oleh kurva lengkung, bukan ruas garis lurus."
      },
      {
        "id": 61,
        "q": "Manakah pasangan sudut yang jumlahnya TIDAK sama dengan 180°?",
        "opts": [
          "Dua sudut berpelurus",
          "Sudut dalam sepihak pada garis sejajar",
          "Sudut berhadapan pada segiempat tali busur",
          "Dua sudut siku-siku",
          "Dua sudut lancip"
        ],
        "ans": 4,
        "exp": "Dua sudut lancip masing-masing < 90°, sehingga jumlahnya selalu < 180°."
      },
      {
        "id": 62,
        "q": "Manakah bangun ruang yang alas dan tutupnya berbentuk bangun datar yang kongruen dan sejajar, KECUALI...",
        "opts": [
          "Kubus",
          "Tabung",
          "Prisma segitiga",
          "Kerucut",
          "Balok"
        ],
        "ans": 3,
        "exp": "Kerucut memiliki puncak lancip, tidak memiliki tutup yang kongruen dengan alas."
      },
      {
        "id": 63,
        "q": "Manakah huruf kapital yang bentuknya tetap sama jika diputar 180°?",
        "opts": [
          "A",
          "E",
          "M",
          "S",
          "T"
        ],
        "ans": 3,
        "exp": "Huruf S memiliki simetri putar tingkat 2 (180°)."
      },
      {
        "id": 64,
        "q": "Manakah bangun datar yang semua sisinya sama panjang, tetapi sudut-sudutnya tidak harus 90°?",
        "opts": [
          "Persegi panjang",
          "Belah ketupat",
          "Trapesium siku-siku",
          "Segitiga sembarang",
          "Jajar genjang"
        ],
        "ans": 1,
        "exp": "Belah ketupat memiliki empat sisi sama panjang tanpa syarat sudut siku-siku."
      },
      {
        "id": 65,
        "q": "Manakah jarum jam yang membentuk sudut tumpul (> 90°)?",
        "opts": [
          "Pukul 03.00",
          "Pukul 02.00",
          "Pukul 04.00",
          "Pukul 01.00",
          "Pukul 09.00"
        ],
        "ans": 2,
        "exp": "Pukul 04.00 membentuk sudut 4 × 30° = 120° (sudut tumpul)."
      },
      {
        "id": 66,
        "q": "Manakah gambar arah mata angin yang berlawanan dengan Barat Daya?",
        "opts": [
          "Tenggara",
          "Timur Laut",
          "Barat Laut",
          "Utara",
          "Selatan"
        ],
        "ans": 1,
        "exp": "Barat Daya (225°) berlawanan 180° dengan Timur Laut (45°)."
      }
    ]
  },
  {
    "id": 8,
    "name": "Spasial Analogi Figural",
    "group": "Spasial",
    "count": 10,
    "minutes": 10,
    "desc": "Temukan pola transformasi bentuk (rotasi, pencerminan, perubahan ukuran/jumlah sisi) lalu terapkan pada bentuk berikutnya.",
    "questions": [
      {
        "id": 67,
        "q": "Segitiga (3 sisi) : Segiempat (4 sisi) = Segilima (5 sisi) : ...",
        "opts": [
          "Segitiga",
          "Segienam",
          "Lingkaran",
          "Segitujuh",
          "Garis"
        ],
        "ans": 1,
        "exp": "Pola penambahan 1 sisi: 5 + 1 = 6 sisi (segienam)."
      },
      {
        "id": 68,
        "q": "Huruf 'P' dicerminkan secara horizontal menjadi bentuk menyerupai angka '9'. Jika huruf 'b' kecil dicerminkan secara horizontal, maka akan menjadi huruf...",
        "opts": [
          "p",
          "q",
          "d",
          "g",
          "o"
        ],
        "ans": 2,
        "exp": "Pencerminan kiri-kanan huruf 'b' menghasilkan huruf 'd'."
      },
      {
        "id": 69,
        "q": "Panah menunjuk ke ATAS diputar 90° searah jarum jam menjadi menunjuk ke KANAN. Jika panah menunjuk ke KIRI diputar 90° searah jarum jam, akan menunjuk ke...",
        "opts": [
          "ATAS",
          "BAWAH",
          "KANAN",
          "TENGGARA",
          "BARAT DAYA"
        ],
        "ans": 0,
        "exp": "Dari arah kiri (arah jam 9) diputar 90° searah jarum jam menunjuk ke atas (arah jam 12)."
      },
      {
        "id": 70,
        "q": "Persegi : Kubus = Lingkaran : ...",
        "opts": [
          "Tabung",
          "Kerucut",
          "Bola",
          "Elips",
          "Setengah lingkaran"
        ],
        "ans": 2,
        "exp": "Persegi adalah bangun 2D pembentuk kubus 3D; lingkaran adalah analogi 2D untuk bola 3D."
      },
      {
        "id": 71,
        "q": "Garis vertikal (|) diputar 45° searah jarum jam menjadi garis miring (/). Jika garis horizontal (—) diputar 45° searah jarum jam menjadi...",
        "opts": [
          "Garis vertikal (|)",
          "Garis miring (\\)",
          "Garis miring (/)",
          "Tanda tambah (+)",
          "Tanda silang (×)"
        ],
        "ans": 1,
        "exp": "Garis mendatar diputar searah jarum jam 45° miring dari kiri atas ke kanan bawah (\\)."
      },
      {
        "id": 72,
        "q": "Segitiga besar berisi lingkaran kecil : Lingkaran besar berisi segitiga kecil = Persegi besar berisi bintang kecil : ...",
        "opts": [
          "Persegi kecil di dalam persegi besar",
          "Bintang besar berisi persegi kecil",
          "Dua bintang berdampingan",
          "Persegi hitam pekat",
          "Bintang tanpa garis tepi"
        ],
        "ans": 1,
        "exp": "Transformasinya adalah menukar bentuk luar dan bentuk dalam."
      },
      {
        "id": 73,
        "q": "Angka '6' diputar 180° menjadi angka '9'. Jika huruf 'M' kapital diputar 180° menjadi huruf...",
        "opts": [
          "N",
          "E",
          "W",
          "V",
          "U"
        ],
        "ans": 2,
        "exp": "Huruf M yang dibalik 180° membentuk huruf W."
      },
      {
        "id": 74,
        "q": "1 titik : Garis = 3 titik tidak segaris : ...",
        "opts": [
          "Kubus",
          "Bidang segitiga",
          "Bola",
          "Silinder",
          "Titik pusat"
        ],
        "ans": 1,
        "exp": "Dua titik membentuk garis; tiga titik tidak segaris membentuk bidang segitiga."
      },
      {
        "id": 75,
        "q": "Jarum jam pukul 12.00 : 0° = Jarum jam pukul 06.00 : ...",
        "opts": [
          "45°",
          "90°",
          "135°",
          "180°",
          "270°"
        ],
        "ans": 3,
        "exp": "Pada pukul 06.00 jarum panjang dan pendek berlawanan lurus membentuk 180°."
      },
      {
        "id": 76,
        "q": "Setengah lingkaran : Lingkaran penuh = Juring 90° : ...",
        "opts": [
          "Setengah lingkaran",
          "Lingkaran penuh",
          "Segitiga siku-siku",
          "Juring 180°",
          "Seperempat lingkaran"
        ],
        "ans": 3,
        "exp": "Pola menggandakan sudut pusat (2×): 90° × 2 = 180° (juring 180°)."
      }
    ]
  },
  {
    "id": 9,
    "name": "Spasial Rotasi 3D",
    "group": "Spasial",
    "count": 8,
    "minutes": 10,
    "desc": "Bayangkan posisi sisi atau sudut objek tiga dimensi setelah diputar atau digulingkan.",
    "questions": [
      {
        "id": 77,
        "q": "Dadu standar (jumlah sisi berhadapan = 7) memiliki angka 6 di ATAS dan 2 di DEPAN. Jika digulingkan ke DEPAN 1 kali (90°), angka berapa di ATAS?",
        "opts": [
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "ans": 4,
        "exp": "Lawan depan (2) adalah belakang (5). Digulingkan ke depan membuat sisi belakang naik ke atas."
      },
      {
        "id": 78,
        "q": "Dari posisi awal soal 77 (6 di ATAS, 2 di DEPAN), angka berapa yang berada di sisi KANAN dadu?",
        "opts": [
          "1 atau 6",
          "2 atau 5",
          "3 atau 4",
          "Hanya 1",
          "Hanya 5"
        ],
        "ans": 2,
        "exp": "Pasangan atas-bawah (6-1) dan depan-belakang (2-5), sehingga kiri-kanan pasti pasangan 3 dan 4."
      },
      {
        "id": 79,
        "q": "Sebuah kubus memiliki 6 sisi berbeda warna: Atas=Merah, Bawah=Biru, Depan=Kuning, Belakang=Hijau, Kiri=Hitam, Kanan=Putih. Jika kubus diputar 90° ke KANAN (sumbu depan-belakang), warna apa yang sekarang berada di ATAS?",
        "opts": [
          "Merah",
          "Biru",
          "Hitam",
          "Putih",
          "Kuning"
        ],
        "ans": 2,
        "exp": "Diputar ke kanan membuat sisi Kiri (Hitam) naik ke posisi Atas."
      },
      {
        "id": 80,
        "q": "Sebuah balok kayu berdiri tegak menghadap Utara. Balok tersebut diputar 90° searah jarum jam (dilihat dari atas), lalu diputar lagi 180°. Ke arah mana balok menghadap sekarang?",
        "opts": [
          "Utara",
          "Selatan",
          "Timur",
          "Barat",
          "Tenggara"
        ],
        "ans": 3,
        "exp": "Utara + 90° searah jarum jam = Timur. Timur + 180° = Barat."
      },
      {
        "id": 81,
        "q": "Berapa jumlah seluruh rusuk pada sebuah bangun ruang prisma segienam?",
        "opts": [
          "12",
          "15",
          "18",
          "20",
          "24"
        ],
        "ans": 2,
        "exp": "Rumus rusuk prisma segi-n adalah 3n = 3 × 6 = 18 rusuk."
      },
      {
        "id": 82,
        "q": "Sebuah huruf 'L' 3D diletakkan mendatar di meja menghadap ke kanan. Jika diputar 180° pada bidang datar meja, ke arah mana kaki huruf 'L' menunjuk?",
        "opts": [
          "Ke kanan",
          "Ke kiri",
          "Ke atas",
          "Ke bawah",
          "Tetap di tempat"
        ],
        "ans": 1,
        "exp": "Rotasi 180° membalik arah kanan menjadi ke kiri."
      },
      {
        "id": 83,
        "q": "Sebuah kerucut dipotong mendatar sejajar dengan alasnya di bagian tengah. Bentuk bangun ruang bagian bawah hasil potongan tersebut adalah...",
        "opts": [
          "Kerucut kecil",
          "Tabung",
          "Kerucut terpancung",
          "Prisma",
          "Bola"
        ],
        "ans": 2,
        "exp": "Potongan kerucut sejajar alas menghasilkan kerucut terpancung (frustum)."
      },
      {
        "id": 84,
        "q": "Jika sebuah kubus satuan disusun membentuk balok berukuran 3 × 3 × 3 lalu seluruh permukaan luarnya dicat merah, berapa banyak kubus satuan kecil yang terkena cat pada TIGA sisinya?",
        "opts": [
          "4",
          "6",
          "8",
          "12",
          "27"
        ],
        "ans": 2,
        "exp": "Kubus yang terkena cat di 3 sisi hanya berada di titik pojok kubus besar, yaitu sebanyak 8 buah."
      }
    ]
  },
  {
    "id": 10,
    "name": "Spasial Pola",
    "group": "Spasial",
    "count": 6,
    "minutes": 10,
    "desc": "Analisis jaring-jaring bangun ruang dan pola susunan bentuk untuk menentukan bagian yang berhadapan atau melengkapi pola.",
    "questions": [
      {
        "id": 85,
        "q": "Jaring-jaring kubus berbentuk huruf 'T' memiliki 4 persegi vertikal (atas ke bawah: A, B, C, D) serta E di kiri B dan F di kanan B. Jika C menjadi alas kubus, kotak mana yang menjadi tutup atas?",
        "opts": [
          "Kotak A",
          "Kotak B",
          "Kotak D",
          "Kotak E",
          "Kotak F"
        ],
        "ans": 0,
        "exp": "Pada deret lurus A-B-C-D, kotak yang berselang satu posisi (A dan C) saling berhadapan."
      },
      {
        "id": 86,
        "q": "Berdasarkan jaring-jaring kubus pada soal nomor 85, sisi manakah yang berhadapan dengan kotak E?",
        "opts": [
          "Kotak A",
          "Kotak B",
          "Kotak C",
          "Kotak D",
          "Kotak F"
        ],
        "ans": 4,
        "exp": "Kotak E di kiri B dan F di kanan B terpisah 1 kotak (B), sehingga saling berhadapan."
      },
      {
        "id": 87,
        "q": "Manakah rangkaian bangun datar yang merupakan jaring-jaring dari sebuah limas segiempat?",
        "opts": [
          "1 persegi dan 4 segitiga",
          "2 persegi dan 4 persegi panjang",
          "1 persegi dan 3 segitiga",
          "2 lingkaran dan 1 persegi panjang",
          "4 segitiga sama sisi saja"
        ],
        "ans": 0,
        "exp": "Limas segiempat tersusun dari 1 alas persegi/segiempat dan 4 sisi tegak berbentuk segitiga."
      },
      {
        "id": 88,
        "q": "Sebuah kertas persegi dilipat dua kali menjadi persegi kecil, lalu dipotong melengkung pada bagian sudut lipatan pusatnya. Ketika kertas dibuka penuh, bentuk lubang apa yang muncul di tengah kertas?",
        "opts": [
          "Segitiga",
          "Persegi",
          "Lingkaran",
          "Bintang",
          "Garis lurus"
        ],
        "ans": 2,
        "exp": "Empat seperempat lingkaran yang bertemu di pusat membentuk satu lingkaran penuh."
      },
      {
        "id": 89,
        "q": "Pada pola lantai ubin catur 4 × 4 (16 petak), jika petak pojok kiri atas berwarna hitam dan warna selalu berselang-seling, berapa jumlah seluruh petak berwarna putih?",
        "opts": [
          "6",
          "7",
          "8",
          "9",
          "10"
        ],
        "ans": 2,
        "exp": "Pada papan genap 4×4, jumlah petak hitam dan putih selalu seimbang: 16 / 2 = 8 petak."
      },
      {
        "id": 90,
        "q": "Sebuah jaring-jaring tabung terdiri dari 2 lingkaran berjari-jari 7 cm dan 1 persegi panjang. Berapa panjang sisi persegi panjang yang melingkari selimut tabung (π = 22/7)?",
        "opts": [
          "14 cm",
          "22 cm",
          "44 cm",
          "49 cm",
          "154 cm"
        ],
        "ans": 2,
        "exp": "Panjang selimut = keliling lingkaran = 2 × (22/7) × 7 = 44 cm."
      }
    ]
  },
  {
    "id": 11,
    "name": "Mekanik Mekanikal",
    "group": "Mekanik",
    "count": 10,
    "minutes": 10,
    "desc": "Pahami prinsip dasar fisika mekanik, roda gigi, katrol, tuas, tekanan, dan cara kerja alat sederhana.",
    "questions": [
      {
        "id": 91,
        "q": "Roda gigi A (40 gigi) berputar searah jarum jam pada 30 rpm dan bersinggungan langsung dengan roda gigi B (20 gigi). Bagaimana arah dan kecepatan roda gigi B?",
        "opts": [
          "Searah jarum jam, 15 rpm",
          "Berlawanan arah jarum jam, 15 rpm",
          "Searah jarum jam, 60 rpm",
          "Berlawanan arah jarum jam, 60 rpm",
          "Berlawanan arah jarum jam, 30 rpm"
        ],
        "ans": 3,
        "exp": "Roda gigi bersinggungan berbalik arah; rpm B = (40/20) × 30 = 60 rpm."
      },
      {
        "id": 92,
        "q": "Untuk mengungkit batu berat dengan linggis agar gaya yang dikeluarkan sekecil mungkin, titik tumpu diletakkan...",
        "opts": [
          "Tepat di tengah linggis",
          "Sedekat mungkin dengan batu (beban)",
          "Sedekat mungkin dengan tangan (kuasa)",
          "Di ujung pegangan tangan",
          "Tidak berpengaruh"
        ],
        "ans": 1,
        "exp": "Lengan beban yang pendek memperbesar keuntungan mekanis tuas."
      },
      {
        "id": 93,
        "q": "Sebuah katrol tunggal tetap digunakan untuk menimba air seberat 100 N. Berapa gaya tarik minimal yang diperlukan (abaikan gesekan)?",
        "opts": [
          "25 N",
          "50 N",
          "100 N",
          "150 N",
          "200 N"
        ],
        "ans": 2,
        "exp": "Katrol tunggal tetap memiliki keuntungan mekanis = 1 (hanya mengubah arah gaya), sehingga F = 100 N."
      },
      {
        "id": 94,
        "q": "Mengapa mata pisau atau pahat diasah hingga sangat tipis/tajam?",
        "opts": [
          "Mengurangi gaya berat pisau",
          "Memperkecil luas bidang tekan sehingga tekanan menjadi besar",
          "Memperbesar luas permukaan potong",
          "Mengurangi koefisien muai logam",
          "Mencegah karat pada baja"
        ],
        "ans": 1,
        "exp": "Tekanan P = F/A; luas bidang (A) yang kecil menghasilkan tekanan (P) yang sangat besar."
      },
      {
        "id": 95,
        "q": "Dua buah puli dihubungkan dengan sabuk karet (belt) terbuka tanpa menyilang. Jika puli penggerak berputar searah jarum jam, bagaimana arah putar puli yang digerakkan?",
        "opts": [
          "Searah jarum jam",
          "Berlawanan arah jarum jam",
          "Diam tidak berputar",
          "Bergantian bolak-balik",
          "Tergantung ukuran puli"
        ],
        "ans": 0,
        "exp": "Sabuk terbuka (open belt) menghasilkan arah putaran yang sama pada kedua puli."
      },
      {
        "id": 96,
        "q": "Sebuah mobil yang melaju kencang direm mendadak sehingga penumpang terdorong ke depan. Peristiwa ini sesuai dengan hukum...",
        "opts": [
          "Hukum I Newton (Kelembaman)",
          "Hukum Pascal",
          "Hukum Archimedes",
          "Hukum Hooke",
          "Hukum Boyle"
        ],
        "ans": 0,
        "exp": "Benda yang sedang bergerak cenderung mempertahankan keadaan geraknya (inersia/kelembaman)."
      },
      {
        "id": 97,
        "q": "Pada sistem dongkrak hidrolik di bengkel otomotif, prinsip fisika yang bekerja adalah...",
        "opts": [
          "Tekanan pada zat cair tertutup diteruskan sama besar ke segala arah",
          "Gaya apung sebanding dengan berat zat cair yang dipindahkan",
          "Pertambahan panjang pegas sebanding dengan gaya tarik",
          "Energi potensial berubah seluruhnya menjadi energi panas",
          "Kecepatan fluida berbanding lurus dengan luas penampang"
        ],
        "ans": 0,
        "exp": "Dongkrak hidrolik bekerja berdasarkan Hukum Pascal."
      },
      {
        "id": 98,
        "q": "Mengapa jalan di daerah pegunungan dibuat berkelok-kelok (bidang miring landai)?",
        "opts": [
          "Memperpendek jarak tempuh",
          "Mengurangi gaya dorong mesin yang dibutuhkan saat menanjak",
          "Memperbesar gaya gravitasi",
          "Menghemat bahan aspal",
          "Menambah kecepatan maksimal kendaraan"
        ],
        "ans": 1,
        "exp": "Bidang miring yang lebih landai mengurangi gaya kuasa yang dibutuhkan untuk mencapai ketinggian tertentu."
      },
      {
        "id": 99,
        "q": "Jika dua buah pegas identik disusun secara PARALEL untuk menahan beban yang sama, dibandingkan pegas tunggal maka pegas paralel akan...",
        "opts": [
          "Bertambah panjang dua kali lipat",
          "Lebih kaku (pertambahan panjang setengahnya)",
          "Mudah putus",
          "Tidak mengalami regangan sama sekali",
          "Memiliki konstanta pegas lebih kecil"
        ],
        "ans": 1,
        "exp": "Susunan paralel menggandakan konstanta pegas (k_total = 2k), sehingga pegas lebih kaku."
      },
      {
        "id": 100,
        "q": "Pada rangkaian listrik seri dengan dua lampu identik, jika salah satu lampu dilepas/putus, apa yang terjadi pada lampu lainnya?",
        "opts": [
          "Menyala lebih terang",
          "Tetap menyala normal",
          "Ikut padam karena rangkaian terbuka",
          "Berkedip-kedip cepat",
          "Mengalami korsleting"
        ],
        "ans": 2,
        "exp": "Pada rangkaian seri hanya ada satu jalur arus; jika satu putus, arus terhenti total."
      }
    ]
  },
  {
    "id": 12,
    "name": "Penggunaan Bahasa Melengkapi Kalimat",
    "group": "Bahasa",
    "count": 10,
    "minutes": 5,
    "desc": "Pilihlah kata, konjungsi, atau frasa yang paling tepat dan baku untuk melengkapi kalimat berikut.",
    "questions": [
      {
        "id": 101,
        "q": "Siswa kelas XI SMK diwajibkan membawa perangkat seluler yang memenuhi spesifikasi teknis ________ aplikasi asesmen dapat berjalan lancar.",
        "opts": [
          "melainkan",
          "sedangkan",
          "agar",
          "meskipun",
          "padahal"
        ],
        "ans": 2,
        "exp": "Konjungsi tujuan yang tepat adalah 'agar'."
      },
      {
        "id": 102,
        "q": "Sebelum menekan tombol selesai, peserta harus ________ kembali kelengkapan seluruh jawaban pada setiap subtes.",
        "opts": [
          "meninjau",
          "ditinjau",
          "tertinjau",
          "tinjauan",
          "peninjauan"
        ],
        "ans": 0,
        "exp": "Kata kerja aktif transitif setelah kata kerja bantu 'harus' adalah 'meninjau'."
      },
      {
        "id": 103,
        "q": "Mesin CNC tersebut tidak dapat dioperasikan ________ aliran listrik di bengkel masih padam.",
        "opts": [
          "sehingga",
          "apabila",
          "tetapi",
          "bahkan",
          "melainkan"
        ],
        "ans": 1,
        "exp": "Konjungsi syarat yang tepat adalah 'apabila'."
      },
      {
        "id": 104,
        "q": "Laporan praktik kerja lapangan harus disusun secara ________ sesuai dengan sistematika penulisan yang berlaku.",
        "opts": [
          "sistem",
          "sistematis",
          "sistematika",
          "mensistemkan",
          "tersistem"
        ],
        "ans": 1,
        "exp": "Kata sifat yang menerangkan cara penyusunan laporan adalah 'sistematis'."
      },
      {
        "id": 105,
        "q": "Bukan hanya keterampilan teknis yang dibutuhkan di dunia industri, ________ juga sikap kerja dan kedisiplinan.",
        "opts": [
          "tetapi",
          "melainkan",
          "sedangkan",
          "namun",
          "dan"
        ],
        "ans": 1,
        "exp": "Pasangan korelatif baku untuk 'bukan hanya ...' adalah 'melainkan juga ...'."
      },
      {
        "id": 106,
        "q": "Para peserta didik sedang ________ proses kalibrasi alat ukur sebelum memulai pengujian komponen.",
        "opts": [
          "melakukan",
          "dilakukan",
          "perlakuan",
          "pelaku",
          "berlaku"
        ],
        "ans": 0,
        "exp": "Predikat aktif transitif yang tepat adalah 'melakukan'."
      },
      {
        "id": 107,
        "q": "Pihak sekolah menyediakan jaringan internet cadangan ________ mengantisipasi gangguan koneksi selama ujian berlangsung.",
        "opts": [
          "untuk",
          "karena",
          "walaupun",
          "sebab",
          "atau"
        ],
        "ans": 0,
        "exp": "Preposisi tujuan yang tepat sebelum verba adalah 'untuk'."
      },
      {
        "id": 108,
        "q": "Hasil Asesmen Bakat Murid digunakan sebagai bahan ________ dalam merencanakan pilihan karier maupun studi lanjut.",
        "opts": [
          "pertimbangan",
          "mempertimbangkan",
          "dipertimbangkan",
          "tertimbang",
          "penimbang"
        ],
        "ans": 0,
        "exp": "Kata benda yang tepat setelah kata 'bahan' adalah 'pertimbangan'."
      },
      {
        "id": 109,
        "q": "________ cuaca hujan deras sejak pagi, seluruh peserta tetap hadir tepat waktu di ruang ujian.",
        "opts": [
          "Karena",
          "Meskipun",
          "Sehingga",
          "Supaya",
          "Jika"
        ],
        "ans": 1,
        "exp": "Konjungsi konsesif yang menyatakan pertentangan adalah 'Meskipun'."
      },
      {
        "id": 110,
        "q": "Setiap peserta dilarang keras ________ soal asesmen dalam bentuk foto maupun tangkapan layar.",
        "opts": [
          "menyebarluaskan",
          "disebarluaskan",
          "penyebarluasan",
          "tersebarluas",
          "sebar luas"
        ],
        "ans": 0,
        "exp": "Bentuk verba gabungan yang ditulis serangkai dengan imbuhan me-kan adalah 'menyebarluaskan'."
      }
    ]
  },
  {
    "id": 13,
    "name": "Klerikal Akurasi",
    "group": "Klerikal",
    "count": 30,
    "minutes": 5,
    "desc": "Bandingkan string Kolom Kiri dan Kolom Kanan secara cepat dan teliti. Pilih SAMA jika identik persis, atau TIDAK SAMA jika ada perbedaan sekecil apa pun.",
    "questions": [
      {
        "id": 111,
        "left": "NISN-0089451278-SMK1",
        "right": "NISN-0089451278-SMK1",
        "ans": 0,
        "exp": "Identik persis."
      },
      {
        "id": 112,
        "left": "INV/2026/XI-RPL/0892",
        "right": "INV/2026/XI-RPL/0829",
        "ans": 1,
        "exp": "Beda pada 0892 vs 0829."
      },
      {
        "id": 113,
        "left": "ABM-BPPP-2026#Token7B",
        "right": "ABM-BPPP-2026#Token7b",
        "ans": 1,
        "exp": "Beda kapital B vs b."
      },
      {
        "id": 114,
        "left": "NPSN:10307894-SOLOK",
        "right": "NPSN:10307894-SOLOK",
        "ans": 0,
        "exp": "Identik persis."
      },
      {
        "id": 115,
        "left": "KODE_POS_27351_SUMBAR",
        "right": "KODE_POS_27531_SUMBAR",
        "ans": 1,
        "exp": "Beda 27351 vs 27531."
      },
      {
        "id": 116,
        "left": "REG-2026-88410-TJKT",
        "right": "REG-2026-88410-TJKT",
        "ans": 0,
        "exp": "Identik persis."
      },
      {
        "id": 117,
        "left": "SERTIFIKAT-LKS-00918",
        "right": "SERTIFIKAT-LKS-00918",
        "ans": 0,
        "exp": "Identik persis."
      },
      {
        "id": 118,
        "left": "VERVALPD-9910283746",
        "right": "VERVALPD-9910283746",
        "ans": 0,
        "exp": "Identik persis."
      },
      {
        "id": 119,
        "left": "SKU-MOTOR-125CC-2015",
        "right": "SKU-MOTOR-125CC-2016",
        "ans": 1,
        "exp": "Beda tahun 2015 vs 2016."
      },
      {
        "id": 120,
        "left": "ID_SERVER_PUSMENDIK_04",
        "right": "ID_SERVER_PUSMENDIK_04",
        "ans": 0,
        "exp": "Identik persis."
      },
      {
        "id": 121,
        "left": "TOKEN-ABM-9981-XYZW",
        "right": "TOKEN-ABM-9981-XZYW",
        "ans": 1,
        "exp": "Beda XYZW vs XZYW."
      },
      {
        "id": 122,
        "left": "DAPODIK_SMK_2026_GENAP",
        "right": "DAPODIK_SMK_2026_GENAP",
        "ans": 0,
        "exp": "Identik persis."
      },
      {
        "id": 123,
        "left": "NO.SERI: 7741-8892-001",
        "right": "NO.SERI: 7741-8892-010",
        "ans": 1,
        "exp": "Beda 001 vs 010."
      },
      {
        "id": 124,
        "left": "LAB-KOMPUTER-02-BARAT",
        "right": "LAB-KOMPUTER-02-BARAT",
        "ans": 0,
        "exp": "Identik persis."
      },
      {
        "id": 125,
        "left": "EMAIL: siswa01@smk.sch.id",
        "right": "EMAIL: siswa01@smk.sch.id",
        "ans": 0,
        "exp": "Identik persis."
      },
      {
        "id": 126,
        "left": "NIP.199105012019031009",
        "right": "NIP.199105012019031009",
        "ans": 0,
        "exp": "Identik persis."
      },
      {
        "id": 127,
        "left": "AKUN-PESERTA-00765432",
        "right": "AKUN-PESERTA-00765423",
        "ans": 1,
        "exp": "Beda 32 vs 23."
      },
      {
        "id": 128,
        "left": "BRG/ELK/2026/0045-A",
        "right": "BRG/ELK/2026/0045-A",
        "ans": 0,
        "exp": "Identik persis."
      },
      {
        "id": 129,
        "left": "IP: 192.168.100.254",
        "right": "IP: 192.168.100.245",
        "ans": 1,
        "exp": "Beda 254 vs 245."
      },
      {
        "id": 130,
        "left": "MAC-AA:BB:CC:11:22:33",
        "right": "MAC-AA:BB:CC:11:22:33",
        "ans": 0,
        "exp": "Identik persis."
      },
      {
        "id": 131,
        "left": "SERIAL-SSD-T7-99012X",
        "right": "SERIAL-SSD-T7-99012x",
        "ans": 1,
        "exp": "Beda huruf X vs x."
      },
      {
        "id": 132,
        "left": "UJI-COBA-ABM-17112026",
        "right": "UJI-COBA-ABM-17112026",
        "ans": 0,
        "exp": "Identik persis."
      },
      {
        "id": 133,
        "left": "TAHAP-I-23112026-SESI1",
        "right": "TAHAP-I-23112026-SESI2",
        "ans": 1,
        "exp": "Beda SESI1 vs SESI2."
      },
      {
        "id": 134,
        "left": "KELAS-XI-PPLG-2-SMKN1",
        "right": "KELAS-XI-PPLG-2-SMKN1",
        "ans": 0,
        "exp": "Identik persis."
      },
      {
        "id": 135,
        "left": "KD-BARANG-8877665544",
        "right": "KD-BARANG-8877665544",
        "ans": 0,
        "exp": "Identik persis."
      },
      {
        "id": 136,
        "left": "REF#2026-ABM-001122",
        "right": "REF#2026-ABM-001212",
        "ans": 1,
        "exp": "Beda 001122 vs 001212."
      },
      {
        "id": 137,
        "left": "ANDROID-OS-MIN-7.0.1",
        "right": "ANDROID-OS-MIN-7.0.1",
        "ans": 0,
        "exp": "Identik persis."
      },
      {
        "id": 138,
        "left": "IOS-VERSION-16.4-PLUS",
        "right": "IOS-VERSION-16.4-PLUS",
        "ans": 0,
        "exp": "Identik persis."
      },
      {
        "id": 139,
        "left": "SUBTES-13-KLERIKAL-30",
        "right": "SUBTES-13-KLERIKAL-3O",
        "ans": 1,
        "exp": "Beda angka 0 vs huruf O."
      },
      {
        "id": 140,
        "left": "TOTAL-160-SOAL-122-MNT",
        "right": "TOTAL-160-SOAL-122-MNT",
        "ans": 0,
        "exp": "Identik persis."
      }
    ]
  },
  {
    "id": 14,
    "name": "Klerikal Memory",
    "group": "Klerikal",
    "count": 20,
    "minutes": 7,
    "desc": "Pada layar ini ditampilkan tabel kode pasangan. Hafalkan seluruh pasangan kode tersebut sebelum menekan tombol mulai, karena tabel akan disembunyikan saat soal muncul!",
    "memoryTable": [
      [
        "TKJ (Teknik Jaringan)",
        "482",
        "RPL (Perangkat Lunak)",
        "915"
      ],
      [
        "TKR (Kendaraan Ringan)",
        "736",
        "TSM (Sepeda Motor)",
        "604"
      ],
      [
        "TP (Teknik Pemesinan)",
        "259",
        "TITL (Instalasi Listrik)",
        "841"
      ],
      [
        "AKL (Akuntansi)",
        "370",
        "MPLB (Perkantoran)",
        "518"
      ],
      [
        "DKV (Desain Komunikasi)",
        "193",
        "KULINER (Tata Boga)",
        "467"
      ]
    ],
    "questions": [
      {
        "id": 141,
        "q": "Berapakah sandi angka untuk jurusan RPL?",
        "opts": [
          "482",
          "736",
          "915",
          "604",
          "259"
        ],
        "ans": 2,
        "exp": "RPL = 915."
      },
      {
        "id": 142,
        "q": "Sandi angka 736 adalah milik jurusan...",
        "opts": [
          "TKJ",
          "RPL",
          "TKR",
          "TSM",
          "TP"
        ],
        "ans": 2,
        "exp": "736 = TKR."
      },
      {
        "id": 143,
        "q": "Berapakah sandi angka untuk jurusan TKJ?",
        "opts": [
          "482",
          "841",
          "467",
          "370",
          "518"
        ],
        "ans": 0,
        "exp": "TKJ = 482."
      },
      {
        "id": 144,
        "q": "Sandi angka 604 adalah milik jurusan...",
        "opts": [
          "TP",
          "TSM",
          "TITL",
          "AKL",
          "DKV"
        ],
        "ans": 1,
        "exp": "604 = TSM."
      },
      {
        "id": 145,
        "q": "Berapakah sandi angka untuk jurusan TP (Teknik Pemesinan)?",
        "opts": [
          "193",
          "259",
          "370",
          "467",
          "518"
        ],
        "ans": 1,
        "exp": "TP = 259."
      },
      {
        "id": 146,
        "q": "Sandi angka 841 adalah milik jurusan...",
        "opts": [
          "TITL",
          "AKL",
          "MPLB",
          "DKV",
          "KULINER"
        ],
        "ans": 0,
        "exp": "841 = TITL."
      },
      {
        "id": 147,
        "q": "Berapakah sandi angka untuk jurusan AKL (Akuntansi)?",
        "opts": [
          "193",
          "259",
          "370",
          "482",
          "518"
        ],
        "ans": 2,
        "exp": "AKL = 370."
      },
      {
        "id": 148,
        "q": "Sandi angka 518 adalah milik jurusan...",
        "opts": [
          "AKL",
          "MPLB",
          "DKV",
          "KULINER",
          "RPL"
        ],
        "ans": 1,
        "exp": "518 = MPLB."
      },
      {
        "id": 149,
        "q": "Berapakah sandi angka untuk jurusan DKV?",
        "opts": [
          "193",
          "370",
          "467",
          "604",
          "915"
        ],
        "ans": 0,
        "exp": "DKV = 193."
      },
      {
        "id": 150,
        "q": "Sandi angka 467 adalah milik jurusan...",
        "opts": [
          "TKJ",
          "TP",
          "MPLB",
          "KULINER",
          "TKR"
        ],
        "ans": 3,
        "exp": "467 = KULINER."
      },
      {
        "id": 151,
        "q": "Jurusan manakah yang memiliki sandi angka 915?",
        "opts": [
          "TKJ",
          "RPL",
          "TKR",
          "TSM",
          "TITL"
        ],
        "ans": 1,
        "exp": "915 = RPL."
      },
      {
        "id": 152,
        "q": "Berapakah sandi angka untuk jurusan TKR?",
        "opts": [
          "604",
          "736",
          "841",
          "915",
          "259"
        ],
        "ans": 1,
        "exp": "TKR = 736."
      },
      {
        "id": 153,
        "q": "Jurusan manakah yang memiliki sandi angka 259?",
        "opts": [
          "TP",
          "TKJ",
          "AKL",
          "DKV",
          "TSM"
        ],
        "ans": 0,
        "exp": "259 = TP."
      },
      {
        "id": 154,
        "q": "Berapakah sandi angka untuk jurusan TITL?",
        "opts": [
          "482",
          "518",
          "736",
          "841",
          "915"
        ],
        "ans": 3,
        "exp": "TITL = 841."
      },
      {
        "id": 155,
        "q": "Jurusan manakah yang memiliki sandi angka 370?",
        "opts": [
          "AKL",
          "MPLB",
          "DKV",
          "KULINER",
          "RPL"
        ],
        "ans": 0,
        "exp": "370 = AKL."
      },
      {
        "id": 156,
        "q": "Berapakah sandi angka untuk jurusan MPLB?",
        "opts": [
          "193",
          "370",
          "467",
          "518",
          "604"
        ],
        "ans": 3,
        "exp": "MPLB = 518."
      },
      {
        "id": 157,
        "q": "Jurusan manakah yang memiliki sandi angka 193?",
        "opts": [
          "TP",
          "TITL",
          "DKV",
          "KULINER",
          "TKJ"
        ],
        "ans": 2,
        "exp": "193 = DKV."
      },
      {
        "id": 158,
        "q": "Berapakah sandi angka untuk jurusan KULINER?",
        "opts": [
          "467",
          "482",
          "518",
          "604",
          "736"
        ],
        "ans": 0,
        "exp": "KULINER = 467."
      },
      {
        "id": 159,
        "q": "Jurusan manakah yang memiliki sandi angka 482?",
        "opts": [
          "TKJ",
          "RPL",
          "TKR",
          "TSM",
          "TP"
        ],
        "ans": 0,
        "exp": "482 = TKJ."
      },
      {
        "id": 160,
        "q": "Berapakah sandi angka untuk jurusan TSM?",
        "opts": [
          "259",
          "370",
          "467",
          "604",
          "841"
        ],
        "ans": 3,
        "exp": "TSM = 604."
      }
    ]
  }
];
