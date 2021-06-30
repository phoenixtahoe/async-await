function part1() {

    let num = 5

    let baseURL = `http://numbersapi.com/${num}?json`

    let futureResolvedPromise = axios.get(baseURL)
    Promise.resolve(futureResolvedPromise)
    .then(data => console.log(data.data.text))
    .catch(err => console.log(err));
}

function part2() {

    let num = [5, 21, 42]

    let baseURL = `http://numbersapi.com/${num}?json`

    let futureResolvedPromise = axios.get(baseURL)
    
    Promise.resolve(futureResolvedPromise)
        .then(data => console.log(data.data))
        .catch(err => console.log(err));

}




function part3() {

    let num = 5

    let baseURL = `http://numbersapi.com/${num}?json`
    
    let futureResolvedPromise = [];
    
    for (let i = 1; i < 4; i++) {
        futureResolvedPromise.push(axios.get(baseURL));
    }
    
    Promise.all(futureResolvedPromise)
        .then(data => (
            data.forEach(fact => $('#facts')
            .append(`
                <div class="card">
                    <div>${fact.data.text}</div>
                <div>
            `))
        ))
        .catch(err => console.log(err));

}