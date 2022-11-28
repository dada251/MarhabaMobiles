import { Routes, Route } from 'react-router-dom';

import Nevigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import AddNewItem from './routes/add-new-item/add-new-item.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Nevigation />}>
        <Route index element={<Shop />} />
        <Route path='sign-in' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='addnewitem' element={<AddNewItem />} />
      </Route>
    </Routes>
  );
};

export default App;
