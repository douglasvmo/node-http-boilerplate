import * as React from 'react';



interface IndexProps {
    status: string
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
                        <p>{props.status}</p>
                    </div>
                </main>

            </body>
        </html>
    )



}

export default Login;