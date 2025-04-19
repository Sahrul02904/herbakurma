document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = this.nama.value;
  const wa = this.wa.value;
  const alamat = this.alamat.value;
  const paket = this.paket.value;

  // WhatsApp Message
  const pesan = `Halo, saya ingin memesan HerbaKurma:\n\nNama: ${nama}\nWA: ${wa}\nAlamat: ${alamat}\nPaket: ${paket}`;
  const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(pesan)}`;

  // Google Form submission via hidden form
  const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSfXXXXXXX/formResponse"; // Ganti dengan URL Google Form kamu
  const data = new FormData();
  data.append("entry.1234567890", nama);
  data.append("entry.9876543210", wa);
  data.append("entry.1112131415", alamat);
  data.append("entry.5678901234", paket);

  fetch(formURL, {
    method: "POST",
    mode: "no-cors",
    body: data
  }).then(() => {
    // Buka WhatsApp setelah data dikirim
    window.open(whatsappUrl, "_blank");
    alert("Pesanan Anda telah dikirim! Kami akan segera menghubungi.");
    document.getElementById("orderForm").reset();
  });
});
