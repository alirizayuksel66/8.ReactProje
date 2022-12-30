import { Helmet } from "react-helmet";

export default function Home() {
    return (
        <div>
            <Helmet>
                <title>AnaSayfa</title>
                <meta name="description" content="anasayfa description" />
            </Helmet>
            home page
        </div>
    )
}