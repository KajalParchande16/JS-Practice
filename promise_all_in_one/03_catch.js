fetch("https://api.github.com/usrs")
    .then((res) => {
        console.log(res)
        if (!res.ok) {
            throw new Error("API request failed with status " + res.status);
        }
        return res.json()
    })
    .then((data) => {
        const parent = document.getElementById('second');
        for (let i = 0; i < data.length; i++) {

            const img = document.createElement('img');

            img.src = data[i].avatar_url;
            img.style.height = "40px";
            img.style.width = "40px";

            parent.append(img);

        }
        // console.log(data);

    }).catch((error) => {
        console.log(error);
        const parent = document.getElementById('second');
        parent.textContent = error.message;

    })