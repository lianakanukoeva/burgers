//овердей для секции с отзывами(раскрытие нового окна)
const openComments = document.querySelector(".comment__gen__inf__button__a");
const template = document.querySelector("#overlayTemplate").innerHTML;
const overlay = createOverlay(template);

openComments.addEventListener("click", function() {
    //event.preventDefault('href');
    overlay.open();
    overlay.setContent();
});

function createOverlay(template)
{
    let temporarily = document.createElement("div");

    temporarily.innerHTML=template;

    const overlayElement = temporarily.querySelector(".overlay");
    const contentElement = temporarily.querySelector(".overlay-content");
    const closeElement = temporarily.querySelector(".close");

    temporarily=null;

    closeElement.addEventListener("click", () => {
        document.body.removeChild(overlayElement);
    });

    return {
        open()
        {
            document.body.appentChild(overlayElement);
        },
        close()
        {
            closeElement.click();
        },
        setContent(content)
        {
            contentElement.innerHTML=content;
        }
    };
}


//секция с бургерами СЛАЙДЕР
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const slider = document.querySelector("#slider");
const computed = getComputedStyle(slider).width;

const computed_1 = computed * 5;
const computed_2 = computed_1 - computed;

right.addEventListener('click', function(event)
{
    event.preventDefault();
    let checkright = parseFloat(computed.right);
    if (!checkright)
    {
        checkright=0;
    }
    if(checkright<computed_2)
    {
        slider.style.right = checkright + computed + 'px';//???
    } else {
        checkright=0;
    }
});

left.addEventListener('click', function(event) {
    event.preventDefault();
    let checkright = parseInt(computed.right);
    if (!checkright)
    {
        checkright=0;
    }
    if(checkright>0)
    {
        slider.style.right = checkright - computed + 'px';//????
    }
    else
    {
        checkright=computed_2
    }
});


//всплывающий состав бургера
const sost = document.querySelector('.sost');
const sost_ul = document.querySelector('.sost__ul');

sost.addEventListener('clock', function(event)
{
    sost_ul.style.display='inline-block';
})


//гугл карта
function initMap() {
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 5, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
}
//AIzaSyDKWb-FZFVXtMWrxhIfwzxWxc-OMpIl-Rk


//раскрытие аккордеона