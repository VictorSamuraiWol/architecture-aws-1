import './NavigateDefault.module.css'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function NavigateDefault({ isLogged, setActivateNavigateDefault }) {
  
  const navigate = useNavigate()

  useEffect(() => {
    if (isLogged) {
      navigate("/")

    }

    setActivateNavigateDefault(false)

  }, [isLogged, navigate, setActivateNavigateDefault])

}

export default NavigateDefault
