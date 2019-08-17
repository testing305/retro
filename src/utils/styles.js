export const colors = {
  firstColor: `white`,
  secondColor: `rgb(78,78,78)`,
  thirdColor: `black`,
  fourthColor: `#3539c2`,
  fifthColor: `#222680`,
  sixthColor: `#454bff`,
  seventhColor: `#111340`,
  eighthColor: `#3e44e6`,
  ninthColor: `#6d8592`,
}

export const textSlanted = `font-family:'Patua One';`

export const transDefault = "transition:all 0.5s ease-in-out"
export const transFunction = (
  property = "all",
  time = "0.5s",
  type = "linear"
) => {
  return `transition:${property} ${time} ${type}`
}
export const transObject = ({
  property = "all",
  time = "0.5s",
  type = "ease-in-out",
}) => {
  return `transition: ${property} ${time} ${type}`
}

export const transition = ({
  property = "all",
  time = "0.5s",
  type = "ease-in-out",
}) => {
  return `transition: ${property} ${time} ${type}`
}

export const border = ({
  width = "0.15rem",
  type = "solid",
  color = "white",
}) => {
  return `border:${width} ${type} ${color}`
}

export const letterSpacing = ({ spacing = "0.1rem" }) => {
  return `letter-spacing:${spacing}`
}
