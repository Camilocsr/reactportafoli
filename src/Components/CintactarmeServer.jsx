import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import axios from 'axios';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const InfoContactos = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    axios.get('http://3.144.250.142:80/FormulariosContactar')
      .then(response => {
        setDatos(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(datos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setDatos(items);
  };

  return (
    <Container>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <Row
              xs={1} md={2} lg={3}
              className="g-4"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {datos.map((contacto, index) => (
                <Draggable key={contacto.id} draggableId={contacto.id.toString()} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Col>
                        <Card>
                          <Card.Body>
                            <Card.Title>{contacto.name}</Card.Title>
                            <Card.Text>
                              <strong>Email:</strong> {contacto.email} <br />
                              <strong>Número:</strong> {contacto.number} <br />
                              <strong>WhatsApp:</strong> {contacto.whatsapp} <br />
                              <strong>Asunto:</strong> {contacto.asunto}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Row>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
}

export default InfoContactos;
