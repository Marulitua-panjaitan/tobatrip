// Import gambar-gambar yang sudah kamu punya
import imgSamosir from '../assets/images/bukit-holbung.jpg';
import imgHolbung from '../assets/images/bukitHolbung.jpg';
import imgSipisopiso from '../assets/images/paropo.jpg';
import imgParapat from '../assets/images/kota-parapat.jpeg';
import imgHutaGinjang from '../assets/images/parapat2.jpg';
import imgSitumurun from '../assets/images/situmurun.jpg';
import imgSibea from '../assets/images/sibea-bea.jpg';
import imgTomok from '../assets/images/tomok.jpg';
import imgSiallagan from '../assets/images/huta-siallagan.jpg';
import imgPusukBuhit from '../assets/images/pusuk-buhit.jpg';
import imgBatuHoda from '../assets/images/batu-hoda.jpg';
import imgEfrata from '../assets/images/efrata.jpg';
import imgBukitGajah from '../assets/images/bukit-gajah.jpg';
import imgBukitSiadtaratas from '../assets/images/bukit-siadtaratas.jpg';
import imgBakkara from '../assets/images/lembah-bakkara.jpg';
import imgPantaiParapat from '../assets/images/pantai-parapat.jpg';
import imgTuktuk from '../assets/images/tuk-tuk-siadong.webp';


// Untuk yang belum ada gambarnya, kamu bisa gunakan placeholder atau tambah import sendiri nanti

export const destinations = [
  {
    id: 1,
    title: "Bukit Holbung",
    location: "Samosir",
    category: "Alam",
    rating: 4.9,
    price: "Rp 10.000",
    image: imgSamosir,
    description: "Bukit hijau dengan panorama danau menakjubkan, favorit untuk camping."
  },
  {
    id: 2,
    title: "Paropo",
    location: "Dairi",
    category: "Petualangan",
    rating: 4.8,
    price: "Rp 15.000",
    image: imgSipisopiso, // Placeholder, ganti dengan gambar Paropo jika ada
    description: "Ranu Kumbolo-nya Sumatera, tempat berkemah syahdu di pinggir danau."
  },
  {
    id: 3,
    title: "Air Terjun Situmurun",
    location: "Toba",
    category: "Alam",
    rating: 4.9,
    price: "Rp 50.000", // Estimasi harga sewa kapal
    image: imgSitumurun, 
    description: "Air terjun unik yang alirannya langsung jatuh ke permukaan Danau Toba."
  },
  {
    id: 4,
    title: "Bukit Sibeabea",
    location: "Samosir",
    category: "Budaya",
    rating: 4.8,
    price: "Rp 20.000",
    image: imgSibea, 
    description: "Ikon baru Samosir dengan jalan berkelok ikonik dan patung Yesus."
  },
  {
    id: 5,
    title: "Desa Wisata Tomok",
    location: "Samosir",
    category: "Budaya",
    rating: 4.7,
    price: "Gratis",
    image: imgTomok,
    description: "Situs sejarah Makam Raja Sidabutar dan pertunjukan boneka Sigale-gale."
  },
  {
    id: 6,
    title: "Huta Siallagan",
    location: "Samosir",
    category: "Budaya",
    rating: 4.8,
    price: "Rp 10.000",
    image: imgSiallagan,
    description: "Kampung adat yang terkenal dengan Batu Persidangan kuno peninggalan Raja."
  },
  {
    id: 7,
    title: "Gunung Pusuk Buhit",
    location: "Samosir",
    category: "Petualangan",
    rating: 4.9,
    price: "Gratis",
    image: imgPusukBuhit,
    description: "Gunung suci mitologi Batak, menawarkan trek pendakian yang spiritual."
  },
  {
    id: 8,
    title: "Batu Hoda Beach",
    location: "Samosir",
    category: "Alam",
    rating: 4.6,
    price: "Rp 15.000",
    image: imgBatuHoda,
    description: "Pantai pasir putih di pinggiran danau yang tenang dan bersih."
  },
  {
    id: 9,
    title: "Air Terjun Efrata",
    location: "Samosir",
    category: "Alam",
    rating: 4.7,
    price: "Rp 7.000",
    image: imgEfrata,
    description: "Keindahan tersembunyi dengan debit air yang besar di balik bukit Samosir."
  },
  {
    id: 10,
    title: "Bukit Gajah Bobok",
    location: "Karo",
    category: "Petualangan",
    rating: 4.7,
    price: "Rp 10.000",
    image: imgBukitGajah,
    description: "Spot camping terbaik untuk berburu matahari terbit (sunrise)."
  },
  {
    id: 11,
    title: "Bukit Siadtaratas",
    location: "Dairi",
    category: "Alam",
    rating: 4.8,
    price: "Rp 10.000",
    image: imgBukitSiadtaratas,
    description: "Menyuguhkan lekukan perbukitan hijau yang memagari birunya Danau Toba."
  },
  {
    id: 12,
    title: "Lembah Bakkara",
    location: "Humbang Hasundutan",
    category: "Budaya",
    rating: 4.8,
    price: "Gratis",
    image: imgBakkara,
    description: "Tanah kelahiran Raja Sisingamangaraja dengan panorama sawah dan sungai."
  },
  {
    id: 13,
    title: "Pantai Bebas Parapat",
    location: "Simalungun",
    category: "Alam",
    rating: 4.5,
    price: "Gratis",
    image: imgPantaiParapat,
    description: "Wajah baru Parapat sebagai ruang publik untuk menikmati suasana danau."
  },
  {
    id: 14,
    title: "Tuktuk Siadong",
    location: "Samosir",
    category: "Kuliner",
    rating: 4.7,
    price: "Gratis",
    image: imgTuktuk,
    description: "Pusat turis di Samosir dengan perpaduan budaya Batak dan nuansa mancanegara."
  },
  {
    id: 15,
    title: "Huta Ginjang",
    location: "Tapanuli Utara",
    category: "Petualangan",
    rating: 4.8,
    price: "Rp 5.000",
    image: imgHutaGinjang,
    description: "Puncak tertinggi untuk melihat keseluruhan Danau Toba dari ketinggian."
  }
];