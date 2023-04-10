class PageController extends Controller{

    constructor(regex, model, view){
        super(model, view);
        this._regex = regex;
    }
    
    get regex(){ return this._regex; }
    
    route(url){
        let result;
        if (result  = !!url.match(this._regex))
            this.view.refresh();
        return result;
    }

    
    
    }
    
    