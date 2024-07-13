import Events from "./components/Events/Events";
import SelectForm from "./components/SelectForm/SelectForm";


export default function Articles() {

    return(
        <section className="articles">
            <SelectForm />
            <Events />
        </section>
    )
}