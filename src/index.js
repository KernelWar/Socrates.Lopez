import 'bootstrap/dist/css/bootstrap.min.css';
import "./scss/style.scss";
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/js/dist/tooltip';
import 'bootstrap/js/dist/modal';
import 'animate.css';
import 'jquery-aniview'
$('.aniview').AniView({
    animateClass: 'animate__animated',
    animateThreshold: 50,
    scrollPollInterval: 50
});
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
$('.image-card').on('click', function(){
    var title = $(this).data('title');
    var src = $(this).data('src');
    $(".modal-body .modal-src").attr('src', src);
    $(".modal-content .modal-header .modal-title").text(title);
    
})
