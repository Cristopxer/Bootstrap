$(document).ready(function () {
    $('#mycarousel').carousel({ interval: 2000 });
    $('#carouselButton').click(function () {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        } else if ($('#carouselButton').children('span').hasClass('fa-play')) {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
    $('#login').click(function () {
        $('#loginModal').modal('toggle');
        $('#loginModal').on('shown.bs.modal', function () {
            $('#exampleInputEmail3').focus()
        })
        $('#loginModal').modal('show');
    });
    $('#reserve').click(function () {
        $('#reservationModal').modal('toggle');
        $('#reservationModal').on('shown.bs.modal', function () {
            $('#g1').focus()
        })
        $('#reservationModal').modal('show');
    });
});