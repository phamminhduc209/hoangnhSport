/*** MENU ASIDE ***/
jQuery(function ($) {
    "use strict";
    $(".sidebar-linklists").accordion({
        accordion: false,
        speed: 400,
        closedSign: '<i class="fa fa-plus" aria-hidden="true"></i>',
        openedSign: '<i class="fa fa-minus" aria-hidden="true"></i>'
    });
    $(document).ready(function ($) {
        if ($(window).width() >= 768) {
            SalesPop();
        }
    });

    function fisherYates(myArray) {
        var i = myArray.length,
            j, temp;
        if (i === 0) return false;
        while (--i) {
            j = Math.floor(Math.random() * (i + 1));
            temp = myArray[i];
            myArray[i] = myArray[j];
            myArray[j] = temp;
        }
    }

    var collection = new Array();

    $('.jas-sale-pop').removeClass('hidden');
    collection[0] = "<a href='/giay-sneaker-nam-passo-gtk060' class='jas-sale-pop-img mr__20'>" + "<img src='//bizweb.dktcdn.net/thumb/small/100/333/279/products/7-1-1.jpg?v=1537978389010' alt='Giày Sneaker Nam PASSO GTK060'/>" + "</a>" + "<div class='jas-sale-pop-content'>" + "<h3 class='mg__0 mt__5 mb__5 fs__18'>" + "<a href='/giay-sneaker-nam-passo-gtk060' title='Giày Sneaker Nam PASSO GTK060'>Giày Sneaker Nam PASSO GTK060</a>" + "</h3>" + "<span class='fs__12 jas-sale-pop-timeago'></span>" + "</div>" + "<span class='pe-7s-close pa fs__20'></span>";

    $('.jas-sale-pop').removeClass('hidden');
    collection[1] = "<a href='/giay-sneakers-nam-passo-gtk062' class='jas-sale-pop-img mr__20'>" + "<img src='//bizweb.dktcdn.net/thumb/small/100/333/279/products/6-1.jpg?v=1537977914750' alt='Giày Sneakers Nam PASSO GTK062'/>" + "</a>" + "<div class='jas-sale-pop-content'>" + "<h3 class='mg__0 mt__5 mb__5 fs__18'>" + "<a href='/giay-sneakers-nam-passo-gtk062' title='Giày Sneakers Nam PASSO GTK062'>Giày Sneakers Nam PASSO GTK062</a>" + "</h3>" + "<span class='fs__12 jas-sale-pop-timeago'></span>" + "</div>" + "<span class='pe-7s-close pa fs__20'></span>";

    $('.jas-sale-pop').removeClass('hidden');
    collection[2] = "<a href='/giay-vai-unisex-cot-day-tuvi-s' class='jas-sale-pop-img mr__20'>" + "<img src='//bizweb.dktcdn.net/thumb/small/100/333/279/products/5-1-1.jpg?v=1537977485000' alt='Giày Vải Unisex Cột Dây Tuvi's'/>" + "</a>" + "<div class='jas-sale-pop-content'>" + "<h3 class='mg__0 mt__5 mb__5 fs__18'>" + "<a href='/giay-vai-unisex-cot-day-tuvi-s' title='Giày Vải Unisex Cột Dây Tuvi's'>Giày Vải Unisex Cột Dây Tuvi's</a>" + "</h3>" + "<span class='fs__12 jas-sale-pop-timeago'></span>" + "</div>" + "<span class='pe-7s-close pa fs__20'></span>";

    $('.jas-sale-pop').removeClass('hidden');
    collection[3] = "<a href='/giay-sneaker-nam-gadino' class='jas-sale-pop-img mr__20'>" + "<img src='//bizweb.dktcdn.net/thumb/small/100/333/279/products/4-1.jpg?v=1537975841670' alt='Giày Sneaker Nam Gadino'/>" + "</a>" + "<div class='jas-sale-pop-content'>" + "<h3 class='mg__0 mt__5 mb__5 fs__18'>" + "<a href='/giay-sneaker-nam-gadino' title='Giày Sneaker Nam Gadino'>Giày Sneaker Nam Gadino</a>" + "</h3>" + "<span class='fs__12 jas-sale-pop-timeago'></span>" + "</div>" + "<span class='pe-7s-close pa fs__20'></span>";

    $('.jas-sale-pop').removeClass('hidden');
    collection[4] = "<a href='/giay-sneaker-the-thao-unisex-zapas' class='jas-sale-pop-img mr__20'>" + "<img src='//bizweb.dktcdn.net/thumb/small/100/333/279/products/3-1-1.jpg?v=1537975664330' alt='Giày Sneaker Thể Thao Unisex Zapas'/>" + "</a>" + "<div class='jas-sale-pop-content'>" + "<h3 class='mg__0 mt__5 mb__5 fs__18'>" + "<a href='/giay-sneaker-the-thao-unisex-zapas' title='Giày Sneaker Thể Thao Unisex Zapas'>Giày Sneaker Thể Thao Unisex Zapas</a>" + "</h3>" + "<span class='fs__12 jas-sale-pop-timeago'></span>" + "</div>" + "<span class='pe-7s-close pa fs__20'></span>";

    $('.jas-sale-pop').removeClass('hidden');
    collection[5] = "<a href='/giay-slip-on-unisex-tuvi-s' class='jas-sale-pop-img mr__20'>" + "<img src='//bizweb.dktcdn.net/thumb/small/100/333/279/products/2-1-1.jpg?v=1537975253817' alt='Giày Slip On Unisex Tuvi's'/>" + "</a>" + "<div class='jas-sale-pop-content'>" + "<h3 class='mg__0 mt__5 mb__5 fs__18'>" + "<a href='/giay-slip-on-unisex-tuvi-s' title='Giày Slip On Unisex Tuvi's'>Giày Slip On Unisex Tuvi's</a>" + "</h3>" + "<span class='fs__12 jas-sale-pop-timeago'></span>" + "</div>" + "<span class='pe-7s-close pa fs__20'></span>";

    $('.jas-sale-pop').removeClass('hidden');
    collection[6] = "<a href='/giay-sneaker-the-thao-nam-zapas' class='jas-sale-pop-img mr__20'>" + "<img src='//bizweb.dktcdn.net/thumb/small/100/333/279/products/1-1-1.jpg?v=1537972618473' alt='Giày Sneaker Thể Thao Nam Zapas'/>" + "</a>" + "<div class='jas-sale-pop-content'>" + "<h3 class='mg__0 mt__5 mb__5 fs__18'>" + "<a href='/giay-sneaker-the-thao-nam-zapas' title='Giày Sneaker Thể Thao Nam Zapas'>Giày Sneaker Thể Thao Nam Zapas</a>" + "</h3>" + "<span class='fs__12 jas-sale-pop-timeago'></span>" + "</div>" + "<span class='pe-7s-close pa fs__20'></span>";

    $('.jas-sale-pop').removeClass('hidden');
    collection[7] = "<a href='/biti-s-hunter-liteknit-iii-dsm068233reu' class='jas-sale-pop-img mr__20'>" + "<img src='//bizweb.dktcdn.net/thumb/small/100/333/279/products/dsm0682331.jpg?v=1537810965037' alt='Biti's Hunter Liteknit III DSM068233REU'/>" + "</a>" + "<div class='jas-sale-pop-content'>" + "<h3 class='mg__0 mt__5 mb__5 fs__18'>" + "<a href='/biti-s-hunter-liteknit-iii-dsm068233reu' title='Biti's Hunter Liteknit III DSM068233REU'>Biti's Hunter Liteknit III DSM068233REU</a>" + "</h3>" + "<span class='fs__12 jas-sale-pop-timeago'></span>" + "</div>" + "<span class='pe-7s-close pa fs__20'></span>";

    $('.jas-sale-pop').removeClass('hidden');
    collection[8] = "<a href='/biti-s-nam-limited-edition-dsm062133den' class='jas-sale-pop-img mr__20'>" + "<img src='//bizweb.dktcdn.net/thumb/small/100/333/279/products/dsm062133den1.jpg?v=1537810962700' alt='Biti's Nam LIMITED EDITION - DSM062133DEN'/>" + "</a>" + "<div class='jas-sale-pop-content'>" + "<h3 class='mg__0 mt__5 mb__5 fs__18'>" + "<a href='/biti-s-nam-limited-edition-dsm062133den' title='Biti's Nam LIMITED EDITION - DSM062133DEN'>Biti's Nam LIMITED EDITION - DSM062133DEN</a>" + "</h3>" + "<span class='fs__12 jas-sale-pop-timeago'></span>" + "</div>" + "<span class='pe-7s-close pa fs__20'></span>";

    $('.jas-sale-pop').removeClass('hidden');
    collection[9] = "<a href='/biti-s-cao-cap-nu-hunter-feast-dsw051233dod' class='jas-sale-pop-img mr__20'>" + "<img src='//bizweb.dktcdn.net/thumb/small/100/333/279/products/dsw051233dod1.jpg?v=1537810960040' alt='Biti's Cao Cấp Nữ - Hunter Feast - DSW051233DOD'/>" + "</a>" + "<div class='jas-sale-pop-content'>" + "<h3 class='mg__0 mt__5 mb__5 fs__18'>" + "<a href='/biti-s-cao-cap-nu-hunter-feast-dsw051233dod' title='Biti's Cao Cấp Nữ - Hunter Feast - DSW051233DOD'>Biti's Cao Cấp Nữ - Hunter Feast - DSW051233DOD</a>" + "</h3>" + "<span class='fs__12 jas-sale-pop-timeago'></span>" + "</div>" + "<span class='pe-7s-close pa fs__20'></span>";

    $('.jas-sale-pop').removeClass('hidden');
    collection[10] = "<a href='/biti-s-hunter-back-to-school-dsm065033xam' class='jas-sale-pop-img mr__20'>" + "<img src='//bizweb.dktcdn.net/thumb/small/100/333/279/products/dsm065033xam1.jpg?v=1537810957553' alt='Biti's Hunter Back To School DSM065033XAM'/>" + "</a>" + "<div class='jas-sale-pop-content'>" + "<h3 class='mg__0 mt__5 mb__5 fs__18'>" + "<a href='/biti-s-hunter-back-to-school-dsm065033xam' title='Biti's Hunter Back To School DSM065033XAM'>Biti's Hunter Back To School DSM065033XAM</a>" + "</h3>" + "<span class='fs__12 jas-sale-pop-timeago'></span>" + "</div>" + "<span class='pe-7s-close pa fs__20'></span>";

    $('.jas-sale-pop').removeClass('hidden');
    collection[11] = "<a href='/tui-du-lich-the-thao-xpak' class='jas-sale-pop-img mr__20'>" + "<img src='//bizweb.dktcdn.net/thumb/small/100/333/279/products/xpakcam.png?v=1537810944827' alt='Túi du lịch thể thao Xpak'/>" + "</a>" + "<div class='jas-sale-pop-content'>" + "<h3 class='mg__0 mt__5 mb__5 fs__18'>" + "<a href='/tui-du-lich-the-thao-xpak' title='Túi du lịch thể thao Xpak'>Túi du lịch thể thao Xpak</a>" + "</h3>" + "<span class='fs__12 jas-sale-pop-timeago'></span>" + "</div>" + "<span class='pe-7s-close pa fs__20'></span>";

    $('.jas-sale-pop').removeClass('hidden');
    collection[12] = "<a href='/nike-air-presto-essential-848187-001' class='jas-sale-pop-img mr__20'>" + "<img src='//bizweb.dktcdn.net/thumb/small/100/333/279/products/nikeairprestoessentialden.jpg?v=1537810939807' alt='Nike Air Presto Essential 848187-001'/>" + "</a>" + "<div class='jas-sale-pop-content'>" + "<h3 class='mg__0 mt__5 mb__5 fs__18'>" + "<a href='/nike-air-presto-essential-848187-001' title='Nike Air Presto Essential 848187-001'>Nike Air Presto Essential 848187-001</a>" + "</h3>" + "<span class='fs__12 jas-sale-pop-timeago'></span>" + "</div>" + "<span class='pe-7s-close pa fs__20'></span>";

    $('.jas-sale-pop').removeClass('hidden');
    collection[13] = "<a href='/nike-flex-control-mens-898459-004' class='jas-sale-pop-img mr__20'>" + "<img src='//bizweb.dktcdn.net/thumb/small/100/333/279/products/cam.jpg?v=1537810936760' alt='Nike Flex Control Mens 898459-004'/>" + "</a>" + "<div class='jas-sale-pop-content'>" + "<h3 class='mg__0 mt__5 mb__5 fs__18'>" + "<a href='/nike-flex-control-mens-898459-004' title='Nike Flex Control Mens 898459-004'>Nike Flex Control Mens 898459-004</a>" + "</h3>" + "<span class='fs__12 jas-sale-pop-timeago'></span>" + "</div>" + "<span class='pe-7s-close pa fs__20'></span>";

    $('.jas-sale-pop').removeClass('hidden');
    collection[14] = "<a href='/nike-tajun-racer-921669-400' class='jas-sale-pop-img mr__20'>" + "<img src='//bizweb.dktcdn.net/thumb/small/100/333/279/products/do.jpg?v=1537810935477' alt='Nike Tajun Racer 921669-400'/>" + "</a>" + "<div class='jas-sale-pop-content'>" + "<h3 class='mg__0 mt__5 mb__5 fs__18'>" + "<a href='/nike-tajun-racer-921669-400' title='Nike Tajun Racer 921669-400'>Nike Tajun Racer 921669-400</a>" + "</h3>" + "<span class='fs__12 jas-sale-pop-timeago'></span>" + "</div>" + "<span class='pe-7s-close pa fs__20'></span>";

    $('.jas-sale-pop').removeClass('hidden');
    collection[15] = "<a href='/nike-air-presto-flyknit-ultra-835570-002' class='jas-sale-pop-img mr__20'>" + "<img src='//bizweb.dktcdn.net/thumb/small/100/333/279/products/prestoflyknit1.jpg?v=1537810933573' alt='Nike Air Presto Flyknit Ultra 835570-002'/>" + "</a>" + "<div class='jas-sale-pop-content'>" + "<h3 class='mg__0 mt__5 mb__5 fs__18'>" + "<a href='/nike-air-presto-flyknit-ultra-835570-002' title='Nike Air Presto Flyknit Ultra 835570-002'>Nike Air Presto Flyknit Ultra 835570-002</a>" + "</h3>" + "<span class='fs__12 jas-sale-pop-timeago'></span>" + "</div>" + "<span class='pe-7s-close pa fs__20'></span>";

    $('.jas-sale-pop').removeClass('hidden');
    collection[16] = "<a href='/nike-air-max-2017-849559-401' class='jas-sale-pop-img mr__20'>" + "<img src='//bizweb.dktcdn.net/thumb/small/100/333/279/products/airmax1.jpg?v=1537810932137' alt='Nike Air Max 2017 849559-401'/>" + "</a>" + "<div class='jas-sale-pop-content'>" + "<h3 class='mg__0 mt__5 mb__5 fs__18'>" + "<a href='/nike-air-max-2017-849559-401' title='Nike Air Max 2017 849559-401'>Nike Air Max 2017 849559-401</a>" + "</h3>" + "<span class='fs__12 jas-sale-pop-timeago'></span>" + "</div>" + "<span class='pe-7s-close pa fs__20'></span>";

    $('.jas-sale-pop').removeClass('hidden');
    collection[17] = "<a href='/nike-flex-trainer-7-reflect-921705-400' class='jas-sale-pop-img mr__20'>" + "<img src='//bizweb.dktcdn.net/thumb/small/100/333/279/products/00.jpg?v=1537810928410' alt='Nike Flex Trainer 7 Reflect - 921705 - 400'/>" + "</a>" + "<div class='jas-sale-pop-content'>" + "<h3 class='mg__0 mt__5 mb__5 fs__18'>" + "<a href='/nike-flex-trainer-7-reflect-921705-400' title='Nike Flex Trainer 7 Reflect - 921705 - 400'>Nike Flex Trainer 7 Reflect - 921705 - 400</a>" + "</h3>" + "<span class='fs__12 jas-sale-pop-timeago'></span>" + "</div>" + "<span class='pe-7s-close pa fs__20'></span>";

    $('.jas-sale-pop').removeClass('hidden');
    collection[18] = "<a href='/nike-free-tr-7-reflect-aa2238-100' class='jas-sale-pop-img mr__20'>" + "<img src='//bizweb.dktcdn.net/thumb/small/100/333/279/products/01.jpg?v=1537810923537' alt='Nike Free TR 7 Reflect AA2238-100'/>" + "</a>" + "<div class='jas-sale-pop-content'>" + "<h3 class='mg__0 mt__5 mb__5 fs__18'>" + "<a href='/nike-free-tr-7-reflect-aa2238-100' title='Nike Free TR 7 Reflect AA2238-100'>Nike Free TR 7 Reflect AA2238-100</a>" + "</h3>" + "<span class='fs__12 jas-sale-pop-timeago'></span>" + "</div>" + "<span class='pe-7s-close pa fs__20'></span>";

    $('.jas-sale-pop').removeClass('hidden');
    collection[19] = "<a href='/nike-flex-control-898459-004' class='jas-sale-pop-img mr__20'>" + "<img src='//bizweb.dktcdn.net/thumb/small/100/333/279/products/02.jpg?v=1537810916463' alt='Nike Flex Control - 898459 - 004'/>" + "</a>" + "<div class='jas-sale-pop-content'>" + "<h3 class='mg__0 mt__5 mb__5 fs__18'>" + "<a href='/nike-flex-control-898459-004' title='Nike Flex Control - 898459 - 004'>Nike Flex Control - 898459 - 004</a>" + "</h3>" + "<span class='fs__12 jas-sale-pop-timeago'></span>" + "</div>" + "<span class='pe-7s-close pa fs__20'></span>";

    $('.jas-sale-pop').removeClass('hidden');
    collection[20] = "<a href='/nike-air-zoom-train-complate-2-922475-001' class='jas-sale-pop-img mr__20'>" + "<img src='//bizweb.dktcdn.net/thumb/small/100/333/279/products/00b74df1f9be464162967c5a697b67.jpg?v=1537810916100' alt='Nike Air Zoom Train Complate 2-922475-001'/>" + "</a>" + "<div class='jas-sale-pop-content'>" + "<h3 class='mg__0 mt__5 mb__5 fs__18'>" + "<a href='/nike-air-zoom-train-complate-2-922475-001' title='Nike Air Zoom Train Complate 2-922475-001'>Nike Air Zoom Train Complate 2-922475-001</a>" + "</h3>" + "<span class='fs__12 jas-sale-pop-timeago'></span>" + "</div>" + "<span class='pe-7s-close pa fs__20'></span>";

    $('.jas-sale-pop').removeClass('hidden');
    collection[21] = "<a href='/nike-air-zoom-pegasus-34-880555-006' class='jas-sale-pop-img mr__20'>" + "<img src='//bizweb.dktcdn.net/thumb/small/100/333/279/products/0000014e0762cfcdf94b30835f7457.jpg?v=1537810909963' alt='Nike Air Zoom Pegasus 34 - 880555-006'/>" + "</a>" + "<div class='jas-sale-pop-content'>" + "<h3 class='mg__0 mt__5 mb__5 fs__18'>" + "<a href='/nike-air-zoom-pegasus-34-880555-006' title='Nike Air Zoom Pegasus 34 - 880555-006'>Nike Air Zoom Pegasus 34 - 880555-006</a>" + "</h3>" + "<span class='fs__12 jas-sale-pop-timeago'></span>" + "</div>" + "<span class='pe-7s-close pa fs__20'></span>";

    fisherYates(collection);

    function SalesPop() {
        if ($('.jas-sale-pop').length < 0)
            return;
        setInterval(function () {
            $('.jas-sale-pop').fadeIn(function () {
                $(this).removeClass('slideUp');
            }).delay(10000).fadeIn(function () {
                var randomTime = ['1 phút', '2 phút', '3 phút', '4 phút', '5 phút', '6 phút', '7 phút', '8 phút', '9 phút', '10 phút', '11 phút', '12 phút', '13 phút', '14 phút', '15 phút', '16 phút', '17 phút', '18 phút', '19 phút', '20 phút', '21 phút', '22 phút', '23 phút', '24 phút', '25 phút', '26 phút', '27 phút', '28 phút', '29 phút', '30 phút', '31 phút', '32 phút', '33 phút', '34 phút', '35 phút', '36 phút', '37 phút', '38 phút', '39 phút', '40 phút', '41 phút', '42 phút', '43 phút', '44 phút', '45 phút', '46 phút', '47 phút', '48 phút', '49 phút', '50 phút', '51 phút', '52 phút', '53 phút', '54 phút', '55 phút', '56 phút', '57 phút', '58 phút', '59 phút', ],
                    randomTimeAgo = Math.floor(Math.random() * randomTime.length),
                    randomProduct = Math.floor(Math.random() * collection.length),
                    randomShowP = collection[randomProduct],
                    TimeAgo = randomTime[randomTimeAgo];
                $(".jas-sale-pop").html(randomShowP);
                $('.jas-sale-pop-timeago').text('Một khách hàng vừa đặt mua cách đây ' + TimeAgo);
                $(this).addClass('slideUp');
                $('.pe-7s-close').on('click', function () {
                    $('.jas-sale-pop').remove();
                });
            }).delay(6000);
        }, 6000);
    }
});

(function ($) {
    $.fn.extend({
        accordion: function (options) {
            var defaults = {
                accordion: 'true',
                speed: 400,
                closedSign: '[-]',
                openedSign: '[+]'
            };
            var opts = $.extend(defaults, options);
            var $this = $(this);
            $this.find("li").each(function () {
                if ($(this).find("ul").size() != 0) {
                    $(this).find("a:first").after("<em>" + opts.closedSign + "</em>");
                    if ($(this).find("a:first").attr('href') == "#") {
                        $(this).find("a:first").click(function () {
                            return false;
                        });
                    }
                }
            });
            $this.find("div:not('.cate_menu') li em, li:not('.cate_menu') em").click(function () {
                if ($(this).parent().find("ul").size() != 0) {
                    if (opts.accordion) {
                        if (!$(this).parent().find("ul").is(':visible')) {
                            parents = $(this).parent().parents("ul");
                            visible = $this.find("ul:visible");
                            visible.each(function (visibleIndex) {
                                var close = true;
                                parents.each(function (parentIndex) {
                                    if (parents[parentIndex] == visible[visibleIndex]) {
                                        close = false;
                                        return false;
                                    }
                                });
                                if (close) {
                                    if ($(this).parent().find("ul") != visible[visibleIndex]) {
                                        $(visible[visibleIndex]).slideUp(opts.speed, function () {
                                            $(this).parent("li").find("em:first").html(opts.closedSign);
                                        });
                                    }
                                }
                            });
                        }
                    }
                    if ($(this).parent().find("ul:first").is(":visible")) {
                        $(this).parent().find("ul:first").slideUp(opts.speed, function () {
                            $(this).parent("li").find("em:first").delay(opts.speed).html(opts.closedSign);
                        });
                    } else {
                        $(this).parent().find("ul:first").slideDown(opts.speed, function () {
                            $(this).parent("li").find("em:first").delay(opts.speed).html(opts.openedSign);
                        });
                    }
                }
            });

            if ($(window).width() <= 991) {
                $this.find(".cate_menu li em").click(function () {
                    if ($(this).parent().find("ul").size() != 0) {
                        if (opts.accordion) {
                            if (!$(this).parent().find("ul").is(':visible')) {
                                parents = $(this).parent().parents("ul");
                                visible = $this.find("ul:visible");
                                visible.each(function (visibleIndex) {
                                    var close = true;
                                    parents.each(function (parentIndex) {
                                        if (parents[parentIndex] == visible[visibleIndex]) {
                                            close = false;
                                            return false;
                                        }
                                    });
                                    if (close) {
                                        if ($(this).parent().find("ul") != visible[visibleIndex]) {
                                            $(visible[visibleIndex]).slideUp(opts.speed, function () {
                                                $(this).parent("li").find("em:first").html(opts.closedSign);
                                            });
                                        }
                                    }
                                });
                            }
                        }
                        if ($(this).parent().find("ul:first").is(":visible")) {
                            $(this).parent().find("ul:first").slideUp(opts.speed, function () {
                                $(this).parent("li").find("em:first").delay(opts.speed).html(opts.closedSign);
                            });
                        } else {
                            $(this).parent().find("ul:first").slideDown(opts.speed, function () {
                                $(this).parent("li").find("em:first").delay(opts.speed).html(opts.openedSign);
                            });
                        }
                    }
                });
            }

            $(window).on('resize', function () {
                if ($(window).width() <= 991) {
                    $this.find("li > em").click(function () {
                        if ($(this).parent().find("ul").size() != 0) {
                            if (opts.accordion) {
                                if (!$(this).parent().find("ul").is(':visible')) {
                                    parents = $(this).parent().parents("ul");
                                    visible = $this.find("ul:visible");
                                    visible.each(function (visibleIndex) {
                                        var close = true;
                                        parents.each(function (parentIndex) {
                                            if (parents[parentIndex] == visible[visibleIndex]) {
                                                close = false;
                                                return false;
                                            }
                                        });
                                        if (close) {
                                            if ($(this).parent().find("ul") != visible[visibleIndex]) {
                                                $(visible[visibleIndex]).slideUp(opts.speed, function () {
                                                    $(this).parent("li").find("em:first").html(opts.closedSign);
                                                });
                                            }
                                        }
                                    });
                                }
                            }
                            if ($(this).parent().find("ul:first").is(":visible")) {
                                $(this).parent().find("ul:first").slideUp(opts.speed, function () {
                                    $(this).parent("li").find("em:first").delay(opts.speed).html(opts.closedSign);
                                });
                            } else {
                                $(this).parent().find("ul:first").slideDown(opts.speed, function () {
                                    $(this).parent("li").find("em:first").delay(opts.speed).html(opts.openedSign);
                                });
                            }
                        }
                    });
                }
            });
        }
    });
})(jQuery);

$(document).ready(function ($) {
    "use strict";
    lib_backtotop();
    lib_owl();
    lib_category();
    lib_tab();
    lib_menumobile();
    lib___noProCol();
    // lib_menuItemList();

    if (navigator.userAgent.indexOf("Speed Insights") == -1) {
        lib_lazyloadImage();
    }

    $('.product_detail_countdown .product_detail_dealtime').each(function (e) {
        lib_countDown($(this));
    });

    lib_click_swatch();
});

$(document).on('click', '.overlay, .close-popup, .btn-continue, .fancybox-close', function () {
    lib_hidePopup('.awe-popup');
    setTimeout(function () {
        $('.loading').removeClass('loaded-content');
    }, 500);
    return false;
})
var ww = $(window).width();

/********************************************************
product no collection
********************************************************/
function lib___noProCol() {
    $('.no-procol').parent().find('li:last-child').addClass('hidden');
}
window.lib___noProCol = lib___noProCol;

/********************************************************
# Countdown
********************************************************/
function lib_countDown(selector) {
    // Set the date we're counting down to
    // Kiểu thời gian đặt tag endtime_4/15/2018 15:10:00
    var dataTime = selector.attr('data-time');
    var countDownDate = new Date(dataTime).getTime();
    // Update the count down every 1 second
    var x = setInterval(function () {
        // Get todays date and time
        var now = new Date().getTime();
        // Find the distance between now an the count down date
        var distance = countDownDate - now;
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // Display the result in the element
        selector.html("<div><strong>" + days + "</strong><span>Ngày</span></div>" + "<div><strong>" + hours + "</strong><span>Giờ</span></div>" + "<div><strong>" + minutes + "</strong><span>Phút</span></div>" + "<div><strong>" + seconds + "</strong><span>Giây</span></div>");
        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            selector.parent().html("");
        }
    }, 1000);
}

/********************************************************
# Thu gọn menu item
********************************************************/
// function lib_menuItemList(){
// 	if (ww >= 1600){
// 		var menu_limit = 15;
// 	} else if (ww >= 1200 && ww < 1599){
// 		var menu_limit = 11;
// 	} else if (ww >= 992 && ww < 1200){
// 		var menu_limit = 9;
// 	}
// 	var menu_item = $('.category-nav > ul > li').length;

// 	if (menu_item > menu_limit){
// 		menu_limit--;
// 		$('.category-nav > ul').each(function(){
// 			$('.category-nav > ul > li').eq(menu_limit).nextAll().hide().addClass('toggleable');
// 			$(this).append('<li class="more"><a><label>Xem thêm ... </label></a></li>');
// 		});
// 		$('.category-nav > ul').on('click','.more', function(){
// 			if($(this).hasClass('less')){
// 				$(this).html('<a><label>Xem thêm ...</label></a>').removeClass('less');
// 			} else {
// 				$(this).html('<a><label>Thu gọn ... </label></a>').addClass('less');;
// 			}
// 			$(this).siblings('li.toggleable').slideToggle();
// 		});
// 	}
// } window.lib_menuItemList = lib_menuItemList;

/********************************************************
# LazyLoad
********************************************************/
function lib_lazyloadImage() {
    var i = $("[data-lazyload]");
    i.length > 0 && i.each(function () {
        var i = $(this),
            e = i.attr("data-lazyload");
        i.appear(function () {
            i.removeAttr("height").attr("src", e);
        }, {
            accX: 0,
            accY: 120
        }, "easeInCubic");
    });
    var e = $("[data-lazyload2]");
    e.length > 0 && e.each(function () {
        var i = $(this),
            e = i.attr("data-lazyload2");
        i.appear(function () {
            i.css("background-image", "url(" + e + ")");
        }, {
            accX: 0,
            accY: 120
        }, "easeInCubic");
    });
}
window.lib_lazyloadImage = lib_lazyloadImage;

/********************************************************
# SHOW NOITICE
********************************************************/
function lib_showNoitice(selector) {
    $(selector).animate({
        right: '0'
    }, 500);
    setTimeout(function () {
        $(selector).animate({
            right: '-300px'
        }, 500);
    }, 3500);
}
window.lib_showNoitice = lib_showNoitice;

/********************************************************
# SHOW LOADING
********************************************************/
function lib_showLoading(selector) {
    var loading = $('.loader').html();
    $(selector).addClass("loading").append(loading);
}
window.lib_showLoading = lib_showLoading;

/********************************************************
# HIDE LOADING
********************************************************/
function lib_hideLoading(selector) {
    $(selector).removeClass("loading");
    $(selector + ' .loading-icon').remove();
}
window.lib_hideLoading = lib_hideLoading;

/********************************************************
# SHOW POPUP
********************************************************/
function lib_showPopup(selector) {
    $(selector).addClass('active');
}
window.lib_showPopup = lib_showPopup;

/********************************************************
# HIDE POPUP
********************************************************/
function lib_hidePopup(selector) {
    $(selector).removeClass('active');
}
window.lib_hidePopup = lib_hidePopup;

/********************************************************
# CONVERT VIETNAMESE
********************************************************/
function lib_convertVietnamese(str) {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g, "-");
    str = str.replace(/-+-/g, "-");
    str = str.replace(/^\-+|\-+$/g, "");
    return str;
}
window.lib_convertVietnamese = lib_convertVietnamese;


/********************************************************
# SIDEBAR CATEOGRY
********************************************************/
function lib_category() {
    $('.nav-category .fa-angle-down').click(function (e) {
        $(this).parent().toggleClass('active');
    });
}
window.lib_category = lib_category;

/********************************************************
# MENU MOBILE
********************************************************/
$(document).ready(function () {
    $("#nav-mobile").mmenu({
        extensions: ["multiline", "pagedim-black", "border-full"],
        navbars: [{
            position: "top",
            type: 'tabs',
            content: [
                '<a href="#panel-menu"><i class="fa fa-bars"></i> <span>Danh mục</span></a>',
                '<a href="#panel-account"><i class="fa fa-user"></i> <span>Tài khoản</span></a>'
            ]
        }, {
            content: ['prev', 'close']
        }]
    });
});

/********************************************************
/*** FOOTER MOBILE
/********************************************************/
$(document).ready(function (e) {
    if (ww < 768) {
        $('.foo-col .footer-title').on('click', function () {
            $(this).parent().find('.list-menu').toggleClass('active');
            $(this).toggleClass('active');
        });
    }
    if (ww < 992) {
        $('.category-title').on('click', function () {
            $('.category-nav').toggleClass('open');
        });
    }
});

/********************************************************
# MENU MOBILE
********************************************************/
function lib_menumobile() {
    $('.menu-bar').click(function (e) {
        e.preventDefault();
        $('#nav').toggleClass('open');
    });
    $('#nav .fa').click(function (e) {
        e.preventDefault();
        $(this).parent().parent().toggleClass('open');
    });
}
window.lib_menumobile = lib_menumobile;

/********************************************************
# ACCORDION
********************************************************/
function lib_accordion() {
    $('.accordion .nav-link').click(function (e) {
        e.preventDefault;
        $(this).parent().toggleClass('active');
    })
}
window.lib_accordion = lib_accordion;

/********************************************************
# OWL CAROUSEL
********************************************************/
function lib_owl() {
    setTimeout(function () {
        $('.owl-carousel:not(.lib---owl)').each(function () {
            var xxs_item = $(this).attr('data-xxs-items');
            var xs_item = $(this).attr('data-xs-items');
            var md_item = $(this).attr('data-md-items');
            var lg_item = $(this).attr('data-lg-items');
            var hg_item = $(this).attr('data-hg-items');
            var sm_item = $(this).attr('data-sm-items');
            var margin = $(this).attr('data-margin');
            var dot = $(this).attr('data-dot');
            var loop = $(this).attr('data-loop');
            var nav = $(this).attr('data-nav');
            var auto_play = $(this).attr('data-autoplay');
            var auto_height = $(this).attr('data-autoheight');
            var auto_width = $(this).attr('data-autowidth');
            var mouse_drag = $(this).attr('data-mousedrag');
            var touch_drag = $(this).attr('data-touchdrag');
            var pull_drag = $(this).attr('data-pulldrag');
            var free_drag = $(this).attr('data-freedrag');
            if (typeof margin !== typeof undefined && margin !== false) {} else {
                margin = 0;
            }
            if (typeof xxs_item !== typeof undefined && xxs_item !== false) {} else {
                xxs_item = 1;
            }
            if (typeof xs_item !== typeof undefined && xs_item !== false) {} else {
                xs_item = 1;
            }
            if (typeof sm_item !== typeof undefined && sm_item !== false) {} else {
                sm_item = 3;
            }
            if (typeof md_item !== typeof undefined && md_item !== false) {} else {
                md_item = 3;
            }
            if (typeof lg_item !== typeof undefined && lg_item !== false) {} else {
                lg_item = 3;
            }
            if (typeof hg_item !== typeof undefined && hg_item !== false) {} else {
                hg_item = 1;
            }
            if (typeof dot !== typeof undefined && dot !== true) {
                dot = dot;
            } else {
                dot = false;
            }
            if (typeof loop !== typeof undefined && loop !== true) {
                loop = loop;
            } else {
                loop = false;
            }
            if (typeof nav !== typeof undefined && nav !== true) {
                nav = nav;
            } else {
                nav = false;
            }
            if (typeof auto_play !== typeof undefined && auto_play !== true) {
                auto_play = auto_play;
            } else {
                auto_play = false;
            }
            if (typeof auto_height !== typeof undefined && auto_height !== true) {
                auto_height = auto_height;
            } else {
                auto_height = false;
            }
            if (typeof auto_width !== typeof undefined && auto_width !== true) {
                auto_width = auto_width;
            } else {
                auto_width = false;
            }
            if (typeof mouse_drag !== typeof undefined && mouse_drag !== true) {
                mouse_drag = mouse_drag;
            } else {
                mouse_drag = true;
            }
            if (typeof touch_drag !== typeof undefined && touch_drag !== true) {
                touch_drag = touch_drag;
            } else {
                touch_drag = true;
            }
            if (typeof pull_drag !== typeof undefined && pull_drag !== true) {
                pull_drag = pull_drag;
            } else {
                pull_drag = true;
            }
            if (typeof free_drag !== typeof undefined && free_drag !== true) {
                free_drag = free_drag;
            } else {
                free_drag = false;
            }
            $(this).owlCarousel({
                loop: loop,
                margin: Number(margin),
                responsiveClass: true,
                dots: dot,
                nav: nav,
                autoPlay: false,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                responsive: {
                    0: {
                        items: Number(xxs_item)
                    },
                    543: {
                        items: Number(xs_item)
                    },
                    768: {
                        items: Number(sm_item)
                    },
                    992: {
                        items: Number(md_item)
                    },
                    1200: {
                        items: Number(lg_item)
                    },
                    1600: {
                        items: Number(hg_item)
                    }
                },
                autoplay: auto_play,
                autoPlayHoverPause: true,
                autoHeight: false,
                autoWidth: auto_width,
                rewind: true,
                callbacks: true,
                mouseDrag: mouse_drag,
                touchDrag: touch_drag,
                pullDrag: pull_drag,
                freeDrag: free_drag
            });
            // }).on('changed.owl.carousel', check_first_active); // check last active owl item
        })
    }, 300);
}
window.lib_owl = lib_owl;

/* check last active owl-item */
// $(window).resize(function(){
// 	check_first_active();
// });
// function check_first_active(){
// 	ww = $(window).width();
// 	var x = $('.owl-carousel:not(.slider)');
// 	if (ww < 992){
// 		setTimeout(function(){
// 			x.find('.active .product-box').css('border-left','none');
// 			if(x.find('.active').first()){
// 				$(this).css('background','red');
// 				x.find('.active').first().find('.product-box').css({
// 					'border-left' : '{{ settings.color_borders }} 1px solid'
// 				});
// 			}
// 		}, 300);
// 	} else {
// 		setTimeout(function(){
// 			x.find('.active .product-box').css('border-left','transparent 1px solid');
// 		}, 300);
// 	}
// } window.check_first_active = check_first_active;

/********************************************************
# BACKTOTOP
********************************************************/
function lib_backtotop() {
    if ($('.back-to-top').length) {
        var scrollTrigger = 100,
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.back-to-top').addClass('show');
                } else {
                    $('.back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('.back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
}
window.lib_backtotop = lib_backtotop;

/********************************************************
# TAB
********************************************************/
function lib_tab() {
    $(".e-tabs:not(.not-coltabs)").each(function () {
        $(this).find('.tabs-title li:first-child').addClass('current');
        $(this).find('.tab-content').first().addClass('current');
        $(this).find('.tabs-title li').click(function () {
            var tab_id = $(this).attr('data-tab');
            var url = $(this).attr('data-url');
            $(this).closest('.e-tabs').find('.tab-viewall').attr('href', url);
            $(this).closest('.e-tabs').find('.tabs-title li').removeClass('current');
            $(this).closest('.e-tabs').find('.tab-content').removeClass('current');
            $(this).addClass('current');
            $(this).closest('.e-tabs').find("#" + tab_id).addClass('current');
        });
    });
}
window.lib_tab = lib_tab;

/********************************************************
# DROPDOWN
********************************************************/
$('.dropdown-toggle').click(function () {
    $(this).parent().toggleClass('open');
});
$('.btn-close').click(function () {
    $(this).parents('.dropdown').toggleClass('open');
});
$('body').click(function (event) {
    if (!$(event.target).closest('.dropdown').length) {
        $('.dropdown').removeClass('open');
    };
});

/**********************************************************
# OPEN FILTER
**********************************************************/
$('.open-filters').click(function (e) {
    e.stopPropagation();
    $(this).toggleClass('openf');
    $('.opacity_filter').toggleClass('opacity_filter_true');
    $('.dqdt-sidebar').toggleClass('openf');
});

if (ww < 992) {
    $(".filter-group li span label").click(function () {
        $('.dqdt-sidebar').removeClass('openf');
        $('.open-filters').removeClass('openf');
        $('.opacity_filter').removeClass('opacity_filter_true');
    });
    $('.opacity_filter').click(function (e) {
        $('.dqdt-sidebar').removeClass('openf');
        $('.open-filters').removeClass('openf');
        $('.opacity_filter').removeClass('opacity_filter_true');
    });
}

/***********************************************************
# COLLECTION TABS
***********************************************************/
// Create tab
$(".not-coltabs").each(function (e) {
    var $this1 = $(this);
    var datasection = $this1.closest('.not-coltabs').attr('data-section');
    $this1.find('.tabs-title li:first-child').addClass('current');
    $this1.find('.tab-content').first().addClass('current');
    $this1.find('.tabs-title.ajax li').click(function () {
        var $this2 = $(this),
            tab_id = $this2.attr('data-tab'),
            url = $this2.attr('data-url');
        var etabs = $this2.closest('.e-tabs');
        etabs.find('.tab-viewall').attr('href', url);
        etabs.find('.tabs-title li').removeClass('current');
        etabs.find('.tab-content').removeClass('current');
        $this2.addClass('current');
        etabs.find("." + tab_id).addClass('current');
        if (!$this2.hasClass('has-content')) {
            $this2.addClass('has-content');
            getContentTab(url, "." + datasection + " ." + tab_id);
        }
    });
});

//Xử lý mobile
$('.not-coltabs .next').click(function (e) {
    var count = 0
    $(this).parents('.content').find('.tab-content').each(function (e) {
        count += 1;
    })
    var str = $(this).parent().find('.tab-titlexs').attr('data-tab'),
        res = str.replace("tab-", ""),
        datasection = $(this).closest('.not-coltabs').attr('data-section');
    res = Number(res);
    if (res < count) {
        var current = res + 1;
    } else {
        var current = 1;
    }
    action(current, datasection);
})
$('.not-coltabs .prev').click(function (e) {
    var count = 0
    $(this).parents('.content').find('.tab-content').each(function (e) {
        count += 1;
    })
    var str = $(this).parent().find('.tab-titlexs').attr('data-tab'),
        res = str.replace("tab-", ""),
        datasection = $(this).closest('.not-coltabs').attr('data-section'),
        res = Number(res);
    if (res > 1) {
        var current = res - 1;
    } else {
        var current = count;
    }
    action(current, datasection);
})
// Action mobile
function action(current, datasection) {
    $('.' + datasection + ' .tab-titlexs').attr('data-tab', 'tab-' + current);
    var text = '',
        url = '',
        tab_id = '';
    $('.' + datasection + ' ul.tabs.tabs-title.hidden-xs li').each(function (e) {
        if ($(this).attr('data-tab') == 'tab-' + current) {
            var $this3 = $(this);
            title = $this3.find('span').text();
            url = $this3.attr('data-url');
            tab_id = $this3.attr('data-tab');
            //Nếu đã load rồi thì không load nữa
            if (!$this3.hasClass('has-content')) {
                $this3.addClass('has-content');
                getContentTab(url, "." + datasection + " ." + tab_id);
            }
        }
    })
    $("." + datasection + " .tab-titlexs span").text(title);
    $("." + datasection + " .tab-content").removeClass('current');
    $("." + datasection + " .tab-" + current).addClass('current');
}
// Get content cho tab
function getContentTab(url, selector) {
    url = url + "?view=ajaxload";
    // var dataLgg = $(selector).parent().find('.tab-1 .owl-carousel').attr('data-lgg-items');
    // var loading = '<div class="loader loader--style5" title="4"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="#333"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite" /> </rect> <rect x="10" y="0" width="4" height="10" fill="#333"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite" /> </rect> <rect x="20" y="0" width="4" height="10" fill="#333"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite" /> </rect> </svg></div>';
    var loading = '<div class="loader loader--style5" title="4"><svg class=""><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#collection_tab_loading"></use></svg>';
    $.ajax({
        type: 'GET',
        url: url,
        beforeSend: function () {
            $(selector).html(loading);
        },
        success: function (data) {
            var content = $(data);
            setTimeout(function () {
                $(selector).html(content.html());
                ajaxCarousel(selector);
                lib_lazyloadImage();
                lib_click_swatch();
                $('.add_to_cart').click(function (e) {
                    e.preventDefault();
                    var $this = $(this);
                    var form = $this.parents('form');
                    $.ajax({
                        type: 'POST',
                        url: '/cart/add.js',
                        async: false,
                        data: form.serialize(),
                        dataType: 'json',
                        error: addToCartFail,
                        beforeSend: function () {
                            if (window.theme_load == "icon") {
                                lib_showLoading('.btn-addToCart');
                            } else {
                                lib_showPopup('.loading');
                            }
                        },
                        success: addToCartSuccess,
                        cache: false
                    });
                });
            }, 500);
            if (window.BPR)
                return window.BPR.initDomEls(), window.BPR.loadBadges();
        },
        dataType: "html"
    });
}
// Ajax carousel
function ajaxCarousel(selector, dataLgg) {
    $(selector + ' .owl-carousel.ajax-carousel').each(function () {
        var xxs_item = $(this).attr('data-xxs-items');
        var xs_item = $(this).attr('data-xs-items');
        var sm_item = $(this).attr('data-sm-items');
        var md_item = $(this).attr('data-md-items');
        var lg_item = $(this).attr('data-lg-items');
        var hg_item = $(this).attr('data-hg-items');
        var margin = $(this).attr('data-margin');
        var dot = $(this).attr('data-dot');
        var loop = $(this).attr('data-loop');
        var nav = $(this).attr('data-nav');
        var auto_play = $(this).attr('data-autoplay');
        var auto_height = $(this).attr('data-autoheight');
        var auto_width = $(this).attr('data-autowidth');
        var mouse_drag = $(this).attr('data-mousedrag');
        var touch_drag = $(this).attr('data-touchdrag');
        var pull_drag = $(this).attr('data-pulldrag');
        var free_drag = $(this).attr('data-freedrag');
        if (typeof margin !== typeof undefined && margin !== false) {} else {
            margin = 0;
        }
        if (typeof xxs_item !== typeof undefined && xxs_item !== false) {} else {
            xxs_item = 1;
        }
        if (typeof xs_item !== typeof undefined && xs_item !== false) {} else {
            xs_item = 1;
        }
        if (typeof sm_item !== typeof undefined && sm_item !== false) {} else {
            sm_item = 3;
        }
        if (typeof md_item !== typeof undefined && md_item !== false) {} else {
            md_item = 3;
        }
        if (typeof lg_item !== typeof undefined && lg_item !== false) {} else {
            lg_item = 3;
        }
        if (typeof hg_item !== typeof undefined && hg_item !== false) {} else {
            hg_item = 1;
        }
        if (typeof dot !== typeof undefined && dot !== true) {
            dot = dot;
        } else {
            dot = false;
        }
        if (typeof loop !== typeof undefined && loop !== true) {
            loop = loop;
        } else {
            loop = false;
        }
        if (typeof nav !== typeof undefined && nav !== true) {
            nav = nav;
        } else {
            nav = false;
        }
        if (typeof auto_play !== typeof undefined && auto_play !== true) {
            auto_play = auto_play;
        } else {
            auto_play = false;
        }
        if (typeof auto_height !== typeof undefined && auto_height !== true) {
            auto_height = auto_height;
        } else {
            auto_height = false;
        }
        if (typeof auto_width !== typeof undefined && auto_width !== true) {
            auto_width = auto_width;
        } else {
            auto_width = false;
        }
        if (typeof mouse_drag !== typeof undefined && mouse_drag !== true) {
            mouse_drag = mouse_drag;
        } else {
            mouse_drag = true;
        }
        if (typeof touch_drag !== typeof undefined && touch_drag !== true) {
            touch_drag = touch_drag;
        } else {
            touch_drag = true;
        }
        if (typeof pull_drag !== typeof undefined && pull_drag !== true) {
            pull_drag = pull_drag;
        } else {
            pull_drag = true;
        }
        if (typeof free_drag !== typeof undefined && free_drag !== true) {
            free_drag = free_drag;
        } else {
            free_drag = false;
        }
        $(this).owlCarousel({
            loop: loop,
            margin: Number(margin),
            responsiveClass: true,
            dots: dot,
            nav: nav,
            autoPlay: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: Number(xxs_item)
                },
                543: {
                    items: Number(xs_item)
                },
                768: {
                    items: Number(sm_item)
                },
                992: {
                    items: Number(md_item)
                },
                1200: {
                    items: Number(lg_item)
                },
                1600: {
                    items: Number(hg_item)
                }
            },
            autoplay: auto_play,
            autoPlayHoverPause: true,
            autoHeight: false,
            autoWidth: auto_width,
            rewind: true,
            callbacks: true,
            mouseDrag: mouse_drag,
            touchDrag: touch_drag,
            pullDrag: pull_drag,
            freeDrag: free_drag
        })
    })
}


/*** SWATCH PRODUCT IMAGE ***/
function lib_click_swatch() {
    $('.col-variant .swatch-element').on('mouseover', function (e) {
        $('.col-variant .swatch-element').removeClass('variant-color-active');
        $(this).addClass('variant-color-active');
        var img = $(this).attr('data-image');
        if (img != '') {
            $(this).parents('.product-box-swatch').find('.product-thumbnail a img').attr('src', img);
        }
    });
}
window.lib_click_swatch = lib_click_swatch;