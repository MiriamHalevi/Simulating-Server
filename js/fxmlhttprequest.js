class fxmlhttprequest{
    constructor() {
        this.method = "";
        this.url = "";
        this.response=null;
        this.onload=null;
        this.data=null;
    }
    open(metohd,url) {
        this.method = metohd;
        this.url = url;
    }
    send=(data) =>{
        this.data=data;
        this.response=server.AllServer(this);
        this.onload();   
    }
}