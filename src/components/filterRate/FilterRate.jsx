import React, { useState } from 'react';
import { Flex, Rate } from 'antd';
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

//props searchrate, setSearchRate : sont responsable de recuperer les etoiles et de l'envoyer a App
//props isRating : true : l'appel est fait a partir des card / false : l'appel est fait a partir du App
//props rate : il vient des card pour me communique la note ou bien rate
const FilterRate = ({searchrate, setSearchRate, isRating, rate}) => {
  //const [value, setValue] = useState(3);
  return (
    <Flex gap="middle" vertical>
      {/**isRating est true je doit afficher la note (rate fixe) */}
      {isRating?
      <Rate 
      
       value={rate}
       disabled
       style={{marginBottom:"2%"}}/> :
      //recupere la saisie de l'utilisateur
      <Rate 
      tooltips={desc} 
      value={searchrate}
      onChange={setSearchRate} 
      style={{marginBottom:"2%"}}/>}
      
    </Flex>
  );
};
export default FilterRate;