import './../scss/style.scss';
import './../scss/section_2.scss';
import './../scss/section_3.scss';
import './../scss/section_4.scss';
import './../scss/section_5.scss';
import './../scss/section_6.scss';
import './../scss/section_7.scss';
import './common'
// Generar caracteres aleatorios continuamente como "películas de acción"
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@%+-=*/<>?{}[]";
const out = document.getElementById('cipher');

function randomBlock(rows, cols) {
  let str = "";
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      str += chars[Math.floor(Math.random() * chars.length)];
    }
    str += "\n";
  }
  return str;
}

function loop() {
  out.textContent = randomBlock(10, 40);
  setTimeout(loop, 120);
}
loop();

document.addEventListener("DOMContentLoaded", () => {
  const copyBtn = document.querySelector(".copy-email");
  if (copyBtn) {
    copyBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const email = "josesocrateslopez@gmail.com";
      navigator.clipboard.writeText(email).then(() => {
        showToast();
      }).catch(err => {
        console.error("Error al copiar el correo: ", err);
      });
    });
  }
});

function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".project-images-slider");

  sliders.forEach(slider => {
    const images = slider.querySelectorAll("img");
    let current = 0;

    if (images.length > 1) {
      setInterval(() => {
        images[current].classList.remove("active");
        current = (current + 1) % images.length;
        images[current].classList.add("active");
      }, 3000);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const revealTargets = [];
  const selectors = [
    ".hero > div:first-child > .kicker",
    ".hero .title h1",
    ".hero .role",
    ".hero .platforms a",
    ".hero .hud",
    ".hero .widgets .panel",
    ".section-head > *",
    ".project-copy > .section-kicker",
    ".project-copy > .panel-index",
    ".project-copy > h2",
    ".project-copy > h3",
    ".project-copy > p",
    ".project-copy > .action-row",
    ".project-copy > .tech-list",
    ".project-copy > .supporting-tech",
    ".project-card-copy > *",
    ".media-frame",
    ".project-images-slider",
    ".rm-images-vintage img",
    ".switch-slide-panel-head",
    ".switch-slide-track-demo",
    ".switch-slide-feature-grid article",
    ".pengui-sub-images img",
    ".kidcode-gallery img"
  ];

  document.querySelectorAll("section").forEach(section => {
    const sectionTargets = section.querySelectorAll(selectors.join(","));

    sectionTargets.forEach((target, index) => {
      target.classList.add("scroll-reveal");
      target.style.setProperty("--reveal-delay", `${Math.min(index * 80, 420)}ms`);
      revealTargets.push(target);
    });
  });

  if (!revealTargets.length) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    revealTargets.forEach(target => target.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, revealObserver) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  }, {
    rootMargin: "0px 0px -12% 0px",
    threshold: 0.16
  });

  revealTargets.forEach(target => observer.observe(target));
});




document.addEventListener("DOMContentLoaded", () => {
  // Popup dinámico
  const popup = document.createElement("div");
  popup.classList.add("image-popup");
  popup.innerHTML = `<img src="" alt="popup">`;
  document.body.appendChild(popup);

  const popupImg = popup.querySelector("img");

  // Abrir al dar clic
  document.querySelectorAll("[data-popup]").forEach(img => {
    img.addEventListener("click", () => {
      popupImg.src = img.src;
      popup.classList.add("active");
    });
  });

  // Cerrar
  popup.addEventListener("click", () => {
    popup.classList.remove("active");
  });
});

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".image-modal .close");

document.querySelectorAll(".previewable").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});
document.querySelectorAll(".retro-img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

closeBtn.onclick = () => modal.style.display = "none";
modal.onclick = e => { if (e.target === modal) modal.style.display = "none"; };


async function loadLastPlayedSong() {
  try {
    const response = await fetch("https://kernelwar-api.vercel.app/spotify/currently-song", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    if (data.trackId) {
      document.getElementById("spotify-iframe").src = `https://open.spotify.com/embed/track/${data.trackId}`;
      const widget = document.getElementById("spotify-widget");
      widget.style.display = "block";
      document.getElementById("spotify-status").textContent =
        data.status === "current" ? "Lo que estoy escuchando ahora 🎶" : "Lo último que escuché 🎶";
    }
  } catch (error) {
    console.error("Error fetching last played song:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadLastPlayedSong);
