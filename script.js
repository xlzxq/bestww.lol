// gif loading
const gif = document.getElementById('gif');

gif.style.display = 'none';
gif.onload = () => {
    gif.style.display = 'block';
};

gif.src = 'assets/bestww.gif' + '?t=' + Date.now();

setTimeout(() => {
    gif.src = 'assets/bestww.png';
}, 1900);

// members list loading

async function loadJsons() {
    const members = ["rayloss", "xlzxq", "tpyie", "cflolxd", "sexyweedy", "qkiruu", "burh"];

    const memberlist = document.getElementById("member-list");

    members.forEach(async (p) => {
        const info = await fetch(`/assets/userdata/${p}/info.json`).then(r => r.json());
        const avatar = `/assets/userdata/${p}/avatar.png`;
        const countryEmoji = "https://flagcdn.com/24x18/" + info.country.toLowerCase() + ".png";

        const card = document.createElement("div");
        card.className = "member-card";

        card.innerHTML = `
                <img src="${avatar}" class="avatar">
                <div class="info">
                    <h2>${info.name} <img src=${countryEmoji}></h2>
                    <p>aka. ${info.aliases.join(", ")}</p>
                    <div class="socials">
                        ${Object.entries(info.socials).map(([site, link]) =>
            `<a href="${link}" target="_blank"><i class="fa-brands fa-${site}"></i></a>`
        ).join("")}
                    </div>
                </div>
            `;

        memberlist.appendChild(card);
    });

    // media loading
    const medialist = document.getElementById("media-list");

    const data = await fetch("/assets/userdata/media.json").then(r => r.json());

    data.videos.forEach(video => {
        const videoID = new URL(video.url).searchParams.get("v");
        const embedURL = `https://www.youtube.com/embed/${videoID}`;

        const card = document.createElement("div");
        card.className = "media-card";

        card.innerHTML = `
            <iframe 
                src="${embedURL}" 
                frameborder="0"
                allowfullscreen
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>

            <p class="creator">Created by ${video.creator}</p>
        `;

        medialist.appendChild(card);
    });
}

loadJsons();