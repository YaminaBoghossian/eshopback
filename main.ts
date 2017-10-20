import * as express from 'express';


const app = express();
app.listen(3020,'localhost',function(){
    console.log('server on 3020');
});
