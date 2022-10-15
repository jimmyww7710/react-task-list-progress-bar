import { useState } from 'react';
import { StyledDetails } from '../style/details.styled' 

function Details({name, days}) {
    const[detailsName, setDetailsName] = useState(name);
    const updateName = function(e) {
        setDetailsName(e.target.value);
    }

    const[detailsDays, setDetailsDays] = useState(days);
    const updateDays = function(e) {
        setDetailsDays(e.target.value);
    }

    return (
      <StyledDetails> 
        title: <input value={detailsName} onChange={updateName} /> 
        days: <input value={detailsDays}  onChange={updateDays} />
      </StyledDetails>
    );
  }
  
  export default Details;
  