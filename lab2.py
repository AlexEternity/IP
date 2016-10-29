import requests
import re
f=open("access.log",'r');
ip=set();
for line in f.readlines():
	r=re.findall(r'(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})',line)
	for i in r:
		ip.add(i);
a=[' ',' ',' ']
for i in sorted(ip):
	if i.find(a[1])==-1:
		a=re.split(r'(\d{1,3}\.\d{1,3}\.\d{1,3})\.\d{1,3}',i)
		print(' ')
		print('Podset',a[1],':')
		print(i)
		continue
	print(i)