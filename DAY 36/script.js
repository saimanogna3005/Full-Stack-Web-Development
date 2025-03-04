let n1=-1;
        let n2=1;
        for(i=0;i<25;i++){
            n3=n1+n2;
            console.log(n3);
            n1=n2;
            n2=n3;
        }
        let str='level';
        rev='';
        for(i=str.length-1; i>=0; i--){
            rev+=str[i];
        }
        if(rev==str)
            console.log(str, "is palindrome");
        else
            console.log("not a palindrome");