// Ensure the DOM is fully loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".sidebar a").forEach((link) => {
    link.addEventListener("click", function () {
      // Remove active class from all links
      document.querySelectorAll(".sidebar a").forEach((link) => {
        link.classList.remove("active");
      });
      // Add active class to the clicked link
      this.classList.add("active");
    });
  });
});
