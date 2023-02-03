const prompt=require("prompt-sync")();
class Node{
    data;
    nextNode;
    constructor(value)
    {
        this.data=value;
    }
}
class Queues
{
    root=null;
    head=null;
    count=0;
    add(value)
    {
        if(this.root==null)
        {
            this.root=new Node(value);
            this.root.nextNode=null;
            this.count++;
        }
        else{
           this.head=new Node(value);
           this.head.nextNode=this.root;
           this.root=this.head; 
           this.head=null;
           this.count++;
        }
    }
    display()
    {
        var temp=this.root;
        if(temp==null)
        {
            console.log("Queue is empty");
        }
        while(temp!=null)
        {
            console.log(temp.data);
            temp=temp.nextNode;
        }
    }
    remove()
    {
        var temp=this.root;
        this.root=temp.nextNode;   
    }
}
var queues=new Queues();
while(true)
{
    console.log("\n1)add the Element \n2)remove the element \n3)display the element \n4)exit ");
    var choice=parseInt(prompt("Choose any one of the option in the above: "));
    if(choice==1)
    {
        element=parseInt(prompt("Enter the  element:"));
        queues.add(element);
    }
    else if(choice==2)
    {
        queues.remove()
    }
    else if(choice==3)
    {
        queues.display();
    }
    else if(choice==4)
    {
        break;
    }
}