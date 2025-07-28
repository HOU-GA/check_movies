import React, { useState } from 'react';
import { Flex, Rate } from 'antd';
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const FilterRate = () => {
  const [value, setValue] = useState(3);
  return (
    <Flex gap="middle" vertical>
      <Rate tooltips={desc} onChange={setValue} value={value} style={{marginBottom:"2%"}}/>
      
    </Flex>
  );
};
export default FilterRate;