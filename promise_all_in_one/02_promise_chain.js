fetch("https://api.github.com/users")
    .then((res) => (res.json()))
    .then((data) => {
        const parent = document.getElementById('first');
        for (let i = 0; i < data.length; i++) {

            const img = document.createElement('img');

            img.src = data[i].avatar_url;
            img.style.height = "40px";
            img.style.width = "40px";

            parent.append(img);

        }
        console.log(data);

    });