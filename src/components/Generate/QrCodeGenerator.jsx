import { useState } from 'react'
import { QRCodeSVG } from "qrcode.react";
import { GENERATE_DATA } from "../../constans"

import s from './qrCodeGenerator.module.css'

export const QrCodeGenerator = () => {

    const [value, setValue]= useState('');
    const [result, setResult] = useState('')

    

    const OnClickHandler = (event) => {
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
        
      localStorage.setItem(
        GENERATE_DATA,
        JSON.stringify([...prevData , value])
      );
    

        setResult(value);
        setValue('');
    };

    const onChangeHandler = (event) => {
        setValue(event.target.value);
        setResult('')
    };

    return (
        <div className={s.container}>
            {result !== '' && (
                <QRCodeSVG value={value} size={200}/>
            )}

            
            <input 
            type="text" 
            value={value} 
            placeholder='Введите текст...'
            onChange={onChangeHandler} 
            className={s.input}
            />
            <button type="button" onClick={OnClickHandler}>
                Сгенерировать QR
            </button>
        </div>
    );
};

