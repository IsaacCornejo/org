import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://isaaccornejo.github.io/portfolio-alura-one/' target="_blank">
                <img src="/img/portfolio.png" alt='Portfolio' />
            </a>
            <a href='https://github.com/IsaacCornejo/' target="_blank">
                <img src="/img/github.png" alt='Github' />
            </a>
            <a href='https://www.linkedin.com/in/isaac-cornejo-81aa14192/' target="_blank">
                <img src="/img/linkedin.png" alt='Linkedin' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Isaac C.</strong>
    </footer>
}

export default Footer