

// $(document).ready(function () {
//     // $('#port-navbar-collapse-1').collapse();
// });

$(document).ready(function(){
    'use strict';

    const navLinks = document.querySelectorAll('.nav-item');
    const menuToggle = document.getElementById('port-navbar-collapse-1');
    const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false});
    // bsCollapse.toggle()
    // bsCollapse.style.display = "none";
    // {bsCollapse.toggle()}
    navLinks.forEach((l) => {
        l.addEventListener('click', () => { bsCollapse.toggle() })
    })

   

});

$(document).ready(function(){

    'use strict';

    setInterval(function(){

        'use strict';

        var windowHeight = $(window).height();
        var containerHeight = $('.dataFlow').height()
        var padded = windowHeight - containerHeight;

        $('.dataFlow').css({
            'padding-top': Math.round(padded / 2) + 'px',
            'padding-bottom': Math.round(padded / 2) + 'px'
        });
    }, 10);
});

