import { push } from "svelte-spa-router";

export function checkScrolling(page, direction) {
    let _startY;
    setTimeout(() => {

        const inbox = document.querySelector("#" + page);
        inbox.addEventListener(
            "touchstart",
            (e: any) => {
                _startY = e.touches[0].pageY;
                console.log('Scroll start _startY', _startY);
            },
            { passive: true }
        );

        inbox.addEventListener(
            "touchmove",
            (e: any) => {
                const y = e.touches[0].pageY;
                // Activate custom pull-to-refresh effects when at the top of the container
                // and user is scrolling up.
                console.log('Scroll start Y', y);
                if (
                    document.scrollingElement.scrollTop === 0 &&
                    y > _startY) {
                    // refresh inbox.
                    // alert(' Touch move ');
                    console.log('True; scroll up ');

                    if (direction == 'up')
                        switch (page) {
                            // case 'userprofile': push('/Landing'); break;
                            case 'landing': push('/Home'); break;
                        }
                }
                //  else
                // console.log('Scroll Dif', document.scrollingElement.scrollTop === (document.scrollingElement.scrollHeight-window.innerHeight))
                if (
                    document.scrollingElement.scrollTop >= (document.scrollingElement.scrollHeight - window.innerHeight) &&
                    y < _startY) {
                    console.log('True; scroll down ');

                    if (direction == 'down')
                        switch (page) {
                            case 'userprofile': push('/landing'); break;
                        }
                    // return false;
                }
            },
            { passive: true }
        );
    })
}

