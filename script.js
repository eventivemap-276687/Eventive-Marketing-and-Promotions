let carouselInner = document.querySelector('.carousel-inner');
let items = document.querySelectorAll('.carousel-inner img, .carousel-inner video');
let index = 0;
let interval;

// 启动轮播
function startCarousel(){
    interval = setInterval(() => {
        index = (index + 1) % items.length;
        updateCarousel();
    }, 8000);
}

// 停止轮播
function stopCarousel(){
    clearInterval(interval);
}

// 更新位置
function updateCarousel(){
    carouselInner.style.transform = `translateX(-${index * 100}%)`;
}

// 鼠标进入暂停
carouselInner.addEventListener("mouseenter", stopCarousel);

// 鼠标离开继续
carouselInner.addEventListener("mouseleave", startCarousel);

// 视频播放时暂停
document.querySelectorAll('.carousel-inner video').forEach(video => {

    video.addEventListener("play", stopCarousel);
    video.addEventListener("pause", startCarousel);
    video.addEventListener("ended", startCarousel);

});

// 按钮控制
document.getElementById('next').onclick = () => {
    stopCarousel();
    index = (index + 1) % items.length;
    updateCarousel();
    startCarousel();
}

document.getElementById('prev').onclick = () => {
    stopCarousel();
    index = (index - 1 + items.length) % items.length;
    updateCarousel();
    startCarousel();
}

// 启动轮播
startCarousel();

// 找到所有服务图片
document.querySelectorAll('.service-item img').forEach(img => {
    img.addEventListener('click', () => {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src; // 显示点击的图片
    });
});

// 关闭按钮
document.getElementById('lightbox-close').onclick = () => {
    document.getElementById('lightbox').style.display = 'none';
}

// 点击遮罩也可以关闭
document.getElementById('lightbox').onclick = (e) => {
    if(e.target.id === 'lightbox') {
        document.getElementById('lightbox').style.display = 'none';
    }
}