// Google Image Search
// Queries Google Image search with selected text. Prompts if selection is empty.

javascript:(function(){var t=window.getSelection().toString();if(!t||t=='')t=prompt("Enter [image] search term: ");open("https://www.google.com/"+(((/\S/.test(t))&&t!=null)?("search?tbm=isch&q="+encodeURIComponent(t)):"")).focus();})();
