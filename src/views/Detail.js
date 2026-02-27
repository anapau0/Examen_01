import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../components/actions/ProductActions';
import { style_01 } from '../styles/style_01';

const Detail = ({ route }) => {

  const { product } = route.params;
  const dispatch = useDispatch();

  return (
    <View style={style_01.container}>
      <Text style={style_01.title}>{product.title}</Text>
      <Text>{product.description}</Text>
      <Text>${product.price}</Text>

      <TouchableOpacity
        style={style_01.button}
        onPress={() => {
          dispatch(addToCart(product));
          Alert.alert("Producto agregado", "Se agregó al carrito correctamente 🛒");
        }}
      >
        <Text style={style_01.buttonText}>Agregar al carrito</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Detail;