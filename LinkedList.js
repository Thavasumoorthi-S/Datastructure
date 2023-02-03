const prompt=require("prompt-sync")();
class Node{
    data;
    nextNode;
    constructor(value){
        this.data= value;
    }
}
class Linkedlist{
        rootNode = null;
        count = 0;
        middnode=null;
        addElement(value){
                if(this.rootNode == null){
                    this.rootNode= new Node(value)
                    this.count++;
                }else{
                    var temp = this.rootNode;
                    while(temp.nextNode != null){
                        temp = temp.nextNode;
                    }
                    temp.nextNode = new Node(value);
                    this.count++;
                }
                console.log("successfully Element added ");
            }
        removeElement(indecx){
           var prev= this.rootNode;
           var temp1=this.rootNode.nextNode;
           var index=1;
           while(index!=indecx-1)
           {
            temp1=temp1.nextNode;
            prev=prev.nextNode;
            index++;
           }
           prev.nextNode=temp1.nextNode;
           console.log("Successfully Removed Element ");
        }
        addMiddleElement(value,indecx)
        {
           var prev= this.rootNode;
           var temp1=this.rootNode.nextNode;
           let count1=1;
           while(count1!=(indecx-1))
           {
            temp1=temp1.nextNode;
            prev=prev.nextNode;
            count1++;
           }
           this.middnode=new Node(value);
           this.middnode.nextNode=prev.nextNode;
           prev.nextNode=this.middnode;
           console.log("Successfully index based Element inserted ");

        }
        display(){
            var temp = this.rootNode;
    
            if(temp == null){
                console.log(" LinkedList Is empty!")
            }else{
            while(temp != null ){
                console.log(temp.data)
                temp = temp.nextNode;
            }

        }
        }
}
var list = new Linkedlist();
var index;
while(true)
{
    console.log("\n1)add the Element \n2)index based remove element \n3)particular index based insert element\n4)display \n5)exit");
    var choice=parseInt(prompt("Choose any one of the option in the above: "));
    if(choice==1)
    {
        element=parseInt(prompt("Enter the  element:"));
        list.addElement(element);
    }
    else if(choice==2)
    {
        index=parseInt(prompt("Enter the index "));
        list.removeElement(index);
    }
    else if(choice==3)
    { 
        element=parseInt(prompt("Enter the  element:"));
        index=parseInt(prompt("Enter the index "));
        list.addMiddleElement(element,index);
    }
    else if(choice==4)
    {
        list.display();   
    }
    else if(choice==5)
    {
        break;
    }
}
