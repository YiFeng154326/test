var i=[0,1,2,3,4];
var count=0;
window.onload=function photo(){
	var ul=document.getElementsByClassName("photo")[0];
	var li=ul.getElementsByTagName("li");
	function photo(){
		for(var j=0;j<5;j++){
			if(i[j]==0){
				li[j].style.opacity=1;
				li[j+5].style.backgroundColor="#FFFFFF"
			}
			else{
				li[j].style.opacity=0;
				li[j+5].style.backgroundColor="#000000"
			}
		}
	}
	photo();
	setInterval(photo,100);
	setInterval(right,5000);
}
function left(){
	for(var j=0;j<5;j++){
		i[j]+=1;
		i[j]%=5;
	}
}
function right(){
	for(var j=0;j<5;j++){
		i[j]+=4;
		i[j]%=5;
	}
}