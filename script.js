(function(){
    const list = document.getElementById('list')

    list.innerHTML = '<li>Linked from: ' + document.referrer
    list.innerHTML += '<li>Title: ' + document.title
    list.innerHTML +='<li>Url: ' + document.URL
    list.innerHTML += '<li>Last modified: ' + document.lastModified

})()