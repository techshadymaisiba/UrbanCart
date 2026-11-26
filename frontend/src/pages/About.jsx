
function About() {

    //Internal CSS

    const headingStyles = {
        color: "blue",
        fontSize: "30px",
        fontWeight: "bold"
    };

    const paragraphStyles = {
        color: "white",
        fontSize: "16px",
        lineHeight: "1.5"
    };

    const imageStyles = {
        width: "50%",
        height: "50%",
        marginRight: "10px",
        borderRadius: "10px"
    };



    return (

        <div>
            <h1 style={headingStyles}>About Us</h1>
            <p className="text-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam similique ullam nihil aperiam sequi voluptatum praesentium expedita, ipsum temporibus reiciendis debitis, repellat quos nobis recusandae cum ducimus atque minima iusto.
            Libero, perspiciatis! Nemo modi dolore repellendus corporis aliquam similique magni reprehenderit earum. Illo, harum, quas soluta provident itaque eveniet ipsam mollitia deleniti iusto, voluptatem neque aliquid fugiat consectetur nisi architecto.
            Praesentium porro ab natus sunt aliquid veniam ipsam culpa voluptatem, assumenda sequi! Asperiores corrupti facilis exercitationem quia nulla amet. Cumque fugiat, error temporibus nam omnis sequi minima sed quas accusantium.</p>

            <img src="images/Porsche 911 4K wallpaper for pc.jpeg" alt="Porsche 911" style={imageStyles} />
        </div>
    );
}

export default About;