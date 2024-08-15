import axios from "axios"
import { useSelector } from "react-redux"

const useAxios = () => {
  const { token } = useSelector((state) => state.auth)

  const axiosToken = axios.create({
    baseURL: "/api/v1",
    //baseURL: `${process.env.REACT_APP_BASE_URL}`,
    headers: { Authorization: `Token ${token}` },
  })

  const axiosPublic = axios.create({
    baseURL: "/api/v1",
    //baseURL: `${process.env.REACT_APP_BASE_URL}`,
  })

  return { axiosToken, axiosPublic }
}

export default useAxios
