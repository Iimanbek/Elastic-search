<template>
    <div class="container ">
        <div class="footer-under-wrapper">
            <h2>Вы можете посмотреть еще очень многое.</h2>
            <p>Netflix предлагает огромную библиотеку полнометражных фильмов, документальных фильмов, сериалов, аниме, удостоенного наград оригинального контента Netflix и многое другое. Смотрите сколько угодно и когда угодно.</p>
            <button>ПРИСОЕДИНЯЙЕСЬ</button>
        </div>
        <footer>
            <div><a href="#">Читайте о сериалах и фильмах Netflix и смотрите бонусные видео на сайте Tudum.com.</a></div>
            <div class="mid-wrapper">
                <a href="#">Есть вопросы? Свяжитесь с нами.</a>
            </div>
            <div class="footer__inner__wrapper">
                <div class="link__wrapper">
                    <a href="#">Распространенные вопросы</a>
                    <a href="#">Для инвесторов</a>
                    <a href="#">Конфиденциальность</a>
                    <a href="#">Проверка скорости</a>
                </div>
                <div class="link__wrapper">
                    <a href="#">Центр поддержки</a>
                    <a href="#">Вакансии</a>
                    <a href="#">Настройки файлов cookie</a>
                    <a href="#">Юридические уведомления</a>
                </div>
                <div class="link__wrapper">
                    <a href="#">Аккаунт</a>
                    <a href="#">Способы просмотра</a>
                    <a href="#">Корпоративная информация</a>
                    <a href="#">Только на Netflix</a>
                </div>
                <div class="link__wrapper">
                    <a href="#">Медиацентр</a>
                    <a href="#">Правила использования</a>
                    <a href="#">Свяжитесь с нами</a>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css">
    .footer-under-wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center ;
        align-items: center;
        color: white ;
        row-gap: 30px;
        margin-top: 50px ;
        height: 60vh ;
    }
    .footer-under-wrapper h2{
        font-size: 38px;
        font-weight: 550;
        text-align: center;
        width: 50vw;
        line-height: normal;
    }
    .footer-under-wrapper p {
        text-align: center;
        font-size: 22px;
        font-weight: 400;
        line-height: normal;
        width: 50vw;
    }
    .footer-under-wrapper button{
        background: red;
        font-size: 22px ;
        font-weight: 400;
        width: 300px;
        padding: 6px 0 ;
    }
    .footer-under-wrapper button:hover{
        background: rgb(201, 37, 37);
    }
    .link__wrapper{
        display: flex;
        flex-direction: column;
        row-gap: 20px;
    }
    .link__wrapper a {
        color: rgb(69, 69, 69);
    }
    .footer__inner__wrapper{
        display: flex;
        justify-content: space-between;
        width: 80vw;
    }
    .mid-wrapper{
        margin: 40px 0 20px 0 ;
    }
    footer{
        height: 50vh;
    }
</style>