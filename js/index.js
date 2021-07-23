// تعريف متغير بالزمان المراد الوصول إليه
var countDownDate = new Date("Jan 30, 2022").getTime();

// تحديث الوقت مع مرور كل ثانية
var x = setInterval(function() {

  // وضع تاريخ اليوم والاوقت الآن في متغير
  var now = new Date().getTime();
    
  // حساب المسافة بين التاريخ المراد الوصول إليه ووقت الآن
  var distance = countDownDate - now;
    
  // حساب الاشهر، الأيام، الساعات، الدقائق والثواني
  var monthes = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
  var days = Math.floor(distance % (1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // طباعة الناتج في id فريد لكل عنصر


document.getElementById("month").innerHTML = monthes;
document.getElementById("day").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;
    
}, 1000);


// دالة للتحقق من دخل المستخدم
(function () {

  // إحضار جميع النماذج التي نريد تطبيق التحقق منها
  var forms = document.querySelectorAll('.needs-validation')

  // الاستماع إلى أمر الإرسال والتأكد من الدخل وإضافة صنف التحقق في حال كان صحيحًا
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()