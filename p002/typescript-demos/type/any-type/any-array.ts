let a: any[] = [1,true,'free'];
a.forEach(item => console.log(item));
a[1] = 'a';
a[2] = 'b';
a[3] = 'c';
a[4] = 1;
a[5] = 2;
a[6] = 3;
a.forEach(item => console.log(item));