$(document).ready(function () {
    var docHeight = $(document).height();
    var modalContent = "";

    $('.md-section').css({ 'min-height': docHeight });

    $('.modal-container').append(modalContent);

    $(document).on('click', '.inIt', function () {
        var effect = $(this).attr('data-effect');
        //var prevDialog = $('.md-dialog').attr('data-effect');
        //var prevElem = ".md-section[data-effect=" + prevDialog + "]";
        modalContent = "<div class='md-dialog' data-effect=" + effect + "><h2 class='head text-center span-void'>Modal Heading </h2><div class='space-20'><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p> <p class='text-center'> Please press  <code class='lead'> Esc </code> to close modal   </p><div clss='btn-warpper'> <input id='button' type='button' class='btn btn-default close-me' value='Close Popup'></div></div></div>";

        $('.modal-container').append(modalContent);

        $('body, html').animate({ scrollTop: 0 }, 600).addClass('show');
        return false;
    });
    
    $(document).keyup(function (e) {
        if (e.keyCode == 27) { ClosePopup();}
    });

    function ClosePopup() {
        $.when($('body').removeClass('show')).then($('.modal-container').empty());
    }

    $('.modal-container').on('click', '.close-me', function () {
        ClosePopup();
    });

});