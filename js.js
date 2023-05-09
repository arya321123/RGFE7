async function starShipModel(id){
    const peopleR = await fetch('https://swapi.dev/api/people/' + id);
    const peopleData = await peopleR.json();
    const starshipURL = peopleData.starships;

    const result = [];

    for (let i = 0; i < starshipURL.length; i++){
        const starshipsR = await fetch(starshipURL[i]);
        const starshipD = await starshipsR.json();

        result.push(starshipD.model);
    }

    return result;
}

starShipModel(1).then((result) => console.log(result)).catch((err) => console.log(err));