$(function () {
    $("a.js-scroll-trigger").on("click", function (event) {
      var target = $(this.getAttribute("href"));
      if (target.length) {
        event.preventDefault();
        $("html, body").stop().animate({
          scrollTop: target.offset().top - 72
        }, 1000);
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const scrollLinks = document.querySelectorAll(".scroll-to");
  
    scrollLinks.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
  
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70, 
            behavior: "smooth",
          });
        }
      });
    });
  });
  
