var url = 'https://sf-pyw.mosyag.in/sse/vote/'

const cat = document.getElementById('cats')
const parrot = document.getElementById('parrots')
const dog = document.getElementById('dogs')
const res = document.getElementById('res')

cat.onclick = function voteCat() {
    fetch(url + "cats", {method: 'post'});
    show ();
        }
       
parrot.onclick = function voteParrot() {
    fetch(url + "parrots", {method: 'post'});
    show ();
        }
       
dog.onclick = function voteDog() {
    fetch(url + "dogs", {method: 'post'});
    show ();
        }
