/*
 * This JavaScript code has been adapted from the article
 * https://css-tricks.com/reading-position-indicator/ authored by Pankaj Parashar,
 * published on the website https://css-tricks.com on the 7th of May, 2014.
 * Couple of changes were made to the original code to make it compatible
 * with the current theme.
 */
const progressBar = document.getElementById("progress");

window.addEventListener("load", () => {
  setTimeout(progressBarSetup, 50);
});

function progressBarSetup() {
  if ("max" in document.createElement("progress")) {
    initializeProgressElement();
    document.addEventListener("scroll", () => {
      if (progressBar) {
        progressBar.setAttribute("value", String(getCurrentScrollPosition()));
      }
    });
    window.addEventListener("resize", initializeProgressElement);
  } else {
    resizeProgressBar();
    document.addEventListener("scroll", resizeProgressBar);
    window.addEventListener("resize", resizeProgressBar);
  }
}

function getCurrentScrollPosition() {
  return window.scrollY;
}

function initializeProgressElement() {
  const navbar = document.getElementById("navbar");
  const navbarHeight = navbar ? navbar.offsetHeight : 0;

  document.body.style.paddingTop = "0px";

  const progressContainer = document.querySelector(".progress-container");
  if (progressContainer) {
    progressContainer.style.paddingTop = "0px";
  }

  if (progressBar) {
    progressBar.style.top = `${navbarHeight}px`;
    progressBar.setAttribute("max", String(getDistanceToScroll()));
    progressBar.setAttribute("value", String(getCurrentScrollPosition()));
  }
}

function getDistanceToScroll() {
  return document.documentElement.scrollHeight - window.innerHeight;
}

function resizeProgressBar() {
  if (progressBar) {
    progressBar.style.width = `${getWidthPercentage()}%`;
  }
}

function getWidthPercentage() {
  const distance = getDistanceToScroll();
  if (!distance) {
    return 0;
  }
  return (getCurrentScrollPosition() / distance) * 100;
}
