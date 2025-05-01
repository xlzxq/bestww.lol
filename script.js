let hasClicked = false;

const links = [
    { name: "burh", url: "https://www.youtube.com/@Burhy" },
    { name: "rayloss", url: "https://www.youtube.com/@raylossed" },
    { name: "xlzxq", url: "https://www.youtube.com/@xlzxq" },
    { name: "sorr", url: "https://www.youtube.com/@s0rrxo" },
    { name: "battlerite", url: "https://www.youtube.com/@battleritemc" },
    { name: "beamerboy", url: "https://www.youtube.com/@beamrboy" },
    { name: "michaux", url: "https://www.youtube.com/@michauuuux" },
    { name: "gottya", url: "https://www.youtube.com/@gottya" },
    { name: "nikazul", url: "https://www.youtube.com/@NiKazul" },
    { name: "apaxel", url: "https://www.youtube.com/@apaxei" },
    { name: "cf43", url: "https://www.youtube.com/@cf_43" },
    { name: "weedy", url: "https://www.youtube.com/@sexyfuckingweedy" }
];

document.getElementById("title").addEventListener('click', () => {
    if (!hasClicked) {
        document.getElementById("title").className = "after-text";

        const container = document.getElementById("image-container");
        container.classList.add("visible");

        links.forEach(link => {
            const wrapper = document.createElement("div");
            wrapper.className = "icon-wrapper";
        
            const img = document.createElement("img");
            img.src = `/assets/images/${link.name}.jpg`;
            img.alt = link.name;
            img.addEventListener('click', () => {
                window.location.href = link.url;
            });
        
            const label = document.createElement("span");
            label.textContent = link.name;
            wrapper.appendChild(img);
            wrapper.appendChild(label);
        
            document.getElementById("image-container").appendChild(wrapper);
        });

        hasClicked = true;
    }
});
