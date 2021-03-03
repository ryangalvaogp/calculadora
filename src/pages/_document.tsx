import Document, {Html, Head, Main, NextScript} from 'next/document'

export default class myDocument extends Document{
    render(){
        return(
            <Html>
                <Head>
                    
                </Head>

                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}