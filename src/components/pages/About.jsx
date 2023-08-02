import about from "~/assets/about";
import CardAbout from "~/components/CardAbout";
function About() {
    return (
        <div className="page">
            {about.map((item, index) => (
                <CardAbout key={index} item={item} />
            ))}
        </div>
    );
}

export default About;
