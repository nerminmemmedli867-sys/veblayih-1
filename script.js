// ---- NAVIGATION ----
    function showSection(sectionId) {
      // Hide all sections
      document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active-section'));
      // Remove active from all nav links
      document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
      // Show target section
      document.getElementById(sectionId).classList.add('active-section');
      // Set active nav link
      const navLink = document.getElementById('nav-' + sectionId);
      if (navLink) navLink.classList.add('active');
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ---- ABOUT JS ----
    const joinBtn = document.querySelector(".primary-about-btn");
    const readBtn = document.querySelector(".secondary-about-btn");

    joinBtn.addEventListener("click", () => {
      alert("Welcome to Cyber Club Community!");
    });

    readBtn.addEventListener("click", () => {
      alert("More information about our club will be added soon.");
    });

    document.querySelectorAll(".about-card").forEach(card => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px) scale(1.02)";
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
      });
    });

    // ---- EDUCATION JS ----
    document.querySelectorAll(".edu-card").forEach(card => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-12px) scale(1.02)";
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
      });
    });

    const startBtn = document.querySelector(".primary-btn");
    const learnBtn = document.querySelector(".secondary-btn");

    startBtn.addEventListener("click", () => {
      alert("Welcome to course registration!");
    });

    learnBtn.addEventListener("click", () => {
      alert("More information will be added soon.");
    });

    document.querySelectorAll(".course-btn").forEach(button => {
      button.addEventListener("click", () => {
        alert("Registration successful! Certificate will be provided after completion.");
      });
    });

    // ---- TOURNAMENT JS ----
    document.querySelectorAll(".tournament-card button").forEach(button => {
      button.addEventListener("click", () => {
        alert("Welcome to Cyber Club!");
      });
    });

    document.querySelectorAll(".btn-tourn-primary, .btn-tourn-secondary").forEach(button => {
      button.addEventListener("click", () => {
        alert("Welcome to Cyber Club!");
      });
    });

    document.querySelectorAll(".tournament-card").forEach(card => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
      });
    });

    // ---- CONTACT JS ----
    document.getElementById('cyberRegForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const emailField = document.getElementById('userEmail');
      const submitBtn = document.getElementById('regBtn');
      const feedbackBox = document.getElementById('msgBox');

      submitBtn.innerText = "Connecting...";
      submitBtn.style.opacity = "0.7";
      submitBtn.disabled = true;

      setTimeout(() => {
        const emailValue = emailField.value;
        feedbackBox.innerHTML = `<i class="fa-solid fa-circle-check"></i> Registration Successful! <br><strong>${emailValue}</strong> has been added.`;
        feedbackBox.style.display = "block";
        emailField.value = "";
        submitBtn.innerText = "Register";
        submitBtn.style.opacity = "1";
        submitBtn.disabled = false;
        setTimeout(() => {
          feedbackBox.style.display = "none";
        }, 4000);
      }, 1200);
    });