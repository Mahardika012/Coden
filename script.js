<script>
  // Tampilkan loader saat halaman dimuat
  window.addEventListener('load', function () {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
  });

  // Jika ingin loader muncul saat berpindah halaman (via link)
  const links = document.querySelectorAll("nav a"); // Atau sesuaikan dengan kelas link menu kamu

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Biar bisa nampilin loader dulu
      const targetUrl = this.href;

      document.getElementById('loader').style.display = 'flex';

      setTimeout(() => {
        window.location.href = targetUrl;
      }, 800); // Delay 800ms agar animasi terlihat
    });
  });
</script>
