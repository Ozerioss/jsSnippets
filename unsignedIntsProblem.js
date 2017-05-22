function processData(input) {

    var toBinary = 0;
    var binaryString = "";
    var arrBinaryString = [];
    var arr = input.split("\n");
    var finalStuff = 0;
    for(let i = 0; i<arr[0];i++)
        {
            for(let j=0; j<arr[i+1].length; j++)
                {
                    toBinary = Number(arr[i+1]).toString(2);
                    binaryString = ""+toBinary;
                    // to fill the remaining bits
                    while(binaryString.length<32)
                        {
                            binaryString = "0"+binaryString;
                        }
                    // at this point we have our 32 bit unsigned var
                    arrBinaryString = binaryString.split("");
                    // to flip the content of the string (ie every 1 is a 0 and vice versa)
                    for(let k =0; k<binaryString.length; k++)
                        {
                         
                            if(arrBinaryString[k]==0)
                                {
                                    arrBinaryString[k]="1";
                                }
                            else if(arrBinaryString[k]==1)
                                {
                                    arrBinaryString[k]="0";
                                }
                        }
                    //at this point we have the 32 bit unsigned var flipped
                    finalStuff = parseInt(arrBinaryString.join(""), 2); // we join the array and parse it in base 2
                }
            console.log(finalStuff);
        }
} 
