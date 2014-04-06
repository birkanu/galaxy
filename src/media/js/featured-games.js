define('featured-games',
       ['jquery', 'l10n', 'utils', 'urls', 'z'],
       function($, l10n, utils, urls, z) {

    var gettext = l10n.gettext;

    z.body.on('click', '.featured-games-section li', function(e) {
        $('.featured-games-section li').removeClass('selected');
        $(this).addClass('selected');
        //  TODO: Update game detail section with selected game details.
    }).on('click', '.featured-games-section .arrow', function() {
        var $featuredGamesList = $('.featured-games-section ul');
        //  TODO: Scroll featured games section downwards.
    });

    function attachScrollEvents() {
        //  Can only attach after DOM is loaded because
        //  event bubbling does not work on scroll events. 
        $('.featured-games-section ul, .game-media-list').on('scroll', function() {
            var $this = $(this);
            var $arrow = $this.parent().find('.arrow');
            if (this.scrollTop + $this.height() + 30 > this.scrollHeight) {
                $arrow.hide();
            } else {
                $arrow.show();
            }
        });
    }

    return {
        attachScrollEvents: attachScrollEvents
    };
});
