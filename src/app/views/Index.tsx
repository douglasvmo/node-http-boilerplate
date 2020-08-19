import * as React from 'react';
import Layout from './Layout'




interface IndexProps {
    msg: string
}

const Login: React.FunctionComponent<IndexProps> = (props) => {
    return (
        <html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Web site created using create-react-app" />
                <link rel="stylesheet" src="/css/gobal.css" />
            </head>
            <body>
                <main>
                    <form>
                        <fieldset>
                            <legend>login</legend>
                            <div className="input-block">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" />
                            </div>
                            <div className="input-block">
                                <label htmlFor="password">password</label>
                                <input type="text" id="password" />
                            </div>
                        </fieldset>
                    </form>
                    <div className="button-container">
                        <a href="/login" className="login">Login</a>
                        <a href="#" className="signin">SignIn</a>
                    </div>
                </main>

            </body>
        </html>
    )



}

export default Login;