import Transaction from './../Transaction/index';
import Product from './index';

const ProductsContainer = ({ products, transactions, productSelected, setProductSelected }) => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-col w-full">
                <h2 className="text-xl">Tus productos disponibles</h2>

                <div className="flex flex-col lg:flex-row w-full justify-around align-top my-8">
                    {products.map((product) => {
                        return <Product key={product.id} id={product.id} name={product.name} numberProduct={product.numberProduct} balance={product.balance} productSelected={productSelected} setProductSelected={setProductSelected} />;
                    })}
                </div>
            </div>

            <div className="flex flex-col w-full px-8">
                <h3 className="text-xl text-blue-stone">Transacciones</h3>

                <section className=" w-full mt-8">
                    <article className="text-sm ">
                        {transactions.map((transaction) => {
                            return (
                                <Transaction
                                    key={transaction.id}
                                    id={transaction.id}
                                    type={transaction.type}
                                    receptor={transaction.receptor}
                                    number={transaction.number}
                                    timestamp={transaction.timestamp}
                                    ammount={transaction.ammount}
                                    img={transaction.img}
                                />
                            );
                        })}
                    </article>
                </section>
            </div>
        </div>
    );
};

export default ProductsContainer;
