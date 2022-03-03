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

//preload
setTimeout(function preloadanimation(){
	d3.select('#preloadanimation')
    .style('display', 'none');
},1500);

// button
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
// var greenevsubsidy = document.getElementById("greenevsubsidy");
var gasmotorsub = subsidy[0].gas;
var evmotorsub = subsidy[0].evwhite;
var greenevsub = subsidy[0].evgreen;
gasmotorsubsidy.innerHTML = subsidy[0].gas;
evmotorsubsidy.innerHTML = subsidy[0].evwhite;
// greenevsubsidy.innerHTML = subsidy[2].evgreen;

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

var selectcity = document.getElementById("selectcity");

window.addEventListener('mouseup', e => {updatesubsidy()});
function updatesubsidy(){
	for(var i=0; i<subsidy.length; i++){
		if(selectcity.value==subsidy[i].city){
			gasmotorsub = subsidy[i].gas;
			evmotorsub = subsidy[i].evwhite;
			greenevsub = subsidy[i].evgreen;
			gasmotorsubsidy.innerHTML = subsidy[i].gas;
			evmotorsubsidy.innerHTML = subsidy[i].evwhite;
			// greenevsubsidy.innerHTML = subsidy[i].evgreen;
		};
	};
};

document.getElementById("reset").onclick = function(){
	input[0].gas92 = in92.value = out92.innerHTML = 27.2;
	input[0].electric = inelec.value = outelec.innerHTML = 2.7;
	input[0].yearkm = inyearkm.value = outyearkm.innerHTML = 5000;
	input[0].ownyear = inownyear.value = outownyear.innerHTML = 10;
	input[0].depreciation = 0.75;
	indepreciation.value = 0.25;
	outdepreciation.innerHTML = (indepreciation.value*100).toFixed(0);
	input[0].discount = indiscount.value = 0.06;
	outdiscount.innerHTML = (input[0].discount*100).toFixed(0);
	selectcity.value = subsidy[0].city;
	gasmotorsub = subsidy[0].gas;
	evmotorsub = subsidy[0].evwhite;
	greenevsub = subsidy[0].evgreen;
	gasmotorsubsidy.innerHTML = subsidy[0].gas;
	evmotorsubsidy.innerHTML = subsidy[0].evwhite;
	// greenevsubsidy.innerHTML = subsidy[2].evgreen;
	searchside.classList.add("displaynone");
	fullbackground.classList.add("displaynone");
	d3.selectAll("input[type=checkbox]").property("checked", false);
	checkedData = [];
	updateSelectedDot();
};



//dotchart
var dotchart = d3.select(dotwindow).append('svg')
	.attr('width', '100%')
	.attr('height', '100%');

var winWidth = dotwindow.clientWidth;
var winHeight = dotwindow.clientHeight;

var motordata = SwapM.concat(SwapS, ChargeM, ChargeS, Phase7, Phase6);

var dotxScale = d3.scaleLinear()
    .domain([d3.min(motordata, d => d.spending*1)*0.98, d3.max(motordata, d => d.spending*1)*1.02])
    .range([57, winWidth-40]);
var dotyScale = d3.scaleLinear()
    .domain([d3.max(motordata, d => d.emission*1)*1.02, d3.min(motordata, d => d.emission*1)*0.98])
    .range([15, winHeight-70]);

var dotxAxis = dotchart.append('g')
    .attr('transform', 'translate(0, ' + (winHeight-70) + ')')
    .call(d3.axisBottom(dotxScale));
var dotyAxis = dotchart.append('g')
    .attr('transform', 'translate(57,0)')
    .call(d3.axisLeft(dotyScale));

dotxAxis.selectAll('text')
    .style('font-size', '0.8rem');
dotyAxis.selectAll('text')
    .style('font-size', '0.8rem');

const energySelect = d3.scaleOrdinal()
	.domain(['Phase6', 'Phase7', 'SwapM', 'ChargeM', 'SwapS', 'ChargeS'])
	.range(['P6GS', 'P7GS', 'BSES', 'BCES', 'BSES', 'BCES']);

const energySelectFull = d3.scaleOrdinal()
	.domain(['Phase6', 'Phase7', 'SwapM', 'ChargeM', 'SwapS', 'ChargeS'])
	.range(['Phase 6 Gas. Scooter', 'Phase 7 Gas. Scooter', 'Batt. Swap. E-Scooter', 'Batt. Charge. E-Scooter', 'Batt. Swap. E-Scooter', 'Batt. Charge. E-Scooter']);

const colorSelect = d3.scaleOrdinal()
	.domain(['Phase6', 'Phase7', 'SwapM', 'ChargeM', 'SwapS', 'ChargeS'])
	.range(['#B05A51', '#C78B85', '#3F72AF', '#1A3B63', '#3F72AF', '#1A3B63']);

dotchart.append('g')
    .selectAll('circle')
    .data(motordata)
    .enter()
    .append('circle')
    .attr('cx', d => dotxScale(d.spending))
    .attr('cy', d => dotyScale(d.emission))
    .attr('r', 6)
    .attr('fill', d => colorSelect(d.category))
	.style("cursor", "pointer")
	.on('mouseover', dotHover)
	.on('mouseout', dotunHover)
	.on('click', dotClick);

dotchart.append('text')
    .attr('x', winWidth/2-110)
    .attr('y', winHeight-30)
	.attr('fill', '#112D4E')
    .style('font-size', '0.8em')
    .text('Total Cost of Ownership (NT$/month)');
dotchart.append('text')
    .attr('transform', 'rotate(-90)')
    .attr('x', -winHeight/2-110)
    .attr('y', 20)
	.attr('fill', '#112D4E')
    .style('font-size', '0.8em')
    .text('Greenhouse Gas Emissions (gCO₂eq/km)');

var selectedDotArea = dotchart.append('g');

//tools
var namediv = d3.select('#fullwindow')
    .append('div')
    .attr('class', 'nametag')
    .style('display', 'none');

function dotHover(d,i){
        d3.select(this)
            .attr('r', 8);
    
        namediv.transition()
            .style('display', 'block');
 
        namediv.html(energySelect(i.category)+' | $'+i.price+'<br>'+i.brand+' '+i.model+'<br>'+i.spending+' NT$, '+i.emission+' gCO<sub>2</sub>')
            .style('left', d.x+20 + 'px')
            .style('top', d.y+20 + 'px');
};
function dotunHover(d,i){
        d3.select(this)
            .attr('r', 6);
    
        namediv.transition()
            .style('display', 'none');
};

function dotClick(d,i){
	checkedData.push(i);

	for(var j=0; j<motorlist.length; j++){
		if(motorlist[j].name+motorlist[j].value == i.category+i.model){
			motorlist[j].checked = true;
		};
	};

	updateSelectedDot();
};

function dotunClick(d,i){
	for(var j=0; j<checkedData.length; j++){
		if(checkedData[j].category+checkedData[j].model == i.category+i.model){
			checkedData.splice(j,1);
			j--;
		};
	};

	for(var k=0; k<motorlist.length; k++){
		if(motorlist[k].name+motorlist[k].value == i.category+i.model){
			motorlist[k].checked = false;
		};
	};

	updateSelectedDot();
};

function selectedDotHover(d,i){
	d3.select(this).select('circle')
		.attr('r', 11);

	namediv.transition()
		.style('display', 'block');

	namediv.html(energySelect(i.category)+' | $'+i.price+'<br>'+i.brand+' '+i.model+'<br>'+i.spending+' NT$, '+i.emission+' gCO<sub>2</sub>')
		.style('left', d.x+20 + 'px')
		.style('top', d.y+20 + 'px');
};
function selectedDotunHover(d,i){
	d3.select(this).select('circle')
		.attr('r', 9);

	namediv.transition()
		.style('display', 'none');
};

d3.select('#Phase6')
	.on('mouseover', Phase6Hover)
	.on('mouseout', legendunHover);
d3.select('#Phase7')
	.on('mouseover', Phase7Hover)
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
		.attr('r', 7);
};
function Phase7Hover(d){
	dotchart.selectAll('circle')
		.attr('r', 4);
	dotchart.selectAll('circle')
		.filter(d => d.category=='Phase7')
		.attr('r', 7);
};
function SwapSHover(d){
	dotchart.selectAll('circle')
		.attr('r', 4);
	dotchart.selectAll('circle')
		.filter(d => d.category=='SwapS')
		.attr('r', 7);
	dotchart.selectAll('circle')
		.filter(d => d.category=='SwapM')
		.attr('r', 7);
};
function ChargeSHover(d){
	dotchart.selectAll('circle')
		.attr('r', 4);
	dotchart.selectAll('circle')
		.filter(d => d.category=='ChargeS')
		.attr('r', 7);
	dotchart.selectAll('circle')
		.filter(d => d.category=='ChargeM')
		.attr('r', 7);
};
function legendunHover(d){
	dotchart.selectAll('circle')
		.attr('r', 6);
	selectedDotArea.selectAll('circle')
		.attr('r', 9);
};

//updatedot
var sum = 0;
function discountformula(x){
	sum = 0;
	for(var i=0; i<input[0].ownyear; i++){
		sum += x/(1+input[0].discount*1)**i;
	};
	sum = sum/input[0].ownyear;
	sum = sum.toFixed(0);
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

	var gasmaintain = (gasenginoil*1 + gasbreakoil*1 + gasbattery*1 + gassparkplug*1 + gasairfilter*1).toFixed(0);


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

	var evmaintain = (evfirst1k*1 + evmay3k*1 + evmay9k*1 + evmay18k*1).toFixed(0);

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

	var greenevmaintain = (greenmay5k*1 + greenmay10k*1 + greenmay20k*1).toFixed(0);

	//phase6
	for (var i=0; i<Phase6.length; i++){
        //spending
        discountformula(Phase6[i].taxoriginal);
        Phase6[i].tax = sum;

        Phase6[i].maintain = gasmaintain;
            
        discountformula((input[0].yearkm/Phase6[i].efficiency)*input[0].gas92);
        Phase6[i].fuel = sum;

        Phase6[i].salvage = Phase6[i].price*input[0].depreciation**input[0].ownyear;
        discountformula((Phase6[i].price-Phase6[i].salvage)/input[0].ownyear);
        Phase6[i].own = sum;

        //emission
        Phase6[i].body = Phase6[i].bodymake/(input[0].ownyear*input[0].yearkm)*1000;
        Phase6[i].body = Phase6[i].body.toFixed(2);

        Phase6[i].fuelmakefinal = Phase6[i].fuelmake;

        //total
        Phase6[i].spending = Phase6[i].tax*1+Phase6[i].maintain*1+Phase6[i].fuel*1+Phase6[i].own*1;
        Phase6[i].spending = Phase6[i].spending.toFixed(0);
        Phase6[i].emission = Phase6[i].fuelburn*1+Phase6[i].fuelmakefinal*1+Phase6[i].battery*1+Phase6[i].body*1;
        Phase6[i].emission = Phase6[i].emission.toFixed(2);
    };

	//phase7
	for (var i=0; i<Phase7.length; i++){
        //spending
        discountformula(Phase7[i].taxoriginal);
        Phase7[i].tax = sum;

        Phase7[i].maintain = gasmaintain;
            
        discountformula((input[0].yearkm/Phase7[i].efficiency)*input[0].gas92);
        Phase7[i].fuel = sum;

        Phase7[i].salvage = Phase7[i].price*input[0].depreciation**input[0].ownyear;
        discountformula((Phase7[i].price-Phase7[i].salvage)/input[0].ownyear);
        Phase7[i].own = sum;

        //emission
        Phase7[i].body = Phase7[i].bodymake/(input[0].ownyear*input[0].yearkm)*1000;
        Phase7[i].body = Phase7[i].body.toFixed(2);

        Phase7[i].fuelmakefinal = Phase7[i].fuelmake;

        //total
        Phase7[i].spending = Phase7[i].tax*1+Phase7[i].maintain*1+Phase7[i].fuel*1+Phase7[i].own*1;
        Phase7[i].spending = Phase7[i].spending.toFixed(0);
        Phase7[i].emission = Phase7[i].fuelburn*1+Phase7[i].fuelmakefinal*1+Phase7[i].battery*1+Phase7[i].body*1;
        Phase7[i].emission = Phase7[i].emission.toFixed(2);
    };

	//SwapM
	for (var i=0; i<SwapM.length; i++){
		//spending
		discountformula(SwapM[i].taxoriginal);
		SwapM[i].tax = sum;

		SwapM[i].maintain = evmaintain;

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
				console.log('b')
			}else if(input[0].monthkm*1 > 315+120){
				SwapM[i].plan = gogoro[2].plan;
				SwapM[i].planprice = gogoro[2].price;
				SwapM[i].fueloriginal = SwapM[i].planprice*12;
				console.log('c')
			}else if(input[0].monthkm*1 > 315){
				SwapM[i].plan = gogoro[1].plan;
				SwapM[i].planprice = gogoro[1].price;
				SwapM[i].fueloriginal = (499+(input[0].monthkm-315)*2.5)*12;
			}else if(SwapM[i].kwh*1 > 7.514){
				SwapM[i].plan = gogoro[1].plan;
				SwapM[i].planprice = gogoro[1].price;
				SwapM[i].fueloriginal = SwapM[i].planprice*12;
				console.log('d')
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
        SwapM[i].fuel = sum;

        SwapM[i].salvage = (SwapM[i].price-evmotorsub)*input[0].depreciation**input[0].ownyear;
        discountformula((SwapM[i].price-evmotorsub-SwapM[i].salvage)/input[0].ownyear);
        SwapM[i].own = sum;

        //emission
        SwapM[i].battery = SwapM[i].batterymake/(input[0].ownyear*input[0].yearkm)*1000;
        SwapM[i].battery = SwapM[i].battery.toFixed(2);

        SwapM[i].body = SwapM[i].bodymake/(input[0].ownyear*input[0].yearkm)*1000;
        SwapM[i].body = SwapM[i].body.toFixed(2);

        SwapM[i].fuelmakefinal = SwapM[i].fuelmake*1 + SwapM[i].kwh*input[0].electriccoefficient/input[0].monthkm;
        SwapM[i].fuelmakefinal = SwapM[i].fuelmakefinal.toFixed(2);

        //total
        SwapM[i].spending = SwapM[i].tax*1+SwapM[i].maintain*1+SwapM[i].fuel*1+SwapM[i].own*1;
        SwapM[i].spending = SwapM[i].spending.toFixed(0);	
        SwapM[i].emission = SwapM[i].fuelburn*1+SwapM[i].fuelmakefinal*1+SwapM[i].battery*1+SwapM[i].body*1;
        SwapM[i].emission = SwapM[i].emission.toFixed(2);
	};

	//ChargeM
	for(var i=0; i<ChargeM.length; i++){
		//spending
		discountformula(ChargeM[i].taxoriginal);
		ChargeM[i].tax = sum;

		ChargeM[i].maintain = evmaintain;

		ChargeM[i].kwh = input[0].monthkm/ChargeM[i].efficiency;

		if(ChargeM[i].electricgroup == 'Ionex 3.0'){
			if(input[0].yearkm*1 > ionex[4].kmperyear*1){
				ChargeM[i].plan = ionex[4].plan;
				ChargeM[i].planprice = ionex[4].price;
				ChargeM[i].fueloriginal = ionex[4].price*12+(input[0].yearkm-ionex[4].kmperyear)*ionex[4].ntdperkm+(input[0].yearkm/ChargeM[i].efficiency*input[0].electric);
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
        ChargeM[i].fuel = sum;

        ChargeM[i].salvage = (ChargeM[i].price-evmotorsub)*input[0].depreciation**input[0].ownyear;
        discountformula((ChargeM[i].price-evmotorsub-ChargeM[i].salvage)/input[0].ownyear);
        ChargeM[i].own = sum;

		//emission
        ChargeM[i].battery = ChargeM[i].batterymake/(input[0].ownyear*input[0].yearkm)*1000;
        ChargeM[i].battery = ChargeM[i].battery.toFixed(2);

        ChargeM[i].body = ChargeM[i].bodymake/(input[0].ownyear*input[0].yearkm)*1000;
        ChargeM[i].body = ChargeM[i].body.toFixed(2);

        ChargeM[i].fuelmakefinal = ChargeM[i].fuelmake*1 + ChargeM[i].kwh*input[0].electriccoefficient/input[0].monthkm;
        ChargeM[i].fuelmakefinal = ChargeM[i].fuelmakefinal.toFixed(2);

        //total
        ChargeM[i].spending = ChargeM[i].tax*1+ChargeM[i].maintain*1+ChargeM[i].fuel*1+ChargeM[i].own*1;
        ChargeM[i].spending = ChargeM[i].spending.toFixed(0);	
        ChargeM[i].emission = ChargeM[i].fuelburn*1+ChargeM[i].fuelmakefinal*1+ChargeM[i].battery*1+ChargeM[i].body*1;
        ChargeM[i].emission = ChargeM[i].emission.toFixed(2);
	};

	//SwapS
	for(var i=0; i<SwapS.length; i++){
		//spending
        discountformula(SwapS[i].taxoriginal);
        SwapS[i].tax = sum;

        //maintain
        SwapS[i].maintain = greenevmaintain;

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
        SwapS[i].fuel = sum;

        SwapS[i].salvage = (SwapS[i].price-greenevsub)*input[0].depreciation**input[0].ownyear;
        discountformula((SwapS[i].price-greenevsub-SwapS[i].salvage)/input[0].ownyear);
        SwapS[i].own = sum;

        //emission
        SwapS[i].battery = SwapS[i].batterymake/(input[0].ownyear*input[0].yearkm)*1000;
        SwapS[i].battery = SwapS[i].battery.toFixed(2);

        SwapS[i].body = SwapS[i].bodymake/(input[0].ownyear*input[0].yearkm)*1000;
        SwapS[i].body = SwapS[i].body.toFixed(2);

        SwapS[i].fuelmakefinal = SwapS[i].fuelmake*1 + SwapS[i].kwh*input[0].electriccoefficient/input[0].monthkm;
        SwapS[i].fuelmakefinal = SwapS[i].fuelmakefinal.toFixed(2);
        //total
        SwapS[i].spending = SwapS[i].tax*1+SwapS[i].maintain*1+SwapS[i].fuel*1+SwapS[i].own*1;
        SwapS[i].spending = SwapS[i].spending.toFixed(0);	
        SwapS[i].emission = SwapS[i].fuelburn*1+SwapS[i].fuelmakefinal*1+SwapS[i].battery*1+SwapS[i].body*1;
        SwapS[i].emission = SwapS[i].emission.toFixed(2);
	};

	//ChargeS
	for(var i=0; i<ChargeS.length; i++){
		//spending
        discountformula(ChargeS[i].taxoriginal);
        ChargeS[i].tax = sum;

        //maintain
        ChargeS[i].maintain = greenevmaintain;

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
        ChargeS[i].fuel = sum;

        ChargeS[i].salvage = (ChargeS[i].price-greenevsub)*input[0].depreciation**input[0].ownyear;
        discountformula((ChargeS[i].price-greenevsub-ChargeS[i].salvage)/input[0].ownyear);
        ChargeS[i].own = sum;

        //emission
        ChargeS[i].battery = ChargeS[i].batterymake/(input[0].ownyear*input[0].yearkm)*1000;
        ChargeS[i].battery = ChargeS[i].battery.toFixed(2);

        ChargeS[i].body = ChargeS[i].bodymake/(input[0].ownyear*input[0].yearkm)*1000;
        ChargeS[i].body = ChargeS[i].body.toFixed(2);

        ChargeS[i].fuelmakefinal = ChargeS[i].fuelmake*1 + ChargeS[i].kwh*input[0].electriccoefficient/input[0].monthkm;
        ChargeS[i].fuelmakefinal = ChargeS[i].fuelmakefinal.toFixed(2);
        //total
        ChargeS[i].spending = ChargeS[i].tax*1+ChargeS[i].maintain*1+ChargeS[i].fuel*1+ChargeS[i].own*1;
        ChargeS[i].spending = ChargeS[i].spending.toFixed(0);	
        ChargeS[i].emission = ChargeS[i].fuelburn*1+ChargeS[i].fuelmakefinal*1+ChargeS[i].battery*1+ChargeS[i].body*1;
        ChargeS[i].emission = ChargeS[i].emission.toFixed(2);
	};

	motordata = SwapM.concat(SwapS, ChargeM, ChargeS, Phase7, Phase6);

	dotxScale = d3.scaleLinear()
		.domain([d3.min(motordata, d => d.spending*1)*0.98, d3.max(motordata, d => d.spending*1)*1.02])
		.range([57, winWidth-40]);
	dotyScale = d3.scaleLinear()
		.domain([d3.max(motordata, d => d.emission*1)*1.02, d3.min(motordata, d => d.emission*1)*0.98])
		.range([15, winHeight-70]);

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

	dotchart.selectAll('circle')
        .data(motordata)
        .transition()
        .duration(800)
        .attr('cx', function(d){
			return dotxScale(d.spending);})
		.attr('cy', function(d){
			return dotyScale(d.emission);});
};

updatedot();

window.addEventListener('mouseup', e => {setTimeout(updatedot,10)});



//search
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
var checkedData = [];

for(var i=0; i<motorlist.length; i++){
	motorlabelcombine.push(motorlist[i].name+motorlist[i].value);
};

d3.selectAll("input[type=checkbox]")
	.on('click', checkboxClick);

function checkboxClick(i){
	if(i.target.checked==true){
		checkedData.push(motordata.filter(d => d.category+d.model == i.target.name+i.target.value)[0]);
	}else{
		for(var d=0; d<checkedData.length; d++){
			if(checkedData[d].category+checkedData[d].model == i.target.name+i.target.value){
				checkedData.splice(d,1);
				d--;
			};
		};
	};
	
	updateSelectedDot();
};

function updateSelectedDot(){
	checkedlisth1.innerHTML = "";
	checkedlist.innerHTML = "";

	if(checkedData.length == 0){
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

	var tempArea = selectedDotArea.selectAll('g')
		.data(checkedData)
		.join('g')
		.style("cursor", "pointer")
		.on('mouseover', selectedDotHover)
		.on('mouseout', selectedDotunHover)
		.on('click', dotunClick)
		.attr('transform', d => 'translate(' + dotxScale(d.spending) + ',' + dotyScale(d.emission) +')');
	
	tempArea.selectAll('circle')
		.data(checkedData)
		.join('circle')
		.transition()
        .duration(500)
		.attr('r', 9)
		.attr('fill', '#F5DF4D');

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

var spendingchart = d3.select('#spendingchartarea')
    .append('svg')
    .attr('width', '100%')
    .attr('height', '100%');
var emissionchart = d3.select('#emissionchartarea')
    .append('svg')
    .attr('width', '100%')
    .attr('height', '100%');

var barxScale = d3.scaleBand()
    .range([40, barWinWidth])
    .padding(0.5);
var barxScaleNum = d3.scaleBand()
    .range([40, barWinWidth])
    .padding(0.5);
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
var spendingBarArea = spendingchart.append('g');
var spendingDomain = ['own','fuel','maintain','tax'];
var spendingBarColor = d3.scaleOrdinal()
    .domain(spendingDomain)
    .range(['#325b8c','#3F72AF','#658ebf','#8baacf']);
var spendingStacked = [];

spendingBarArea.append('text')
	.attr('transform', 'rotate(-90)')
	.attr('x', -winHeight/2-100)
	.attr('y', 20)
	.attr('fill', '#112D4E')
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

//tooltip
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

    var thisvalue = i[1]-i[0];
    thisvalue = thisvalue.toFixed(0);
    if(thisvalue == (i.data.own*1).toFixed(0)){
        bardiv.html('<h2>Acquisition and Depreciation</h2><br>'+i.data.own+' NT$/month<br>'+i.data.category+' | '+i.data.brand+' '+i.data.model+'');
    }else if(thisvalue == (i.data.fuel*1).toFixed(0)){
        bardiv.html('<h2>Fuel and Electricity</h2><br>'+i.data.fuel+' NT$/month<br>'+i.data.category+' | '+i.data.brand+' '+i.data.model+'');
    }else if(thisvalue == (i.data.maintain*1).toFixed(0)){
        bardiv.html('<h2>Mantenance</h2><br>'+i.data.maintain+' NT$/month<br>'+i.data.category+' | '+i.data.brand+' '+i.data.model+'');
    }else if(thisvalue == (i.data.tax*1).toFixed(0)){
        bardiv.html('<h2>Basic Tax and Insurance</h2><br>'+i.data.tax+' NT$/month<br>'+i.data.category+' | '+i.data.brand+' '+i.data.model+'');
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

    var thisvalue = i[1]-i[0];//g6 kolombo150 nice100 racings150
    thisvalue = thisvalue.toFixed(2);
    if(thisvalue == (i.data.fuelburn*1).toFixed(2)){
        bardiv.html('<h2>Fuel Usage</h2><br>'+i.data.fuelburn+' gCO<sub>2</sub>/km<br>'+i.data.category+' | '+i.data.brand+' '+i.data.model+'');
    }else if(thisvalue == (i.data.fuelmakefinal*1).toFixed(2)){
        bardiv.html('<h2>Fuel Production</h2><br>'+i.data.fuelmakefinal+' gCO<sub>2</sub>/km<br>'+i.data.category+' | '+i.data.brand+' '+i.data.model+'');
    }else if(thisvalue == (i.data.battery*1).toFixed(2)){
        bardiv.html('<h2>Battery Production</h2><br>'+i.data.battery+' gCO<sub>2</sub>/km<br>'+i.data.category+' | '+i.data.brand+' '+i.data.model+'');
    }else if(thisvalue == (i.data.body*1).toFixed(2)){
        bardiv.html('<h2>Vehicle Production</h2><br>'+i.data.body+' gCO<sub>2</sub>/km<br>'+i.data.category+' | '+i.data.brand+' '+i.data.model+'');
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

    barxScale.domain(checkedData.map(d => d.category+d.model));

    barxScaleNumArray = [];
    for(var i=0; i<checkedData.length; i++){barxScaleNumArray.push(i+1);}
    barxScaleNum.domain(barxScaleNumArray);

    //spending
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

window.addEventListener('mouseup', e => {setTimeout(updatebar,10)});