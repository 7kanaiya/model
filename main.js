let customerCommunicationObj1= new customerCommunicationModel();
customerCommunicationObj1.emailId="kanaiyabhanu007@gmail.com";
customerCommunicationObj1.mobileNo="8291439277";

let customerCommunicationObj2= new customerCommunicationModel();
    customerCommunicationObj2.emailId="kanaiyabhanu008@gmail.com";
    customerCommunicationObj2.mobileNo="8291439277";

let customerCommunicationArrayObj=new Array();
    customerCommunicationArrayObj.push(customerCommunicationObj1); //array at 0
    customerCommunicationArrayObj.push(customerCommunicationObj2);


let customerLoginObj= new customerLoginModel();
    customerLoginObj.userName="kanaiya7";
    customerLoginObj.password="123;"

let customerModelObj= new customerModel();
    customerModelObj.firstName="Kanaiya";
    customerModelObj.lastName="Bhanushali";
    customerModelObj.age="24";
    customerModelObj.customerLogin=customerLoginObj; //one to one
    customerModelObj.customerCommunicationList=customerCommunicationArrayObj; //one to many

//Display as a Javascript object in a console
    console.log(customerModelObj); 

//Display as a JSON object in a console (Serialization)
let customerModelJson = JSON.stringify(customerModelObj); //serialization
    console.log(customerModelJson);

let customerModelObj1 = JSON.parse(customerModelJson); //De-serialization
    console.log(customerModelObj1);