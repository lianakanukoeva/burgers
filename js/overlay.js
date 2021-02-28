const comment = document.querySelectorAll(".comment__gen__photo");
const openButton = document.querySelectorAll(".comment__gen__inf__button__a");
const template = document.querySelector("#overlayTemplate").innerHTML;
let overlay;

for (i=0; i<comment.length; i++)
{
    overlay = createOverlay(template);
    openButton[i].addEventListener("click", function () {
        event.preventDefault('href');
        overlay.open();
        overlay.setContent(overlay-content);
    });

    function createOverlay(template) {
        let fragment = document.createElement('div');

        fragment.innerHTML = template;

        const overlayElement = fragment.querySelector(".overlay");
        const contentElement = fragment.querySelector(".overlay-content");
        const closeElement = fragment.querySelector(".close");

        fragment = null;

        overlayElement.addEventListener("click", e => {
            if (e.target === overlayElement) {
                document.body.removeChild(overlayElement);
            }
        });
        closeElement.addEventListener("click", () => {
            document.body.removeChild(overlayElement);
        });

        return {
            open() {
                document.body.appendChild(overlayElement);
            },
            close() {
                closeElement.click();
            },
            setContent(content) {
                contentElement.innerHTML = content;
            }
        };
    }
}