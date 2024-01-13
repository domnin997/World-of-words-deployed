import './about.css';
import AppAboutItem from '../../components/aboutAppItem/aboutAppItem';
import getAboutInfo from '../../services/about.service';
import { useEffect, useState } from 'react';
import LoadingSign from '../../components/loader/loadingSign';

export default function About () {
  
  const [items, setItems] = useState(<LoadingSign/>);
  async function getData () {
    const dataArray = await getAboutInfo();
    let items = dataArray.map((item) => {
      return <AppAboutItem pic={item.img} text={item.description}/>
    })
    setItems(items);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="about-app-block">
      {items}
    </div>
  )
}