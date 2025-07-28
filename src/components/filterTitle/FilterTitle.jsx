
import './filterTitle.css'
import { Form } from 'react-bootstrap'

const FilterTitle = ({researchTitle, setResearchTitle}) => {
    
    //console.log(researchTilte)
  return (
    <div className='container m-5'>
      <Form>
      
        <Form.Control type="text" placeholder="Filter by Title..." value={researchTitle} onChange={(e)=>setResearchTitle(e.target.value)} />
      
    </Form>
    </div>
  )
}

export default FilterTitle
