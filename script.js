// Bagian Navbar
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('blur');
  } else {
    navbar.classList.remove('blur');
  }
});

// Bagian tombol arrow
const scrollToTopButton = document.getElementById('scrollToTopButton');
window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 100) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

// Tambahkan event listener saat tombol diklik
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// Mendapatkan elemen total harga
const modalTotalHarga = document.getElementById('modal-harga-produk');
const modalQuantityInput = document.getElementById('examplequantity');
const modalIncrementButton = document.getElementById('incrementButton');
const modalDecrementButton = document.getElementById('decrementButton');

let hargaPerProduk = 0; // Inisialisasi harga per produk

// Fungsi untuk menghitung dan memperbarui total harga
function updateTotalHarga() {
  const quantity = parseInt(modalQuantityInput.value);
  const totalHarga = hargaPerProduk * quantity;
  modalTotalHarga.textContent = `Rp${totalHarga}`;
}

// Bagian quantity
modalIncrementButton.addEventListener('click', function () {
  modalQuantityInput.value = parseInt(modalQuantityInput.value) + 1;
  updateTotalHarga();
});

modalDecrementButton.addEventListener('click', function () {
  const currentValue = parseInt(modalQuantityInput.value);
  if (currentValue > 0) {
    modalQuantityInput.value = currentValue - 1;
    updateTotalHarga();
  }
});

// Untuk menampilkan nama dan harga pesanan
const pesanButtons = document.querySelectorAll('.pesan-button');
const modalNamaProduk = document.getElementById('modal-nama-produk');
const modalGambarProduk = document.getElementById('modal-gambar-produk');

pesanButtons.forEach((button) => {
  button.addEventListener('click', function () {
    const card = this.closest('.card');
    const namaProduk = card.getAttribute('data-nama');
    const gambarProduk = card.getAttribute('data-gambar');

    // Mengambil harga per produk dari atribut HTML
    hargaPerProduk = parseFloat(card.getAttribute('data-harga'));

    // Perbarui modal dengan nama dan harga produk yang sesuai
    modalNamaProduk.textContent = namaProduk;
    modalGambarProduk.src = gambarProduk;

    // Set nilai quantity ke 0 dan perbarui total harga
    modalQuantityInput.value = 0;
    updateTotalHarga();
  });
});

// Alert success
document.addEventListener('DOMContentLoaded', function () {
  const pesanSekarangBtn = document.getElementById('pesanSekarangBtn');
  const popupMessage = document.getElementById('popupMessage');
  const namaInput = document.getElementById('examplenama');
  const telpInput = document.getElementById('exampletelp');
  const alamatTextarea = document.getElementById('examplealamat');
  const quantityInput = document.getElementById('examplequantity');

  pesanSekarangBtn.addEventListener('click', function () {
    if (namaInput.value && telpInput.value && alamatTextarea.value && quantityInput.value > 0) {
      // Set pesan yang akan ditampilkan pada jendela pop-up
      popupMessage.textContent = 'Pesanan Anda Segera kami Proses! Tunggu Pesanan Anda sampai';

      // Tampilkan jendela pop-up
      const popup = new bootstrap.Modal(document.getElementById('popup'));
      popup.show();
    } else {
      alert('Harap isi semua elemen formulir terlebih dahulu!');
    }
  });
});
