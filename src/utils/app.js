import tooltip from './tooltip';

const app = {
    init : function(){
        tooltip.init();
    }
}

addEventListener('DOMContentLoaded', app.init)

export default app;