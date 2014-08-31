function changeThumbSize(id,size){
var blogGadget = document.getElementById(id);
var replacement = blogGadget.innerHTML;
blogGadget.innerHTML = replacement.replace(/s72-c/g,"s"+size+"-c");
var thumbnails = blogGadget.getElementsByTagName("img");
for(var i=0;i&lt;thumbnails.length;i++){
thumbnails[i].width = size;
thumbnails[i].height = size;
}
}
changeThumbSize("label_with_thumbs",210);