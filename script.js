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