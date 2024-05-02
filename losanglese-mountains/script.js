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

$(document).ready(() => {
  $('.accordion-header').click(function() {
    const targetId = $(this).data('target');
    const targetContent = $(targetId);

    if (!targetContent.hasClass('active')) {
      $('.accordion-content.active').slideUp().removeClass('active');
      targetContent.slideDown().addClass('active');
    } else {
      targetContent.slideUp().removeClass('active');
    }
  });
});