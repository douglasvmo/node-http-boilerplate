import * as React from 'react';



interface IndexProps {
    msg: string
}

const Login: React.FunctionComponent<IndexProps> = (props) => {
    return (
        <html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Web site created using create-react-app" />
                <link rel="stylesheet" type="text/css" href="/css/global.css" />
                <link rel="stylesheet" type="text/css" href="/css/landing.css" />
            </head>
            <body>
                <main className="container" id="landing-page">
                    <div className="welcome">
                        <p>Welcome</p>
                    </div>
                    <form method="POST" action="/users">
                        <fieldset>
                            <legend>Sign In</legend>
                            <div className="input-block">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" />
                            </div>
                            <div className="input-block">
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" />
                            </div>
                            <div className="input-block">
                                <label htmlFor="password">Password</label>
                                <input type="text" name="password" />
                            </div>
                        </fieldset>
                        <div className="button-container">
                            <input type="submit" />
                        </div>
                    </form>

                </main>

            </body>
        </html>
    )



}

export default Login;