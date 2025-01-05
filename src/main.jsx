import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, ColorModeScript,} from '@chakra-ui/react'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router'
import theme from './Theme.jsx'
import ProductCard from './components/ProductCard.jsx'
import NavBar from './components/NavBar.jsx'
import RandomDog from './components/RandomDog.jsx'
import CountryCard from './components/CountryCard.jsx'
import Test from './components/Test.jsx'
import CountryDetail from './components/CountryDetail.jsx'



const router = createBrowserRouter([{
  path : '/',
  element : <NavBar/>,
  children: [{
    path: '/',
    element : <App/>,
  },{
    path : "/products",
    element : <ProductCard/>
  },{
    path : "/dog",
    element : <RandomDog/>
  },
  {
    path: '/country',
    element : <CountryCard/>
  },
  {
    path: '/test',
    element : <Test/>
  },
  {path : '/countryDetail',
  element : <CountryDetail />
  }
]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
    </ChakraProvider>
  </StrictMode>,
)
