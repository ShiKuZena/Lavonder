$(function(){
    $(".navis #pills-home-tab").click(function(){
        $(".tab-content .tab-pane").not("#pills-home,#pills-homea,#pills-homeb").removeClass("active show")
        $(".num-pag a:first-child span").addClass("active");
        $(".num-pag a span").not(".num-pag a:first-child span").removeClass("active");
        $(".num-pag a:first-child span").attr("data-bs-target","#pills-home")
        $(".num-pag a:nth-child(2) span").attr("data-bs-target","#pills-homea")
        $(".num-pag a:nth-child(3) span").attr("data-bs-target","#pills-homeb")
    })
})
$(function(){
    $(".navis #pills-profile-tab").click(function(){
        $(".tab-content .tab-pane").not("#pills-profile,#pills-profilea,#pills-profileb").removeClass("active show")
        $(".num-pag a:first-child span").addClass("active");
        $(".num-pag a span").not(".num-pag a:first-child span").removeClass("active");
        $(".num-pag a:first-child span").attr("data-bs-target","#pills-profile")
        $(".num-pag a:nth-child(2) span").attr("data-bs-target","#pills-profilea")
        $(".num-pag a:nth-child(3) span").attr("data-bs-target","#pills-profileb")
    })
})
$(function(){
    $(".navis #pills-contact-tab").click(function(){
        $(".tab-content .tab-pane").not("#pills-contact,#pills-contacta,#pills-contactb").removeClass("active show")
        $(".num-pag a:first-child span").addClass("active");
        $(".num-pag a span").not(".num-pag a:first-child span").removeClass("active");
        $(".num-pag a:first-child span").attr("data-bs-target","#pills-contact")
        $(".num-pag a:nth-child(2) span").attr("data-bs-target","#pills-contacta")
        $(".num-pag a:nth-child(3) span").attr("data-bs-target","#pills-contactb")
    })
})

$(function() {
    const container_a = ['#pills-profile', '#pills-profilea', '#pills-profileb'];

    container_a.forEach(function (container) {
        const $row = $(`${container} .row`);
        const $columns = $row.children('.col-md-3').get();

        $columns.sort(() => Math.random() - 0.5);
        $columns.forEach(function (col) {
            $row.append(col);
        });
    });
    const container_b = ['#pills-contact', '#pills-contacta', '#pills-contactb'];

    container_b.forEach(function (container) {
        const $row = $(`${container} .row`);
        const $columns = $row.children('.col-md-3').get();

        $columns.sort(() => Math.random() - 0.5);
        $columns.forEach(function (col) {
            $row.append(col);
        });
    });
});

