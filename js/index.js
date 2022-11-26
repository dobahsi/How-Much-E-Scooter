const question = document.getElementById("question");
const information = document.getElementById("information");
const reset = document.getElementById("reset");
const dotbutton = document.getElementById("dotbutton");
const barbutton = document.getElementById("barbutton");
const dotwindow = document.getElementById("dotwindow");
const barwindow = document.getElementById("barwindow");
const searchbutton = document.getElementById("searchbutton");
const custombutton = document.getElementById("custombutton");
const dotside = document.getElementById("dotside");
const barside = document.getElementById("barside");
const searchside = document.getElementById("searchside");
const searchinside = document.getElementById("searchinside");
const customside = document.getElementById('customside');
const informationside = document.getElementById("informationside");
const fullbackground = document.getElementById("fullbackground");
var selectxaxis = document.getElementById("selectxaxis");
var selectyaxis = document.getElementById("selectyaxis");

//preload
setTimeout(function preloadanimation(){
	d3.select('#preloadanimation')
    .style('display', 'none');
},1500);

//button
dotbutton.classList.add("press");
barwindow.classList.add("displaynone");
barside.classList.add("displaynone");
customside.classList.add("displaynone");
searchside.classList.add("displaynone");
informationside.classList.add("displaynone");
fullbackground.classList.add("displaynone");

dotbutton.onclick=function(){
	if(dotbutton.classList.contains("press")){
	}else{
		barwindow.classList.toggle("displaynone");
		barside.classList.toggle("displaynone");
		barbutton.classList.remove("press");
		barbutton.classList.add("unpress");
		dotbutton.classList.remove("unpress");
		dotbutton.classList.add("press");
	};
};

barbutton.onclick = function(){
	if(barbutton.classList.contains("press")){
	}else{
		barwindow.classList.toggle("displaynone");
		barside.classList.toggle("displaynone");
		dotbutton.classList.remove("press");
		dotbutton.classList.add("unpress");
		barbutton.classList.remove("unpress");
		barbutton.classList.add("press");
	};
};

custombutton.onclick = function(){
	customside.classList.toggle("displaynone");
	informationside.classList.add("displaynone");
	if(custombutton.classList.contains("press")){
		custombutton.classList.remove("press");
		custombutton.classList.add("unpress");
	}else{
		custombutton.classList.remove("unpress");
		custombutton.classList.add("press");
		searchside.classList.add("displaynone");
	};
};

information.onclick = function(){
	if(customside.classList.contains("displaynone")){
	}else{
		custombutton.onclick();
	};
	searchside.classList.add("displaynone");
	informationside.classList.toggle("displaynone");
};

window.onclick = function(e){
	if(e.target.id == "searchbar" || e.target.id == "search" || e.target.id == "searchbutton"){
		if(customside.classList.contains("displaynone")){
		}else{
			custombutton.onclick();
		};
		if(informationside.classList.contains("displaynone")){
		}else{
			informationside.classList.add("displaynone");
		};
		searchside.classList.remove("displaynone");
		fullbackground.classList.remove("displaynone");
	}else if(e.target.id == "fullbackground"){
		searchside.classList.add("displaynone");
		fullbackground.classList.add("displaynone");
	};
};

document.getElementById("customclose").onclick = function(){
	custombutton.onclick();
};
document.getElementById("searchclose").onclick = function(){
	searchside.classList.add("displaynone");
	fullbackground.classList.add("displaynone");
};
document.getElementById("informationclose").onclick = function(){
	information.onclick();
};


//slider
var in92 = document.getElementById("92pricein");
var out92 = document.getElementById("92priceout");
out92.innerHTML = input[0].gas92;
in92.oninput = function() {
out92.innerHTML = in92.value;
input[0].gas92 = in92.value};

var inelec = document.getElementById("electricpricein");
var outelec = document.getElementById("electricpriceout");
outelec.innerHTML = input[0].electric;
inelec.oninput = function() {
outelec.innerHTML = inelec.value;
input[0].electric = inelec.value};

var gasmotorsubsidy = document.getElementById("gasmotorsubsidy");
var evmotorsubsidy = document.getElementById("evmotorsubsidy");
var greenevsubsidy = document.getElementById("greenevsubsidy");
var gasmotorsub = subsidy[0].gas;
var evmotorsub = subsidy[0].evwhite;
var greenevsub = subsidy[0].evgreen;
gasmotorsubsidy.innerHTML = subsidy[0].gas;
evmotorsubsidy.innerHTML = subsidy[0].evwhite;
greenevsubsidy.innerHTML = subsidy[2].evgreen;

var inyearkm = document.getElementById("yearkmin");
var outyearkm = document.getElementById("yearkmout");
outyearkm.innerHTML = input[0].yearkm;
inyearkm.oninput = function() {
outyearkm.innerHTML = inyearkm.value;
input[0].yearkm = inyearkm.value;
input[0].monthkm = inyearkm.value/12};

var inownyear = document.getElementById("ownyearin");
var outownyear = document.getElementById("ownyearout");
outownyear.innerHTML = input[0].ownyear;
inownyear.oninput = function() {
outownyear.innerHTML = inownyear.value;
input[0].ownyear = inownyear.value};

var indepreciation = document.getElementById("depreciationin");
var outdepreciation = document.getElementById("depreciationout");
outdepreciation.innerHTML = ((1-input[0].depreciation)*100).toFixed(0);
indepreciation.oninput = function() {
outdepreciation.innerHTML = (indepreciation.value*100).toFixed(0);
input[0].depreciation = (1 - indepreciation.value*1).toFixed(2);};

var indiscount = document.getElementById("discountin");
var outdiscount = document.getElementById("discountout");
outdiscount.innerHTML = (input[0].discount*100).toFixed(0);
indiscount.oninput = function() {
outdiscount.innerHTML = (indiscount.value*100).toFixed(0);
input[0].discount = indiscount.value};

var incarbon = document.getElementById("carbonin");
var outcarbon = document.getElementById("carbonout");
outcarbon.innerHTML = (input[0].electriccoefficient/1000).toFixed(2);
incarbon.oninput = function() {
outcarbon.innerHTML = (incarbon.value*1).toFixed(2);
input[0].electriccoefficient = incarbon.value*1000};

var selectcity = document.getElementById("selectcity");

window.addEventListener('pointerup', e => {updatesubsidy()});
function updatesubsidy(){
	for(var i=0; i<subsidy.length; i++){
		if(selectcity.value==subsidy[i].city){
			gasmotorsub = subsidy[i].gas;
			evmotorsub = subsidy[i].evwhite;
			greenevsub = subsidy[i].evgreen;
			gasmotorsubsidy.innerHTML = subsidy[i].gas;
			evmotorsubsidy.innerHTML = subsidy[i].evwhite;
			greenevsubsidy.innerHTML = subsidy[i].evgreen;
		};
	};
};

document.getElementById("reset").onclick = function(){
	input[0].gas92 = in92.value = out92.innerHTML = 27.2;
	input[0].electric = inelec.value = outelec.innerHTML = 2.7;
	input[0].yearkm = inyearkm.value = outyearkm.innerHTML = 6400;
	input[0].ownyear = inownyear.value = outownyear.innerHTML = 16;
	input[0].depreciation = 0.75;
	indepreciation.value = 0.25;
	outdepreciation.innerHTML = (indepreciation.value*100).toFixed(0);
	input[0].discount = indiscount.value = 0.06;
	outdiscount.innerHTML = (input[0].discount*100).toFixed(0);
	input[0].electriccoefficient = 551.7;
	incarbon.value = outcarbon.innerHTML = (input[0].electriccoefficient/1000).toFixed(2);
	selectcity.value = subsidy[0].city;
	gasmotorsub = subsidy[0].gas;
	evmotorsub = subsidy[0].evwhite;
	greenevsub = subsidy[0].evgreen;
	gasmotorsubsidy.innerHTML = subsidy[0].gas;
	evmotorsubsidy.innerHTML = subsidy[0].evwhite;
	greenevsubsidy.innerHTML = subsidy[0].evgreen;
	searchside.classList.add("displaynone");
	fullbackground.classList.add("displaynone");
	// d3.selectAll("input[type=checkbox]").property("checked", false);
	// checkedData = [];
	updateSelectedDot();
};



//dotchart
//劃出製圖區域
var dotchart = d3.select(dotwindow).append('svg')
	.attr('width', '100%')
	.attr('height', '100%');

var winWidth = dotwindow.clientWidth;
var winHeight = dotwindow.clientHeight;

//全部合成一個array
var motordata = SwapM.concat(SwapS, ChargeM, ChargeS, Phase7, Phase6);

//設定xy邊界
//scaleLinear()是線性對應
//同時是一個製圖比例function
//domain是xy值得上下邊界
//range是在製圖範圍內的比例
var dotxScale = d3.scaleLinear()
    .domain([d3.min(motordata, d => d.spending*1)*0.96, d3.max(motordata, d => d.spending*1)*1.04])
    .range([57, winWidth-40]);
var dotyScale = d3.scaleLinear()
    .domain([d3.max(motordata, d => d.emission*1)*1.06, Math.min(d3.min(motordata, d => d.emission*1)*0.94, FutureGoal[2].emission*0.9)])
    .range([15, winHeight-70]);

//叫出xy軸
//用transform調整軸線位置
var dotxAxis = dotchart.append('g')
    .attr('transform', 'translate(0, ' + (winHeight-70) + ')')
    .call(d3.axisBottom(dotxScale));
var dotyAxis = dotchart.append('g')
    .attr('transform', 'translate(57,0)')
    .call(d3.axisLeft(dotyScale));

//縮放xy軸名稱, 座標數字的大小
dotxAxis.selectAll('text')
    .style('font-size', '0.8rem');
dotyAxis.selectAll('text')
    .style('font-size', '0.8rem');

//scaleOrdinal()
//一個可以找出對應名稱的function, 一個對應一個 e.g. 1對到A, 2對到B...
//如果在資料裡面用的簡稱不想顯示出來可以改成比較好懂得字串
//或是分類 e.g. 1對到A, 3也對到A
//也可以對應到想要用到的色票之類的各種資訊
const energySelect = d3.scaleOrdinal()
	.domain(['Phase6', 'Phase7', 'SwapM', 'ChargeM', 'SwapS', 'ChargeS'])
	.range(['P6GS', 'P7GS', 'BSES', 'BCES', 'BSES', 'BCES']);

const energySelectFull = d3.scaleOrdinal()
	.domain(['Phase6', 'Phase7', 'SwapM', 'ChargeM', 'SwapS', 'ChargeS'])
	.range(['Phase 6 Gas. Scooter', 'Phase 7 Gas. Scooter', 'Batt. Swap. E-Scooter', 'Batt. Charge. E-Scooter', 'Batt. Swap. E-Scooter', 'Batt. Charge. E-Scooter']);

const colorSelect = d3.scaleOrdinal()
	.domain(['Phase6', 'Phase7', 'SwapM', 'ChargeM', 'SwapS', 'ChargeS'])
	.range(['#BA9699', '#C36B76', '#16A1FE', '#FEAE0A', '#B5CCDD', '#EAE4D4']);

//拿motordata(總和後的矩陣)來一筆一筆畫出點點
//點點要套剛剛的製圖比例function
//這些順序有按照一定的順序邏輯, 可以網路查d3.js
//cx cy是circle的專屬定位方式, rect或g就不能用
dotchart.append('g')
    .selectAll('circle')
    .data(motordata)
    .join('circle')
    .attr('cx', d => dotxScale(d.spending))
    .attr('cy', d => dotyScale(d.emission))
    .attr('r', 6.5)
    .attr('fill', d => colorSelect(d.category))
	.style("cursor", "pointer")
	.on('mouseover', dotHover)
	.on('mouseout', dotunHover)
	.on('click', dotClick);

//xy軸名稱
//text-anchor拿來置中字串
//.html可以直接寫在整串的最後接下去
//但這邊把axistitle.html額外拿出來寫是為了後續容易換xy軸的名稱
var xaxistitle = dotchart.append('text')
    .attr('x', winWidth/2)
    .attr('y', winHeight-30)
	.attr('fill', '#112D4E')
	.attr('text-anchor', 'middle')
    .style('font-size', '0.8em');

xaxistitle.html('Total Cost of Ownership (NT$/month)');

var yaxistitle = dotchart.append('text')
    .attr('transform', 'rotate(-90)')
    .attr('x', -winHeight/2)
    .attr('y', 20)
	.attr('fill', '#112D4E')
    .style('font-size', '0.8em')
	.attr('text-anchor', 'middle');

yaxistitle.html('Greenhouse Gas Emissions (gCO₂eq/km)');

//劃出一個'已選點'的繪圖區域
var selectedDotArea = dotchart.append('g');

//futuregoal
var futureGoalArea = dotchart.append('g');

futureGoalArea.selectAll('line')
	.data(FutureGoal)
	.join('line')
	.style('stroke', '#112D4E')
	.style('stroke-dasharray', ('3, 3'))
	.attr('x1', 57)
	.attr('y1', d => dotyScale(d.emission))
	.attr('x2', winWidth-40)
	.attr('y2', d => dotyScale(d.emission))
	.on('mouseover', lineHover)
	.on('mouseout', lineunHover);


//tools
//拿來做hover的資訊卡
//平常display none, hover的時候display
var namediv = d3.select('#fullwindow')
    .append('div')
    .attr('class', 'nametag')
    .style('display', 'none');

//這裡的i是點的data資料
//d是滑鼠的動作資訊 e.g.滑鼠的位置, 在做什麼動作...
function dotHover(d,i){
	//hover點變大
	d3.select(this)
		.attr('r', 8);

	namediv.transition()
		.style('display', 'block');
	
	//i.x y是計算過後最後拿來繪圖跟輸出的值
	//原本的x y值是四捨五入前的資訊 這樣繪圖位置最精準
	//tempx y拿來顯示在hover資訊卡上面, 不會動到原本的資料
	var tempx = (i.x*1).toFixed(0);
	var tempy = (i.y*1).toFixed(2);
	if(selectxaxis.value == selectxaxis[0].innerHTML){
		tempx = (i.x*1).toFixed(2);
	};

	//hover資訊卡的innerhtml
	//d.x y是在hover的時候滑鼠所在螢幕上的位置資訊
	//也是hover資訊卡會出現的地方
	namediv.html(energySelect(i.category)+' | $'+i.price+'<br>'+i.brand+' '+i.model+'<br>'+tempx+' NT$, '+tempy+' gCO<sub>2</sub>')
		.style('left', d.x+20 + 'px')
		.style('top', d.y+20 + 'px');
	//select axis後面會出現
	//這個if用在如果有特定軸需要不同單位的時候用
	//像是這邊原本是gCO2, 變成kgCO2
	if(selectyaxis.value == selectyaxis[1].innerHTML || selectyaxis.value == selectyaxis[2].innerHTML){
		namediv.html(energySelect(i.category)+' | $'+i.price+'<br>'+i.brand+' '+i.model+'<br>'+tempx+' NT$, '+tempy+' kgCO<sub>2</sub>')
	};
};

//unhover的時候把點點縮回去, 資訊卡藏起來
function dotunHover(d,i){
	d3.select(this)
		.attr('r', 6.5);

	namediv.transition()
		.style('display', 'none');
};

//點擊點點的時候會把資訊加入'已選點'
//跟上面一樣, i是點的資料
//之前版本是每check一次就刷新已選點列表, 但是會把順序打亂
//這次是每點一次就把一個資料push進去, 順序就跟點的資訊一樣了
var checkedData = [];
function dotClick(d,i){
	checkedData.push(i);

	//點擊點點的同時要把列表的checkbox勾起來
	for(var j=0; j<motorlist.length; j++){
		if(motorlist[j].name+motorlist[j].value == i.category+i.model){
			motorlist[j].checked = true;
		};
	};

	//已選點的更新
	updateSelectedDot();
};

//點擊'已選點'的function
//.splice用來消除矩陣的其中一個資料
//從第'j'個往後刪掉'1'個
function dotunClick(d,i){
	for(var j=0; j<checkedData.length; j++){
		if(checkedData[j].category+checkedData[j].model == i.category+i.model){
			checkedData.splice(j,1);
			break;
		};
	};

	//checkbox false
	for(var k=0; k<motorlist.length; k++){
		if(motorlist[k].name+motorlist[k].value == i.category+i.model){
			motorlist[k].checked = false;
			break;
		};
	};

	updateSelectedDot();
};

//linehover
function lineHover(d,i){
	namediv.transition()
		.style('display', 'block');
	
	var tempy = (i.y*1).toFixed(2);

	if(selectyaxis.value == selectyaxis[1].innerHTML){
	namediv.html(i.year+' Emission Target<br>(for average car on road)<br>'+tempy+' kgCO2')
		.style('left', d.x+20 + 'px')
		.style('top', d.y+20 + 'px');
	}else{
	namediv.html(i.year+' Emission Target<br>(for average car on road)<br>'+tempy+' gCO2')
		.style('left', d.x+20 + 'px')
		.style('top', d.y+20 + 'px');
	};
};

function lineunHover(d,i){
	namediv.transition()
		.style('display', 'none');
};

//已選點的hover
//這邊多了一個先select(this)才select('circle')
//因為在點點上面要放數字, 所以拿了<g>包住裡面的<circle>跟<text>
//this是指<g>, 後面會有為什麼, 詳見updateSelectedDot()
function selectedDotHover(d,i){
	d3.select(this).select('circle')
		.attr('r', 11);

	namediv.transition()
		.style('display', 'block');

	var tempx = (i.x*1).toFixed(0);
	var tempy = (i.y*1).toFixed(2);
	if(selectxaxis.value == selectxaxis[0].innerHTML){
		tempx = (i.x*1).toFixed(2);
	};

	namediv.html(energySelect(i.category)+' | $'+i.price+'<br>'+i.brand+' '+i.model+'<br>'+tempx+' NT$, '+tempy+' gCO<sub>2</sub>')
		.style('left', d.x+20 + 'px')
		.style('top', d.y+20 + 'px');
};
function selectedDotunHover(d,i){
	d3.select(this).select('circle')
		.attr('r', 9);

	namediv.transition()
		.style('display', 'none');
};

//hover右邊legend時會帶動散佈圖的點點放大縮小
d3.select('#Phase6')
	.on('mouseover', Phase6Hover)
	.on('mouseout', legendunHover);
d3.select('#Phase7')
	.on('mouseover', Phase7Hover)
	.on('mouseout', legendunHover);
d3.select('#SwapM')
	.on('mouseover', SwapMHover)
	.on('mouseout', legendunHover);
d3.select('#ChargeM')
	.on('mouseover', ChargeMHover)
	.on('mouseout', legendunHover);
d3.select('#SwapS')
	.on('mouseover', SwapSHover)
	.on('mouseout', legendunHover);
d3.select('#ChargeS')
	.on('mouseover', ChargeSHover)
	.on('mouseout', legendunHover);

function Phase6Hover(d){
	dotchart.selectAll('circle')
		.attr('r', 4);
	dotchart.selectAll('circle')
		.filter(d => d.category=='Phase6')
		.attr('r', 8);
};
function Phase7Hover(d){
	dotchart.selectAll('circle')
		.attr('r', 4);
	dotchart.selectAll('circle')
		.filter(d => d.category=='Phase7')
		.attr('r', 8);
};
function SwapMHover(d){
	dotchart.selectAll('circle')
		.attr('r', 4);
	dotchart.selectAll('circle')
		.filter(d => d.category=='SwapM')
		.attr('r', 8);
};
function ChargeMHover(d){
	dotchart.selectAll('circle')
		.attr('r', 4);
	dotchart.selectAll('circle')
		.filter(d => d.category=='ChargeM')
		.attr('r', 8);
};
function SwapSHover(d){
	dotchart.selectAll('circle')
		.attr('r', 4);
	dotchart.selectAll('circle')
		.filter(d => d.category=='SwapS')
		.attr('r', 8);
};
function ChargeSHover(d){
	dotchart.selectAll('circle')
		.attr('r', 4);
	dotchart.selectAll('circle')
		.filter(d => d.category=='ChargeS')
		.attr('r', 8);
};
function legendunHover(d){
	dotchart.selectAll('circle')
		.attr('r', 6.5);
	selectedDotArea.selectAll('circle')
		.attr('r', 9);
};


//updatedot
//計算算式區跟之前幾乎一樣
//跟之前不同的是現在不要先toFixed, 因為最後i.x轉到tempx的時候再toFixed就好
//還有因為xy軸可以變換, 所以額外的計算也在這邊加上
//e.g. 每公里變成每月 => 把每公里的資料*每月公里數
var sum = 0;
function discountformula(x){
	sum = 0;
	for(var i=0; i<input[0].ownyear; i++){
		sum += x/(1+input[0].discount*1)**i;
	};
	sum = sum/input[0].ownyear;
};

function updatedot(){
	input[0].monthkm = inyearkm.value/12;
	//gasmaintain
	//機油+齒輪油 $300 2000km
	var gasenginoil = 0;
    for (var i=1; i<input[0].ownyear*1+1; i++){
        gasenginoil += (Math.floor(input[0].yearkm*i/2000)-Math.floor(input[0].yearkm*(i-1)/2000))*300/(1+input[0].discount*1)**i;
    };
    if((input[0].yearkm*input[0].ownyear)%2000 == 0){
        gasenginoil = gasenginoil - 300/(1+input[0].discount*1)**input[0].ownyear;
    };
    gasenginoil = gasenginoil/input[0].ownyear;

    //煞車油 $200 2year
    var gasbreakoil = 0;
    for (var i=0; i<input[0].ownyear; i+=2){
        if(i==0){}else{
            gasbreakoil += 200/(1+input[0].discount*1)**i;
        };
    };
    gasbreakoil = gasbreakoil/input[0].ownyear;

    //電瓶 $800 3year
    var gasbattery = 0;
    for (var i=0; i<input[0].ownyear; i+=3){
        if(i==0){}else{
            gasbattery += 800/(1+input[0].discount*1)**i;
        };
    };
    gasbattery = gasbattery/input[0].ownyear;

    //火星塞 $150 15000km
    var gassparkplug = 0;
    for (var i=1; i<input[0].ownyear*1+1; i++){
        gassparkplug += (Math.floor(input[0].yearkm*i/15000)-Math.floor(input[0].yearkm*(i-1)/15000))*150/(1+input[0].discount*1)**i;
    };
    if((input[0].yearkm*input[0].ownyear)%15000 == 0){
        gassparkplug = gassparkplug - 150/(1+input[0].discount*1)**input[0].ownyear;
    };
    gassparkplug = gassparkplug/input[0].ownyear;

    //空氣濾芯 $200 5000km
    var gasairfilter = 0;
    for (var i=1; i<input[0].ownyear*1+1; i++){
        gasairfilter += (Math.floor(input[0].yearkm*i/5000)-Math.floor(input[0].yearkm*(i-1)/5000))*200/(1+input[0].discount*1)**i;
    };
    if((input[0].yearkm*input[0].ownyear)%5000 == 0){
        gasairfilter = gasairfilter - 200/(1+input[0].discount*1)**input[0].ownyear;
    };
    gasairfilter = gasairfilter/input[0].ownyear;

	var gasmaintain = gasenginoil*1 + gasbreakoil*1 + gasbattery*1 + gassparkplug*1 + gasairfilter*1;


	//evmaintain
    //$833 first1000km
    var evfirst1k = 0;
    for (var i=1; i<input[0].ownyear*1+1; i++){
        if(input[0].yearkm*i >= 1000){
            evfirst1k = 833/(1+input[0].discount*1)**i;
            break
        };
    };
    if(input[0].ownyear*input[0].yearkm==1000){
        evfirst1k = 0;
    }
    evfirst1k = evfirst1k/input[0].ownyear;

    //$511 3000km
    var evmay3k = 0;
    for (var i=1; i<input[0].ownyear*1+1; i++){
        evmay3k += (Math.floor(input[0].yearkm*i/3000)-Math.floor(input[0].yearkm*(i-1)/3000))*511/(1+input[0].discount*1)**i;
    };
    if((input[0].yearkm*input[0].ownyear)%3000 == 0){
        evmay3k = evmay3k - 511/(1+input[0].discount*1)**input[0].ownyear;
    };
    evmay3k = evmay3k/input[0].ownyear;

    //$322 9000km
    var evmay9k = 0;
    for (var i=1; i<input[0].ownyear*1+1; i++){
        evmay9k += (Math.floor(input[0].yearkm*i/9000)-Math.floor(input[0].yearkm*(i-1)/9000))*322/(1+input[0].discount*1)**i;
    };
    if((input[0].yearkm*input[0].ownyear)%9000 == 0){
        evmay9k = evmay9k - 322/(1+input[0].discount*1)**input[0].ownyear;
    };
    evmay9k = evmay9k/input[0].ownyear;

    //$827 18000km
    var evmay18k = 0;
    for (var i=1; i<input[0].ownyear*1+1; i++){
        evmay18k += (Math.floor(input[0].yearkm*i/18000)-Math.floor(input[0].yearkm*(i-1)/18000))*827/(1+input[0].discount*1)**i;
    };
    if((input[0].yearkm*input[0].ownyear)%18000 == 0){
        evmay18k = evmay18k - 827/(1+input[0].discount*1)**input[0].ownyear;
    };
    evmay18k = evmay18k/input[0].ownyear;

	var evmaintain = evfirst1k*1 + evmay3k*1 + evmay9k*1 + evmay18k*1;

	//greenmaintain
    //$122 5000km
    var greenmay5k = 0;
    for (var i=1; i<input[0].ownyear*1+1; i++){
        greenmay5k += (Math.floor(input[0].yearkm*i/5000)-Math.floor(input[0].yearkm*(i-1)/5000))*122/(1+input[0].discount*1)**i;
    };
    if((input[0].yearkm*input[0].ownyear)%5000 == 0){
        greenmay5k = greenmay5k - 122/(1+input[0].discount*1)**input[0].ownyear;
    };
    greenmay5k = greenmay5k/input[0].ownyear;

    //$122 10000km
    var greenmay10k = 0;
    for (var i=1; i<input[0].ownyear*1+1; i++){
        greenmay10k += (Math.floor(input[0].yearkm*i/10000)-Math.floor(input[0].yearkm*(i-1)/10000))*122/(1+input[0].discount*1)**i;
    };
    if((input[0].yearkm*input[0].ownyear)%10000 == 0){
        greenmay10k = greenmay10k - 122/(1+input[0].discount*1)**input[0].ownyear;
    };
    greenmay10k = greenmay10k/input[0].ownyear;

    //$1940 20000km
    var greenmay20k = 0;
    for (var i=1; i<input[0].ownyear*1+1; i++){
        greenmay20k += (Math.floor(input[0].yearkm*i/20000)-Math.floor(input[0].yearkm*(i-1)/20000))*1940/(1+input[0].discount*1)**i;
    };
    if((input[0].yearkm*input[0].ownyear)%20000 == 0){
        greenmay20k = greenmay20k - 1940/(1+input[0].discount*1)**input[0].ownyear;
    };
    greenmay20k = greenmay20k/input[0].ownyear;

	var greenevmaintain = greenmay5k*1 + greenmay10k*1 + greenmay20k*1;

	//phase6
	for (var i=0; i<Phase6.length; i++){
        //spending
        discountformula(Phase6[i].taxoriginal);
        Phase6[i].tax = sum/12;

        Phase6[i].maintain = gasmaintain/12;
            
        discountformula((input[0].yearkm/Phase6[i].efficiency)*input[0].gas92);
        Phase6[i].fuel = sum/12;

        Phase6[i].salvage = Phase6[i].price*input[0].depreciation**input[0].ownyear;
        discountformula((Phase6[i].price-Phase6[i].salvage)/input[0].ownyear);
        Phase6[i].own = sum/12;

        //emission
		Phase6[i].fuelburn = input[0].gascoefficient*1/Phase6[i].efficiency

        Phase6[i].body = Phase6[i].bodymake/(input[0].ownyear*input[0].yearkm)*1000;

        Phase6[i].fuelmakefinal = Phase6[i].fuelmake;

        //total
        Phase6[i].spending = Phase6[i].tax*1+Phase6[i].maintain*1+Phase6[i].fuel*1+Phase6[i].own*1;
		Phase6[i].spendingperkm = Phase6[i].spending/input[0].monthkm;

        Phase6[i].emission = Phase6[i].fuelburn*1+Phase6[i].fuelmakefinal*1+Phase6[i].battery*1+Phase6[i].body*1;
		Phase6[i].emissionpermonth = Phase6[i].emission*input[0].monthkm/1000;
    };

	//phase7
	for (var i=0; i<Phase7.length; i++){
        //spending
        discountformula(Phase7[i].taxoriginal);
        Phase7[i].tax = sum/12;

        Phase7[i].maintain = gasmaintain/12;
            
        discountformula((input[0].yearkm/Phase7[i].efficiency)*input[0].gas92);
        Phase7[i].fuel = sum/12;

        Phase7[i].salvage = Phase7[i].price*input[0].depreciation**input[0].ownyear;
        discountformula((Phase7[i].price-Phase7[i].salvage)/input[0].ownyear);
        Phase7[i].own = sum/12;

        //emission
		Phase7[i].fuelburn = input[0].gascoefficient*1/Phase7[i].efficiency

        Phase7[i].body = Phase7[i].bodymake/(input[0].ownyear*input[0].yearkm)*1000;

        Phase7[i].fuelmakefinal = Phase7[i].fuelmake;

        //total
        Phase7[i].spending = Phase7[i].tax*1+Phase7[i].maintain*1+Phase7[i].fuel*1+Phase7[i].own*1;
		Phase7[i].spendingperkm = Phase7[i].spending/input[0].monthkm;

        Phase7[i].emission = Phase7[i].fuelburn*1+Phase7[i].fuelmakefinal*1+Phase7[i].battery*1+Phase7[i].body*1;
		Phase7[i].emissionpermonth = Phase7[i].emission*input[0].monthkm/1000;
    };

	//SwapM
	for (var i=0; i<SwapM.length; i++){
		//spending
		discountformula(SwapM[i].taxoriginal);
		SwapM[i].tax = sum/12;

		SwapM[i].maintain = evmaintain/12;

		SwapM[i].kwh = input[0].monthkm/SwapM[i].efficiency;

		if(SwapM[i].electricgroup == 'Ionex 3.0'){
			if(SwapM[i].kwh*1 > ionex[2].kwhpermonth*1){
				SwapM[i].plan = ionex[2].plan;
				SwapM[i].planprice = ionex[2].price;
				SwapM[i].fueloriginal = SwapM[i].kwh*ionex[2].ntdperkwh*12;
			}else if(SwapM[i].kwh*1 > ionex[2].price/ionex[1].ntdperkwh){
				SwapM[i].plan = ionex[2].plan;
				SwapM[i].planprice = ionex[2].price;
				SwapM[i].fueloriginal = SwapM[i].planprice*12;
			}else if(SwapM[i].kwh > ionex[1].kwhpermonth*1){
				SwapM[i].plan = ionex[1].plan;
				SwapM[i].planprice = ionex[1].price;
				SwapM[i].fueloriginal = SwapM[i].kwh*ionex[1].ntdperkwh*12;
			}else{
				SwapM[i].plan = ionex[1].plan;
				SwapM[i].planprice = ionex[1].price;
				SwapM[i].fueloriginal = SwapM[i].planprice*12;
			};
		}else if(SwapM[i].electricgroup == 'gogoro network'){
			if(input[0].monthkm*1 > 630+112){
				SwapM[i].plan = gogoro[4].plan;
				SwapM[i].planprice = gogoro[4].price;
				SwapM[i].fueloriginal = SwapM[i].planprice*12;
			}else if(input[0].monthkm*1 > 630){
				SwapM[i].plan = gogoro[2].plan;
				SwapM[i].planprice = gogoro[2].price;
				SwapM[i].fueloriginal = (799+(input[0].monthkm-630)*1.5)*12;
			}else if(input[0].monthkm*1 > 315+120){
				SwapM[i].plan = gogoro[2].plan;
				SwapM[i].planprice = gogoro[2].price;
				SwapM[i].fueloriginal = SwapM[i].planprice*12;
			}else if(input[0].monthkm*1 > 315){
				SwapM[i].plan = gogoro[1].plan;
				SwapM[i].planprice = gogoro[1].price;
				SwapM[i].fueloriginal = (499+(input[0].monthkm-315)*2.5)*12;
			}else if(SwapM[i].kwh*1 > 7.514){
				SwapM[i].plan = gogoro[1].plan;
				SwapM[i].planprice = gogoro[1].price;
				SwapM[i].fueloriginal = SwapM[i].planprice*12;
			}else if(SwapM[i].kwh*1 > 3.757 && SwapM[i].kwh*1 < 7.514){
				SwapM[i].plan = gogoro[0].plan;
				SwapM[i].planprice = gogoro[0].price;
				SwapM[i].fueloriginal = (299+(SwapM[i].kwh-gogoro[0].kwhpermonth)*gogoro[0].ntdperkwh)*12;
			}else{
				SwapM[i].plan = gogoro[0].plan;
				SwapM[i].planprice = gogoro[0].price;
				SwapM[i].fueloriginal = SwapM[i].planprice*12;
			};
		};

		discountformula(SwapM[i].fueloriginal);
        SwapM[i].fuel = sum/12;

        SwapM[i].salvage = (SwapM[i].price-evmotorsub)*input[0].depreciation**input[0].ownyear;
        discountformula((SwapM[i].price-evmotorsub-SwapM[i].salvage)/input[0].ownyear);
        SwapM[i].own = sum/12;

        //emission
        SwapM[i].battery = SwapM[i].batterymake/(input[0].ownyear*input[0].yearkm)*1000;

        SwapM[i].body = SwapM[i].bodymake/(input[0].ownyear*input[0].yearkm)*1000;

        SwapM[i].fuelmakefinal = SwapM[i].kwh*input[0].electriccoefficient/input[0].monthkm;

        //total
        SwapM[i].spending = SwapM[i].tax*1+SwapM[i].maintain*1+SwapM[i].fuel*1+SwapM[i].own*1;
		SwapM[i].spendingperkm = SwapM[i].spending/input[0].monthkm;

        SwapM[i].emission = SwapM[i].fuelburn*1+SwapM[i].fuelmakefinal*1+SwapM[i].battery*1+SwapM[i].body*1;
		SwapM[i].emissionpermonth = SwapM[i].emission*input[0].monthkm/1000;
	};

	//ChargeM
	for(var i=0; i<ChargeM.length; i++){
		//spending
		discountformula(ChargeM[i].taxoriginal);
		ChargeM[i].tax = sum/12;

		ChargeM[i].maintain = evmaintain/12;

		ChargeM[i].kwh = input[0].monthkm/ChargeM[i].efficiency;

		if(ChargeM[i].electricgroup == 'Ionex 3.0'){
			if(input[0].yearkm*1 > ionex[4].kmperyear*1){
				ChargeM[i].plan = ionex[4].plan;
				ChargeM[i].planprice = ionex[4].price;
				ChargeM[i].fueloriginal = ChargeM[i].planprice*12+(input[0].yearkm-ionex[4].kmperyear)*ionex[4].ntdperkm+(input[0].yearkm/ChargeM[i].efficiency*input[0].electric);
			}else{
				ChargeM[i].plan = ionex[4].plan;
				ChargeM[i].planprice = ionex[4].price;
				ChargeM[i].fueloriginal = ChargeM[i].planprice*12+(input[0].yearkm/ChargeM[i].efficiency*input[0].electric);
			};
		}else if(ChargeM[i].electricgroup=='eMOVING'){
			if(input[0].monthkm/2 > emoving[1].distance*1){
				ChargeM[i].plan = "進階型";
				ChargeM[i].planprice = 799;
				ChargeM[i].fueloriginal = ChargeM[i].planprice*12+input[0].yearkm/2/ChargeM[i].efficiency*input[0].electric;
			}else if(input[0].monthkm/2 > emoving[0].distance*1){
				ChargeM[i].plan = "輕量型";
				ChargeM[i].planprice = 599;
				ChargeM[i].fueloriginal = ChargeM[i].planprice*12+input[0].yearkm/2/ChargeM[i].efficiency*input[0].electric;
			}else{
				ChargeM[i].plan = "基礎型";
				ChargeM[i].planprice = 399;
				ChargeM[i].fueloriginal = ChargeM[i].planprice*12+input[0].yearkm/2/ChargeM[i].efficiency*input[0].electric;
			};
		};

		discountformula(ChargeM[i].fueloriginal);
        ChargeM[i].fuel = sum/12;

        ChargeM[i].salvage = (ChargeM[i].price-evmotorsub)*input[0].depreciation**input[0].ownyear;
        discountformula((ChargeM[i].price-evmotorsub-ChargeM[i].salvage)/input[0].ownyear);
        ChargeM[i].own = sum/12;

		//emission
        ChargeM[i].battery = ChargeM[i].batterymake/(input[0].ownyear*input[0].yearkm)*1000;

        ChargeM[i].body = ChargeM[i].bodymake/(input[0].ownyear*input[0].yearkm)*1000;

        ChargeM[i].fuelmakefinal = ChargeM[i].kwh*input[0].electriccoefficient/input[0].monthkm;

        //total
		ChargeM[i].spending = ChargeM[i].tax*1+ChargeM[i].maintain*1+ChargeM[i].fuel*1+ChargeM[i].own*1;
		ChargeM[i].spendingperkm = ChargeM[i].spending/input[0].monthkm;

        ChargeM[i].emission = ChargeM[i].fuelburn*1+ChargeM[i].fuelmakefinal*1+ChargeM[i].battery*1+ChargeM[i].body*1;
		ChargeM[i].emissionpermonth = ChargeM[i].emission*input[0].monthkm/1000;
	};

	//SwapS
	for(var i=0; i<SwapS.length; i++){
		//spending
        discountformula(SwapS[i].taxoriginal);
        SwapS[i].tax = sum/12;

        //maintain
        SwapS[i].maintain = greenevmaintain/12;

        SwapS[i].kwh = input[0].monthkm/SwapS[i].efficiency;

		if(SwapS[i].electricgroup == 'Ionex 3.0' || SwapS[i].electricgroup == 'Ionex 2.0'){
			if(SwapS[i].kwh*1 > ionex[2].kwhpermonth){
				SwapS[i].plan = ionex[2].plan;
				SwapS[i].planprice = ionex[2].price;
				SwapS[i].fueloriginal = SwapS[i].kwh*ionex[2].ntdperkwh*12;
			}else if(SwapS[i].kwh*1 > ionex[2].price/ionex[1].ntdperkwh){
				SwapS[i].plan = ionex[2].plan;
				SwapS[i].planprice = ionex[2].price;
				SwapS[i].fueloriginal = SwapS[i].planprice*12;
			}else if(SwapS[i].kwh > ionex[1].kwhpermonth){
				SwapS[i].plan = ionex[1].plan;
				SwapS[i].planprice = ionex[1].price;
				SwapS[i].fueloriginal = SwapS[i].kwh*ionex[1].ntdperkwh*12;
			}else if(SwapS[i].kwh*1 > ionex[1].price/ionex[0].ntdperkwh){
				SwapS[i].plan = ionex[1].plan;
				SwapS[i].planprice = ionex[1].price;
				SwapS[i].fueloriginal = SwapS[i].planprice*12;
			}else if(SwapS[i].kwh > ionex[0].kwhpermonth){
				SwapS[i].plan = ionex[0].plan;
				SwapS[i].planprice = ionex[0].price;
				SwapS[i].fueloriginal = SwapS[i].kwh*ionex[0].ntdperkwh*12;
			}else{
				SwapS[i].plan = ionex[0].plan;
				SwapS[i].planprice = ionex[0].price;
				SwapS[i].fueloriginal = SwapS[i].planprice*12;
			};
		}else if(SwapS[i].electricgroup == 'gogoro network'){
			if(SwapS[i].kwh*1 > gogoro[3].price/gogoro[0].ntdperkwh){
				SwapS[i].plan = gogoro[3].plan;
				SwapS[i].planprice = gogoro[3].price;
				SwapS[i].fueloriginal = SwapS[i].planprice*12;
			}else if(SwapS[i].kwh*1 > gogoro[0].kwhpermonth){
				SwapS[i].plan = gogoro[0].plan;
				SwapS[i].planprice = gogoro[0].price;
				SwapS[i].fueloriginal = (299+(SwapS[i].kwh-gogoro[0].kwhpermonth)*gogoro[0].ntdperkwh)*12;
			}else{
				SwapS[i].plan = gogoro[0].plan;
				SwapS[i].planprice = gogoro[0].price;
				SwapS[i].fueloriginal = SwapS[i].planprice*12;
			};
		};

		discountformula(SwapS[i].fueloriginal);
        SwapS[i].fuel = sum/12;

        SwapS[i].salvage = (SwapS[i].price-greenevsub)*input[0].depreciation**input[0].ownyear;
        discountformula((SwapS[i].price-greenevsub-SwapS[i].salvage)/input[0].ownyear);
        SwapS[i].own = sum/12;

        //emission
        SwapS[i].battery = SwapS[i].batterymake/(input[0].ownyear*input[0].yearkm)*1000;

        SwapS[i].body = SwapS[i].bodymake/(input[0].ownyear*input[0].yearkm)*1000;

        SwapS[i].fuelmakefinal = SwapS[i].kwh*input[0].electriccoefficient/input[0].monthkm;

        //total
        SwapS[i].spending = SwapS[i].tax*1+SwapS[i].maintain*1+SwapS[i].fuel*1+SwapS[i].own*1;
		SwapS[i].spendingperkm = SwapS[i].spending/input[0].monthkm;

        SwapS[i].emission = SwapS[i].fuelburn*1+SwapS[i].fuelmakefinal*1+SwapS[i].battery*1+SwapS[i].body*1;
		SwapS[i].emissionpermonth = SwapS[i].emission*input[0].monthkm/1000;
	};

	//ChargeS
	for(var i=0; i<ChargeS.length; i++){
		//spending
        discountformula(ChargeS[i].taxoriginal);
        ChargeS[i].tax = sum/12;

        //maintain
        ChargeS[i].maintain = greenevmaintain/12;

        ChargeS[i].kwh = input[0].monthkm/ChargeS[i].efficiency;

		if(ChargeS[i].electricgroup == 'Ionex 3.0'){
			if(input[0].yearkm > ionex[3].kmperyear){
				ChargeS[i].plan = ionex[3].plan;
				ChargeS[i].planprice = ionex[3].price;
				ChargeS[i].fueloriginal = ionex[3].price*12+(input[0].yearkm-ionex[3].kmperyear)*ionex[3].ntdperkm+input[0].yearkm/ChargeS[i].efficiency*input[0].electric;
			}else{
				ChargeS[i].plan = ionex[3].plan;
				ChargeS[i].planprice = ionex[3].price;
				ChargeS[i].fueloriginal = ChargeS[i].planprice*12+input[0].yearkm/ChargeS[i].efficiency*input[0].electric;
			};
		}else{
			ChargeS[i].fueloriginal = input[0].yearkm/ChargeS[i].efficiency*input[0].electric;
		};

		discountformula(ChargeS[i].fueloriginal);
        ChargeS[i].fuel = sum/12;

        ChargeS[i].salvage = (ChargeS[i].price-greenevsub)*input[0].depreciation**input[0].ownyear;
        discountformula((ChargeS[i].price-greenevsub-ChargeS[i].salvage)/input[0].ownyear);
        ChargeS[i].own = sum/12;

        //emission
        ChargeS[i].battery = ChargeS[i].batterymake/(input[0].ownyear*input[0].yearkm)*1000;

        ChargeS[i].body = ChargeS[i].bodymake/(input[0].ownyear*input[0].yearkm)*1000;

        ChargeS[i].fuelmakefinal = ChargeS[i].kwh*input[0].electriccoefficient/input[0].monthkm;

        //total
        ChargeS[i].spending = ChargeS[i].tax*1+ChargeS[i].maintain*1+ChargeS[i].fuel*1+ChargeS[i].own*1;
		ChargeS[i].spendingperkm = ChargeS[i].spending/input[0].monthkm;

        ChargeS[i].emission = ChargeS[i].fuelburn*1+ChargeS[i].fuelmakefinal*1+ChargeS[i].battery*1+ChargeS[i].body*1;
		ChargeS[i].emissionpermonth = ChargeS[i].emission*input[0].monthkm/1000;
	};

	//futuregoal
	FutureGoal.forEach(d =>{
		d.body = d.bodymake/(input[0].ownyear*input[0].yearkm)*1000;
		d.emission = d.fuelburn*1+d.fuelmake*1+d.battery*1+d.body*1;
		d.emissionpermonth = d.emission*input[0].monthkm/1000;
	});

	//畫到圖上前要重新整合一次, 順序要跟剛剛一樣
	motordata = SwapM.concat(SwapS, ChargeM, ChargeS, Phase7, Phase6);

	//sensitive analysis(不重要)
	var edata = SwapM.concat(ChargeM)
	var gdata = Phase7.concat(Phase6)

	var allx = 0, ally = 0
	edata.forEach(d => {
		allx += d.x*1
		ally += d.y*1
	})
	elecxavg = allx/edata.length
	elecyavg = ally/edata.length
	console.log('elec_TCO', elecxavg, 'elec_LCA', elecyavg);

	var allx = 0, ally = 0
	gdata.forEach(d => {
		allx += d.x*1
		ally += d.y*1
	})
	gasxavg = allx/gdata.length
	gasyavg = ally/gdata.length
	console.log('gas_TCO', gasxavg, 'gas_LCA', gasyavg);
	console.log('->ratio_TCO', elecxavg/gasxavg, 'ratio_LCA', elecyavg/gasyavg);
	//end 不重要


	//xAxis
	//當xy軸選擇不同種的時候, x y點的值會不同
	//軸的名稱html要變
	if(selectxaxis.value == selectxaxis[0].innerHTML){
		//TCO per km
		motordata.forEach(d => d.x = d.spendingperkm);

		xaxistitle.html('Total Cost of Ownership (NT$/km)');
	}else if(selectxaxis.value == selectxaxis[1].innerHTML){
		//TCO per month
		motordata.forEach(d => d.x = d.spending);

		xaxistitle.html('Total Cost of Ownership (NT$/month)');
	}else if(selectxaxis.value == selectxaxis[2].innerHTML){
		//vehicle price
		motordata.forEach(function(d){
			if(d.category == 'Phase6' || d.category == 'Phase7'){
				d.x = d.price-gasmotorsub;
			}else if(d.category == 'SwapM' || d.category == 'ChargeM'){
				d.x = d.price-evmotorsub;
			}else if(d.category == 'SwapS' || d.category == 'ChargeS'){
				d.x = d.price-greenevsub;
			};
		});
		
		xaxistitle.html('Vehicle Price (NT$)');
	}else if(selectxaxis.value == selectxaxis[3].innerHTML){
		//fuel price
		motordata.forEach(d => d.x = d.fuel);

		xaxistitle.html('Fuel Price (NT$)');
	};

	//重新定義xy軸的上下區間
	dotxScale = d3.scaleLinear()
			.domain([d3.min(motordata, d => d.x*1)*0.96, d3.max(motordata, d => d.x*1)*1.04])
			.range([57, winWidth-40]);

	//yAxis
	var ymin;
	if(selectyaxis.value == selectyaxis[0].innerHTML){
		//emission per km
		motordata.forEach(d => d.y = d.emission);
		FutureGoal.forEach(d => d.y = d.emission);	

		yaxistitle.html('Greenhouse Gas Emissions (gCO₂eq/km)');
	}else if(selectyaxis.value == selectyaxis[1].innerHTML){
		//emissiom per month
		motordata.forEach(d => d.y = d.emissionpermonth);
		FutureGoal.forEach(d => d.y = d.emissionpermonth);

		yaxistitle.html('Greenhouse Gas Emissions (kgCO₂eq/month)');
	}else if(selectyaxis.value == selectyaxis[2].innerHTML){
		//vehicle production
		motordata.forEach(d => d.y = d.bodymake);

		yaxistitle.html('Vehicle Production Emissions (kgCO₂eq)');
	}else if(selectyaxis.value == selectyaxis[3].innerHTML){
		//fuel
		motordata.forEach(d => d.y = d.fuelmakefinal*1+d.fuelburn*1);
		FutureGoal.forEach(d => d.y = d.fuelmake*1+d.fuelburn*1);

		yaxistitle.html('Fuel Emissions (gCO₂eq/km)');
	};

	if(selectyaxis.value == selectyaxis[2].innerHTML){
		ymin = d3.min(motordata, d => d.y*1)*0.94;
	}else{
		ymin = Math.min(d3.min(motordata, d => d.y*1)*0.94, FutureGoal[2].y*0.9);
	};

	dotyScale = d3.scaleLinear()
			.domain([d3.max(motordata, d => d.y*1)*1.06, ymin])
			.range([15, winHeight-70]);

	//xy軸改變的動畫時間, 單位毫秒
	//重新叫xy軸
	dotxAxis.transition()
		.duration(800)
		.call(d3.axisBottom(dotxScale));
	dotyAxis.transition()
		.duration(800)
		.call(d3.axisLeft(dotyScale));

	dotxAxis.selectAll('text')
		.style('font-size', '0.8rem');
	dotyAxis.selectAll('text')
		.style('font-size', '0.8rem');

	//更新點點的位置, 加上動畫時間
	dotchart.selectAll('circle')
        .data(motordata)
		.transition()
		.duration(800)
        .attr('cx', d => dotxScale(d.x))
		.attr('cy', d => dotyScale(d.y));

	selectedDotArea.selectAll('g')
		.data(checkedData)
		.transition()
		.duration(800)
		.attr('transform', d => {
			console.log(d.x,d.y);
			return 'translate(' + dotxScale(d.x) + ',' + dotyScale(d.y) +')'});

	// futuregoal
	futureGoalArea.selectAll('line')
		.data(FutureGoal)
		.transition()
		.duration(800)
		.attr('y1', d => dotyScale(d.y))
		.attr('y2', d => dotyScale(d.y));

	// 	var checkedlist = document.getElementById('checkedlist');
	// var ph6 = ChargeS.map(d => {
	// 	return `
	// 	${d.brand},${d.price},${d.model},${d.spendingperkm},${d.emission}`
	// }).join('');

	// checkedlist.innerHTML = ph6;
	// console.log(checkedlist.innerHTML)

	// var suum4 = 0;
	// var suum1 = 0;
	// var suum2 = 0;
	// var suum3 = 0;
	// var avvg1 = 0;
	// var avvg2 = 0;
	// var avvg3 = 0;
	// var avvg4 = 0;

	// for(var i=0; i<Phase7.length; i++){
	// 	suum1 += Phase7[i].own*1;
	// 	suum2 += Phase7[i].fuel*1;
	// 	suum3 += (Phase7[i].tax*1+Phase7[i].maintain*1);
	// 	// suum4 += Phase7[i].fuelburn*1;
	// };
	// avvg1 = suum1/Phase7.length/input[0].yearkm;
	// avvg2 = suum2/Phase7.length/input[0].yearkm;
	// avvg3 = suum3/Phase7.length/input[0].yearkm;
	// // avvg4 = suum4/Phase7.length;
	// console.log(avvg1,avvg2,avvg3,avvg4)

	// var ioro = [];	
	// for(var i=0; i<Phase7.length; i++){
	// 	ioro.push(Phase7[i].fuel/input[0].yearkm)
	// }
	// console.log(ioro,Math.max(...ioro),Math.min(...ioro))
	// console.log(SwapM[1].tax,SwapM[1].maintain,SwapM[1].fuel,SwapM[1].own)
	// console.log(ChargeM[1].tax,ChargeM[1].maintain,ChargeM[1].fuel,ChargeM[1].own)
	// console.log(SwapM[2].tax,SwapM[2].maintain,SwapM[2].fuel,SwapM[2].own)
	// console.log(ChargeM[2].tax,ChargeM[2].maintain,ChargeM[2].fuel,ChargeM[2].own)
	// console.log(SwapM[0].spendingperkm,SwapM[0].emission,ChargeM[0].spendingperkm,ChargeM[0].emission)
	// console.log(SwapM[1].spendingperkm,SwapM[1].emission,ChargeM[1].spendingperkm,ChargeM[1].emission)
	// console.log(SwapM[2].spendingperkm,SwapM[2].emission,ChargeM[2].spendingperkm,ChargeM[2].emission)

	// var listt = [];
	// for(var i=0; i<ChargeS.length; i++){
	// 	listt.push(ChargeS[i].spendingperkm+","+ChargeS[i].emission+'<br>')
		
	// }
	// informationside.innerHTML = listt;

};

updatedot();

window.addEventListener('pointerup', e => {setTimeout(updatedot,10)});

// //testt
// testt = []
// for (var emico=1442; emico<1443; emico+=0.05){
// 	// input[0].yearkm = vkt
// 	// input[0].monthkm = vkt/12
// 	input[0].electriccoefficient = emico
// 	// console.log(input[0].yearkm, input[0].monthkm);
// 	//evmaintain
//     //$833 first1000km
//     var evfirst1k = 0;
//     for (var i=1; i<input[0].ownyear*1+1; i++){
//         if(input[0].yearkm*i >= 1000){
//             evfirst1k = 833/(1+input[0].discount*1)**i;
//             break
//         };
//     };
//     if(input[0].ownyear*input[0].yearkm==1000){
//         evfirst1k = 0;
//     }
//     evfirst1k = evfirst1k/input[0].ownyear;

//     //$511 3000km
//     var evmay3k = 0;
//     for (var i=1; i<input[0].ownyear*1+1; i++){
//         evmay3k += (Math.floor(input[0].yearkm*i/3000)-Math.floor(input[0].yearkm*(i-1)/3000))*511/(1+input[0].discount*1)**i;
//     };
//     if((input[0].yearkm*input[0].ownyear)%3000 == 0){
//         evmay3k = evmay3k - 511/(1+input[0].discount*1)**input[0].ownyear;
//     };
//     evmay3k = evmay3k/input[0].ownyear;

//     //$322 9000km
//     var evmay9k = 0;
//     for (var i=1; i<input[0].ownyear*1+1; i++){
//         evmay9k += (Math.floor(input[0].yearkm*i/9000)-Math.floor(input[0].yearkm*(i-1)/9000))*322/(1+input[0].discount*1)**i;
//     };
//     if((input[0].yearkm*input[0].ownyear)%9000 == 0){
//         evmay9k = evmay9k - 322/(1+input[0].discount*1)**input[0].ownyear;
//     };
//     evmay9k = evmay9k/input[0].ownyear;

//     //$827 18000km
//     var evmay18k = 0;
//     for (var i=1; i<input[0].ownyear*1+1; i++){
//         evmay18k += (Math.floor(input[0].yearkm*i/18000)-Math.floor(input[0].yearkm*(i-1)/18000))*827/(1+input[0].discount*1)**i;
//     };
//     if((input[0].yearkm*input[0].ownyear)%18000 == 0){
//         evmay18k = evmay18k - 827/(1+input[0].discount*1)**input[0].ownyear;
//     };
//     evmay18k = evmay18k/input[0].ownyear;

// 	var evmaintain = evfirst1k*1 + evmay3k*1 + evmay9k*1 + evmay18k*1;

// 	//gasmaintain
// 	//機油+齒輪油 $300 2000km
// 	var gasenginoil = 0;
//     for (var i=1; i<input[0].ownyear*1+1; i++){
//         gasenginoil += (Math.floor(input[0].yearkm*i/2000)-Math.floor(input[0].yearkm*(i-1)/2000))*300/(1+input[0].discount*1)**i;
//     };
//     if((input[0].yearkm*input[0].ownyear)%2000 == 0){
//         gasenginoil = gasenginoil - 300/(1+input[0].discount*1)**input[0].ownyear;
//     };
//     gasenginoil = gasenginoil/input[0].ownyear;

//     //煞車油 $200 2year
//     var gasbreakoil = 0;
//     for (var i=0; i<input[0].ownyear; i+=2){
//         if(i==0){}else{
//             gasbreakoil += 200/(1+input[0].discount*1)**i;
//         };
//     };
//     gasbreakoil = gasbreakoil/input[0].ownyear;

//     //電瓶 $800 3year
//     var gasbattery = 0;
//     for (var i=0; i<input[0].ownyear; i+=3){
//         if(i==0){}else{
//             gasbattery += 800/(1+input[0].discount*1)**i;
//         };
//     };
//     gasbattery = gasbattery/input[0].ownyear;

//     //火星塞 $150 15000km
//     var gassparkplug = 0;
//     for (var i=1; i<input[0].ownyear*1+1; i++){
//         gassparkplug += (Math.floor(input[0].yearkm*i/15000)-Math.floor(input[0].yearkm*(i-1)/15000))*150/(1+input[0].discount*1)**i;
//     };
//     if((input[0].yearkm*input[0].ownyear)%15000 == 0){
//         gassparkplug = gassparkplug - 150/(1+input[0].discount*1)**input[0].ownyear;
//     };
//     gassparkplug = gassparkplug/input[0].ownyear;

//     //空氣濾芯 $200 5000km
//     var gasairfilter = 0;
//     for (var i=1; i<input[0].ownyear*1+1; i++){
//         gasairfilter += (Math.floor(input[0].yearkm*i/5000)-Math.floor(input[0].yearkm*(i-1)/5000))*200/(1+input[0].discount*1)**i;
//     };
//     if((input[0].yearkm*input[0].ownyear)%5000 == 0){
//         gasairfilter = gasairfilter - 200/(1+input[0].discount*1)**input[0].ownyear;
//     };
//     gasairfilter = gasairfilter/input[0].ownyear;

// 	var gasmaintain = gasenginoil*1 + gasbreakoil*1 + gasbattery*1 + gassparkplug*1 + gasairfilter*1;
	
// 	for (var i=0; i<SwapM.length; i++){
// 		//spending
// 		discountformula(SwapM[i].taxoriginal);
// 		SwapM[i].tax = sum/12;

// 		SwapM[i].maintain = evmaintain/12;

// 		SwapM[i].kwh = input[0].monthkm/SwapM[i].efficiency;

// 		if(SwapM[i].electricgroup == 'Ionex 3.0'){
// 			if(SwapM[i].kwh*1 > ionex[2].kwhpermonth*1){
// 				SwapM[i].plan = ionex[2].plan;
// 				SwapM[i].planprice = ionex[2].price;
// 				SwapM[i].fueloriginal = SwapM[i].kwh*ionex[2].ntdperkwh*12;
// 			}else if(SwapM[i].kwh*1 > ionex[2].price/ionex[1].ntdperkwh){
// 				SwapM[i].plan = ionex[2].plan;
// 				SwapM[i].planprice = ionex[2].price;
// 				SwapM[i].fueloriginal = SwapM[i].planprice*12;
// 			}else if(SwapM[i].kwh > ionex[1].kwhpermonth*1){
// 				SwapM[i].plan = ionex[1].plan;
// 				SwapM[i].planprice = ionex[1].price;
// 				SwapM[i].fueloriginal = SwapM[i].kwh*ionex[1].ntdperkwh*12;
// 			}else{
// 				SwapM[i].plan = ionex[1].plan;
// 				SwapM[i].planprice = ionex[1].price;
// 				SwapM[i].fueloriginal = SwapM[i].planprice*12;
// 			};
// 		}else if(SwapM[i].electricgroup == 'gogoro network'){
// 			if(input[0].monthkm*1 > 630+66){
// 				SwapM[i].plan = gogoro[4].plan;
// 				SwapM[i].planprice = gogoro[4].price;
// 				SwapM[i].fueloriginal = SwapM[i].planprice*12;
// 			}else if(input[0].monthkm*1 > 630){
// 				SwapM[i].plan = gogoro[2].plan;
// 				SwapM[i].planprice = gogoro[2].price;
// 				SwapM[i].fueloriginal = (799+(input[0].monthkm-630)*1.5)*12;
// 			}else if(input[0].monthkm*1 > 315+120){
// 				SwapM[i].plan = gogoro[2].plan;
// 				SwapM[i].planprice = gogoro[2].price;
// 				SwapM[i].fueloriginal = SwapM[i].planprice*12;
// 			}else if(input[0].monthkm*1 > 315){
// 				SwapM[i].plan = gogoro[1].plan;
// 				SwapM[i].planprice = gogoro[1].price;
// 				SwapM[i].fueloriginal = (499+(input[0].monthkm-315)*2.5)*12;
// 			}else if(SwapM[i].kwh*1 > 7.514){
// 				SwapM[i].plan = gogoro[1].plan;
// 				SwapM[i].planprice = gogoro[1].price;
// 				SwapM[i].fueloriginal = SwapM[i].planprice*12;
// 			}else if(SwapM[i].kwh*1 > 3.757 && SwapM[i].kwh*1 < 7.514){
// 				SwapM[i].plan = gogoro[0].plan;
// 				SwapM[i].planprice = gogoro[0].price;
// 				SwapM[i].fueloriginal = (299+(SwapM[i].kwh-gogoro[0].kwhpermonth)*gogoro[0].ntdperkwh)*12;
// 			}else{
// 				SwapM[i].plan = gogoro[0].plan;
// 				SwapM[i].planprice = gogoro[0].price;
// 				SwapM[i].fueloriginal = SwapM[i].planprice*12;
// 			};
// 		};

// 		discountformula(SwapM[i].fueloriginal);
// 		SwapM[i].fuel = sum/12;

// 		SwapM[i].salvage = (SwapM[i].price-evmotorsub)*input[0].depreciation**input[0].ownyear;
// 		discountformula((SwapM[i].price-evmotorsub-SwapM[i].salvage)/input[0].ownyear);
// 		SwapM[i].own = sum/12;

// 		//emission
// 		SwapM[i].battery = SwapM[i].batterymake/(input[0].ownyear*input[0].yearkm)*1000;

// 		SwapM[i].body = SwapM[i].bodymake/(input[0].ownyear*input[0].yearkm)*1000;

// 		SwapM[i].fuelmakefinal = SwapM[i].kwh*input[0].electriccoefficient/input[0].monthkm;

// 		//total
// 		SwapM[i].spending = SwapM[i].tax*1+SwapM[i].maintain*1+SwapM[i].fuel*1+SwapM[i].own*1;
// 		SwapM[i].spendingperkm = SwapM[i].spending/input[0].monthkm;

// 		SwapM[i].emission = SwapM[i].fuelburn*1+SwapM[i].fuelmakefinal*1+SwapM[i].battery*1+SwapM[i].body*1;
// 		SwapM[i].emissionpermonth = SwapM[i].emission*input[0].monthkm/1000;
// 	};
// 	//ChargeM
// 	for(var i=0; i<ChargeM.length; i++){
// 		//spending
// 		discountformula(ChargeM[i].taxoriginal);
// 		ChargeM[i].tax = sum/12;

// 		ChargeM[i].maintain = evmaintain/12;

// 		ChargeM[i].kwh = input[0].monthkm/ChargeM[i].efficiency;

// 		if(ChargeM[i].electricgroup == 'Ionex 3.0'){
// 			if(input[0].yearkm*1 > ionex[4].kmperyear*1){
// 				ChargeM[i].plan = ionex[4].plan;
// 				ChargeM[i].planprice = ionex[4].price;
// 				ChargeM[i].fueloriginal = ChargeM[i].planprice*12+(input[0].yearkm-ionex[4].kmperyear)*ionex[4].ntdperkm+(input[0].yearkm/ChargeM[i].efficiency*input[0].electric);
// 			}else{
// 				ChargeM[i].plan = ionex[4].plan;
// 				ChargeM[i].planprice = ionex[4].price;
// 				ChargeM[i].fueloriginal = ChargeM[i].planprice*12+(input[0].yearkm/ChargeM[i].efficiency*input[0].electric);
// 			};
// 		}else if(ChargeM[i].electricgroup=='eMOVING'){
// 			if(input[0].monthkm/2 > emoving[1].distance*1){
// 				ChargeM[i].plan = "進階型";
// 				ChargeM[i].planprice = 799;
// 				ChargeM[i].fueloriginal = ChargeM[i].planprice*12+input[0].yearkm/2/ChargeM[i].efficiency*input[0].electric;
// 			}else if(input[0].monthkm/2 > emoving[0].distance*1){
// 				ChargeM[i].plan = "輕量型";
// 				ChargeM[i].planprice = 599;
// 				ChargeM[i].fueloriginal = ChargeM[i].planprice*12+input[0].yearkm/2/ChargeM[i].efficiency*input[0].electric;
// 			}else{
// 				ChargeM[i].plan = "基礎型";
// 				ChargeM[i].planprice = 399;
// 				ChargeM[i].fueloriginal = ChargeM[i].planprice*12+input[0].yearkm/2/ChargeM[i].efficiency*input[0].electric;
// 			};
// 		};

// 		discountformula(ChargeM[i].fueloriginal);
//         ChargeM[i].fuel = sum/12;

//         ChargeM[i].salvage = (ChargeM[i].price-evmotorsub)*input[0].depreciation**input[0].ownyear;
//         discountformula((ChargeM[i].price-evmotorsub-ChargeM[i].salvage)/input[0].ownyear);
//         ChargeM[i].own = sum/12;

// 		//emission
//         ChargeM[i].battery = ChargeM[i].batterymake/(input[0].ownyear*input[0].yearkm)*1000;

//         ChargeM[i].body = ChargeM[i].bodymake/(input[0].ownyear*input[0].yearkm)*1000;

//         ChargeM[i].fuelmakefinal = ChargeM[i].kwh*input[0].electriccoefficient/input[0].monthkm;

//         //total
// 		ChargeM[i].spending = ChargeM[i].tax*1+ChargeM[i].maintain*1+ChargeM[i].fuel*1+ChargeM[i].own*1;
// 		ChargeM[i].spendingperkm = ChargeM[i].spending/input[0].monthkm;

//         ChargeM[i].emission = ChargeM[i].fuelburn*1+ChargeM[i].fuelmakefinal*1+ChargeM[i].battery*1+ChargeM[i].body*1;
// 		ChargeM[i].emissionpermonth = ChargeM[i].emission*input[0].monthkm/1000;
// 	};

// 	//phase6
// 	for (var i=0; i<Phase6.length; i++){
//         //spending
//         discountformula(Phase6[i].taxoriginal);
//         Phase6[i].tax = sum/12;

//         Phase6[i].maintain = gasmaintain/12;
            
//         discountformula((input[0].yearkm/Phase6[i].efficiency)*input[0].gas92);
//         Phase6[i].fuel = sum/12;

//         Phase6[i].salvage = Phase6[i].price*input[0].depreciation**input[0].ownyear;
//         discountformula((Phase6[i].price-Phase6[i].salvage)/input[0].ownyear);
//         Phase6[i].own = sum/12;

//         //emission
// 		Phase6[i].fuelburn = input[0].gascoefficient*1/Phase6[i].efficiency

//         Phase6[i].body = Phase6[i].bodymake/(input[0].ownyear*input[0].yearkm)*1000;

//         Phase6[i].fuelmakefinal = Phase6[i].fuelmake;

//         //total
//         Phase6[i].spending = Phase6[i].tax*1+Phase6[i].maintain*1+Phase6[i].fuel*1+Phase6[i].own*1;
// 		Phase6[i].spendingperkm = Phase6[i].spending/input[0].monthkm;

//         Phase6[i].emission = Phase6[i].fuelburn*1+Phase6[i].fuelmakefinal*1+Phase6[i].battery*1+Phase6[i].body*1;
// 		Phase6[i].emissionpermonth = Phase6[i].emission*input[0].monthkm/1000;
//     };

// 	//phase7
// 	for (var i=0; i<Phase7.length; i++){
//         //spending
//         discountformula(Phase7[i].taxoriginal);
//         Phase7[i].tax = sum/12;

//         Phase7[i].maintain = gasmaintain/12;
            
//         discountformula((input[0].yearkm/Phase7[i].efficiency)*input[0].gas92);
//         Phase7[i].fuel = sum/12;

//         Phase7[i].salvage = Phase7[i].price*input[0].depreciation**input[0].ownyear;
//         discountformula((Phase7[i].price-Phase7[i].salvage)/input[0].ownyear);
//         Phase7[i].own = sum/12;

//         //emission
// 		Phase7[i].fuelburn = input[0].gascoefficient*1/Phase7[i].efficiency

//         Phase7[i].body = Phase7[i].bodymake/(input[0].ownyear*input[0].yearkm)*1000;

//         Phase7[i].fuelmakefinal = Phase7[i].fuelmake;

//         //total
//         Phase7[i].spending = Phase7[i].tax*1+Phase7[i].maintain*1+Phase7[i].fuel*1+Phase7[i].own*1;
// 		Phase7[i].spendingperkm = Phase7[i].spending/input[0].monthkm;

//         Phase7[i].emission = Phase7[i].fuelburn*1+Phase7[i].fuelmakefinal*1+Phase7[i].battery*1+Phase7[i].body*1;
// 		Phase7[i].emissionpermonth = Phase7[i].emission*input[0].monthkm/1000;
//     };

// 	//sensitive analysis(不重要)
// 	var edata = SwapM.concat(ChargeM)
// 	var gdata = Phase7.concat(Phase6)


// 	var allx = 0, ally = 0
// 	edata.forEach(d => {
// 		allx += d.spendingperkm*1
// 		ally += d.emission*1
		
// 	})
// 	elecxavg = allx/edata.length
// 	elecyavg = ally/edata.length
// 	// console.log('elec_TCO', elecxavg);

// 	var allx = 0, ally = 0
// 	gdata.forEach(d => {
// 		allx += d.spendingperkm*1
// 		ally += d.emission*1
		
// 	})
// 	gasxavg = allx/gdata.length
// 	gasyavg = ally/gdata.length
// 	// console.log('gas_TCO', gasxavg);
// 	// console.log('->ratio_TCO', elecxavg/gasxavg);
// 	//end 不重要
// 	testt.push([emico, elecyavg, gasyavg])
// };
// // console.log(testt);
// var csv = testt.map(function(d){
//     return d.join();
// }).join('\n');
// console.log(csv);

//search
//之前是在html檔裡面把所有checkbox打好, 現在改成直接讓js做好
var searchhtml = motordata.map(d => {
	return `
	<label>
		<div class="motorlist">
			<input type="checkbox" name="${d.category}" value="${d.model}">
			<div class="checkcircle"></div>
			<span><h4><div class="smalllegenddot" style="background-color: ${colorSelect(d.category)};"></div>${energySelectFull(d.category)}</h4>
			<h4>${d.brand} | $${d.price}</h4>
			${d.model}</span>
		</div>
	</label>`
}).join('');

searchinside.innerHTML = searchhtml;

searchbar.addEventListener('keyup', (e) => {
	const searchstring = e.target.value.toLowerCase();
	var motorlabel = document.getElementsByTagName("label");
	for (i = 0; i < motorlabel.length; i++) {
		var span = motorlabel[i].getElementsByTagName("span")[0];
		var content = span.textContent || span.innerText;
		if (content.toLowerCase().indexOf(searchstring) > -1) {
			motorlabel[i].style.display = "";
		} else {
			motorlabel[i].style.display = "none";};
	};
});



//checked
var checkedlisth1 = document.getElementById('checkedlisth1');
var checkedlist = document.getElementById('checkedlist');
var checkedlisth12 = document.getElementById('checkedlisth12');
var checkedlist2 = document.getElementById('checkedlist2');
var motorlist = document.querySelectorAll("[type=checkbox]");
var motorlabelcombine = [];

for(var i=0; i<motorlist.length; i++){
	//這邊的.name+.value是剛剛上面<input>設定的
	motorlabelcombine.push(motorlist[i].name+motorlist[i].value);
};

//checkbox被點的時候的function
d3.selectAll("input[type=checkbox]")
	.on('click', checkboxClick);

function checkboxClick(i){
	//這個i是滑鼠的活動
	if(i.target.checked==true){
		//把勾選的資料加進已選點
		//moterdata.filter出來會是一個矩陣, 所以後面要加[0]
		checkedData.push(motordata.filter(d => d.category+d.model == i.target.name+i.target.value)[0]);
	}else{
		//取消勾選時, 把資料削掉一個
		for(var d=0; d<checkedData.length; d++){
			if(checkedData[d].category+checkedData[d].model == i.target.name+i.target.value){
				checkedData.splice(d,1);
				break;
			};
		};
	};
	
	updateSelectedDot();
};

function updateSelectedDot(){
	//checklisth1只拿來放大標<h1>Selected</h1>
	//checkedlist放下面的車輛基本資訊
	checkedlisth1.innerHTML = "";
	checkedlist.innerHTML = "";

	if(checkedData.length == 0){
		//沒勾選的時候不顯示東西
		checkedlisth1.innerHTML = "";
		checkedlist.innerHTML = "";
	}else{
		checkedlisth1.innerHTML = "<h1>Selected</h1>";
		for(var i=0; i<checkedData.length; i++){
			checkedlist.innerHTML += `
			<div class='selectedlist'>
				${i+1}.
				<span><h4><div class="smalllegenddot" style="background-color: ${colorSelect(checkedData[i].category)};"></div>${checkedData[i].brand} | $${checkedData[i].price}</h4>
				${checkedData[i].model}</span>
			</div>`;
		};		
	};
	checkedlisth12.innerHTML = checkedlisth1.innerHTML;
	checkedlist2.innerHTML = checkedlist.innerHTML;

	//因為在點點上面要放數字, 所以拿了<g>包住裡面的<circle>跟<text>
	//<g>的定位方式跟circle不同, g要用transform定位
	var tempArea = selectedDotArea.selectAll('g')
		.data(checkedData)
		.join('g')
		.style("cursor", "pointer")
		.on('mouseover', selectedDotHover)
		.on('mouseout', selectedDotunHover)
		.on('click', dotunClick)
		.attr('transform', d => 'translate(' + dotxScale(d.x) + ',' + dotyScale(d.y) +')');
	
	//已選點冒出
	tempArea.selectAll('circle')
		.data(checkedData)
		.join('circle')
		.transition()
        .duration(500)
		.attr('r', 9)
		.attr('fill', '#F5DF4D');

	//放上數字
	selectedDotArea.selectAll('g')
		.data(checkedData)
		.append('text')
		.attr('dx', -3.5)
		.attr('dy', 4)
		.attr('fill', '#112D4E')
		.style('font-size', '12px')
		.style('font-weight', '700')
		.text(function(d){
			for(var i=0; i<checkedData.length; i++){
				if(d.category+d.model == checkedData[i].category+checkedData[i].model){
					return i+1;
				};
			};
		});
};



//barchart
var barWinWidth = dotwindow.clientWidth*0.45;

//劃出柱狀圖範圍
var spendingchart = d3.select('#spendingchartarea')
    .append('svg')
    .attr('width', '100%')
    .attr('height', '100%');
var emissionchart = d3.select('#emissionchartarea')
    .append('svg')
    .attr('width', '100%')
    .attr('height', '100%');

//scaleBand()拿來一個對一個, 上面的scaleLinear()是線性對照
var barxScale = d3.scaleBand()
    .range([40, barWinWidth])
    .padding(0.5);
var barxScaleNum = d3.scaleBand()
    .range([40, barWinWidth])
    .padding(0.5);
//x軸車輛名稱以123代替
var barxScaleNumArray = [];

//spending
var spendingyScale = d3.scaleLinear()
    .domain([0,d3.max(checkedData, d => d.spending*1)*1.1])
    .range([winHeight-70, 10]);
var spendingxAxis = spendingchart.append('g')
    .attr('transform', 'translate(10, ' + (winHeight-70) + ')')
    .call(d3.axisBottom(barxScaleNum));
var spendingyAxis = spendingchart.append('g')
    .attr('transform', 'translate(50,0)')
    .call(d3.axisLeft(spendingyScale));
//每一根柱狀都用<g>包起來
var spendingBarArea = spendingchart.append('g');
var spendingDomain = ['own','fuel','maintain','tax'];
//不同分類不同顏色
//spendingDomain拿出來設是後面會用到
var spendingBarColor = d3.scaleOrdinal()
    .domain(spendingDomain)
    .range(['#325b8c','#3F72AF','#658ebf','#8baacf']);
var spendingStacked = [];

//y軸名稱
spendingBarArea.append('text')
	.attr('transform', 'rotate(-90)')
	.attr('x', -winHeight/2)
	.attr('y', 10)
	.attr('fill', '#112D4E')
	.attr('text-anchor', 'middle')
    .style('font-size', '0.8em')
    .text('Total Cost of Ownership (NT$/month)');

//emission
var emissionyScale = d3.scaleLinear()
    .domain([0,d3.max(checkedData, d => d.emission*1)*1.1])
    .range([winHeight-70, 10]);
var emissionxAxis = emissionchart.append('g')
    .attr('transform', 'translate(0, ' + (winHeight-70) + ')')
    .call(d3.axisBottom(barxScaleNum));
var emissionyAxis = emissionchart.append('g')
    .attr('transform', 'translate(40,0)')
    .call(d3.axisLeft(emissionyScale));
var emissionBarArea = emissionchart.append('g');
var emissionDomain = ['fuelburn','fuelmakefinal','battery','body'];
var emissionBarColor = d3.scaleOrdinal()
    .domain(emissionDomain)
    .range(['#8c4840','#B05A51','#bf7a73','#d7aca8']);
var emissionStacked = [];

emissionBarArea.append('text')
	.attr('transform', 'rotate(-90)')
	.attr('x', -winHeight/2)
	.attr('y', 10)
	.attr('fill', '#112D4E')
	.attr('text-anchor', 'middle')
    .style('font-size', '0.8em')
    .text('Greenhouse Gas Emissions (gCO₂eq/km)');

//tooltip
//hover資訊卡
var bardiv = d3.select('#fullwindow')
    .append('div')
    .attr('class', 'nametag')
    .style('display', 'none');

function spendingHover(d,i){
    bardiv.transition()
        .style('display', 'block');

    bardiv.style('left', d.x+20 + 'px')
        .style('top', d.y+20 + 'px');

    d.target.classList.add('barhover');

	//stacked bar的繪製在後面
	//stacked的邏輯是分成1樓高層, 2樓高層...
	//thisvalue就是這層的頂-底 = 這區塊的數值
	//如果thisvalue = data裡面的其中一個數值, 就可以判別hover的這塊屬於什麼legend
    var thisvalue = i[1]-i[0];
    thisvalue = thisvalue.toFixed(0);
    if(thisvalue == (i.data.own*1).toFixed(0)){
        bardiv.html('<h2>Acquisition and Depreciation</h2><br>'+(i.data.own*1).toFixed(0)+' NT$/month<br>'+i.data.category+' | '+i.data.brand+' '+i.data.model+'');
    }else if(thisvalue == (i.data.fuel*1).toFixed(0)){
        bardiv.html('<h2>Fuel and Electricity</h2><br>'+(i.data.fuel*1).toFixed(0)+' NT$/month<br>'+i.data.category+' | '+i.data.brand+' '+i.data.model+'');
    }else if(thisvalue == (i.data.maintain*1).toFixed(0)){
        bardiv.html('<h2>Mantenance</h2><br>'+(i.data.maintain*1).toFixed(0)+' NT$/month<br>'+i.data.category+' | '+i.data.brand+' '+i.data.model+'');
    }else if(thisvalue == (i.data.tax*1).toFixed(0)){
        bardiv.html('<h2>Basic Tax and Insurance</h2><br>'+(i.data.tax*1).toFixed(0)+' NT$/month<br>'+i.data.category+' | '+i.data.brand+' '+i.data.model+'');
    };
};
function spendingMove(d,i){
        bardiv.style('left', d.x+20+'px')
        .style('top', d.y+20+'px');
};
function spendingunHover(d,i){
    bardiv.transition()
        .style('display', 'none');

    d.target.classList.remove('barhover');
};

function emissionHover(d,i){
    bardiv.transition()
        .style('display', 'block');

    bardiv.style('left', d.x+20 + 'px')
        .style('top', d.y+20 + 'px');

    d.target.classList.add('barhover');

    var thisvalue = i[1]-i[0];
    thisvalue = thisvalue.toFixed(2);
    if(thisvalue == (i.data.fuelburn*1).toFixed(2)){
        bardiv.html('<h2>Fuel Usage</h2><br>'+(i.data.fuelburn*1).toFixed(2)+' gCO<sub>2</sub>/km<br>'+i.data.category+' | '+i.data.brand+' '+i.data.model+'');
    }else if(thisvalue == (i.data.fuelmakefinal*1).toFixed(2)){
        bardiv.html('<h2>Fuel Production</h2><br>'+(i.data.fuelmakefinal*1).toFixed(2)+' gCO<sub>2</sub>/km<br>'+i.data.category+' | '+i.data.brand+' '+i.data.model+'');
    }else if(thisvalue == (i.data.battery*1).toFixed(2)){
        bardiv.html('<h2>Battery Production</h2><br>'+(i.data.battery*1).toFixed(2)+' gCO<sub>2</sub>/km<br>'+i.data.category+' | '+i.data.brand+' '+i.data.model+'');
    }else if(thisvalue == (i.data.body*1).toFixed(2)){
        bardiv.html('<h2>Vehicle Production</h2><br>'+(i.data.body*1).toFixed(2)+' gCO<sub>2</sub>/km<br>'+i.data.category+' | '+i.data.brand+' '+i.data.model+'');
    };
};
function emissionMove(d,i){
        bardiv.style('left', d.x+20+'px')
        .style('top', d.y+20+'px');
};
function emissionunHover(d,i){
    bardiv.transition()
        .style('display', 'none');

    d.target.classList.remove('barhover');
};

//update bar
function updatebar(){
	//沒有已選點的時候會顯示下面那串字
	if(checkedData.length==0){
		d3.select('#spendingchartarea')
			.style('display', 'none');
		d3.select('#emissionchartarea')
			.style('display', 'none');
		d3.select('#nobarchart')
			.html('&#8593; Simply press the dot in scatter chart<br>&#8594; or use "Search" to add models for analysis.');
	}else{
		d3.select('#spendingchartarea')
				.style('display', 'block');
		d3.select('#emissionchartarea')
				.style('display', 'block');
		d3.select('#nobarchart')
			.html('');
	};

	//x軸domain放上
	//同時放了123(barxScaleNum)
    barxScale.domain(checkedData.map(d => d.category+d.model));

    barxScaleNumArray = [];
    for(var i=0; i<checkedData.length; i++){barxScaleNumArray.push(i+1);}
    barxScaleNum.domain(barxScaleNumArray);

    //spending
	//做出stacked bar
	//.key拿來回傳東西
    spendingStacked = d3.stack()
        .keys(spendingDomain)(checkedData);
    spendingyScale = d3.scaleLinear()
        .domain([0,d3.max(checkedData, d => d.spending*1)*1.2])
        .range([winHeight-70, 10]);
    spendingxAxis.transition()
        .duration(800)
        .call(d3.axisBottom(barxScaleNum));
    spendingyAxis.transition()
        .duration(800)
        .call(d3.axisLeft(spendingyScale));
	spendingxAxis.selectAll('text')
    	.style('font-size', '0.7rem');
	spendingyAxis.selectAll('text')
		.style('font-size', '0.7rem');
	//劃出柱狀用1樓2樓高層來畫
    spendingBarArea.selectAll('g')
        .data(spendingStacked)
        .join('g')
        .attr('fill', d => spendingBarColor(d.key))
        .selectAll('rect')
        .data(d => d)
        .join('rect')
        .on('mouseover', spendingHover)
        .on('mousemove', spendingMove)
        .on('mouseleave', spendingunHover)
        .transition()
        .duration(800)
            .attr('x', d => barxScale(d.data.category+d.data.model))
            .attr('y', d => spendingyScale(d[1]))
            .attr('height', d => spendingyScale(d[0]) - spendingyScale(d[1]))
            .attr('width', barxScale.bandwidth());

    //emission
    emissionStacked = d3.stack()
        .keys(emissionDomain)(checkedData);
    emissionyScale = d3.scaleLinear()
        .domain([0,d3.max(checkedData, d => d.emission*1)*1.2])
        .range([winHeight-70, 10]);
    emissionxAxis.transition()
        .duration(800)
        .call(d3.axisBottom(barxScaleNum));
    emissionyAxis.transition()
        .duration(800)
        .call(d3.axisLeft(emissionyScale));
	emissionxAxis.selectAll('text')
		.style('font-size', '0.8rem');
	emissionyAxis.selectAll('text')
		.style('font-size', '0.8rem');
    emissionBarArea.selectAll('g')
        .data(emissionStacked)
        .join('g')
        .attr('fill', d => emissionBarColor(d.key))
        .selectAll('rect')
        .data(d => d)
        .join('rect')
        .on('mouseover', emissionHover)
        .on('mousemove', emissionMove)
        .on('mouseleave', emissionunHover)
        .transition()
        .duration(800)
            .attr('x', d => barxScale(d.data.category+d.data.model))
            .attr('y', d => emissionyScale(d[1]))
            .attr('height', d => emissionyScale(d[0]) - emissionyScale(d[1]))
            .attr('width', barxScale.bandwidth());
};

updatebar();

window.addEventListener('pointerup', e => {setTimeout(updatebar,10)});



//tour
var tourstep = [
    {"name":"tour-start" , "position":"tourstart"},
    {"name":"tour-dotchart", "position":"tourdotchart"},
	{"name":"tour-target", "position":"tourtarget"},
	{"name":"tour-customize", "position":"tourcustom"},
    {"name":"tour-barchart", "position":"tourbarchart"},
    {"name":"tour-search", "position":"toursearch"},
	{"name":"tour-reset", "position":"tourreset"},
    {"name":"tour-info", "position":"tourinfo"},
    {"name":"tour-end", "position":"tourend"}
];

var step = 0;

function tourstart(){
	if(step !== 0){
		tourend();
	}else{
		step = 0;

		if(document.getElementById("tour-start").classList.contains("displaynone")) {
			document.getElementById("tour-start").classList.remove("displaynone");
		}else{
			tourend();
		};
		searchside.classList.add("displaynone");
		fullbackground.classList.add("displaynone");
		informationside.classList.add("displaynone");
		if(customside.classList.contains("displaynone")){
		}else{
			custombutton.onclick();
    	};
	};
};

function tourend(){
    document.getElementById(tourstep[step].name).classList.add("displaynone");
	if(step !== 0 && step !== 8){
	    document.getElementById(tourstep[step].position).classList.add("displaynone");
	};

	step = 0;
};

function tournext(){
    step += 1;

    document.getElementById(tourstep[step-1].name).classList.add("displaynone");
    document.getElementById(tourstep[step].name).classList.remove("displaynone");
	if(step !== 1){
		document.getElementById(tourstep[step-1].position).classList.add("displaynone");
	};
	if(step !== 8){
		document.getElementById(tourstep[step].position).classList.remove("displaynone");
	};

    tourstepcheck();
};

function tourprev(){
    step -= 1;

	document.getElementById(tourstep[step+1].name).classList.add("displaynone");
	document.getElementById(tourstep[step].name).classList.remove("displaynone");
	if(step !== 7){
		document.getElementById(tourstep[step+1].position).classList.add("displaynone");
	};
	if(step !== 0){
		document.getElementById(tourstep[step].position).classList.remove("displaynone");
	};

    tourstepcheck();
};

function tourstepcheck(){
	if(step==1){
        searchside.classList.add("displaynone");
        fullbackground.classList.add("displaynone");
        informationside.classList.add("displaynone");
        if(customside.classList.contains("displaynone")){
        }else{
            custombutton.onclick();
        };
        dotbutton.onclick();
	}else if(step==2){
		dotbutton.onclick();
    }else if(step==3){
        custombutton.onclick();
        dotbutton.onclick();
    }else if(step==4){
        searchside.classList.add("displaynone");
        fullbackground.classList.add("displaynone");
        informationside.classList.add("displaynone");
        if(customside.classList.contains("displaynone")){
        }else{
            custombutton.onclick();
        };
        barbutton .onclick();
    }else if(step==5){
        informationside.classList.add("displaynone");
        if(customside.classList.contains("displaynone")){
        }else{
            custombutton.onclick();
        };
        searchside.classList.remove("displaynone");
		fullbackground.classList.remove("displaynone");
    }else if(step==6){
        searchside.classList.add("displaynone");
        fullbackground.classList.add("displaynone");
        informationside.classList.add("displaynone");
        if(customside.classList.contains("displaynone")){
            custombutton.onclick();
        };
	}else if(step==7){
		if(informationside.classList.contains("displaynone")){
	        information.onclick();
		};
    }else if(step==8){
        searchside.classList.add("displaynone");
        fullbackground.classList.add("displaynone");
        informationside.classList.add("displaynone");
        if(customside.classList.contains("displaynone")){
        }else{
            custombutton.onclick();
        };
        dotbutton.onclick();
    };
};