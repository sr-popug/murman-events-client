import './styles/info.css'

export default function Info() {

    return(
        <section className="info">
            <article className="bg">
                <div className="row">
                    <div className="circle"></div>
                </div>
                <div className="row">
                    <div className="sq"></div>
                </div>
                <div className="row">
                    <div className="point"></div>
                </div>
                <div className="row">
                    <div className="point"></div>
                    <div className="sq"></div>
                </div>
            </article>
            <article className="content">
                <h2>О НАС!</h2>
                <div className="paragraphs">
                    <p>&#10024; Добро пожаловать на наш сайт, посвященный предстоящим мероприятиям в Мурманске! Мы создали эту платформу, чтобы быть твоим надежным проводником в мире развлечений и культурных событий в этом красивом городе на севере России. </p>
                    <br />
                    <p>&#128293; Через наш сайт ты сможешь узнать о разнообразных мероприятиях, включая концерты, фестивали, выставки, спортивные соревнования и многое другое. Мы постоянно обновляем нашу базу данных, чтобы ты всегда был в курсе самых интересных событий, которые происходят рядом с тобой.</p>
                    <br />
                    <p>	&#127775; На нашем сайте ты найдешь самые актуальные и интересные мероприятия, которые проходят в Мурманске. У нас есть широкий выбор событий для всех возрастов и интересов, так что всегда найдется что-то особенное для каждого.</p>
                </div>
            </article>
        </section>
    )
}