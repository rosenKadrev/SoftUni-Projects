function getArticleGenerator(articles) {

    let parent = document.getElementById('content');

    return function showNext() {
        let article = articles.shift();

        if (article != undefined) {
            let articleTag = document.createElement('article');
            articleTag.textContent = article;
            parent.appendChild(articleTag);
        }
    }

}