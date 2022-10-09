$(function() {
//    slider body script
$(".slider-body").slick({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

//   delete script
const deleteItem = document.querySelectorAll('.element-menu .dropdown-delete-item')
let del = document.querySelector('.del-icon-pop')
// handleDelete
del.addEventListener("click", () => {
  document.querySelector('.pop-up-delete').classList.remove("show");
  document.querySelector('.backdrop').classList.remove("show");
});


let bacDel = document.querySelector('.pop-up-back-btn')
// handleDelete
bacDel.addEventListener("click", function popUpBackBtn() {
  document.querySelector('.pop-up-delete').classList.remove("show");
  document.querySelector('.backdrop').classList.remove("show");
});


let selectForDel = undefined

deleteItem.forEach(e => {
  e.addEventListener('click', function deleteItemHandelar(e) {
    document.querySelector('.pop-up-delete').classList.add("show");
    document.querySelector('.backdrop').classList.add("show");
    selectForDel = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement

  })
})
var time = new Date();
console.log(

);
// deleting item
document.querySelector('.pop-up-done-btn').addEventListener('click', () => {
  const date = selectForDel.querySelector('.dates-formate')
  selectForDel.remove()
  document.querySelector('.pop-up-delete').classList.remove("show");
  document.querySelector('.backdrop').classList.remove("show");
  //  here is show time stamp
  console.log(date.textContent);
})


// slider scriopt
for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
  e.style.setProperty('--value', e.value);
  e.style.setProperty('--min', e.min == '' ? '0' : e.min);
  e.style.setProperty('--max', e.max == '' ? '100' : e.max);
  e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}

// date formate changes
let dateCard = document.querySelectorAll('.accordion-button')
dateCard.forEach(r => {
  let getDate = r.querySelector('.dates-formate')
  if (!getDate) return;
  let newDate = new Date(getDate.textContent)
  r.querySelector('.bold-text').textContent = newDate.getDate()
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  r.querySelector('.date').textContent = month[newDate.getMonth()] + ', ' + newDate.getFullYear()
  r.querySelector('.time-text').textContent = newDate.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  })
})

// popover script
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

// rating js
$('.rating').starRating(
  {
    starSize: 1.5,
    showInfo: false
  });

});