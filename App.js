import React, { useState } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import styles from './Style';

export default function App() {

    const [display, displaySet] = useState(0);
    const [memoria, memoriaSet] = useState(0);
    const [operacao, operacaoSet] = useState("");


    function tecla(valor) {

        if (valor === "c") {

            displaySet(0)
            memoriaSet(0)
            operacaoSet("")

        } else if (valor == "=") {

            if (operacao == "+") {
                displaySet(memonira + display)
            }

            else if (operacao == "-") {
                displaySet(memonira - display)
            }

            else if (operacao == "x") {
                displaySet(memonira * display)
            }

            else if (operacao == "/") {
                displaySet(memonira / display)
            }

        } else if (valor == "+") {

            memoriaSet(display)
            operacaoSet(valor)
            displaySet(0)

        } else if (valor == "-") {

            memoriaSet(display)
            operacaoSet(valor)
            displaySet(0)

        } else if (valor == "x") {

            memoriaSet(display)
            operacaoSet(valor)
            displaySet(0)

        } else if (valor == "/") {

            memoriaSet(display)
            operacaoSet(valor)
            displaySet(0)

        } else {
            displaySet(display * 10 + valor)
        }
    }


    return (

        <View style={styles.container}>

            <text>{memoria} {operacao}</text>
            <Text>{display}</Text>

            <View style={{ flexDirection: "row" }}>

                <Button title="c" onPress={() => tecla("c")} />
                <Button title="(" onPress={() => tecla("(")} />
                <Button title=")" onPress={() => tecla(")")} />
                <Button title="/" onPress={() => tecla("/")} />

            </View>

            <View style={{ flexDirection: "row" }}>

                <Button title="1" onPress={() => tecla(1)} />
                <Button title="2" onPress={() => tecla(2)} />
                <Button title="3" onPress={() => tecla(3)} />
                <Button title="+" onPress={() => tecla("+")} />

            </View>

            <View style={{ flexDirection: "row" }}>

                <Button title="4" onPress={() => tecla(4)} />
                <Button title="5" onPress={() => tecla(5)} />
                <Button title="6" onPress={() => tecla(6)} />
                <Button title="-" onPress={() => tecla("-")} />

            </View>

            <View style={{ flexDirection: "row" }}>

                <Button title="7" onPress={() => tecla(7)} />
                <Button title="8" onPress={() => tecla(8)} />
                <Button title="9" onPress={() => tecla(9)} />
                <Button title="x" onPress={() => tecla("x")} />

            </View>

            <View style={{ flexDirection: "row" }}>

                <Button title="0" onPress={() => tecla(0)} />
                <Button title="." onPress={() => tecla(".")} />
                <Button title="=" onPress={() => tecla("=")} />

            </View>



        </View>



    );

}

