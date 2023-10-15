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
    behavior: 'smooth'
  });
});

// bagian quantity
const modalQuantityInput = document.getElementById('examplequantity');
const modalIncrementButton = document.getElementById('incrementButton');
const modalDecrementButton = document.getElementById('decrementButton');

// Menambahkan event listener untuk tombol Increment di dalam modal
modalIncrementButton.addEventListener('click', function () {
  modalQuantityInput.value = parseInt(modalQuantityInput.value) + 1;
});

// Menambahkan event listener untuk tombol Decrement di dalam modal
modalDecrementButton.addEventListener('click', function () {
  const currentValue = parseInt(modalQuantityInput.value);
  if (currentValue > 0) { 
    modalQuantityInput.value = currentValue - 1;
  }
});

// untuk menampilkan nama dan harga pesanan
  const pesanButtons = document.querySelectorAll('.pesan-button');
  const modalNamaProduk = document.getElementById('modal-nama-produk');
  const modalHargaProduk = document.getElementById('modal-harga-produk');
  const modalGambarProduk = document.getElementById('modal-gambar-produk');


pesanButtons.forEach((button) => {
  button.addEventListener('click', function() {
    const card = this.closest('.card');
    const namaProduk = card.getAttribute('data-nama');
    const hargaProduk = card.getAttribute('data-harga');
    const gambarProduk = card.getAttribute('data-gambar');

    // Perbarui modal dengan nama dan harga produk yang sesuai
    modalNamaProduk.textContent = namaProduk;
    modalHargaProduk.textContent = `Rp${hargaProduk}`;
    modalGambarProduk.src = gambarProduk;
  });
});




