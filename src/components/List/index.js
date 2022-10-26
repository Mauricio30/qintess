
import './list.css';

const ListImages = ({ name, picture }) => {
    return (
        <section className="list">
            <img width={100} height={100} src={picture} alt="name"></img>
            <span>{name}</span>
        </section>
    );
};

export default ListImages;