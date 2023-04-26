

const book_data_json_string = `
{
    "books": [
        "1984",
        "100 of Solitude",
        "Dichotomy of Leadership",
        "Republic",
        "Tale of Two Cities",
        "The Odyssey",
        "Storm of Steel",
        "The Hobbit",
        "The Great Gatsby",
        "King Lear",
        "The Divine Comedy",
        "Crime and Punishment"
    ],
    "authors" : [
        "George Orwell", 
        "Gabriel Marquez",
        "Jocko Willink",
        "Plato",
        "Charles Dickens",
        "Homer",
        "Ernst Junger",
        "John Tolkein",
        "F. Scott Fitzgerald",
        "William Shakespear",
        "Dante Alighieri",
        "Fyodor Dostoevsky"
    ],
    "George Orwell" : "1984",
    "Gabriel Marquez" : "100 of Solitude",
    "Jocko Willink" : "Dichotomy of Leadership",
    "Plato" : "Republic",
    "Charles Dickens" : "Tale of Two Cities",
    "Homer" : "The Odyssey",
    "Ernst Junger" : "Storm of Steel",
    "John Tolkein" : "The Hobbit",
    "F. Scott Fitzgerald" : "The Great Gatsby",
    "William Shakespear" : "King Lear",
    "Dante Alighieri" : "The Divine Comedy",
    "Fyodor Dostoevsky" : "Crime and Punishment",
    "1984": {
        "author": "George Orwell",
        "published": "1949",
        "img": "./img/books/1984.png",
        "description" : "In George Orwell's 1984, Winston Smith wrestles with oppression in Oceania, a place where the Party scrutinizes human actions with ever-watchful Big Brother. Defying a ban on individuality, Winston dares to express his thoughts in a diary and pursues a relationship with Julia. These criminal deeds bring Winston into the eye of the opposition, who then must reform the nonconformist. George Orwell's 1984 introduced the watchwords for life without freedom: BIG BROTHER IS WATCHING YOU.",
        "link" : "https://www.amazon.com/1984-Signet-Classics-George-Orwell/dp/0451524934/ref=sr_1_2?keywords=1984&qid=1682088329&s=books&sr=1-2" 
        
    },
    "100 of Solitude": {
        "author": "Gabriel Marquez",
        "published": "1967",
        "img": "./img/books/100 years of solitude.png",
        "description" : "The basic structure of the novel traces the chronicle of the Buendía family over a century. It is the history of a family with inescapable repetitions, confusions, and progressive decline. Beginning sometime in the early nineteenth century, the novel's time span covers the family's rise and fall from the foundation of Macondo by the youthful patriarch, José Arcadio Buendía, until the death of the last member of the line. Throughout the narrative, the fates of the Buendías and Macondo are parallel reflections. In fact, we witness the history of a people who, like the wandering tribes of Israel, are best understood in terms of their genesis from a single family.",
        "link" : "https://www.amazon.com/Hundred-Solitude-Harper-Perennial-Classics/dp/0060883286/ref=sr_1_1?crid=3G5H03DRQCK3S&keywords=100+years+of+sol&qid=1682213376&s=books&sprefix=100+years+of+sol%2Cstripbooks%2C102&sr=1-1" 
    },
    "Dichotomy of Leadership": {
        "author": "Jocko Willink",
        "published": "2018",
        "img": "./img/books/dichotomy of leadership.png",
        "description" : "In their earlier book, Extreme Ownership, former US Navy SEALs, Jocko Willink and Leif Babin, shared 12 leadership principles that have enabled elite SEAL leaders and teams to achieve extraordinary results. One of these principles is about managing and balancing the dichotomy of leadership. In this book, the authors use examples from the battlefield and their consulting business to help leaders understand the nuances in leadership and how to embrace the inherent contradictions in leadership to lead and win.",
        "link" : "https://www.amazon.com/Dichotomy-Leadership-Balancing-Challenges-Ownership/dp/1250195772/ref=sr_1_1?crid=13ASQKGXWAZ3W&keywords=dichotomy+of+leadership&qid=1682213593&s=books&sprefix=dichotomy+of+%2Cstripbooks%2C116&sr=1-1" 
    },
    "Republic": {
        "author": "Plato",
        "published": "375 BC",
        "img": "./img/books/republic.png",
        "description" : "The major intent of the debate in the Republic is to determine an extended definition of what constitutes Justice in a given state, whether or not a concept of Justice may be determined by citizens in a given state at the time that Plato is writing, and how Justice may be accomplished in a given state (how laws might be enacted that would serve the citizens of a just state in courts of law). Thus it is that the conversation in theRepublic proceeds from a question of meaning (what is Justice?), augmented by questions of fact (are there examples of justice in action or of just men?), to a question of policy (what laws may be effected to ensure the carriage of justice?). Of course if a given state could be founded on a resolution and emulation of such precepts, it would be an ideal state; Plato is generally acknowledged to be an idealistic philosopher.",
        "link" : "https://www.amazon.com/Republic-Hackett-Classics-Plato/dp/0872201368/ref=sr_1_5?crid=3P5J8J3OHFAKC&keywords=plato+republic&qid=1682213663&s=books&sprefix=plato+republi%2Cstripbooks%2C99&sr=1-5" 
    },
    "Tale of Two Cities" : {
        "author": "Charles Dickens",
        "published": "1859",
        "img": "./img/books/tale of two cities.png",
        "description" : "Violent revolutionary activity caught up almost all of Europe during the first half of the nineteenth century, and middle-class Englishmen naturally feared that widespread rebellion might take place at home. Dickens knew what poverty was like and how common it was. He realized the inadequacy of philanthropic institutions when confronted by the enormous misery of the slums. That Dickens turned to the French Revolution to dramatize the possibility of class uprisings is not surprising; few events in history offer such a concentration of terrors.",
        "link" : "https://www.amazon.com/Tale-Two-Cities-Anniversary-Classics/dp/0451530578/ref=sr_1_1?crid=26HJCK34Z5QKX&keywords=a+tale+of+two+cities+by+charles+dickens+book&qid=1682213694&s=books&sprefix=tale+of+two%2Cstripbooks%2C90&sr=1-1" 
    },
    "The Odyssey" : {
        "author": "Homer",
        "published": "725 BC",
        "img": "./img/books/the odyssey.png",
        "description" : "The Odyssey is Homer's epic of Odysseus' 10-year struggle to return home after the Trojan War. While Odysseus battles mystical creatures and faces the wrath of the gods, his wife Penelope and his son Telemachus stave off suitors vying for Penelope's hand and Ithaca's throne long enough for Odysseus to return. The Odyssey ends as Odysseus wins a contest to prove his identity, slaughters the suitors, and retakes the throne of Ithaca.",
        "link" : "https://www.amazon.com/Odyssey-Homer/dp/0140268863/ref=sr_1_1?crid=164ESNRKO6T0D&keywords=the+oddysey+homer&qid=1682213885&sprefix=homer+odd%2Caps%2C106&sr=8-1" 
    },
    "Storm of Steel" : {
        "author": "Ernst Junger",
        "published": "1920",
        "img": "./img/books/storm of steel.png",
        "description" : "Storm of Steel, written by Ernst Junger, is a memoir of World War I first published in German as In Stahlgewittern in 1920. The final revised edition came in 1961 and was translated into English in 1978. The book documents Junger’s account as a German officer on the Western Front and begins the moment Junger detrains in France, on December 27, 1914, at the age of 19. As the Introduction says: “It has no pacifist design. It makes no personal appeal. It is a notably unconstructed book. It does not set its author and his experience in any sort of context. It offers nothing in the way of hows and whys, it is pure where and when and of course, above all, what” (vii).",
        "link" : "https://www.amazon.com/Storm-Steel-Penguin-Classics-Deluxe/dp/0142437905/ref=sr_1_3?crid=3VZ6MXE1KKHL1&keywords=storm+of+steel&qid=1682213897&sprefix=storm+of+stee%2Caps%2C98&sr=8-3" 
    },
    "The Hobbit" : {
        "author": "John Tolkein",
        "published": "1937",
        "img": "./img/books/the hobbit.png",
        "description" : "Since the publication of The Hobbit in 1937, critical readers have argued over whether the book is a fantasy, a fairy tale, a fable, a romance, an epic, or a novel. Classifying the book is one way of explaining its strengths and weaknesses and understanding the immense appeal it has held for many decades. The Hobbit seems to be about much more than its surface narrative, but Tolkien was adamant that it was not an allegory and said he much preferred history, whether real or invented, to allegory. The book is not a novel in the tradition of the great realistic novels of the eighteenth and nineteenth centuries; it is much closer to the idea of a romance, a genre that accommodates the improbable and even the supernatural. It is probably most accurate to call it a fantasy and to think of it as an invented history that includes the inexplicable.",
        "link" : "https://www.amazon.com/Hobbit-Illustrated-Author-Tolkien-Editions/dp/0063347539/ref=sr_1_5?keywords=hobbit&qid=1682214053&s=books&sr=1-5" 
    },
    "The Great Gatsby" : {
        "author": "F. Scott Fitzgerald",
        "published": "1925",
        "img": "./img/books/the great gatsby.png",
        "description" : "Set in the Jazz Age around New York City and the fictional Long Island towns of West Egg and East Egg, The Great Gatsby tells the story of Jay Gatsby, a self-made man who dreams of turning back time to regain his first love, Daisy Buchanan. In the process, the novel explores the culture of the Roaring Twenties, class in America, and the dangerous allure of the American Dream.",
        "link" : "https://www.amazon.com/Great-Gatsby-Original-Fitzgerald-Classic/dp/B093MYWTT5/ref=sr_1_1?crid=1HU2HNKKYQAJ0&keywords=the+great+gatsby&qid=1682214072&s=books&sprefix=the+great+gatsby%2Cstripbooks%2C98&sr=1-1" 
    },
    "King Lear" : {
        "author": "William Shakespear",
        "published": "1606",
        "img": "./img/books/king lear.png",
        "description" : "King Lear opens with a conversation between the earls of Kent and Gloucester, in which the audience learns that Gloucester has two sons: Edgar, who is his legitimate heir, and Edmund, his younger illegitimate son. This information will provide the secondary or subplot. Next, King Lear enters to state that he intends to remove himself from life's duties and concerns. Pointing at a map, Lear tells those in attendance that he has divided his kingdom into three shares, to be parceled out to his three daughters, as determined by their protestations of love. The two elder daughters, Goneril and Regan, exaggerate their love by telling their father that their affection for him exceeds all reasonable expectations. The youngest daughter, Cordelia, tells Lear that she loves him, but only as a daughter should love a father. Lear, angry and disappointed at what he deems a lack of devotion on Cordelia's part, divides his kingdom equally between Goneril and Regan, and banishes Cordelia. Later, France agrees to marry the now dowerless and banished Cordelia. When Kent attempts to defend Cordelia, Lear banishes him as well. Meanwhile, Goneril and Regan decide that if Lear becomes too much of a nuisance, they will have to decide what disciplinary actions to take.",
        "link" : "https://www.amazon.com/King-Lear-Dover-Thrift-Editions/dp/0486280586/ref=sr_1_1_sspa?crid=R2K2WBRL29E6&keywords=king+lear&qid=1682214151&sprefix=king+lea%2Caps%2C132&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExQ1owOTdFS0FMQ0Y2JmVuY3J5cHRlZElkPUEwMzY1OTY1MjQ2TDNCTVBUT1ZYSSZlbmNyeXB0ZWRBZElkPUEwNTk4MDcxMzBVR1Y1TklLMEwyMCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=" 
    },
    "The Divine Comedy" : {
        "author": "Dante Alighieri",
        "published": "1321",
        "img": "./img/books/the divine comedy.png",
        "description" : "The original CliffsNotes study guides offer a look into critical elements and ideas within classic works of literature. The latest generation of titles in this series also feature glossaries and visual elements that complement the classic, familiar format.CliffsNotes on Divine Comedy: Inferno takes you deep inside Dante's vision of Hell, the first installment in his three-poem epic. Following the spiritual journey of Dante and his guide Virgil, this expert study companion provides summaries, commentaries, and glossaries related to each canto within the poem",
        "link" : "https://www.amazon.com/Divine-Comedy-Inferno-Purgatorio-Paradiso/dp/0451208633/ref=sr_1_1?crid=2L9KTC55L42H8&keywords=the+divine+comedy&qid=1682214172&sprefix=the+divine+comedy%2Caps%2C105&sr=8-1"  
    },
    "Crime and Punishment" : {
        "author": "Fyodor Dostoevsky",
        "published": "1866",
        "img": "./img/books/crime and punishment.png",
        "description" : "In any novel as great as Crime and Punishment, the details of the early or introductory chapters will become central to the interpretation of the entire novel. In this first chapter, Raskolnikov is seen isolated from everyone; later, he even feels uncomfortable around his mother and sister. And in the Epilogue when Raskolnikov is in prison in Siberia, he feels isolated and estranged from his fellow prisoners: 'he felt that terrible unbridgeable chasm which lay between him and the others. . .as if he and they belonged to different races.' Both in this first chapter and the Epilogue, Raskolnikov avoided everyone. Throughout the novel he will begin a conversation with an individual and suddenly without any reason, he will leave and isolate himself further.",
        "link" : "https://www.amazon.com/Crime-Punishment-Volokhonsky-Translation-Classics/dp/0679734503/ref=sr_1_2_sspa?crid=XKM1KWZCSGCH&keywords=crime+and+punishment+by+fyodor+dostoevsky&qid=1682214455&s=books&sprefix=crime+%2Cstripbooks%2C104&sr=1-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFOU0NJR0lKTVdSNDgmZW5jcnlwdGVkSWQ9QTA4NTk3NjZCTldaQTdHRjdTT00mZW5jcnlwdGVkQWRJZD1BMDI3ODk2NjJCRTdDT1RYRjRNUkwmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl" 
    }
}


`

function init() {

    // convert data to JSON object
    const book_data = JSON.parse(book_data_json_string);

    // debug print statements
    console.log(book_data);

    let cards = constructCardsFavorites(book_data);
    displayCards(cards)

    // offcanvas event listers
    addEventListenersToCards(book_data)

    // Searching and Sorting stuff here
    document.querySelector("#submit").addEventListener("click", event => {
        event.preventDefault();


        // process the radio btns
        var radioBtns = document.querySelectorAll("#radio-container input.form-check-input");
        radioBtns = Array.from(radioBtns);

        // find checked value
        var value = "";

        for (let i = 0; i < radioBtns.length; i++) {
            if (radioBtns[i].checked) {
                value = radioBtns[i].value;
                break;
            }
        }

        // sort depending on what the value
        let bookObjects = [];
        switch (value) {
            case "books":
                console.log("sort alphabetically by title");
                // console.log(sortByTitle(book_data));
                bookObjects = sortByTitle(book_data);
                break;
            case "authors":
                console.log("sort alphabetically by author name");
                bookObjects = sortByAuthor(book_data);
                break;
            case "date":
                console.log("sort by date");
                bookObjects = sortByDate(book_data);
                break;
            case "favorites":
                console.log("sort by favorites");
                bookObjects = sortByFavorites(book_data);
                break;
            default:
                throw "invalid sorting metric, radio button value not properly initialized";
        }

        // TODO: process the search probably...
        let searchQuery = document.querySelector("#Search").value;
        let cards;
        if (searchQuery !== "") {
            cards = constructCardsByObject(searchForBooks(book_data, searchQuery));
            window.scrollTo(0, 0);

        }
        else {
            cards = constructCardsByObject(bookObjects);
        }
        // after sorting the book objects, we can display them
        displayCards(cards);
        addEventListenersToCards(book_data);
        console.log(value);


    })


}

function searchForBooks(book_data, querry) {
    let bookObjects = []

    let titles = book_data["books"];

    titles.forEach(title => {
        bookObjects.push(book_data[title]);
    });

    for (let i = 0; i < bookObjects.length; i++){
        // check title, date, author
        // console.log(book_data[bookObjects[i]['author']], bookObjects[i]["published"], bookObjects[i]["author"]);
        if (book_data[bookObjects[i]['author']] === querry || bookObjects[i]["published"] === querry || bookObjects[i]["author"] === querry){
            return [bookObjects[i]];
        }

    }
    return [];
}

function addEventListenersToCards(book_data) {
    let cardElements = document.querySelectorAll("#card-container .card");
    Array.from(cardElements).forEach(c => {
        c.addEventListener("click", event => {
            var authorName = event.currentTarget.querySelector("h5").innerHTML;
            console.log(authorName);
            event.stopPropagation();
            document.querySelector("#offcanvas-container").innerHTML =  makeOffCanvas(book_data, authorName)
            var offCanvas = new bootstrap.Offcanvas(document.querySelector(".offcanvas"));
            offCanvas.show();
        });
    });;
}
function constructCardsByObject(bookObjects) {

    let cards = []

    bookObjects.forEach(obj => {
        cards.push(makeCard(obj));
    });
    return cards
}


function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function sortByFavorites(book_data) {

    let bookObjects = []

    let titles = book_data["books"];

    titles.forEach(title => {
        bookObjects.push(book_data[title]);
    });
    console.log("favorites", bookObjects);

    return bookObjects;
}
function sortByAuthor(book_data) {

    // get the authors
    let authors = Array.from(book_data["authors"]);

    // sort with bubble sort (trivially small data set)
    for (let i = 0; i < authors.length; i++) {
        for (let j = 0; j < authors.length - 1; j++) {
            if (authors[j] > authors[j + 1]) {
                swap(authors, j, j + 1);
            }
        }
    }

    // get the book objects in that order
    let bookObjects = [];
    authors.forEach(author => {
        bookObjects.push(book_data[book_data[author]]);
    });
    console.log("Book Objects: authors ", bookObjects);
    //return the book obejcts array
    return bookObjects
}


function sortByTitle(book_data) {

    // get the authors
    let originalTitles = Array.from(book_data["books"]);

    // filter out titles that have numebrs in the beginning
    let filteredTitles = []
    originalTitles.forEach(title => {
        if (!(!isNaN(title[0]))) {
            filteredTitles.push(title);
        }
    });

    // sort with bubble sort (trivially small data set)
    for (let i = 0; i < filteredTitles.length; i++) {
        for (let j = 0; j < filteredTitles.length - 1; j++) {
            if (filteredTitles[j] > filteredTitles[j + 1]) {
                swap(filteredTitles, j, j + 1);
            }
        }
    }

    //add the numbered titles back to the end of the filtered list
    originalTitles.forEach(title => {
        if (!isNaN(title[0])) {
            filteredTitles.push(title);
        }
    });



    // get the book objects in that order
    let bookObjects = [];
    filteredTitles.forEach(title => {
        bookObjects.push(book_data[title]);
    });
    console.log("Book Objects: titles ", bookObjects);
    //return the book obejcts array
    return bookObjects

}

function sortByDate(book_data) {

    // get the published dates
    let titles = Array.from(book_data["books"]);
    let dates = [];
    for (let i = 0; i < titles.length; i++) {
        dates.push(book_data[titles[i]]["published"]);
    }

    // remove the BC ones 
    let bcDates = [];
    let filteredDates = dates.filter(function (value) {
        if (value.split(" ").length === 2) {
            bcDates.push(value);
        }
        else {
            return value;
        }
    });

    // console.log("filtered dates", filteredDates);
    // console.log("bc dates", bcDates);

    // sort the remaining 
    for (let i = 0; i < filteredDates.length; i++) {
        for (let j = 0; j < filteredDates.length - 1; j++) {
            if (filteredDates[j] > filteredDates[j + 1]) {
                swap(filteredDates, j, j + 1);
            }
        }
    }
    for (let i = 0; i < bcDates.length; i++) {
        for (let j = 0; j < bcDates.length - 1; j++) {
            if (bcDates[j].split(" ")[0] > bcDates[j + 1].split(" ")[0]) {
                swap(bcDates, j, j + 1);
            }
        }
    }
    bcDates = bcDates.reverse();
    // console.log("filtered dates", filteredDates);
    // console.log("bc dates", bcDates);

    // add them to the beggining of the array list
    let sortedDates = []
    bcDates.forEach(date => {
        sortedDates.push(date);
    });
    filteredDates.forEach(date => {
        sortedDates.push(date);
    });

    console.log(sortedDates);

    // find and return the book objects
    let bookObjects = [];
    for (let i = 0; i < sortedDates.length; i++) {
        bookObjects.push(getBookObjectByDate(book_data, sortedDates[i]));
    }

    return bookObjects;

}

function getBookObjectByDate(book_data, date) {

    let titles = book_data["books"];

    for (title of titles) {
        let bookObject = book_data[title];

        if (bookObject["published"] === date) {
            return bookObject;
        }
    }

    return "garbage return statement";


}
function displayCards(cards) {

    let container = document.querySelector("#card-container");
    container.innerHTML = ``;

    cards.forEach(card => {
        container.innerHTML += card;
    });

    // adding event listers to the cards for the off canvas
    let cardElements = document.querySelectorAll("#card-container .card");
}

function constructCardsFavorites(book_data) {

    let cards = []
    book_data["books"].forEach(book => {
        cards.push(makeCard(book_data[book]));
    });

    return cards;
}

function makeCard(book) {

    let html = `
    <div class="card mt-0 mb-4 mx-3 content-square p-3" style="max-width: 18rem; max-height: 40rem; cursor: pointer;">
        <img src="${book["img"]}" class="card-img-top img-fluid book-card-img" alt="...">
        <div class="card-body text-center">
            <h5 class="card-title">${book["author"]}</h5>
            <p class="card-text">${book["published"]}</p>
        </div>
    </div>
    
    `
    return html;
}

function  makeOffCanvas(book_data, author) {

    var bookDataEntry = book_data[book_data[author]];

    var html = `
    <div class="offcanvas offcanvas-end content-square-offcanvas" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header w-100">
            <h5 id="offcanvasRightLabel">More Details</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <h1>${book_data[author]}</h1>
            <h6>By ${author}</h6>
            <hr>
            <p>${bookDataEntry["description"]}</p>
            <hr>
            <a href=${bookDataEntry["link"]}>Amazon Link</a>
        </div>
  </div>
    
    `
    return html;

}



init();