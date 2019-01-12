var Tcount=ritu=Gcount=flaga=0;
var lab=[];

function getClass2(jj,seikai){
	var kaito=document.getElementsByTagName('span');
	var n='resultB An'+jj;
	for (var i=0;i<kaito.length;i++){
		if(kaito[i].className == n){
			kaito[i].innerHTML=seikai;
		}
	}
}

function TF_tiripri(seikai,fnumber){
	var j = ""+(fnumber+1);
	var seigo = document.getElementById("QA"+j);
	var inData = document.form.elem[fnumber].value;
	outerLoop:
		for(var i=0; i<seikai.length; i++){
			if(inData.charAt(i)!=seikai.charAt(i)){		//一致してなかったら
				if(((inData.charCodeAt(i)>=97)&&(inData.charCodeAt(i)<=122) )||((inData.charCodeAt(i)>=65345)&&(inData.charCodeAt(i)<=65370))||((inData.charCodeAt(i)>=48)&&(inData.charCodeAt(i)<=57) )|| ((inData.charCodeAt(i)>=65296)&&(inData.charCodeAt(i)<=65305)) ){
					if(!(Math.abs(inData.charCodeAt(i)-seikai.charCodeAt(i)) == 65248)){
						break outerLoop;
					}
				}else{
					switch(seikai.charAt(i)){
						case "’":if(inData.charAt(i)=="'"){break;}
						case "？":if(inData.charAt(i)=="?"){break;}
						case "?":if(inData.charAt(i)=="？"){break;}
						case "＝":if(inData.charAt(i)=="="){break;}
						case "=":if(inData.charAt(i)=="＝"){break;}
						case "ー":if(inData.charAt(i)=="-"){break;}
						case "-":if(inData.charAt(i)=="ー"){break;}
						default:
							break outerLoop; //最終的に一致してなかったらループ脱出
					}
				}
			}
		}
	//end outerLoop
	if(i==seikai.length && i==inData.length){
		TF_C(1);
		seigo.style.color="red";
		seigo.innerHTML = "○正解";
	}else{
		TF_C(0);
		seigo.style.color="blue";
		seigo.innerHTML = "×不正解";
	}
	getClass2(j,seikai);
}


function TF_F(seikai,fnumber){
	var j = ""+(fnumber+1);
	var seigo = document.getElementById("QA"+j);
	var kaito = document.getElementById("An"+j);
	var inData = document.form.elem[fnumber].value;
	outerLoop:
		for(var i=0; i<seikai.length; i++){
			if(inData.charAt(i)!=seikai.charAt(i)){		//一致してなかったら
				if(((inData.charCodeAt(i)>=97)&&(inData.charCodeAt(i)<=122) )|| ((inData.charCodeAt(i)>=65345)&&(inData.charCodeAt(i)<=65370))|| ((inData.charCodeAt(i)>=48)&&(inData.charCodeAt(i)<=57) )|| ((inData.charCodeAt(i)>=65296)&&(inData.charCodeAt(i)<=65305)) ){
					if(!(Math.abs(inData.charCodeAt(i)-seikai.charCodeAt(i)) == 65248)){
						break outerLoop;
					}
				}else{
					switch(seikai.charAt(i)){
						case "’":if(inData.charAt(i)=="'"){break;}
						case "？":if(inData.charAt(i)=="?"){break;}
						case "?":if(inData.charAt(i)=="？"){break;}
						case "＝":if(inData.charAt(i)=="="){break;}
						case "=":if(inData.charAt(i)=="＝"){break;}
						case "ー":if(inData.charAt(i)=="-"){break;}
						case "-":if(inData.charAt(i)=="ー"){break;}
						default:
							break outerLoop; //最終的に一致してなかったらループ脱出
					}
				}
			}
		}
	//end outerLoop
	if(i==seikai.length && i==inData.length){
		TF_C(1);
		seigo.style.color="red";
		seigo.innerHTML = "○正解";
		kaito.innerHTML = seikai;
	}else{
		TF_C(0);
		seigo.style.color="blue";
		seigo.innerHTML = "×不正解";
	        if(seikai[i] == " "){
	            var huga = seikai.slice(0,i);
	            var hogg = seikai.slice(i,seikai.length);
	            kaito.innerHTML = huga + hogg.replace(seikai[i],"<span style = \"color:blue;font-size : 200%;\">_</span>");
	        }else{
	            var huga = seikai.slice(0,i);
	            var hogg = seikai.slice(i,seikai.length);
	            kaito.innerHTML = huga + hogg.replace(seikai[i],"<span style = \"color:blue;font-size : 150%;\">"+seikai[i]+"</span>");
	        }
	}
}

function TF_Choice (seikai,fnumber){
	var j = ""+(fnumber+1);
	var seigo = document.getElementById("QA"+j);
	var kaito = document.getElementById("An"+j);
	var inData = document.form.elem[fnumber].value;
	if(seikai == inData){
		TF_C(1);
		seigo.style.color="red";
		seigo.innerHTML = "○正解";
	}else{
		TF_C(0);
		seigo.style.color="blue";
		seigo.innerHTML = "×不正解";
	}
	selected(lab[seikai.charCodeAt()-97].name);
	kaito.innerHTML = "("+seikai+") "+lab[seikai.charCodeAt()-97].elem;
}

function TF_B(seikai,fnumber){
	var j = ""+(fnumber+1);
	var seigo = document.getElementById("QA"+j);
	var kaito = document.getElementById("An"+j);
	var inData = document.form.elem[fnumber].value;
	kaito.innerHTML = seikai;
}

function TF_Btiri(seikai,fnumber){
	var j = ""+(fnumber+1);
	var seigo = document.getElementById("QA"+j);
	var inData = document.form.elem[fnumber].value;
	getClass2(j,seikai);
}


/*要改善
function TF_R(fnumber){
	var j = ""+(fnumber+1);
	var seigo = document.getElementById("QA"+j);
	var kaito = document.getElementById("An"+j);
	var obj = document.form;
	var pro = [obj.elem1,obj.elem2,obj.elem3,obj.elem4,obj.elem5,obj.elem6,obj.elem7,
			obj.elem8,obj.elem9,obj.elem10]
	if (pro[fnumber].length) {
		for (var i = 0; i < pro[fnumber].length; i++) {
			if(pro[fnumber][i].value == 1){
				var sei=pro[fnumber][i].nextSibling.textContent;
				sei=sei.split("　");
				var seikai=sei[0].slice(2);
			}
		}
		for (var i = 0; i < pro[fnumber].length; i++) {
			if (pro[fnumber][i].checked) {
				if(pro[fnumber][i].value == 1){
					seigo.style.color="red";
					seigo.innerHTML = "○正解";
				}
				else{
						seigo.style.color="blue";
						seigo.innerHTML = "×不正解";
				}
			}
		}
	} 
	kaito.innerHTML = seikai;
}
*/



function fclear(){
	loading();
	for(var i=0; i<document.form.elem.length; i++){
		document.form.elem[i].value="";
		var j = ""+(i+1);
		var seigo = document.getElementById("QA"+j);
		var kaito = document.getElementById("An"+j);
		seigo.innerHTML="";
		kaito.innerHTML="";
	}
	lab_clear();
	endOfLoad();
	backToTop();
}

function fclear_tiripri(){
	loading();
	for(var i=0; i<document.form.elem.length; i++){
		document.form.elem[i].value="";
		var j = ""+(i+1);
		var seigo = document.getElementById("QA"+j);
		seigo.innerHTML="";
		getClass1(j);
	}
	lab_clear();
	endOfLoad();
	backToTop();
}

function lab_clear(){
	if(lab){
		for(var i=0; i<lab.length; i++){
			if(lab[i].clicked){
				lab[i].clicked=false;
				document.getElementById(lab[i].name).style.textDecoration="none";
				document.getElementById(lab[i].name).style.color="#333333";
			}
		}
	}else{
		return false;
	}
}


function getClass1(jj){
	var kaito=document.getElementsByTagName('span');
	var n='resultB An'+jj;
	for (var i=0;i<kaito.length;i++){
		if(kaito[i].className == n){
			kaito[i].innerHTML='';
		}
	}
}
function rclear(){
	var obj = document.form;
	var pro = [obj.elem1,obj.elem2,obj.elem3,obj.elem4,obj.elem5,obj.elem6,obj.elem7,
			obj.elem8,obj.elem9,obj.elem10];
	for(var i=0; i<document.form.length/3; i++){
		var j = ""+(i+1);
		var seigo = document.getElementById("QA"+j);
		var kaito = document.getElementById("An"+j);
		seigo.innerHTML = "";
		kaito.innerHTML = "";
		if (pro[i].length) {
			for (var n = 0; n < pro[i].length; n++) {
				if (pro[i][n].checked) {
					pro[i][n].checked = false;
				}
			}
		} 
	}
	backToTop();
}

function pri(hani){
	for(var i=0; i<document.form.elem.length; i++){
		document.form.elem[i].value="";
		var j = ""+(i+1);
		var seigo = document.getElementById("QA"+j);
		var kaito = document.getElementById("An"+j);
		kaito.innerHTML = hani[i];
		seigo.innerHTML="";
	}
}

function menucreate(){
	var menu = document.createElement('div');
	menu.style.position = "absolute";
	menu.style.top = "0px";
	menu.style.backgroundColor = "#383838";
	menu.style.textAlign = "center";
	menu.style.margin = "0px";
	menu.style.padding = "20px 0 0 0";
	menu.style.width = "100%";
	menu.style.height = "20px";
	menu.style.color ="white";
	menu.style.textAlign = "center";
	menu.innerHTML = '｜<a href="javascript:void(0);" onclick="createTopMenu(1); return false" style="color:white;text-decoration:none;">トップへ</a>｜<a href="http://www.excite.co.jp/world/" style="color:white;text-decoration:none;">エキサイト翻訳</a>｜<a href="http://honyaku.yahoo.co.jp/" style="color:white;text-decoration:none;">yahoo!翻訳</a>｜<a href="http://www.wolframalpha.com/" style="color:white;text-decoration:none;">Wolfram Alpha</a>｜<a href="http://webclass.hakodate-ct.ac.jp/" style="color:white;text-decoration:none;">WebClass</a>｜';
	menu.innerHTML += '正答率:<span id="Tnumb">'+ritu+'</span>%　<a href="javascript:void(0);" onclick="resetTF(); return false" style="color:white;text-decoration:none;">リセット</a>｜';
	var objBody = document.body; 
	objBody.appendChild(menu);
}
function resetTF(){Tcount=ritu=Gcount=0;document.getElementById("Tnumb").innerHTML=ritu;}
function TF_C (b) {
	Gcount++;
	if(b){
		Tcount++;
		ritu=((Tcount/Gcount)*100).toFixed(2);
		document.getElementById("Tnumb").innerHTML=ritu;
	}else{
		ritu=((Tcount/Gcount)*100).toFixed(2);
		document.getElementById("Tnumb").innerHTML=ritu;
	}
}
	
function searchValue(nm){
	var data=xmltest(1);
	for(var i=0; i<data.main.length; i++){
		for(var j=0; j<data.main[i].value.length; j++){
			if(data.main[i].value[j].title==nm){
				return data.main[i].value[j];
			}
		}
	}
}
//↓作る↓
function nex(tan){
	var data = xmltest(1);
	for(var i=0; i<data.main.length; i++){
		for(var j=0; j<data.main[i].value.length; j++){
			if(data.main[i].value[j].title==tan){
				var out1 = "<br><div style=\"text-align:center;\">";
				if(data.main[i].value[j].type){
					if(data.main[i].value[j-1]){
						out1 += "<a onclick=\"createTiri(\'"+data.main[i].value[j-1].title+"\');return false;\" href=\"javascript:void(0);\">＜前へ　</a>";
					}
					if(data.main[i].value[j+1]){
						out1 += "<a onclick=\"createTiri(\'"+data.main[i].value[j+1].title+"\');return false;\" href=\"javascript:void(0);\">　次へ＞</a>";
					}
				}else{
					if(data.main[i].value[j-1]){
						out1+="<a onclick=\"createQA(\'"+data.main[i].value[j-1].title+"\');return false;\" href=\"javascript:void(0);\">＜前へ　</a>";
					}
					if(data.main[i].value[j+1]){
						out1+="<a onclick=\"createQA(\'"+data.main[i].value[j+1].title+"\');return false;\" href=\"javascript:void(0);\">　次へ＞</a>";
					}
				}
				out1 += "</div><br>";
				if(out1 == "") {
					alert("あれれ？");
					return "あれれのれ";
				}
				return out1;
			}
		}
	}
}

function createTiri(tangen){
	loading();
	setTimeout(function(){
		if(searchValue(tangen)){
			var obj=searchValue(tangen);
		}else{
			alert("要素が見つかりませんでした");
		}
		var out2="";
		out2+="<div id=\"Htitle\">"+obj.title+"</div><br><span id=\"Ksentaku\"></span><br><div id=\"Hmon\">"+obj.mon+"</div><br><div id=\"tiri_bun\"><ol>";
		for(var i=0; i<obj.bun.length;i++){
			out2+="<li>";
			var kakko = obj.bun[i].match(/[\(].*?[\)]/g);
			var out3=obj.bun[i];
			if(kakko){
				for (var j=0; j<kakko.length; j++){
					var u=kakko[j];
					if(u.length<4){
						var out4="("+u.substring(1,2)+"　<span  class=\"resultB An"+u.substring(1,2)+"\"></span>　)";
					}else{
						var out4="("+u.substring(1,3)+"　<span  class=\"resultB An"+u.substring(1,3)+"\"></span>　)";
					}
					out3=out3.replace(kakko[j],out4);
				}
			}
			out2+=out3+"</li><br>";
		}
		out2+="</ol></div><form name=\"form\"><div id=\"tiri_form\"><ol>";
		for(var i=0; i<obj.Ans.length; i++){
			out2+="<li><a href=\"javascript:void(0);\" onclick=\"TF_Btiri(\'"+obj.Ans[i]+"\',"+i+");\">ω</a><input type=\"text\" name=\"elem\" size=\"20\" onchange=\"TF_tiripri(\'"+obj.Ans[i]+"\',"+i+");\"><span id=\"QA"+(i+1)+"\" class=\"resultA\"></span></li>";
		}
		out2+="</ol></div></form><div style=\"clear:both;\"><input type=\"button\" value=\"クリア\" class=\"clearbutton\" onclick=\"fclear_tiripri();\">";
		out2+="<input type=\"button\" value=\"ゆとりモード\" class=\"yutoributton\" onclick=\"yutoribox(\'"+tangen+"\')\">"+nex(tangen)+"</div>";
		setTimeout(function(){document.getElementById("backbox").innerHTML=out2+"<div id=\"hutta\"></div>";endOfLoad();},300);
	},1);
}

function createQA(tangen){
	lab=[];
	loading();
	setTimeout(function(){
		if(searchValue(tangen)){
			var obj=searchValue(tangen);//data[i].value[j]が返ってくる
		}else{
			alert("要素が見つかりませんでした");
		}
		var out2="";
		var rn=0;
		//タイトル、最初の問題文、objにsentakuがあったら選択ボックスの成型
		out2+="<div id=\"Htitle\">"+obj.title+"</div><br><div id=\"Hmon\">"+obj.mon+"</div><br>";
		var outsent="<br>";
		if(obj.sentaku){
			out2+="<div id=\"dummyHsentaku\"></div><div id=\"Hsentaku\">";
			if(obj.choiceSign == "true"){
				var randSent = [];
				for(var i=0; i<obj.sentaku.length; i++){
					randSent.push({elem:obj.sentaku[i],numb:Math.random(),orderBefore:i});
				}
				randSent.sort(function(a,b){ return b.numb - a.numb; });	
				for(var i=0; i<randSent.length; i++){
					out2+="<label onclick=\"selected(\'l"+i+"\');\" id=\"l"+i+"\">("+String.fromCharCode(97+i)+") "+randSent[i].elem+"</label><br>";
					lab.push({name:"l"+i,clicked:false,elem:randSent[i].elem,orderBefore:"$c"+randSent[i].orderBefore});
				}
			}else{
				for(var i=0; i<obj.sentaku.length; i++){
					out2+="<label onclick=\"selected(\'l"+i+"\');\" id=\"l"+i+"\">"+obj.sentaku[i]+"</label>　";
					lab.push({name:"l"+i,clicked:false});
				}
			}
			out2+="</div><br><a id = \"alet\" href=\"javascript:void(0);\" onclick=\"fix();\">選択ボックス固定</a><br><form name=\"form\"><table>";
		}else{
			out2+="<span id=\"Ksentaku\"></span><br><form name=\"form\"><table>";
		}
		//ヘッダここまで
		//各問題の成型
		var randObj=[];
		if(obj.rand == "true"){
			for(var i=0; i<obj.QandA.length;i++){
				randObj.push({elem:obj.QandA[i],numb:Math.random()});
			}
			randObj.sort(function(a,b){ return b.numb - a.numb; });
		}else{
			for(var i=0; i<obj.QandA.length;i++){
				randObj.push({elem:obj.QandA[i],numb:i});
			}
		}
		for(var i=0; i<randObj.length;i++){
			out2+="<tr><td style=\"vertical-align:top;\">　"+(i+1)+":</td>";
			var sub=randObj[i].elem;
			if(sub.Q.indexOf("()")!=-1){
				if(sub.Aitem>1){
					var out3="";
					var subQ=sub.Q;
					for(var j=0; j<sub.Aitem; j++){
						subQ=subQ.replace("()","("+(j+1)+"　<span id=\"An"+(rn+1)+"\" class=\"resultB\"></span>　)");
						var tf = "";
						if(sub.A[j].indexOf("$c")!=-1){
							for(var k=0;k<lab.length; k++){
								if(lab[k].orderBefore == sub.A[j]){
									tf = "TF_Choice(\'"+String.fromCharCode(97+k)+"\'";
									break;
								}
							}
						}else{
							tf = "TF_F(\'"+sub.A[j]+"\'";
						}
						var tf_b = "TF_B(\'"+sub.A[j]+"\'";
						out3+="<tr><td></td><td><a href=\"javascript:void(0);\" onclick=\""+tf_b+","+rn+");\">ω</a>"+(j+1)+".<input type=\"text\" name=\"elem\" size=\"40\" onchange=\""+tf+","+rn+");\"><span id=\"QA"+(rn+1)+"\" class=\"resultA\"></span></td></tr>";
						rn++;
					}
					out2+="<td>"+subQ+"</td></tr>";
					if(sub.other){
						out2+="<tr><td></td><td>"+sub.other+"</td></tr>";
					}
					out2+=out3;
				}else{
					var subQ=sub.Q;
					var subQ=subQ.replace("()","(　<span id=\"An"+(rn+1)+"\" class=\"resultB\"></span>　)");
					out2+="<td>"+subQ+"</td></tr>";
					if(sub.other){
						out2+="<tr><td></td><td>"+sub.other+"</td></tr>";
					}
					var tf = "";
					if(sub.A.indexOf("$c")!=-1){
						for(var k=0;k<lab.length; k++){
							if(lab[k].orderBefore == sub.A){
								tf = "TF_Choice(\'"+String.fromCharCode(97+k)+"\'";
								break;
							}
						}
					}else{
						tf = "TF_F(\'"+sub.A+"\'";
					}
					var tf_b = "TF_B(\'"+sub.A+"\'";
					out2+="<tr><td></td><td><a href=\"javascript:void(0);\" onclick=\""+tf_b+","+rn+");\">ω</a><input type=\"text\" name=\"elem\" size=\"40\" onchange=\""+tf+","+rn+");\"><span id=\"QA"+(rn+1)+"\" class=\"resultA\"></span></td></tr>";
					rn++;
				}
			}else{
				out2+="<td>"+sub.Q+"：(　<span id=\"An"+(rn+1)+"\" class=\"resultB\"></span>　)</td></tr>";
				if(sub.other){
					out2+="<tr><td></td><td>"+sub.other+"</td></tr>";
				}
				var tf = "";
				if(sub.A.indexOf("$c")!=-1){
					for(var k=0;k<lab.length; k++){
						if(lab[k].orderBefore == sub.A){
							tf = "TF_Choice(\'"+String.fromCharCode(97+k)+"\'";
							break;
						}
					}
				}else{
					tf = "TF_F(\'"+sub.A+"\'";
				}
				var tf_b = "TF_B(\'"+sub.A+"\'";
				out2+="<tr><td></td><td><a href=\"javascript:void(0);\" onclick=\""+tf_b+","+rn+");\">ω</a><input type=\"text\" name=\"elem\" size=\"40\" onchange=\""+tf+","+rn+");\"><span id=\"QA"+(rn+1)+"\" class=\"resultA\"></span></td></tr>";
				rn++;
			}
		}
		//問題ここまで
		out2+="	</table><br></form><input type=\"button\" value=\"クリア\" class=\"clearbutton\" onclick=\"fclear()\">";
		out2+="<input type=\"button\" value=\"ゆとりモード\" class=\"yutoributton\" onclick=\"yutoribox(\'"+tangen+"\')\"><br>";
		out2+=nex(tangen);
		setTimeout(function(){
			document.getElementById("backbox").innerHTML=out2;
			endOfLoad();
		},300);
	},1);
}


function yutoribox(a){
	lab=[];
	if(! document.getElementById("Hsentaku")){document.getElementById("Ksentaku").innerHTML="<div  style=\"text-align:center;\"><img src=\"ajax-loader.gif\"></div>";};
	if(searchValue(a)){
		var obj=searchValue(a);
	}else{
		alert("要素が見つかりませんでした");
	}
	var anss=[];
	var f1=1;
	if(obj.type){
		for(var i=0;i<obj.Ans.length;i++){
			anss.push({elem:obj.Ans[i],numb:Math.random()});
		}
	}else{
		var subObj=[];
		for(var i=0;i<obj.QandA.length;i++){
			subObj.push(obj.QandA[i]);
		}
		for(var i=0;i<subObj.length;i++){
			if(subObj[i].Aitem==1){
				anss.push({elem:subObj[i].A,numb:Math.random()});
			}else{
				alert("解答欄が複数ある問題があるので、選択欄を生成できません。");
				document.getElementById("Ksentaku").innerHTML="";
				f1=0;
				break;
			}
		}
	}
	if(f1){
		anss.sort( function(a,b){ return b.numb - a.numb; });
		if(document.getElementById("Hsentaku")){
			alert("既定の選択欄があります");
		}else{
			var outf=[];
			for(var i=0; i<anss.length; i++){
				outf.push(anss[i].elem);
			}
			var out2="<div id=\"dummyHsentaku\"></div><div id=\"Hsentaku\">";
			for(var i=0; i<outf.length; i++){
				out2+="<label onclick=\"selected(\'l"+i+"\');\" id=\"l"+i+"\">"+outf[i]+"</label>　　";
				if(obj.crlf && i<outf.length-1){
					out2+="<br>";
				}
				lab.push({name:"l"+i,clicked:false});
			}
			out2+="</div><br><a id = \"alet\" href=\"javascript:void(0);\" onclick=\"fix();\">選択ボックス固定</a>";
			document.getElementById("Ksentaku").innerHTML=out2;
		}
	}
	
}

function selected(n){
	for(var i=0;i<lab.length; i++){
		if(lab[i].name==n){
			if(lab[i].clicked){
				lab[i].clicked=false;
				document.getElementById(n).style.textDecoration="none";
				document.getElementById(n).style.color="#333333";
			}else{
				lab[i].clicked=true;
				document.getElementById(n).style.textDecoration="line-through";
				document.getElementById(n).style.color="#CDCDCD";
			}
		}
	}
}

function createTopMenu(c){
	loading();
	setTimeout(function(){
		var data=xmltest(c);
		var out1="";
		for(var i=0; i<data.main.length; i++){
			out1+="<div class=\"menu\"><h2>"+data.main[i].kyouka+"</h2>";
			out1+="<ul>";
			for (var j=0; j<data.main[i].value.length; j++){
				if(data.main[i].value[j].type){
					out1+="<li class=\"ln\"><a onclick=\"createTiri(\'"+data.main[i].value[j].title+"\');return false;\" href=\"javascript:void(0);\">"+data.main[i].value[j].title+"</a></li>";
				}else{
					out1+="<li class=\"ln\"><a onclick=\"createQA(\'"+data.main[i].value[j].title+"\');return false;\" href=\"javascript:void(0);\">"+data.main[i].value[j].title+"</a></li>";
				}
			}
			out1+="</ul></div>";
		}
		var a=document.getElementById("backbox");
		setTimeout(function(){a.innerHTML=out1+"<div id=\"hutta\"></div>";endOfLoad();},300);
	},1);
}

function xmltest(a){
	var the_object;
	var date = new Date();
	var timestamp = date.getTime();
	var obj = new XMLHttpRequest();
	var url="./testJson1.json";
	if(a){
		obj.open( "GET",url+"?time="+timestamp, false );
	}else{
		obj.open( "GET",url, false );//ok
	}
	obj.send(null);
	if (obj.readyState == 4 && obj.status == 200){
		return eval("("+obj.responseText+")"); 
	}
}


function loading(){
	h = document.getElementById("rap").clientHeight;
	document.getElementById("backbox").style.display = "none";
	document.getElementById("rap").style.height = h+"px";
	document.getElementById("loading").style.display = "block";
}
function endOfLoad(){
	document.getElementById("loading").style.display = "none";
	document.getElementById("backbox").style.display = "block";
	document.getElementById("rap").style.height = "auto";
}
function fix(){
	var a = document.getElementById("Hsentaku");
	a.style.position = "fixed";
	document.getElementById("Hsentaku").style.top = a.offsetTop+"px";
	document.getElementById("dummyHsentaku").style.height = a.offsetHeight +"px";
	var b = document.getElementById("alet");
	b.onclick = fixed;
	b.textContent = "選択ボックス固定解除";
}
function fixed(){
	var a = document.getElementById("Hsentaku");
	a.style.position = "static";
	document.getElementById("dummyHsentaku").style.height = "0px";
	var b = document.getElementById("alet");
	b.onclick = fix;
	b.textContent = "選択ボックス固定";
}

function backToTop() {
	var x1 = x2 = x3 = 0;
	var y1 = y2 = y3 = 0;
	if (document.documentElement) {
		x1 = document.documentElement.scrollLeft || 0;
		y1 = document.documentElement.scrollTop || 0;
	}
	if (document.body) {
		x2 = document.body.scrollLeft || 0;
		y2 = document.body.scrollTop || 0;
	}
	x3 = window.scrollX || 0;
	y3 = window.scrollY || 0;
	var x = Math.max(x1, Math.max(x2, x3));
	var y = Math.max(y1, Math.max(y2, y3));
	window.scrollTo(Math.floor(x / 2), Math.floor(y / 2));
	if (x > 0 || y > 0) {
		window.setTimeout("backToTop()", 25);
	}
}
