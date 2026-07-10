document.addEventListener("DOMContentLoaded", () => {
  if (typeof window.mediumZoom === "function") {
    window.mediumZoom("[data-zoomable]", {
      background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee",
    });
  }
});
