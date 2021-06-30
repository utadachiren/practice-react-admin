import * as React from 'react'
import dynamic from 'next/dynamic'

const App = dynamic(() => import('../components/pages/admin/index'), { ssr: false })

export default App
