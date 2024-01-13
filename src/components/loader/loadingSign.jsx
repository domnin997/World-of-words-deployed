import loaderSrc from '../../assets/icons/loader.svg';
import './loadingSign.css';

export default function LoadingSign () {
  return (
    <div className='loading-sign-block'>
      <img width={200} height={200} src={loaderSrc} />  
    </div>
  )
}