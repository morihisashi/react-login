import React from 'react';
import { Link } from "react-router-dom";
import'./SignUp.css'

export function Confirm(){
    return (
        <div>
            <h2>Sign Up</h2>
            <p>名前</p>
            <input></input>
            <p>e-mail</p>
            <input></input>
            <p>パスワード</p>
            <input></input><br></br>
            <Link to='/complete'><button>登録</button></Link>
            <Link to='/signup'><button>戻る</button></Link>
        </div>
    )
}