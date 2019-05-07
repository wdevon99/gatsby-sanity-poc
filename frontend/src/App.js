import React from 'react';
import TopNavigation from './components/common/TopNavigation';
import Footer from './components/common/Footer'

const App = ({ element }) => {
    return (
        <div>
            <TopNavigation />
            {element}
            <Footer />
        </div>
    )
}

export default App;