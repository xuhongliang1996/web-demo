function SetCwinHeight(){
    var iframeid=document.getElementById("rightFrame"); //iframe id
    if (document.getElementById){
        if (iframeid && !window.opera){
            if (iframeid.contentDocument && iframeid.contentDocument.body.offsetHeight){
                iframeid.height = iframeid.contentDocument.body.offsetHeight;
            }else if(iframeid.Document && iframeid.Document.body.scrollHeight){
                iframeid.height = iframeid.Document.body.scrollHeight;
            }
        }
    }
}