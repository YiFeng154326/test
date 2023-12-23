window.onload=function(){
	const img=document.getElementById("verycode");
	const password1=document.getElementById("password1");
	const passwordAgree=document.getElementsByClassName("passwordAgree")[0];
	const point=document.getElementById("point");
	const yes=document.getElementById("yes");
	const imgs=['images/verycode/verycode/aDUr.jpg'
			 ,'images/verycode/verycode/AjKX.jpg'
			 ,'images/verycode/verycode/buAr.jpg'
			 ,'images/verycode/verycode/CcwV.jpg'
			 ,'images/verycode/verycode/Dbwx.jpg'
			 ,'images/verycode/verycode/FMDf.jpg'
			 ,'images/verycode/verycode/JFE5.jpg'
			 ,'images/verycode/verycode/JMYQ.jpg'
			 ,'images/verycode/verycode/Re3F.jpg'
			 ,'images/verycode/verycode/Rjdq.jpg'
			 ,'images/verycode/verycode/Sq3b.jpg'
			 ,'images/verycode/verycode/X6Fs.jpg'];
	img.src=imgs[Math.floor(Math.random()*10)];
	img.onclick=function change(){
		img.src=imgs[Math.floor(Math.random()*10)];
	}
	password1.onchange=function(){
		passwordAgree.style.backgroundColor="#55ff7f";
		var password0value=document.getElementById("password0").value;
		var password1value=document.getElementById("password1").value;
		if(password0value==password1value){passwordAgree.style.backgroundColor="#55ff7f";}
		else{passwordAgree.style.backgroundColor="#ff0000"};
	}
	yes.onclick=function(){
		var YES=true;
		for(var i=0;i<5;i++){
			var check=document.getElementsByClassName("text")[i];
			var warning=document.getElementsByClassName("notNull")[i];
			if(check.value==""){warning.innerHTML='！此项不能为空！';YES=false;}
			else{warning.innerHTML='';}
		}
		var codeName=img.src.substring(img.src.lastIndexOf("/")+1,img.src.lastIndexOf("/")+5);
		var codeWrite=document.getElementsByClassName("text")[4].value
		if(codeName.toUpperCase()!=codeWrite.toUpperCase()){
			YES=false;
			document.getElementsByClassName("notNull")[4].innerHTML='！验证码错误！';
		}
		else{document.getElementsByClassName("notNull")[4].innerHTML='';}
		if(document.getElementById("point").checked==false){
			YES=false;
			document.getElementsByClassName("notNull")[5].innerHTML="！请勾选此选项！"
		}
		else{document.getElementsByClassName("notNull")[5].innerHTML='';}
		if(YES){window.location.replace("bbs.html")}
	}
}
