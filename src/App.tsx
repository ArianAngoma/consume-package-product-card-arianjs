import './App.css';
import {ProductButtons, ProductImage, ProductTitle, ProductCard} from 'product-card-arianjs';
import {MyLabel} from 'my-storybook-components-arianjs';

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

            <MyLabel label={'Hola Mundo'} size={'h1'}/>
        </div>
    );
}

export default App;
