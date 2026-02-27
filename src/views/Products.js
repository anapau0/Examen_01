import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../components/actions/ProductActions';
import { style_01 } from '../styles/style_01';

const Products = ({ navigation }) => {

  const dispatch = useDispatch();
  const products = useSelector(state => state.storeData.products);

  const loadProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      dispatch(setProducts(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <View style={style_01.container}>
      <Text style={style_01.title}>Fake Store</Text>

      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={style_01.card}
            onPress={() => navigation.navigate('Detail', { product: item })}
          >
            <Text>{item.title}</Text>
            <Text>${item.price}</Text>
          </TouchableOpacity>
          
          
        )}
      />
      <TouchableOpacity
  style={style_01.button}
  onPress={() => navigation.navigate('Cart')}
>
  <Text style={style_01.buttonText}>Ir al Carrito 🛒</Text>
</TouchableOpacity>
    </View>
  );
};

export default Products;