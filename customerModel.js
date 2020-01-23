function customerModel(){
    this.userId=undefined; //number
    this.firstName=undefined; //string
    this.lastName=undefined; //string
    this.age=undefined; //numbers

    this.customerLogin=null; //object //one to one
    this.customerCommunicationList=null //ArrayObj //one to many
}