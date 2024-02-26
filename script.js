$(document).ready(function () {
  // Fungsi untuk mengambil kutipan motivasi dari API
  function getMotivationalQuote() {
    // Ganti URL_API dengan URL API kutipan motivasi
    var apiUrl = "https://api.quotable.io/random";

    // Lakukan permintaan GET ke API
    $.ajax({
      url: apiUrl,
      method: "GET",
      success: function (data) {
        // Ambil kutipan dari data
        var quote = data.content;

        // Tampilkan kutipan pada loading screen
        $(".motivational-quote").text('"' + quote + '"');
      },
      error: function () {
        console.log("Gagal mengambil kutipan motivasi.");
      },
    });
  }

  // Panggil fungsi untuk mengambil kutipan saat halaman dimuat
  getMotivationalQuote();
});

document.addEventListener("DOMContentLoaded", function () {
  // Disable scrolling
  $("body").addClass("loading-modal");

  // Simulating a longer loading time (e.g., 2000 milliseconds or 2 seconds)
  setTimeout(function () {
    // Enable scrolling and hide the loading screen
    $("body").removeClass("loading-modal");
    $(".loading-modal").fadeOut(1000);

    // Panggil fungsi untuk mengambil kutipan saat halaman dimuat
    getMotivationalQuote();

    // Mulai animasi hanya ketika halaman pertama kali dimuat
    animateOnLoad();
  }, 7000);

  //toggle icon navbar
  let menuIcon = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");

  menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };

  // remove toggle icon and navbar when click navbar links (scroll)
  function closeNavbar() {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  }

  // Close navbar when a link is clicked
  document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', closeNavbar);
  });

  // Close navbar when scrolling
  window.addEventListener('scroll', closeNavbar);

  // scroll sections
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");

  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 100;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        // active navbar links
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
      }
    });

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle("sticky", window.scrollY > 100);
  };
});

// Type Effect
document.addEventListener('DOMContentLoaded', function() {
  const typedSpan = document.querySelector('.typed');
  
  if (typedSpan) {
    let typedItems = typedSpan.getAttribute('data-typed-items');
    typedItems = typedItems.split(',');

    new Typed('.typed', {
      strings: typedItems,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const slideTrack = document.getElementById("slideTrack");
  const slides = document.querySelectorAll(".slide");

  // Duplicate the slides for infinite looping
  slideTrack.innerHTML += slideTrack.innerHTML;

  let slideIndex = 0;
  let sliderInterval;

  function showSlide() {
      const slideWidth = slides[0].offsetWidth + 10; // Consider the margin between slides
      slideTrack.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
  }

  function nextSlide() {
      if (slideIndex >= slides.length / 2) {
          slideIndex = 0;
      }
      slideIndex++;
      showSlide();
  }

  function pauseSlider() {
      clearInterval(sliderInterval);
  }

  function resumeSlider() {
      sliderInterval = setInterval(nextSlide, 3000); // Change 3000 to your desired interval in milliseconds
  }

  // Set an interval for automatic sliding
  resumeSlider();

  // Add event listeners to pause and resume slider on video hover
  slides.forEach((slide) => {
      const video = slide.querySelector(".slide-video");
      video.addEventListener("mouseover", pauseSlider);
      video.addEventListener("mouseout", resumeSlider);
  });
});


document.addEventListener("DOMContentLoaded",function () {
  var currentSlide = 0;
  var slides = document.querySelectorAll('.slide');
  var totalSlides = slides.length;

  function showSlide(index) {
    if (index < 0) {
      currentSlide = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentSlide = 0;
    } else {
      currentSlide = index;
    }

    var translateValue = -currentSlide * 100 + '%';
    document.querySelector('.slider-wrapper').style.transform = 'translateX(' + translateValue + ')';
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  // Auto play
  setInterval(function() {
    nextSlide();
  }, 3000); // Ganti angka ini dengan interval waktu yang diinginkan dalam milidetik
});

document.addEventListener("DOMContentLoaded", async function () {
  const token = 'BQBmoGKR-nGsFzdUihWCXSrMEQUcsQDI4PoUc4K6XPcG_wj1S9r0IkcZEW1D2UDLqtf98-HXXIefWBkxZoo0VehFEQFRW2RQ8CKbGwzdCvoplHZafZwdtoKkUqNkHSuoM5IG9kokBu3VTg2zH9gKHtb2cvdh1uKWYWzn58TiVhUbPF4Ng7Wkwbvhwqld4IhszAMfQe7MZdwsXwxwwTqKpZURpjHK0_g4wapcFNe2kUPFu7eU7UJfFD4SiqY57o-R2W8hB688eKky6qexvUpHyepO';

  async function fetchWebApi(endpoint, method, body) {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      method,
      body: JSON.stringify(body)
    });
    return await res.json();
  }

  const tracksUri = [
    'spotify:track:6XsFgTG4dY768oIB4Dmeu0','spotify:track:5u9cuDcYdOpSRB7fAYXXdp','spotify:track:0SIAFU49FFHwR3QnT5Jx0k','spotify:track:6SE4JAo7T8C7XkFka5bbga','spotify:track:7wlfGt5NkpPT6nRC6yCr7u','spotify:track:25M9piWxSsq0xLcjQW5yz6','spotify:track:6T9Mo2AWa9JeMdlW8VLKJ8','spotify:track:1Ml2eaYgtXPdklPnZeVqqv','spotify:track:5BKJAuVMDyrFvUTo4dIaiK','spotify:track:3ceRaomSZjrE7F5LIEgeUc'
  ];

  async function createPlaylist(tracksUri){
    try {
      const { id: user_id } = await fetchWebApi('v1/me', 'GET');
      
      const playlist = await fetchWebApi(
        `v1/users/${user_id}/playlists`, 'POST', {
          "name": "My recommendation playlist",
          "description": "Playlist created by the tutorial on developer.spotify.com",
          "public": false
        }
      );

      await fetchWebApi(
        `v1/playlists/${playlist.id}/tracks`, 'POST', {
          "uris": tracksUri
        }
      );

      return playlist;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const createdPlaylist = await createPlaylist(tracksUri);
  console.log(createdPlaylist.name, createdPlaylist.id);

  // Display the created playlist in the HTML
  const playlistDiv = document.getElementById('playlist');
  if (playlistDiv && createdPlaylist) {
    const playlistNameElement = document.createElement('p');
    playlistNameElement.textContent = `Playlist Name: ${createdPlaylist.name}`;
    const playlistIdElement = document.createElement('p');
    playlistIdElement.textContent = `Playlist ID: ${createdPlaylist.id}`;
    playlistDiv.appendChild(playlistNameElement);
    playlistDiv.appendChild(playlistIdElement);
  }
});

