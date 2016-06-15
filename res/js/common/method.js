// 重设网页 html font-size
function htmlFontSize(){
	var win = $(window),
		winH = win.height(),
		winW = win.width(),
		hfz;
	winW > winH ? hfz = winH : hfz = winW;
	$("html").css('font-size',~~(hfz*100000/36)/100000+"px");
}

// 生成时间戳函数
function getTimeStamp(){
	return Date.parse(new Date());
}

// 跳转链接函数
function gourl(url){
	window.location.href=url;
}


// ajax get json 方法
function getJson(url,func){
	$.ajax({
		type:'get',
		url:url,
		dataType: 'json',
		success: function(data){
			if (data.success){
				func(data);
			}else{
				alert("接口调用失败");
			}
		},
		error: function(data){
			alert(JSON.stringify(data));
		}
	});
}

// 时间整形

function goodTime(str){
	// "2016-05-31T08:33:21.950Z"
	var now = new Date().getTime(),
		oldTime = new Date(str).getTime(),
		difference = now - oldTime,
		result='',
		minute = 1000 * 60,
		hour = minute * 60,
		day = hour * 24,
		halfamonth = day * 15,
		month = day * 30,
		year = month * 12,
		
		_year = difference/year,
		_month =difference/month,
		_week =difference/(7*day),
		_day =difference/day,
		_hour =difference/hour,
		_min =difference/minute;
		 if(_year>=1) {result= "发表于 " + ~~(_year) + " 年前"}
	else if(_month>=1) {result= "发表于 " + ~~(_month) + " 个月前"}
	else if(_week>=1) {result= "发表于 " + ~~(_week) + " 周前"}
	else if(_day>=1) {result= "发表于 " + ~~(_day) +" 天前"}
	else if(_hour>=1) {result= "发表于 " + ~~(_hour) +" 个小时前"}
	else if(_min>=1) {result= "发表于 " + ~~(_min) +" 分钟前"}
	else result="刚刚";
	return result;
}

// 获取ID

function getUrlId(){
	var host = window.location.href;
	var id = host.substring(host.indexOf("?")+1,host.length);
	// console.log(id);
	// return isNaN(id) ? 1 : id;
	return id;
}


/*
	url 方法
	funcUrl()				返回 window.location.search 值 不包含 ? 号
	funcUrl(name) 			返回 url 中 name 的值
	funcUrl(name,value) 	如果 url 中有 name 则更新 name 的值
							如果 url 中没有 name 则追加 name 的值
	如果url中的 name 是重复的,则会去重
	去重后,它的值是最后一次出现的值
	如果重复的值是 name 则值是 value

	funcUrl(name,value,type)
	第三个 type 可以为空,为空时返回完整的url, 如 http://www.nodebbs.com/url.shtml?page=5&a=3&b=4&c=aa
	不为空时,返回 page=5&a=3&b=4&c=aa

*/
function funcUrl(name,value,type){
	var loca = window.location;
	var baseUrl = type==undefined ? loca.origin + loca.pathname + "?" : "";
	var query = loca.search.substr(1);
	// 如果没有传参,就返回 search 值 不包含问号
	if (name==undefined) { return query }
	// 如果没有传值,就返回要查询的参数的值
	if (value==undefined){
		var val = query.match(new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"));
		return val!=null ? unescape(val[2]) : null;
	};
	var url;
	if (query=="") {
		// 如果没有 search 值,则返回追加了参数的 url
		url = baseUrl + name + "=" + value;
	}else{
		// 如果没有 search 值,则在其中修改对应的值,并且去重,最后返回 url
		var obj = {};
		var arr = query.split("&");
		for (var i = 0; i < arr.length; i++) {
			arr[i] = arr[i].split("=");
			obj[arr[i][0]] = arr[i][1];
		};
		obj[name] = value;
		url = baseUrl + JSON.stringify(obj).replace(/[\"\{\}]/g,"").replace(/\:/g,"=").replace(/\,/g,"&");
	};
	return url;
}
