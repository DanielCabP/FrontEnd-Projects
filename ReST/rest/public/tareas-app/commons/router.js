class Router{

    constructor(){
        this._pageControllers = [];
        this.init();
    }

    init(){
        window.onpopstate = function(){
            router.routeControllers(document.location.pathname);
        }
    }


    addPageController(pageController){
        this._pageControllers.push(pageController);
    }


    async route(url){
        window.event.preventDefault();

        url = url ? url : (window.event.target.href ? window.event.target.href : document.location.pathname);
        window.history.pushState(window.history.state, '', url);
        this.routeControllers(url);
    }


    async routeControllers(url){
        let i = 0;
        let result;
        while(i < this._pageControllers.length){
            if(result = await this._pageControllers[i].route(url))
                i = this._pageControllers.length;
            else
                i++;
        }
    }

}