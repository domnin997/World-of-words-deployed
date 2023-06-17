import './app-about.css';
import AppAboutItem from '../app-about-item/app-about-item.js';
import studyingPic from './study_icon_2.png';
import filterPic from './filter_icon_5.png';
import freePic from './free_icon.png';
import categoryPic from './categories_icon.png';
import {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function AppAbout () {

    return (
        <div>
        <Container className='about_block_wrapper'>
            <Row>
                <AppAboutItem pic={studyingPic} text={'World of Words - это приложение для создания собственного словаря иностранных слов. Добавляйте и удаляйте изученные слова, а также перевод к ним.'}> </AppAboutItem>
                <AppAboutItem pic={filterPic} text={'Работать со словарем легко благодаря ряду фильтров - сортируйте слова по дате добавления и категории. '}> </AppAboutItem>
                <AppAboutItem pic={freePic} text={'Приложение абсолютно бесплатно - добавляйте любое количество слов и пользуйтесь словарем в любое время с разных устройств.'}> </AppAboutItem>
                <AppAboutItem pic={categoryPic} text={'Устанавливаейте приоритет для изучения и интервалы повтоения, чтобы ускорить процесс.'}> </AppAboutItem>
            </Row>
        </Container>
        </div>
    ); 
}

export default AppAbout;