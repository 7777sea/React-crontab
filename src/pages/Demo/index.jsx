import React from 'react';
import InputCron from '@/components/l/InputCron';

const Demo = () => {

    return <div style={{height: '100%'}}>
        <InputCron 
            onChange={(value) => console.log(value)} 
            value={''}
            style={{ width: 576 }}
            lang='zh_CN'
            type={['minute', 'hour', 'day', 'month', 'week']}
        />
    </div>
}

export default Demo;