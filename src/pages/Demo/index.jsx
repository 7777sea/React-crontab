import React from 'react';
import InputCron from '@/components/l/InputCron';

const Demo = () => {

    return <div style={{height: '100%', marginLeft:'30px'}}>
        <InputCron 
            onChange={(value) => console.log(value)} 
            value={'0,1,2 * * * ?'}
            style={{ width: 576 }}
            lang='zh_CN'
            type={['minute', 'hour', 'day', 'month', 'week']}
        />
    </div>
}

export default Demo;