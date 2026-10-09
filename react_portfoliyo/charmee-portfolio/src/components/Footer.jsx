import "./Footer.css"
const Footer =() =>{
    return(
        <>
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Charmee Paneliya.
                    All rights reserved.
                </p>

                <p>Designed & Built with ❤️ by Charmee</p>
            </footer>
        </>
    )
}
export default Footer;