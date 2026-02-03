document.addEventListener('DOMContentLoaded', () => {
    loadNews();
    loadPublications();
});

function loadNews() {
    try {
        // Use global newsData variable
        const news = typeof newsData !== 'undefined' ? newsData : [];
        const newsContainer = document.getElementById('news');
        if (!newsContainer) return;

        // Clear existing items but keep the heading
        const heading = newsContainer.querySelector('.heading');
        newsContainer.innerHTML = '';
        if (heading) newsContainer.appendChild(heading);

        if (news.length === 0) {
            const errorDiv = document.createElement('div');
            errorDiv.textContent = 'Error: News data not loaded.';
            newsContainer.appendChild(errorDiv);
            return;
        }

        const visibleNews = news.filter(item => !item.isMore);
        const hiddenNews = news.filter(item => item.isMore);

        visibleNews.forEach(item => {
            const div = document.createElement('div');
            div.className = 'news-item';
            div.innerHTML = `[${item.date}] ${item.content}`;
            newsContainer.appendChild(div);
        });

        if (hiddenNews.length > 0) {
            const details = document.createElement('details');
            details.className = 'news-more';
            const summary = document.createElement('summary');
            summary.textContent = 'Show more';
            details.appendChild(summary);

            hiddenNews.forEach(item => {
                const div = document.createElement('div');
                div.className = 'news-item';
                div.innerHTML = `[${item.date}] ${item.content}`;
                details.appendChild(div);
            });
            newsContainer.appendChild(details);
        }
    } catch (error) {
        console.error('Error loading news:', error);
    }
}

function loadPublications() {
    try {
        // Use global publicationsData variable
        const publications = typeof publicationsData !== 'undefined' ? publicationsData : [];
        const pubContainer = document.querySelector('.publications');
        if (!pubContainer) return;

        pubContainer.innerHTML = '';

        if (publications.length === 0) {
            pubContainer.textContent = 'Error: Publications data not loaded.';
            return;
        }

        publications.forEach(pub => {
            const pubDiv = document.createElement('div');
            pubDiv.className = 'publication';

            // Image/Video Section
            const imgDiv = document.createElement('div');
            imgDiv.className = 'publication-image';
            
            const isVideo = (pub.video && typeof pub.video === 'string')
                || (pub.image && pub.image.endsWith('.mp4'));

            if (isVideo) {
                const video = document.createElement('video');
                video.autoplay = true;
                video.loop = true;
                video.muted = true;
                video.playsInline = true;
                video.preload = "auto";

                if (pub.poster && typeof pub.poster === 'string') {
                    video.poster = pub.poster;
                } else if (pub.image && !pub.image.endsWith('.mp4') && !pub.image.endsWith('.gif')) {
                    video.poster = pub.image;
                }

                const source = document.createElement('source');
                source.src = pub.video ? pub.video : pub.image;
                source.type = "video/mp4";
                video.appendChild(source);

                imgDiv.appendChild(video);

                video.play().catch(() => {});
            } else if (pub.image) {
                imgDiv.innerHTML = `<img src="${pub.image}" alt="${pub.title}">`;
            } else {
                imgDiv.textContent = 'Media unavailable';
            }

            // Content Section
            const contentDiv = document.createElement('div');
            contentDiv.className = 'publication-content';

            // Title
            const titleDiv = document.createElement('div');
            titleDiv.className = 'papertitle';
            titleDiv.textContent = pub.title;
            contentDiv.appendChild(titleDiv);

            // Authors
            const authorsDiv = document.createElement('div');
            authorsDiv.className = 'publication-authors';
            pub.authors.forEach((author, index) => {
                let authorElem;
                if (author.url) {
                    authorElem = document.createElement('a');
                    authorElem.href = author.url;
                    authorElem.textContent = author.name;
                } else {
                    authorElem = document.createElement('span');
                    authorElem.textContent = author.name;
                }

                if (author.isMe) {
                    const strong = document.createElement('strong');
                    strong.appendChild(authorElem);
                    authorsDiv.appendChild(strong);
                } else {
                    authorsDiv.appendChild(authorElem);
                }

                if (index < pub.authors.length - 1) {
                    authorsDiv.appendChild(document.createTextNode(', '));
                }
            });
            
            if (pub.note) {
                const noteSpan = document.createElement('span');
                noteSpan.textContent = ` ${pub.note}`;
                authorsDiv.appendChild(noteSpan);
            }
            contentDiv.appendChild(authorsDiv);

            // Venue
            const venueDiv = document.createElement('div');
            venueDiv.className = 'publication-venue';
            venueDiv.innerHTML = `<em>${pub.venue}</em>`;
            if (pub.isOral) {
                venueDiv.innerHTML += ' <span style="color: red;">(oral)</span>';
            }
            contentDiv.appendChild(venueDiv);

            // Links
            const linksDiv = document.createElement('div');
            linksDiv.className = 'publication-links';
            pub.links.forEach(link => {
                const a = document.createElement('a');
                a.href = link.url;
                a.textContent = link.label;
                linksDiv.appendChild(a);
            });
            contentDiv.appendChild(linksDiv);

            pubDiv.appendChild(imgDiv);
            pubDiv.appendChild(contentDiv);
            pubContainer.appendChild(pubDiv);
        });
    } catch (error) {
        console.error('Error loading publications:', error);
    }
}
