import './index.css'

const Banner = props => {
  const {value} = props
  const {headerText, description, className} = value
  return (
    <li className={`${className} card`}>
      <div>
        <h1 className="header">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="button">Show More</button>
      </div>
    </li>
  )
}

export default Banner
