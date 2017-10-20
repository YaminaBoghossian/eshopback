import * as express from 'express';
import 'reflect-metadata';

const app = express();
app.listen(3020,'localhost',function(){
    console.log('server on 3020');
});
