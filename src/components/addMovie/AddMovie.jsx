import React, { useState } from 'react'
import './addMovie.css'
import { Button, Form, Modal } from 'react-bootstrap'

const AddMovie = ({add}) => {
  /*********code bootstrap***********************/
    const [show, setShow] = useState(false);

    const handleClose = () => {
      setShow(false);
      setTitle("");
    setDescription("");
    setRate("");
    setPosterUrl("");

    };

    const handleShow = () => setShow(true);
  //*********************************************** */
  //********des states pour recuperer ce que l'introduit l'utilisateur : formulaire add movie*********** */
  //useState Snippet
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
//fonction pour la gestion de l'evenement du savechanges
/*const handleAddMovie = () =>{
const newMovie = {id:Math.random(), title, description, rate, posterUrl}
add(newMovie);
//fermer boite du dialogue
handleClose();

//vider champs formulaire
setTitle("");
setDescription("");
setRate("");
setPosterUrl("");

}*/

const [errors, setErrors] = useState([]);

const handleAddMovie = () => {
  const newErrors = [];
  
  if (!title.trim()) newErrors.push("Titre requis");
  if (!description.trim()) newErrors.push("Description requise");
  if (!rate) newErrors.push("Note requise");
  else if (rate < 1 || rate > 5) newErrors.push("Note doit être entre 1-5");
  if (!posterUrl.trim()) newErrors.push("URL requise");
  else if (!posterUrl.match(/^https?:\/\//i)) newErrors.push("URL invalide");

  setErrors(newErrors);

  if (newErrors.length === 0) {
    const newMovie = {
      //soit Math.random() ou bien date.now()
      id: Math.random(),
      title: title.trim(),
      description: description.trim(),
      rate: Number(rate),
      posterUrl: posterUrl.trim()
    };
    
    add(newMovie);
    handleClose();
    
  }
}
    return (
    <div>
      <Button variant="success" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {/********gestion des erruer : verification des champs****************** */}
        {errors.length > 0 && (
    <div className="alert alert-danger">
      <ul>
        {errors.map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
    </div>
  )}
        <Form>
      <Form.Group className="mb-3" > 
        <Form.Control type="text" placeholder="Title..." value={title} onChange={(e)=>setTitle(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" > 
        <Form.Control type="text" placeholder="Description..." value={description} onChange={(e)=>setDescription(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" > 
        <Form.Control type="number" placeholder="1---->5" value={rate} onChange={(e)=>setRate(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" > 
        <Form.Control type="text" placeholder="l'URL" value={posterUrl} onChange={(e)=>setPosterUrl(e.target.value)}/>
      </Form.Group>


    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddMovie}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovie

//1.47.18