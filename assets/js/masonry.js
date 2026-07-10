document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");

  if (!grid || typeof window.Masonry !== "function") {
    return;
  }

  const masonry = new window.Masonry(grid, {
    gutter: 10,
    horizontalOrder: true,
    itemSelector: ".grid-item",
  });

  const relayout = () => masonry.layout();
  window.addEventListener("load", relayout);
  setTimeout(relayout, 100);
});
