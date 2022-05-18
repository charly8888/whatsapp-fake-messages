import css from './header.module.css'
const Header = ({ estaEscribiendo }) => {
  return (
    <header className={css.containerHeader}>
      <svg viewBox="0 0 24 24" width="24" height="24" className="">
        <path
          fill="currentColor"
          d="m12 4 1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z"
        ></path>
      </svg>
      <div className={css.imageGroup}></div>
      <section className={css.headingContainer}>
        <h3>Jóvenes</h3>
        {estaEscribiendo ? (
          <p>{estaEscribiendo} está escribiendo...</p>
        ) : (
          <p>German, ana, lalo</p>
        )}
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
        <path
          fill="currentColor"
          d="M4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H16Q16.825 4 17.413 4.588Q18 5.175 18 6V10.5L22 6.5V17.5L18 13.5V18Q18 18.825 17.413 19.413Q16.825 20 16 20ZM4 18H16Q16 18 16 18Q16 18 16 18V6Q16 6 16 6Q16 6 16 6H4Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18ZM4 18Q4 18 4 18Q4 18 4 18V6Q4 6 4 6Q4 6 4 6Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18Z"
        />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
        <path
          fill="currentColor"
          d="M19.95 21Q16.725 21 13.663 19.562Q10.6 18.125 8.238 15.762Q5.875 13.4 4.438 10.337Q3 7.275 3 4.05Q3 3.6 3.3 3.3Q3.6 3 4.05 3H8.1Q8.45 3 8.725 3.225Q9 3.45 9.05 3.8L9.7 7.3Q9.75 7.65 9.688 7.937Q9.625 8.225 9.4 8.45L6.975 10.9Q8.025 12.7 9.613 14.275Q11.2 15.85 13.1 17L15.45 14.65Q15.675 14.425 16.038 14.312Q16.4 14.2 16.75 14.25L20.2 14.95Q20.55 15.025 20.775 15.287Q21 15.55 21 15.9V19.95Q21 20.4 20.7 20.7Q20.4 21 19.95 21ZM6.025 9 7.675 7.35Q7.675 7.35 7.675 7.35Q7.675 7.35 7.675 7.35L7.25 5Q7.25 5 7.25 5Q7.25 5 7.25 5H5.025Q5.025 5 5.025 5Q5.025 5 5.025 5Q5.15 6.025 5.375 7.025Q5.6 8.025 6.025 9ZM19 18.95Q19 18.95 19 18.95Q19 18.95 19 18.95V16.75Q19 16.75 19 16.75Q19 16.75 19 16.75L16.65 16.275Q16.65 16.275 16.65 16.275Q16.65 16.275 16.65 16.275L14.975 17.95Q15.95 18.375 16.963 18.625Q17.975 18.875 19 18.95ZM15 17.925Q15 17.925 15 17.925Q15 17.925 15 17.925Q15 17.925 15 17.925Q15 17.925 15 17.925Q15 17.925 15 17.925Q15 17.925 15 17.925Q15 17.925 15 17.925Q15 17.925 15 17.925ZM6.025 9Q6.025 9 6.025 9Q6.025 9 6.025 9Q6.025 9 6.025 9Q6.025 9 6.025 9Q6.025 9 6.025 9Q6.025 9 6.025 9Q6.025 9 6.025 9Q6.025 9 6.025 9Z"
        />
      </svg>
      <svg viewBox="0 0 24 24" width="24" height="24" className="">
        <path
          fill="currentColor"
          d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
        ></path>
      </svg>
    </header>
  )
}

export default Header
