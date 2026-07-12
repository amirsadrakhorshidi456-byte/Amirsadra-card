let isEnglish = false;

function changeLanguage() {

    isEnglish = !isEnglish;

    if(isEnglish){

        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";

        document.getElementById("name").innerHTML =
        "Amirsadra Khorshidi";

        document.getElementById("title").innerHTML =
        "Online Business Card";

        document.getElementById("about").innerHTML =
        "Student • Technology Enthusiast • Programming Lover";

    }else{

        document.documentElement.lang = "fa";
        document.documentElement.dir = "rtl";

        document.getElementById("name").innerHTML =
        "امیرصدرا خورشیدی";

        document.getElementById("title").innerHTML =
        "کارت ویزیت آنلاین";

        document.getElementById("about").innerHTML =
        "دانش‌آموز | علاقه‌مند به فناوری و برنامه‌نویسی";

    }

}

function copyLink() {
    navigator.clipboard.writeText("https://amirsadrakhorshidi456-byte.github.io/Amirsadra-card/");
    alert("لینک سایت کپی شد.");
}

async function shareSite() {
    if (navigator.share) {
        await navigator.share({
            title: "کارت ویزیت امیرصدرا خورشیدی",
            text: "کارت ویزیت آنلاین من",
            url: "https://amirsadrakhorshidi456-byte.github.io/Amirsadra-card/"
        });
    } else {
        alert("مرورگر شما از اشتراک‌گذاری پشتیبانی نمی‌کند.");
    }
}

window.addEventListener("load",function(){

setTimeout(function(){

const loader=document.getElementById("loader");

loader.style.opacity="0";

setTimeout(function(){

loader.style.display="none";

},800);

},1500);

});
