$(document).ready(() => {
  const navbarStickyStartPos = $('.navbar-sticky').offset().top;

  const stickyNavbar = () => {
    let scrollTop = $(window).scrollTop();

    if (scrollTop > navbarStickyStartPos) {
      $('body').addClass('sticky');
    } else {
      $('body').removeClass('sticky');
    }
  };

  stickyNavbar();

  $(window).scroll(() => {
    stickyNavbar();
  });
});
