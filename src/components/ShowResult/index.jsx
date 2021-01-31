import React from 'react'
import { Modal, Alert } from 'antd';

import 'antd/dist/antd.css';
const ShowResult = ({ onClose, results, data, showModalResult }) => {
    return (
        <Modal
            title="Suas respostas..."
            visible={showModalResult}
            onOk={false}
            onCancel={onClose}
            style={{overflow: 'hidden', maxHeight: 450}}
        >
            <ul>
                {results.map((result, i) => (
                    <li key={i} style={{listStyle: 'none'}}>
                        <p style={{margin:0}}><strong>{result.q}</strong></p>
                        <Alert message={`Sua resposta: ${result.a}`} type={result.a === data[i].answer ? "success" : "error"} showIcon />

                        {/* <p className={result.a === data[i].answer ? 'has-background-success has-text-white p-2' : 'has-background-danger has-text-white p-2'}>Sua resposta: {result.a}</p> */}
                        {result.a !== data[i].answer && <p style={{marginTop: 8}}>Resposta correta: {data[i].answer}</p>}
                    </li>
                ))}
            </ul>
        </Modal >
    )
}

export default ShowResult