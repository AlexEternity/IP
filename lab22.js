var fs=require("fs"), sys=require("sys");
re=/(\d{1,3}\.\d{1,3}\.\d{1,3}\.)/;
function unique(arr) {
  var result = [];

  nextInput:
    for (var i = 0; i < arr.length; i++) {
      var str = arr[i]; // ��� ������� ��������
      for (var j = 0; j < result.length; j++) { // ����, ��� �� �� ���?
        if (result[j] == str) continue nextInput; // ���� ��, �� ���������
      }
      result.push(str);
    }

  return result;
}
fs.open("access.log", "r", 0644, function(err, file_handle) 
{
	if (!err) 
	{
   		var text = fs.readFileSync(file_handle, 'utf8');
		var ipp=text.match(/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/ig)
		var ip=unique(ipp);
		ip.sort();
		console.log(ip);
		console.log(ip.length);
		web=ip[0].split(re);
		console.log('podset:',web[1]);
		for(i=1;i<ip.length;i++){
			if(ip[i].startsWith(web[1])==true){console.log(ip[i]);}
			else{
			web=ip[i].split(re);
			console.log('Podset:',web[1]);
			console.log(ip[i]);}
		}
	}
});