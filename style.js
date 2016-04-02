function insertAfter(addition,target) {
    var parent = target.parentNode;
    if (parent.lastChild == target) {
        parent.appendChild(addition);  
    } else {
        parent.insertBefore(addition,target.nextSibling);
    }
}
var adscont = document.getElementById("adsense-content");
var target = document.getElementById("adsense-target");
var linebreaks = target.getElementsByTagName("br");
if (linebreaks.length > 0) {
    insertAfter(adscont,linebreaks[0]);
}
