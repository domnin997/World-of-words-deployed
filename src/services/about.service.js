import aboutData from '../mocks/data/about.json';

export default function getAboutInfo () {
  return new Promise(
    (resolve) => setTimeout(() => resolve(aboutData), 500)
  )
}