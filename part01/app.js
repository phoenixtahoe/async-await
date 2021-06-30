let baseURL = 'https://deckofcardsapi.com/api/deck'

async function part1(){

    let cardPromise = await axios.get(baseURL + '/new/draw/')

    let { suit, value } = cardPromise.data.cards[0]
    console.log(suit, value)
}

async function part2(){

    let firstCard = await axios.get(baseURL + '/new/draw/')

    let id = firstCard.data.deck_id

    let secondCard = await axios.get(`${baseURL}/${id}/draw/`);

    [firstCard, secondCard].forEach(data => {
        let { suit, value } = data.data.cards[0];
        console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    });
}


async function part3() {

    let deck = await $.getJSON(baseURL + '/new/shuffle/')

    $('#start').on('click', async function (){

        $('#start').text('Next Card')
        let card = await $.getJSON(`${baseURL}/${deck.deck_id}/draw/`);

        if (card.remaining === 0){
            $($('#start')).remove();
        }

        let cImg = card.cards[0].image;

        $('#card').append(
            $('<img>', {
                    src: cImg,
                    css: {
                        transform: `rotate(${50}deg)`,
                        height: '10vh'
                    }
                })
        )
    })

}

$( document ).ready(function() {
    part3()
});