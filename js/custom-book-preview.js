/* 
 * The SFINTEL Frontend js 
 * global  
 * 
 */

(function ($) {
    $(function () {
         $('body').find(".books-dtls-btn").click(function (e) {
       // e.preventDefault();
         $('body').find('.sfintel-books-anchor-link').show();
        // $.ajax({
        //                     url: sfintel_book_preview_js_params.ajax_url,
        //                     data: {
        //                         _wpnonce: sfintel_book_preview_js_params.ajax_nonce,
        //                         action: 'sfintel_book_preview_pull_data_contents'
        //                     },
        //                     type: 'post',
        //                     beforeSend: function () {
        //                       //  $('.wpfm-view-wrap').show();
        //                     },
        //                     success: function (response) {
        //                         console.log(response);
        //                         $('body').find('.footer-static-container-holder').html(response).show();
        //                     },
        //                     complete: function () {
        //                        }
        //                 });
    });

    }); /** Function ends */

}(jQuery));