import './common'
import "./../scss/style.scss";

import 'bootstrap/js/dist/modal';
$('.image-card').on('click', function(){
    var title = $(this).data('title');
    var src = $(this).data('src');
    $(".modal-body .modal-src").attr('src', src);
    $(".modal-content .modal-header .modal-title").text(title);
    
})
