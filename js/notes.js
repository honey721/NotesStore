shownotes();
addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', (e) => {
    addText = document.getElementById('addText');
    notes = localStorage.getItem('notes');

    addTitle = document.getElementById('addTitle');
    title = localStorage.getItem('title');


    if (notes == null && title == null) {
        titleobj = [];
        notesobj = [];
    }

    else if (notes != null && title != null) {
        notesobj = JSON.parse(notes);
        titleobj = JSON.parse(title);
    }

    if (addText.value != '' && addTitle.value != '') {
        notesobj.push(addText.value);
        localStorage.setItem('notes', JSON.stringify(notesobj));


        titleobj.push(addTitle.value);
        localStorage.setItem('title', JSON.stringify(titleobj));

        console.log(titleobj);
        console.log(notesobj);

    }
    addText.value = '';
    addTitle.value = '';

    shownotes();
    // 

    /* addTitle = document.getElementById('addTitle');
    title = localStorage.getItem('title');
    if (title == null) {
        titleobj = [];
    }
    else {
        titleobj = JSON.parse(title);
    }
    if (addTitle.value != '') {
        titleobj.push(addTitle.value);
        localStorage.setItem('title', JSON.stringify(titleobj));
        addTitle.value = '';
        console.log(titleobj);
        shownotes();

    }
 */
})

//function to show notes that stored in local storage.
function shownotes() {
    notes = localStorage.getItem('notes');
    title = localStorage.getItem('title');

    if (notes == null && title == null) {
        notesobj = [];
        titleobj = [];
    }
    else if (notes != null && title != null) {
        notesobj = JSON.parse(notes);
        titleobj = JSON.parse(title);
    }
    html = '';
    k = 0;
    notesobj[k];
    titleobj.forEach((element, index) => {

        html += `
            <div class="notecard card my-2 mx-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 id="note-title" class="card-title">${element}</h5>
                    <p  id="desc" class="card-text">${notesobj[k]}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-danger">Delete</button>
                </div>
            </div>`;
        k = k + 1;

    });
    if (html != '') {
        divel = document.getElementById('notes');
        divel.innerHTML = html;
    }
    else {
        document.getElementById('notes').innerHTML = 'OOP! Your "Notes Store" is empty'
    }
}

// delete note

function deleteNote(id) {


    notes = localStorage.getItem('notes');
    title = localStorage.getItem('title');

    if (notes == null && title == null) {
        notesobj = [];
        titleobj = [];
    }
    else if (notes != null && title != null) {
        notesobj = JSON.parse(notes);
        titleobj = JSON.parse(title);
    }

    titleobj.splice(id, 1);
    notesobj.splice(id, 1);
    localStorage.setItem('notes', JSON.stringify(notesobj));
    
    localStorage.setItem('title', JSON.stringify(titleobj));
    shownotes();

}

let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('notecard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
            //element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})