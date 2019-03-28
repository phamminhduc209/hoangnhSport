(function($){
    "use strict";
    
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

    setTimeout(function () {
        $('.mega-content > ul').masonry({
            itemSelector: '.mega-item'
        });
    }, 500);

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
                var randomTime = ['1 phút', '2 phút', '3 phút', '4 phút', '5 phút', '6 phút', '7 phút', '8 phút', '9 phút', '10 phút', '11 phút', '12 phút', '13 phút', '14 phút', '15 phút', '16 phút', '17 phút', '18 phút', '19 phút', '20 phút', '21 phút', '22 phút', '23 phút', '24 phút', '25 phút', '26 phút', '27 phút', '28 phút', '29 phút', '30 phút', '31 phút', '32 phút', '33 phút', '34 phút', '35 phút', '36 phút', '37 phút', '38 phút', '39 phút', '40 phút', '41 phút', '42 phút', '43 phút', '44 phút', '45 phút', '46 phút', '47 phút', '48 phút', '49 phút', '50 phút', '51 phút', '52 phút', '53 phút', '54 phút', '55 phút', '56 phút', '57 phút', '58 phút', '59 phút',],
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

})(jQuery); // End of use strict