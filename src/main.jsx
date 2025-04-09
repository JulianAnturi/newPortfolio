import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ConfigProvider */}
    {/* theme={{ */}
    {/*   token: { */}
    {/*     colorPrimary: '#1668F0', */}
    {/*       colorSecondary: "#01F09C", */}
    {/*     // borderRadius: 2, */}
    {/*     colorBgContainer: '#f6ffed', */}
    {/*   } */}
    {/* }} */}
  {/* > */}

      <App />
    {/* </ConfigProvider>, */}
  </StrictMode>
)
