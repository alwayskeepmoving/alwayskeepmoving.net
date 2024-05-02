// 在网页 DOM 加载后运行
document.addEventListener("DOMContentLoaded", function () {
    // inst
    // 获取分享按钮
    const insshared = document.querySelectorAll('.fenxianged');
    const insshare = document.querySelectorAll('.fenxiang');
    // 添加单击事件监听器
    if (insshared.length > 0) {
        insshared.forEach((element) => {
            element.addEventListener('click', () => {
                navigator.share({
                    title: '照片墙',
                    text: '分享!',
                    url: 'https://www.alwayskeepmoving.net',
                });
            });

            element.addEventListener('click', function () {
                this.classList.add('active');
                insshare[0].classList.add('active');
                setTimeout(() => {
                    this.classList.remove('active');
                    insshare[0].classList.remove('active');
                }, 500);
            });
        });
    }

    // 获取所有点赞按钮
    const likedButtons = document.querySelectorAll('.liked');
    const likeButtons = document.querySelectorAll('.like');
    // 添加单击事件监听器
    likedButtons.forEach(function (likedButton, index) {
        likedButton.addEventListener('click', function () {
            this.classList.toggle('active');
            likeButtons[index].classList.toggle('active');
        });
    });

    // 获取所有星星按钮
    const star = document.querySelectorAll('.star');
    const stared = document.querySelectorAll('.stared');
    // 添加单击事件监听器
    stared.forEach(function (stared, index) {
        stared.addEventListener('click', function () {
            this.classList.toggle('active');
            star[index].classList.toggle('active');
        });
    });

    // 获取所有评论按钮
    const comment = document.querySelectorAll('.comment');
    const commented = document.querySelectorAll('.commented');
    // 添加单击事件监听器
    if (commented.length > 0) {
        commented.forEach(function (item, index) {
            item.addEventListener('click', function () {
                this.classList.add('active');
                comment[index].classList.add('active');
                setTimeout(() => {
                    this.classList.remove('active');
                    comment[index].classList.remove('active');
                }, 500);
            });
        });
    }

    let topFx = document.querySelector('.top-fxbox');
    // 获取汉堡菜单元素
    let hamburger = document.querySelector('.hamburger');
    const body = document.querySelector('body');
    const shop = document.querySelector('.shop');
    const yjjx = document.querySelector('.yjjx');
    const shopfx = document.querySelector('.shopfx');
    const shopMenu = document.querySelector('.shopmenubox');
    const downfx = document.querySelector('.downfxbox');
    const globalfxdown = document.querySelector('.globalfx-down');

    let isShopfxExpanded = false;

    // 定义一个标记变量，用来记录.shopmenu的状态
    let isExpanded = false;

    // 监听.shop元素的点击事件 
    if (shop) {
        shop.addEventListener('click', () => {
            // 切换.shopmenu元素的透明度
            if (isExpanded) {
                shopMenu.style.height = '50px';
                body.style.overflow = 'auto';
                globalfx.style.opacity = '0';
                hamburger.style.opacity = '100%';
                hamburger.classList.remove('noclick');
            } else {
                shopMenu.style.height = '100%';
                body.style.overflow = 'hidden';
                globalfx.style.opacity = '100%';
                hamburger.style.opacity = '30%';
                hamburger.classList.add('noclick');
            }

            // 更新标记变量的值
            isExpanded = !isExpanded;

            // .shop按钮的动效
            if (isShopfxExpanded) {
                shopfx.style.opacity = '0';
            } else {
                shopfx.style.opacity = '1';
            }
            isShopfxExpanded = !isShopfxExpanded;
        });
    }

    function toggleHeaderFx() {
        if (topFx.classList.contains('expanded')) {
            topFx.style.height = '50px';
            topFx.classList.remove('expanded');
            topFx.classList.remove('active');
        } else {
            topFx.style.height = '100%';
            topFx.classList.add('expanded');
            topFx.classList.add('active');
        }
    }

    if (hamburger) {
        hamburger.addEventListener('click', toggleHeaderFx);
        let lines = document.querySelectorAll('.hamburger span');

        // 给汉堡菜单添加点击事件监听器
        hamburger.addEventListener('click', function () {
            // 如果没有按下，就是个汉堡
            if (hamburger.classList.contains('active')) {
                lines[0].style.transform = 'none';
                lines[1].style.opacity = '1';
                lines[2].style.transform = 'none';
                hamburger.classList.remove('active');
                body.style.overflow = 'auto';


                // 如果按下，变成“X”
            } else {
                lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                lines[1].style.opacity = '0';
                lines[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
                hamburger.classList.add('active');
                body.style.overflow = 'hidden';

            }
        });
    }


    //获取.globalfx 元素
    const globalfx = document.querySelector('.globalfx');

    // 定义一个标志变量，用于跟踪汉堡按钮的状态
    let hamburgerActive = false;

    // 监听汉堡按钮的点击事件
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            // 切换汉堡按钮的状态
            hamburgerActive = !hamburgerActive;

            if (hamburgerActive) {
                // 如果汉堡按钮处于激活状态，则设置 .globalfx 元素的透明度和模糊
                globalfx.style.opacity = '100%';
            }
            else {
                // 否则，重置 .globalfx 元素的透明度
                globalfx.style.opacity = '0';
            }

            // 让商店按钮透明度降低70%并不可点击
            if (isExpanded) {
                shop.style.opacity = '100%';
                shop.classList.remove('noclick');
            } else {
                shop.style.opacity = '30%';
                shop.classList.add('noclick');
            }

            if (isExpanded) {

                shopfx.classList.remove('noclick');
            } else {
                shopfx.classList.add('noclick');
            }

            // 更新标记变量的值
            isExpanded = !isExpanded;
        });
    }

    // 监听.yjjx元素的点击事件
    if (yjjx) {
        yjjx.addEventListener('click', () => {
            // 切换.headerdown元素的高度，以及按钮特效蒙版的透明度
            if (isExpanded) {
                downfx.style.height = '0';
                globalfxdown.style.opacity = '0';
                body.style.overflow = 'auto';

            } else {
                downfx.style.height = '400px';
                globalfxdown.style.opacity = '100%';
                body.style.overflow = 'hidden';
            }

            // 更新标记变量的值
            isExpanded = !isExpanded
        });
    }

    // 获取分享按钮
    const sr = document.querySelectorAll('.share')[0];
    // 添加单击事件监听器
    if (sr) {
        sr.addEventListener('click', () => {
            navigator.share({
                title: '公告',
                text: '分享!',
                url: 'https://www.alwayskeepmoving.net',
            });
        });
    }

    // cookies
    var cookiesLink = document.getElementById("cookies");
    if (cookiesLink) {
        cookiesLink.addEventListener("click", function () {
            this.innerHTML = "🍪🍪🍪";
            setTimeout(() => {
                this.innerHTML = "Cookies";
            }, 1000);
        });
    }

});