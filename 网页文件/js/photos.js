window.onload=function(){
	const show=document.getElementsByClassName("show")[0];
	const path=document.getElementsByClassName("path")[0];
	img=path.getElementsByTagName("img");
	var x=document.getElementsByClassName("x")[0];
	x.onclick=function(){
		show.style.display="none";
	}
	for(var i=0;i<img.length;i++){
		img[i].onclick=function(){
			var url=this.getAttribute("src");
			show.getElementsByTagName("img")[0].src=url;
			show.style.display="block";
		}
	}
}