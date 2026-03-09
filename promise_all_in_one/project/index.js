async function gitHub() {
    try {
        const api = await fetch("https://api.github.com/users");
        // console.log(api);
        if (!api.ok) {
            throw new Error("Data is not available");
        }
        const data = await api.json();

        for (const user of data) {
            // console.log(user);
            const parent = document.getElementById('parent');

            const element = document.createElement('div');
            element.classList.add('user');

            const image = document.createElement('img');
            image.src = user.avatar_url;
            const name = document.createElement('h2');
            name.textContent = user.login;

            const anchor = document.createElement('a');
            anchor.href = user.html_url
            anchor.textContent = "Visit Profile";

            element.append(image, name, anchor)
            parent.append(element)


        }
    }
    catch (error) {
        console.error(error);
    }
}
gitHub();