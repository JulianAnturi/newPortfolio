import './Xp.css';
import {useState} from 'react';
import { Col, Row,Typography } from 'antd';
const Xp = ()=>{

  return (

    <div className="xp">
 <Row className="row-title">
      <Col span={24}>
        <div>

        </div>


    </Col>
    </Row>
    <Row className="row-title">
      <Col span={12}>
    <p> <Title text="Bitsoluciones"/> </p>
        <p> <b>Cargo</b>: Desarrollador full-stack </p>
        <p><b>Funciones</b>:</p>
        <ul>
        <li>Realizar actividades de tipo backend </li>
        <li>Realizar actividades de tipo frontend </li>
        <li>Realizar deploys en las aplicaciones </li>
        
        </ul>
        <b>administración AWS</b>: 
        <ul>
        <li>Administrar instancias de EC2</li>
        <li>Administrar Buckets S3</li>
        </ul>
    <p><b>tecnologias utilizadas:</b></p>
        <ul>
        <li>Laravel</li>
        <li>React</li>
        <li>FastAPI</li>
        <li>YOLOV8</li>
        <li>Node</li>
        <li>Linux</li>
        <li>SQL Server</li>
        <li>Postgres</li>
        <li>NGINX</li>
        <li>Bashscript</li>
        <li>Git</li>
        </ul>

    <p><b>Logros:</b></p>
        <ul>
        <li>Entrenamiento de modelos de inteligencia artificial, utilizando YOLOV8, para computer vision</li>
        <li>Entendimiento de los sistemas basados en UNIX, para realizar instalacion de servicios de Apis, con buenas practicas</li>
        <li>Mejoramiento de la logica programacional a nivel de backend y frontend</li>
        <li>-aprendi demasiado de S3, Desde como crear una instancia EC2, como conectar los sistemas al bucket S3 y como desplegar los servicios sin ningun problema</li>
        <li>Entendi, como automatizar procesos utilizando bashScript, que es un lenguaje poderosisimo para realizar automatizaciones</li>
        <li>Realice multiples cursos de Git, con el fin de entender procesos como CI/CD (integracion continua, deploy continuo)</li>
        <li>SQL Server</li>
        <li>Postgres</li>
        </ul>
      </Col>
      <Col span={12}>
      <Title text="Educadavid"/>
      </Col>
    </Row>
    <Row className="row-title">
    <Col span={12}>col-12</Col>
    <Col span={12}>col-12</Col>
    </Row>
    {/* <Row className="row"> */}
    {/*   <Col span={6}>col-6</Col> */}
    {/*   <Col span={6}>col-6</Col> */}
    {/*   <Col span={6}>col-6</Col> */}
    {/*   <Col span={6}>col-6</Col> */}
    {/* </Row> */}
    </div>

  );
}
export default Xp;

const Title = ({text}) =>{
  return (

    <Typography.Title editable level={2} style={{ margin: 10, color: "white" }}>
    {text}
    </Typography.Title>
  )
}
