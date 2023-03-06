import React from 'react';
import { Link } from "react-router-dom";

export function Complete(){
    return(
        <div>
            <h2>登録が完了致しました！</h2>
            <Link to='/'><button>Sign In 画面へ</button></Link>
        </div>
    )
}