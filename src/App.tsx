import './App.css';
import {ProductButtons, ProductImage, ProductTitle, ProductCard} from 'product-card-arianjs';

const product = {
    id: '1',
    title: 'Caffe Mug - Card',
    img: './coffee-mug.png'
}

function App() {
    return (
        <div className="App App-header">
            <ProductCard product={product} initialValues={{count: 5, maxCount: 15}}>

                {
                    ({reset, increaseBy, isMaxCountReached, count, maxCount}) => (
                        <>
                            <ProductImage/>
                            <ProductTitle/>
                            <ProductButtons/>
                        </>
                    )
                }

            </ProductCard>
        </div>
    );
}

export default App;
