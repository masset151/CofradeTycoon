import { Form, Input, Button, Select, DatePicker } from 'antd';
import { render } from 'react-dom';


const { Options } = Select;
let label;
const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 12 },
};




async function postServidor(data) {
    const port = window.location.port ? `:${parseInt(window.location.port) + 1}` : '';
    const url = `http://localhost:3001/api/v1/login`;
    const opcion = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(data)
    };

    console.log("peticion enviada")
    console.log(url)
    const response = await fetch(url, opcion);
    console.log(response,"response AMR")
    const json = await response.json();
    //console.log(response)
    return json;
    
}

const Login= () => {


    const onFinish = values => {
        postServidor(values)
        console.log(values,"Estas Dentro")
    };

    return (
        <>
            <Form {...layout} onFinish= {onFinish} validarMensajes={validarMensajes}>
                <Form.Item name='email' label='email' rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name='password' label='password' rules={[{ required: true }]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
                    <Button type='primary' htmlType='submit'>
                        Iniciar Sesion
                    </Button>
                </Form.Item>
            </Form>
        </>

    );


};

const validarMensajes = {
    required: `${label} es requerido`,
    types: {
        email: `${label} el email introducido no es valido`,
    },
};


export default Login;