$('.carousel-slider').slick({
    infinite: true,
    autoplay: true,
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<i class="fa-solid fa-arrow-right carousel-arrow-right text-white p-2"></i>',
    prevArrow: '<i class="fa-solid fa-arrow-left carousel-arrow-left text-white p-2"></i>',
  });



// $(document).ready(function () {
//     var element = $("#inputCount").val();
//     var count = element;

//     var eth = 0.08;
//     $('#eth').text(eth + ' ETH');
    
//     $("#plus").on("click", function () {
//         if (count < 5) {
//             count++;
//             $('#inputCount').val(count);
//             $('#eth').text(count*eth + ' ETH');
//         }
//     });
//     $("#minus").on("click", function () {
//         if (count > 1) {
//             count--;
//             $('#inputCount').val(count);
//             $('#eth').text(count*eth + ' ETH');

//         }
//     });
// });



// var elements = document.querySelectorAll('.item');
// for (var i = 0; i < elements.length; i++) {
//     elements[i].classList.remove('current');
//     elements[i].onclick = function (event) {
//         if (event.target.innerHTML === this.innerHTML) {
//             this.classList.add("current");
//         }
//     }
// }