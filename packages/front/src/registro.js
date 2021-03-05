import { Form, Input, Button, Select, DatePicker } from 'antd';
import { render } from 'react-dom';
import { Redirect } from 'react-router'


const { Options } = Select;
let label;
const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 12 },
};


const config = {
    rules: [{ type: 'object', required: true, message: 'Please select time!' }],
  };

async function postServidor(data) {
    const port = window.location.port ? `:${parseInt(window.location.port)+1}` : '';
    const url = `${window.location.protocol}//${window.location.hostname}${port}/api/v1/registro`;
    const opcion = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(data)
    };

    const response = await fetch(url, opcion);
    const json = await response.json();
    return json;
    console.log(response);
     
    
}

const Registro = () => {


    const onFinish = (values) => {
        postServidor(values)
        console.log(values);
    };

    return (
        <>
            <Form {...layout} onFinish={onFinish} validarMensajes={validarMensajes}>
                <Form.Item name='userName' label='Username' rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name='realName' label='nombre completo' rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name='email' label='email' rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name='password' label="Password"  type="password" rules={[{ required: true }]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
                    <Button type='submit' htmlType='submit'>
                        Enviar
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

export default Registro;