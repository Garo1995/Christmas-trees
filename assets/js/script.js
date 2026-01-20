$(document).ready(function () {
    $(".phone").mask('+7 (999)-999-99-99');
});


$(document).ready(function () {
    addActiveClass('buy-nordmann-hrefs', 'active-href');
    changeCaseBlock(this, 'buy-nordmann-hrefs', 'buy-nordmann-min-info', 'active-href', 'click-nordmann');
    $('.click-nordmann').on('click', function () {
        changeActiveClassWithClick(this, 'buy-nordmann-hrefs', 'active-href')
        changeCaseBlock(this, 'buy-nordmann-hrefs', 'buy-nordmann-min-info', 'active-href', 'click-nordmann');
    })

    function addActiveClass(parent_menu, active_class) {
        var prt = $('.' + parent_menu);
        var prt_childrens = $(prt).children();
        var prt_child_li = $(prt_childrens).children();
        var first_child = $(prt_child_li)[0]
        if (!$(first_child).hasClass(active_class)) {
            !$(first_child).addClass(active_class)
        }
    }

    function changeActiveClassWithClick($this, parent_block, active_class) {
        var prt = $($this).parents('.' + parent_block);
        var prt_child = $(prt).find('li');
        $(prt_child).each(function () {
            $(this).removeClass(active_class);
        })
        $($this).addClass(active_class);
    }

    function changeCaseBlock($this, case_menu, case_block, active_class, menu_link) {
        var case_menu_block = $('.' + case_menu);
        var case_block_sub = $('.' + case_block);
        var case_block_child = $(case_block_sub).children();
        $(case_block_child).each(function () {
            $(this).css({display: 'none', height: 0});
        })

        if ($($this).hasClass(menu_link)) {
            var this_attr = $($this).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') == this_attr) {
                    $(this).css({display: 'block', height: '100%'});
                }
            })

        } else {
            var active_find = $(case_menu_block).find('.' + active_class);
            var active_find_attr = $(active_find).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') == active_find_attr) {
                    $(this).css({display: 'block', height: '100%'});

                }
            })
        }
    }

});


let swiperGallery = new Swiper(".gallery__slider", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
        '1199': {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
        '991': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        '570': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
    },
    navigation: {
        nextEl: ".gallery-button-next",
        prevEl: ".gallery-button-prev",
    },
    pagination: {
        el: ".gallery-pagination",
        clickable: true,
    },
});

let swiperTwoGallery = new Swiper(".gallery-two__slider", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
        '1199': {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
        '991': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        '570': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
    },
    navigation: {
        nextEl: ".gallery-two-button-next",
        prevEl: ".gallery-two-button-prev",
    },
    pagination: {
        el: ".gallery-two-pagination",
        clickable: true,
    },
});

let swiperThreeGallery = new Swiper(".gallery-three__slider", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
        '1199': {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
        '991': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        '570': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
    },
    navigation: {
        nextEl: ".gallery-three-button-next",
        prevEl: ".gallery-three-button-prev",
    },
    pagination: {
        el: ".gallery-three-pagination",
        clickable: true,
    },
});

let findTree = null
let counter = 1


$(document).ready(function () {
    $('.increment').on('click', incrementsVal);
    $('.decrement').on('click', decrementVal);

    function incrementsVal() {
        if(findTree){
            let parent_val = $(this).parents('.add-catalog-for-shop');
            counter++
            updateValue(counter*findTree.price)
            $(parent_val).find('input[type=number]').val(counter)
        }
    }

    function decrementVal() {
        if(findTree && counter>1){
            let parent_val = $(this).parents('.add-catalog-for-shop');
            counter--
            updateValue(counter*findTree.price)
            $(parent_val).find('input[type=number]').val(counter)
        }
    }

    $('.nordmann-tree-js').each(function (index, item) {
        $(item).attr('product-index', index)
    })

});

const treeList = [
    {
        type: 'Пихты Нордмана',
        size: 'от 1.00м до 1.25м',
        price: 11000,
        image: './assets/img/trees1.png'
    },
    {
        type: 'Пихты Нордмана',
        size: 'от 1.25м до 1.50м',
        price: 13000,
        image: './assets/img/trees1.png'

    },
    {
        type: 'Пихты Нордмана',
        size: 'от 1.50м до 1.75м',
        price: 15400,
        image: './assets/img/trees1.png'

    },
    {
        type: 'Пихты Нордмана',
        size: 'от 1.75м до 2.00м',
        price: 22000,
        image: './assets/img/trees1.png'

    },
    {
        type: 'Пихты Нордмана',
        size: 'от 2.00м до 2.25м',
        price: 25000,
        image: './assets/img/trees1.png'

    },
    {
        type: 'Пихты Нордмана',
        size: 'от 2.25м до 2.50м',
        price: 30000,
        image: './assets/img/trees1.png'

    },
    {
        type: 'Пихты Нордмана',
        size: 'от 2.50м до 3.00м',
        price: 35000,
        image: './assets/img/trees1.png'

    },
    {
        type: 'Пихты Фразера',
        size: 'от 1,00м до 1,25м',
        price: 12000,
        image: './assets/img/result-1.png'
    },
    {
        type: 'Пихты Фразера',
        size: 'от 1,25м до 1,50м',
        price: 14000,
        image: './assets/img/result-1.png'

    },
    {
        type: 'Пихты Фразера',
        size: 'от 1,50м до 1,75м',
        price: 16400,
        image: './assets/img/result-1.png'

    },
    {
        type: 'Пихты Фразера',
        size: 'от 1,75м до 2,00м',
        price: 23000,
        image: './assets/img/result-1.png'

    },
    {
        type: 'Пихты Фразера',
        size: 'от 2,00м до 2,25м',
        price: 26000,
        image: './assets/img/result-1.png'

    },
    {
        type: 'Пихты Фразера',
        size: 'от 2,25м до 2,50м',
        price: 31000,
        image: './assets/img/result-1.png'

    },
    {
        type: 'Канадские сосны',
        size: 'от 1,50м до 1,75см',
        price: 20000,
        image: './assets/img/trees2.png'

    },
    {
        type: 'Канадские сосны',
        size: 'от 1,75м до 2,00см',
        price: 22500,
        image: './assets/img/trees2.png'

    },
    {
        type: 'Канадские сосны',
        size: 'от 2,00м до 2,25см',
        price: 26500,
        image: './assets/img/trees2.png'

    },
]

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}


function createOrder(parentTree) {
    if (parentTree.length) {
        let modalTreeContent = $('.show-tree-options')
        modalTreeContent.show()
        counter = 1
        $('.add-basket').find('input[type=number]').val(counter)

        let treeIndex = +$(parentTree).attr('product-index')
        findTree = treeList.find((item, index) => index === treeIndex)
        if (findTree) {
            modalTreeContent.find('.clinker-fac__pic img')[0].src = findTree.image
            modalTreeContent.find('.mod-facing__info span').html(findTree.type)
            modalTreeContent.find('.mod-facing__info small').html(findTree.size)
            modalTreeContent.find('.mod-facing__info strong').html(numberWithSpaces(findTree.price) + ' ₽')
            updateValue(findTree.price)
        }

    }
}

$('.buy-click__mod').on('click', function (e) {
    e.stopPropagation();
})

function updateValue(value) {
    $('.basket__price').find('span').html(numberWithSpaces(value) + ' ₽')
    $('input[name=product_name]').val(findTree.type)
    $('input[name=product_count]').val(counter)
    $('input[name=product_option]').val(findTree.size)
}


$('.open_modal').on('click', function (e) {
    e.stopPropagation()
    var attr = $(this).attr('data-val');
    var modal = $('#' + attr);
    let parentTreeBlock = $(this).parents('.nordmann__block')
    modal.removeClass('out');
    $('body').css({overflow: 'hidden '});
    modal.fadeIn();
    createOrder(parentTreeBlock)

});

$('.close').on('click', function () {
    var prt = $(this).parents('.modal');
    $('.show-tree-options').hide()
    findTree = null
    counter = 1
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);
    $('body').css({overflow: 'visible '})
})


$(window).on('click', function (event) {
    $('.modal').each(function () {
        var gtattr = $(this).attr('id');
        var new_mod = $('#' + gtattr);
        var md_cnt = $(new_mod).find('.modal-content');

        if (event.target === $(md_cnt)[0]) {
            setTimeout(function () {
                $(new_mod).addClass('out')
                $(new_mod).fadeOut()

            }, 100)
            $('body').css({overflow: 'visible '})
        }
        $('.show-tree-options').hide()
        findTree = null
        counter = 1
        if (event.target === this) {
            setTimeout(function () {
                $(new_mod).addClass('out')
                $(new_mod).fadeOut()

            }, 100)
            $('body').css({overflow: 'visible '})
        }
    })
});










