// get random task adli button yaradin. Ona clickleyende https://catfact.ninja/fact apisinden pishikler haqqinda random fact getirib, ikinci hisseye yazdirmalisiniz.  Dizayna cox da onem vermeyin

const url = `https://catfact.ninja/fact`

document.getElementById('getFactButton').addEventListener('click', function () {
    fetch(url).then((response) => response.json())
        .then((data) => {
            document.getElementById('factDisplay').innerHTML = data.fact
        })
        .catch((error) => {
            console.log('error', error);
        })
})