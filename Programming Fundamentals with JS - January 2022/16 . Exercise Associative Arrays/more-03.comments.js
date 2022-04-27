function comments(arr) {


    let userList = new Set();
    let articleList = new Set();
    let storeObj = {};

    for (let iteratorA of arr) {
        if (iteratorA.includes('user')) {
            let userForList = iteratorA.split('user ')[1];
            userList.add(userForList);
        } else if (iteratorA.includes('article')) {
            let articleForList = iteratorA.split('article ')[1];
            articleList.add(articleForList);
        } else if (iteratorA.includes('posts on')) {
            let currentInfo = iteratorA.split(' posts on ').join(', ').split(': ').join(', ').split(', ');
            let currentUserName = currentInfo[0];
            let currentArticleName = currentInfo[1];
            let currentArticleTitle = currentInfo[2];
            let currentArticleContent = currentInfo[3];
            if (userList.has(currentUserName) && articleList.has(currentArticleName)) {
                if (!storeObj.hasOwnProperty(currentArticleName)) {
                    storeObj[currentArticleName] = {};
                    storeObj[currentArticleName][currentUserName] = {};
                    storeObj[currentArticleName][currentUserName][currentArticleTitle] = currentArticleContent;
                } else {
                    storeObj[currentArticleName][currentUserName] = {};
                    storeObj[currentArticleName][currentUserName][currentArticleTitle] = currentArticleContent;
                }
            }
        }
    }
    console.log(storeObj);
    let arrForSorting = Object.entries(storeObj);
    for (let i = 0; i < arrForSorting.length; i++) {
        let element = arrForSorting[i];
        let size = Object.values(element[1]).length;
        arrForSorting[i].push(size);
    }
    arrForSorting = arrForSorting.sort((a, b) => b[2] - a[2] || );

    for (let iteratorB of arrForSorting) {
        console.log(`Comments on ${iteratorB[0]}`) // article name
        let arrForSortingOne = Object.entries(iteratorB[1])
        arrForSortingOne.sort((a, b) => a[0].localeCompare(b[0]));
        for (let iteratorC of arrForSortingOne) {
            let arrForSortingTwo = Object.entries(iteratorC[1])
            for (let iteratorD of arrForSortingTwo) {
                console.log(`--- From user ${iteratorC[0]}: ${iteratorD[0]} - ${iteratorD[1]}`);
            }
        }
    }
}
comments([
        'user aUser123',
        'user saame5',
        'someUser posts on someArticle: NoTitle, stupidComment',
        'article Books',
        'article Movies',
        'article Shopping',
        'user someUser',
        'user uSeR4',
        'user lastUser',
        'uSeR4 posts on Books: I like books, I do really like them',
        'uSeR4 posts on Movies: I also like movies, I really do',
        'someUser posts on Shopping: title, I go shopping every day',
        'someUser posts on Movies: Like, I also like movies very much',
        'saame5 posts on Movies: Done, fdfdfddf'
    ])
    // comments(['user Mark', 'Mark posts on someArticle: NoTitle, stupidComment', 'article Bobby', 'article Steven', 'user Liam', 'user Henry', 'Mark posts on Bobby: Is, I do really like them', 'Mark posts on Steven: title, Run', 'someUser posts on Movies: Like'])



// function comments(data) {

//     let input = data.slice();
//     let users = [];
//     let articles = {};

//     for (let line of input) {

//         if (line.includes("user")) {
//             addUsers(users, line.split(" ")[1]);
//         } else if (line.includes("article")) {
//             line = line.split(" ");
//             line.shift();
//             let currentArticle = line.join(" ");
//             addArticles(articles, currentArticle);
//         } else {
//             line = line.split(": ");
//             let [currentUser, currentArticle] = line[0].split(" posts on ");
//             let [commentTitle, commentContent] = line[1].split(", ");
//             makeComment(users, articles, currentUser, currentArticle, commentTitle, commentContent);
//         }
//     }
//     let sortedArticlesByCount = Object.keys(articles)
//         .sort((a, b) => articles[b].length - articles[a].length);
//     console.log(sortedArticlesByCount);

//     for (let article of sortedArticlesByCount) {
//         console.log(`Comments on ${article}`);
//         articles[article]
//             .sort((a, b) => a[0].localeCompare(b[0]))
//             .forEach(comment => {
//                 console.log(`--- From user ${comment[0]}: ${comment[1].title} - ${comment[1].content}`);
//             });
//     }

//     function addUsers(users, user) {
//         if (!users.includes(user)) {
//             users.push(user);
//         }
//         return users;
//     }

//     function addArticles(articles, article) {
//         if (!articles.hasOwnProperty(article)) {
//             articles[article] = [];
//         }
//         return articles;
//     }

//     function makeComment(users, articles, user, article, commentTitle, commentContent) {
//         if (users.includes(user) && articles.hasOwnProperty(article)) {
//             let currentComment = [];
//             currentComment.push(user);
//             let currentCommentContent = {
//                 "title": commentTitle,
//                 "content": commentContent
//             };
//             currentComment.push(currentCommentContent);
//             articles[article].push(currentComment);
//         }
//         return articles;
//     }
// }
// comments([
//     'user aUser123',
//     'user saame5',
//     'someUser posts on someArticle: NoTitle, stupidComment',
//     'article Books',
//     'article Movies',
//     'article Shopping',
//     'user someUser',
//     'user uSeR4',
//     'user lastUser',
//     'uSeR4 posts on Books: I like books, I do really like them',
//     'uSeR4 posts on Movies: I also like movies, I really do',
//     'someUser posts on Shopping: title, I go shopping every day',
//     'someUser posts on Movies: Like, I also like movies very much',
//     'saame5 posts on Movies: Done, fdfdfddf'
// ])