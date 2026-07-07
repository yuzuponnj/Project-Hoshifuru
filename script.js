// ==============================
// 星降る短冊 - 願いの庭
// script.js Ver.0.1
// ==============================

// ----------------------------
// オープニング
// ----------------------------

window.addEventListener("load", () => {

    const opening = document.getElementById("opening");

    setTimeout(() => {

        opening.style.display = "none";

    }, 5000);

});

// ----------------------------
// 流れ星
// ----------------------------

const shootingStar = document.querySelector(".shooting-star");

function createShootingStar(){

    const top = Math.random() * 40;
    const delay = Math.random() * 3000;

    shootingStar.style.animation = "none";

    shootingStar.style.top = top + "%";

    setTimeout(() => {

        shootingStar.style.animation = "shoot 2s linear";

    }, delay);

}

setInterval(createShootingStar, 12000);

createShootingStar();

// ----------------------------
// 短冊カラー
// ----------------------------

const colors = document.querySelectorAll(".colors button");
const paper = document.querySelector(".tanzaku");

colors.forEach(color=>{

    color.addEventListener("click",()=>{

        paper.style.background =
        getComputedStyle(color).backgroundColor;

    });

});

// ----------------------------
// アイコン
// ----------------------------

let selectedIcon = "⭐";

const iconButtons = document.querySelectorAll(".icons button");

iconButtons.forEach(btn=>{

    btn.addEventListener("click",()=>{

        selectedIcon = btn.textContent;

        iconButtons.forEach(i=>{

            i.style.border="none";

        });

        btn.style.border="3px solid #1f7b41";

    });

});

// ----------------------------
// 願いを結ぶ
// ----------------------------

const submit = document.getElementById("submit");

submit.addEventListener("click",()=>{

    const textarea = document.querySelector("textarea");

    if(textarea.value.trim()==""){

        alert("願いを書いてください🌠");

        return;

    }

    paper.animate(

        [

            {
                transform:"translateY(0px) rotate(0deg)"
            },

            {
                transform:"translateY(-80px) rotate(-8deg)"
            },

            {
                transform:"translateY(-250px) rotate(12deg)",
                opacity:0
            }

        ],

        {

            duration:2000,

            easing:"ease-in-out"

        }

    );

    setTimeout(()=>{

        alert(
            "🌠\n\nあなたの願いを\n夜空へ結びました。"
        );

        textarea.value="";

        paper.style.opacity="1";

    },2100);

});

// ----------------------------
// みんなの願い
// ----------------------------

document
.getElementById("view")
.addEventListener("click",()=>{

    alert(
`🌌 Ver.1.0

次回アップデートで

『みんなの願い』

ページが追加されます！`
    );

});