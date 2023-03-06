import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';

export function Homepage() {
    return (
        <div className={'div'}>
            <h2>Sign In</h2>
            <p>e-mail</p>
            <input></input>
            <p>パスワード</p>
            <input></input><br></br>
            <button className={'signButton'}>サインイン</button>
            <p>パスワードを忘れた場合はこちら</p>
            <Link to='/signup'><p>新規登録はこちら</p></Link>
        </div>
    );
}