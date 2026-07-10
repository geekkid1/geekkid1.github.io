document.addEventListener("DOMContentLoaded", () => {
  if (!window.bootstrap) {
    return;
  }

  const tooltipElements = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"], [data-toggle="tooltip"]'));
  tooltipElements.forEach((element) => {
    if (window.bootstrap.Tooltip) {
      new window.bootstrap.Tooltip(element);
    }
  });

  const popoverElements = Array.from(document.querySelectorAll('[data-bs-toggle="popover"], [data-toggle="popover"]'));
  popoverElements.forEach((element) => {
    if (window.bootstrap.Popover) {
      new window.bootstrap.Popover(element);
    }
  });
});
