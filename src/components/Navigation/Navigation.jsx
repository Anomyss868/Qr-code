import { Link } from "react-router-dom";
import s from './Navigation.module.css';

export const Navigation = () => {
    return (
        <nav className={s.na}>
            <Link  to="/Qr-code/generate" >Генерировать QR код</Link>
            <Link to="/Qr-code/scan">Сканировать QR код</Link>
            <Link to="/Qr-code/generateHistory">История Генерирования</Link>
            <Link to="/Qr-code/scanHistory">История Сканирования</Link>
        </nav>
    );
};