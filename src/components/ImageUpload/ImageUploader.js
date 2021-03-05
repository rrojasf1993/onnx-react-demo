import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { Container, Row, Table, Col, Button } from 'reactstrap';

export const ImageUploader = (props) => 
{
   const [uploadedImages, setUploadedImages] = useState([]);
   
   const handleUpload=()=>{
     props.onAnalyisisRequest(uploadedImages);
   }

    return (
        <Container>
            <Row>
                <Col>
                    <div>
                        <h2>Cargar imagenes para analizar</h2>
                        <Dropzone onDrop={uploadedFiles => {
                            setUploadedImages(uploadedFiles)
                        }}>
                            {({ getRootProps, getInputProps }) => (
                                <section>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <p>Arrastre una imagen , o haga click para seleccionar</p>
                                    </div>
                                </section>
                            )}
                        </Dropzone>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>Imagenes cargadas</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                uploadedImages.map((image, index) => {
                                    return (<tr key={index}>
                                        <td ><Row><Col><p>{image.name}-  Tamaño: {image.size} bytes</p></Col></Row></td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Button onClick={handleUpload}>Analyze images</Button>
        </Container>)
}
