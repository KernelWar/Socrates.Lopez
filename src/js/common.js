import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import 'jquery-aniview'
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/js/dist/tooltip';
$('.aniview').AniView({
    animateClass: 'animate__animated',
    animateThreshold: 50,
    scrollPollInterval: 50
});
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})