window.onload=function run(){
		const ph=document.getElementById("ph");
		const pm=document.getElementById("pm");
		const ps=document.getElementById("ps");
		function run(){
			let date=new Date()
			let h=date.getHours()
			let m=date.getMinutes()
			let s=date.getSeconds()
			const rh=h*30+(m/60)*30
			const rm=m*6+(s/60)*6
			const rs=s*6
			ph.style.transform='rotate('+rh+'deg)'
			pm.style.transform='rotate('+rm+'deg)'
			ps.style.transform='rotate('+rs+'deg)'
			h=(h<10?'0':'')+h
			m=(m<10?'0':'')+m
			s=(s<10?'0':'')+s
			document.getElementById('time').innerHTML=h+":"+m+":"+s
		}
		run()
		setInterval(run,1000)
}
var num=1
function change(){
	num+=1
	num%=3
	if(num==1){
		document.getElementById('d0').style.backgroundImage="url('images/pan1.jpg')"
	}
	else if(num==2){
		document.getElementById('d0').style.backgroundImage="url('images/pan2.jpg')"
	}
	else{
		document.getElementById('d0').style.backgroundImage="url('')"
	}
}