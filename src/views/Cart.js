import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart } from '../components/actions/ProductActions';
import { style_01 } from '../styles/style_01';

const Cart = ({ navigation }) => {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.storeData.cart) || [];

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePay = () => {

    if (cart.length === 0) {
      Alert.alert("Carrito vacío", "No hay productos para pagar.");
      return;
    }

    Alert.alert(
      "Compra realizada",
      "Gracias por su compra 🛍️",
      [
        {
          text: "OK",
          onPress: () => {
            dispatch(clearCart());
            navigation.navigate("Products");
          }
        }
      ]
    );
  };

  return (
    <View style={style_01.container}>

      <Text style={style_01.title}>Shopping Cart</Text>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={style_01.card}>
            <Text>{item.title}</Text>
            <Text>Precio: ${item.price}</Text>
            <Text>Cantidad: {item.quantity}</Text>
            <Text>Subtotal: ${(item.price * item.quantity).toFixed(2)}</Text>

            <TouchableOpacity
              onPress={() => dispatch(removeFromCart(item.id))}
            >
              <Text style={{ color: 'red' }}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
        ListFooterComponent={
          <>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 10 }}>
              Total: ${total.toFixed(2)}
            </Text>

            <TouchableOpacity
              style={style_01.button}
              onPress={handlePay}
            >
              <Text style={style_01.buttonText}>Pagar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={style_01.button}
              onPress={() => dispatch(clearCart())}
            >
              <Text style={style_01.buttonText}>Cancelar Compra</Text>
            </TouchableOpacity>
          </>
        }
      />

    </View>
  );
};

export default Cart;