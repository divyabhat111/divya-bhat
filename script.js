// ---------------------------------------------------------
// Divya Bhat portfolio — shared interactivity
// ---------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  /* Mobile nav toggle */
  const toggle = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.textContent = isOpen ? "CLOSE" : "MENU";
    });
    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "MENU";
      });
    });
  }

  /* Scroll-reveal for sections (respects reduced motion via CSS) */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* Highlight active nav link while scrolling (index page only) */
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-links a, .mobile-nav a");
  if (sections.length && navLinks.length) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navLinks.forEach((link) => {
              link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
            });
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => navObserver.observe(s));
  }

  /* Copy email / phone to clipboard */
  document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const value = btn.getAttribute("data-copy");
      const original = btn.textContent;
      try {
        await navigator.clipboard.writeText(value);
        btn.textContent = "COPIED";
        btn.setAttribute("data-copied", "true");
      } catch {
        btn.textContent = "COPY FAILED";
      }
      setTimeout(() => {
        btn.textContent = original;
        btn.removeAttribute("data-copied");
      }, 1800);
    });
  });

  /* Back to top button */
  const toTop = document.querySelector(".to-top");
  if (toTop) {
    window.addEventListener("scroll", () => {
      toTop.classList.toggle("show", window.scrollY > 600);
    });
    toTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* Footer "last drafted" date stamp */
  const stamp = document.querySelector("[data-date-stamp]");
  if (stamp) {
    const now = new Date();
    const formatted = now.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
    });
    stamp.textContent = formatted.replace("/", ".");
  }
});
