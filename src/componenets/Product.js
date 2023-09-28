import {useQuery} from '@apollo/client';
import gql from 'graphql-tag';

const products = gql`
{
products{
name
}
}
`;

function Product() {
    const {data, loading, error} = useQuery(products);
    if (loading) {
        return (<div>loading</div>);
    }

    if (error) {
        return (<div>{error.message}</div>);
    }
    if (data?.products?.length > 0) {
        return (
            <div>
                <ul>
                    {data.products.map(({name}) => (
                        <li key={name}>{name.toString()}</li>
                    ))}
                </ul>
            </div>
        );
    }
    return (<div></div>);
}

export default Product;
