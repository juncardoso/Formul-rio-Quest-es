import React, { useState } from 'react';
import { TextInput, Button, Text, View, StyleSheet, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { CheckBox } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function MathScreen({ navigation }) {
  const [mathResultado, setMathResultado] = useState(0);
  const [mathPickerValue1, setMathPickerValue1] = useState('');
  const [mathPickerValue2, setMathPickerValue2] = useState('');
  const [mathCheckbox1, setMathCheckbox1] = useState(false);
  const [mathCheckbox2, setMathCheckbox2] = useState(false);
  const [mathCheckbox3, setMathCheckbox3] = useState(false);
  const [mathCheckbox4, setMathCheckbox4] = useState(false);
  const [mathCheckbox5, setMathCheckbox5] = useState(false);
  const [mathCheckbox6, setMathCheckbox6] = useState(false);
  const [mathSelectedOption1, setMathSelectedOption1] = useState('');
  const [mathSelectedOption2, setMathSelectedOption2] = useState('');
  const [mathText1, setMathText1] = useState('');
  const [mathText2, setMathText2] = useState('');

  const handleSubmit = () => {
    let newMathResultado = 0;

    newMathResultado += mathPickerValue1 == 42 ? 1: 0;
    newMathResultado += mathPickerValue2 == 56 ? 1 : 0;
    newMathResultado += mathCheckbox1 ? 1 : 0;
    newMathResultado += mathCheckbox5 ? 1 : 0;
    newMathResultado += mathSelectedOption1 == "opcao1" ? 1 : 0;
    newMathResultado += mathSelectedOption2 == "opcao1" ? 1 : 0;
    newMathResultado += mathText1 == '12.5' ? 1 : 0;
    newMathResultado += mathText2 == '200' ? 1 : 0;

    setMathResultado(newMathResultado);

    navigation.navigate('Biologia', { mathResultado });
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.label}>  Questão 1 - Qual é o resultado de 27 + 15?</Text>
      <Picker
        selectedValue={mathPickerValue1}
        style={styles.picker}
        onValueChange={(itemValue) => setMathPickerValue1(itemValue)}
      >
        <Picker.Item label="Selecione uma opção" value="" />
        <Picker.Item label="42" value="picker1" />
        <Picker.Item label="43" value="picker2" />
        <Picker.Item label="41" value="picker3" />
      </Picker>

      <Text style={styles.label}> Questão 2 - Qual é o valor de 8 x 7? </Text>
      <Picker
        selectedValue={mathPickerValue2}
        style={styles.picker}
        onValueChange={(itemValue) => setMathPickerValue2(itemValue)}
      >
        <Picker.Item label="Selecione uma opção" value="" />
        <Picker.Item label="54" value="picker1" />
        <Picker.Item label="56" value="picker2" />
        <Picker.Item label="58" value="picker3" />
      </Picker>

      <Text style={styles.label}> Questão 3 - Se um retângulo tem 4 cm de largura e 6 cm de comprimento, qual é sua área? </Text>
      <CheckBox
        title="24 cm²"
        checked={mathCheckbox1}
        onPress={() => setMathCheckbox1(!mathCheckbox1)}
      />
      <CheckBox
        title="20 cm²"
        checked={mathCheckbox2}
        onPress={() => setMathCheckbox2(!mathCheckbox2)}
      />
      <CheckBox
        title="18 cm²"
        checked={mathCheckbox3}
        onPress={() => setMathCheckbox3(!mathCheckbox3)}
      />

      <Text style={styles.label}> Questão 4 - Qual é o próximo número na sequência: 2, 4, 6, 8, __? </Text>
      <CheckBox
        title="9"
        checked={mathCheckbox4}
        onPress={() => setMathCheckbox4(!mathCheckbox4)}
      />
      <CheckBox
        title="10"
        checked={mathCheckbox5}
        onPress={() => setMathCheckbox5(!mathCheckbox5)}
      />
      <CheckBox
        title="11"
        checked={mathCheckbox6}
        onPress={() => setMathCheckbox6(!mathCheckbox6)}
      />

      <Text style={styles.label}> Questão 5 - Se você tem 50 reais e gasta 15 reais, quantos reais você ainda tem? </Text>
      <RadioButton.Group onValueChange={setMathSelectedOption1} value={mathSelectedOption1}>
        <View style={styles.radioContainer}>
          <Text> 35 reais </Text>
          <RadioButton value="opcao1" />
        </View>
        <View style={styles.radioContainer}>
          <Text> 30 reais </Text>
          <RadioButton value="opcao2" />
        </View>
        <View style={styles.radioContainer}>
          <Text> 25 reais </Text>
          <RadioButton value="opcao3" />
        </View>
      </RadioButton.Group>

      <Text style={styles.label}> Questão 6 - Qual é a fração equivalente a 1/2? </Text>
      <RadioButton.Group onValueChange={setMathSelectedOption2} value={mathSelectedOption2}>
        <View style={styles.radioContainer}>
          <Text> 2/4 </Text>
          <RadioButton value="opcao1" />
        </View>
        <View style={styles.radioContainer}>
          <Text> 3/5 </Text>
          <RadioButton value="opcao2" />
        </View>
        <View style={styles.radioContainer}>
          <Text> 1/3 </Text>
          <RadioButton value="opcao3" />
        </View>
      </RadioButton.Group>

      <Text style={styles.label}> Questão 7 - 25 representa quantos por cento de 200? </Text>
      <TextInput
        style={styles.input}
        value={mathText1}
        onChangeText={setMathText1}
        placeholder="Resposta"
      />

      <Text style={styles.label}> Questão 8 - 30 representa 15% de qual número? </Text>
      <TextInput
        style={styles.input}
        value={mathText2}
        onChangeText={setMathText2}
        placeholder="Resposta"
      />  

      <Button title="Questões de Biologia" onPress={handleSubmit} />
    </View>
    </ScrollView>
  );
}

function BioScreen({ route, navigation }) {
  const { mathResultado } = route.params;

  const [bioResultado, setBioResultado] = useState(0);
  const [bioPickerValue1, setBioPickerValue1] = useState('');
  const [bioPickerValue2, setBioPickerValue2] = useState('');
  const [bioCheckbox1, setBioCheckbox1] = useState(false);
  const [bioCheckbox2, setBioCheckbox2] = useState(false);
  const [bioCheckbox3, setBioCheckbox3] = useState(false);
  const [bioCheckbox4, setBioCheckbox4] = useState(false);
  const [bioCheckbox5, setBioCheckbox5] = useState(false);
  const [bioCheckbox6, setBioCheckbox6] = useState(false);
  const [bioSelectedOption1, setBioSelectedOption1] = useState('');
  const [bioSelectedOption2, setBioSelectedOption2] = useState('');
  const [bioText1, setBioText1] = useState('');
  const [bioText2, setBioText2] = useState('');

  const handleSubmit = () => {
    let newBioResultado = 0;

    newBioResultado += bioPickerValue1 == 'picker2' ? 1 : 0;
    newBioResultado += bioPickerValue2 == 'picker3' ? 1 : 0;
    newBioResultado += bioCheckbox3 ? 1 : 0;
    newBioResultado += bioCheckbox6 ? 1 : 0;
    newBioResultado += bioSelectedOption1 == 'opcao2' ? 1 : 0;
    newBioResultado += bioSelectedOption2 == 'opcao2' ? 1 : 0;
    newBioResultado += bioText1.toLowerCase() == 'planta' ? 1 : 0;
    newBioResultado += bioText2.toLowerCase() == 'sol' ? 1 : 0;

    setBioResultado(newBioResultado);

    navigation.navigate('Portugues', { mathResultado,bioResultado });
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.label}> Questão 1 - Qual é a função das folhas nas plantas? </Text>
      <Picker
        selectedValue={bioPickerValue1}
        style={styles.picker}
        onValueChange={(itemValue) => setBioPickerValue1(itemValue)}
      >
        <Picker.Item label="Selecione uma opção" value="" />
        <Picker.Item label="Produzir flores" value="picker1" />
        <Picker.Item label="Realizar a fotossíntese" value="picker2" />
        <Picker.Item label="Armazenar água " value="picker3" />
      </Picker>

      <Text style={styles.label}> Questão 2 - Qual é o maior órgão do corpo humano? </Text>
      <Picker
        selectedValue={bioPickerValue2}
        style={styles.picker}
        onValueChange={(itemValue) => setBioPickerValue2(itemValue)}
      >
        <Picker.Item label="Selecione uma opção" value="" />
        <Picker.Item label="Coração" value="picker1" />
        <Picker.Item label="Pulmão" value="picker2" />
        <Picker.Item label="Pele" value="picker3" />
      </Picker>

      <Text style={styles.label}> Questão 3 - Aos seres vivos podem ser divididos em quantos grupos principais? </Text>
      <CheckBox
        title="2"
        checked={bioCheckbox1}
        onPress={() => setBioCheckbox1(!bioCheckbox1)}
      />
      <CheckBox
        title="3"
        checked={bioCheckbox2}
        onPress={() => setBioCheckbox2(!bioCheckbox2)}
      />
      <CheckBox
        title="5"
        checked={bioCheckbox3}
        onPress={() => setBioCheckbox3(!bioCheckbox3)}
      />

      <Text style={styles.label}> Questão 4 - Qual dos seguintes animais é um mamífero? </Text>
      <CheckBox
        title="Sapo"
        checked={bioCheckbox4}
        onPress={() => setBioCheckbox4(!bioCheckbox4)}
      />
      <CheckBox
        title="Pato"
        checked={bioCheckbox5}
        onPress={() => setBioCheckbox5(!bioCheckbox5)}
      />
      <CheckBox
        title="Cachorro"
        checked={bioCheckbox6}
        onPress={() => setBioCheckbox6(!bioCheckbox6)}
      />

      <Text style={styles.label}> Questão 5 - Qual parte da planta é responsável pela absorção de água e nutrientes do solo? </Text>
      <RadioButton.Group onValueChange={setBioSelectedOption1} value={bioSelectedOption1}>
        <View style={styles.radioContainer}>
          <Text> Caule </Text>
          <RadioButton value="opcao1" />
        </View>
        <View style={styles.radioContainer}>
          <Text> Raiz </Text>
          <RadioButton value="opcao2" />
        </View>
        <View style={styles.radioContainer}>
          <Text> Flor </Text>
          <RadioButton value="opcao3" />
        </View>
      </RadioButton.Group>

      <Text style={styles.label}> Questão 6 - O que é a cadeia alimentar? </Text>
      <RadioButton.Group onValueChange={setBioSelectedOption2} value={bioSelectedOption2}>
        <View style={styles.radioContainer}>
          <Text> A forma como as plantas crescem </Text>
          <RadioButton value="opcao1" />
        </View>
        <View style={styles.radioContainer}>
          <Text> A sequência de organismos que se alimentam uns dos outros </Text>
          <RadioButton value="opcao2" />
        </View>
        <View style={styles.radioContainer}>
          <Text> O ciclo da água </Text>
          <RadioButton value="opcao3" />
        </View>
      </RadioButton.Group>

      <Text style={styles.label}> Questão 7 - Qual desses seres vivos faz fotossíntese? </Text>
      <TextInput
        style={styles.input}
        value={bioText1}
        onChangeText={setBioText1}
        placeholder="Resposta"
      />

      <Text style={styles.label}> Questão 8 - Qual é a principal fonte de energia para os seres vivos? </Text>
      <TextInput
        style={styles.input}
        value={bioText2}
        onChangeText={setBioText2}
        placeholder="Resposta"
      />  

      <Button title="Questões de Português" onPress={handleSubmit} />
    </View>
    </ScrollView>
  );
}

function PortScreen({ route, navigation }) {
  const { mathResultado, bioResultado} = route.params;

  const [portResultado, setPortResultado] = useState(0);
  const [portPickerValue1, setPortPickerValue1] = useState('');
  const [portPickerValue2, setPortPickerValue2] = useState('');
  const [portCheckbox1, setPortCheckbox1] = useState(false);
  const [portCheckbox2, setPortCheckbox2] = useState(false);
  const [portCheckbox3, setPortCheckbox3] = useState(false);
  const [portCheckbox4, setPortCheckbox4] = useState(false);
  const [portCheckbox5, setPortCheckbox5] = useState(false);
  const [portCheckbox6, setPortCheckbox6] = useState(false);
  const [portSelectedOption1, setPortSelectedOption1] = useState('');
  const [portSelectedOption2, setPortSelectedOption2] = useState('');
  const [portText1, setPortText1] = useState('');
  const [portText2, setPortText2] = useState('');

  const handleSubmit = () => {
    let newPortResultado = 0;
    newPortResultado += portPickerValue1 === 'picker1' ? 1 : 0;
    newPortResultado += portPickerValue2 === 'picker2' ? 1 : 0;
    newPortResultado += portCheckbox2 ? 1 : 0;
    newPortResultado += portCheckbox4 ? 1 : 0;
    newPortResultado += portSelectedOption1 === 'opcao3' ? 1 : 0;
    newPortResultado += portSelectedOption2 === 'opcao1' ? 1 : 0;
    newPortResultado += portText1.toLowerCase() === 'no' ? 1 : 0;
    newPortResultado += portText2.toLowerCase() === 'possessivo' ? 1 : 0;

    setPortResultado(newPortResultado);

    navigation.navigate('Quimica', { mathResultado, bioResultado, portResultado });
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.label}> Questão 1 - Qual é a forma correta da palavra? </Text>
      <Picker
        selectedValue={portPickerValue1}
        style={styles.picker}
        onValueChange={(itemValue) => setPortPickerValue1(itemValue)}
      >
        <Picker.Item label="Selecione uma opção" value="" />
        <Picker.Item label="Exceção" value="picker1" />
        <Picker.Item label="Excessão" value="picker2" />
        <Picker.Item label="Exessão" value="picker3" />
      </Picker>

      <Text style={styles.label}> Questão 2 - Qual é o antônimo de "feliz"? </Text>
      <Picker
        selectedValue={portPickerValue2}
        style={styles.picker}
        onValueChange={(itemValue) => setPortPickerValue2(itemValue)}
      >
        <Picker.Item label="Selecione uma opção" value="" />
        <Picker.Item label="Alegre" value="picker1" />
        <Picker.Item label="Triste" value="picker2" />
        <Picker.Item label="Contente" value="picker3" />
      </Picker>

      <Text style={styles.label}> Questão 3 - Qual das frases está correta? </Text>
      <CheckBox
        title="Eu vou na escola."
        checked={portCheckbox1}
        onPress={() => setPortCheckbox1(!portCheckbox1)}
      />
      <CheckBox
        title="Eu vou à escola."
        checked={portCheckbox2}
        onPress={() => setPortCheckbox2(!portCheckbox2)}
      />
      <CheckBox
        title="Eu vou no escola."
        checked={portCheckbox3}
        onPress={() => setPortCheckbox3(!portCheckbox3)}
      />

      <Text style={styles.label}> Questão 4 - Identifique a oração subordinada na frase: "Quando cheguei, ela já tinha saído." </Text>
      <CheckBox
        title="Quando cheguei"
        checked={portCheckbox4}
        onPress={() => setPortCheckbox4(!portCheckbox4)}
      />
      <CheckBox
        title="Ela já tinha saído"
        checked={portCheckbox5}
        onPress={() => setPortCheckbox5(!portCheckbox5)}
      />
      <CheckBox
        title="Cheguei"
        checked={portCheckbox6}
        onPress={() => setPortCheckbox6(!portCheckbox6)}
      />

      <Text style={styles.label}> Questão 5 - Qual a classe gramatical da palavra "rápido" na frase: "Ele corre rápido"? </Text>
      <RadioButton.Group onValueChange={setPortSelectedOption1} value={portSelectedOption1}>
        <View style={styles.radioContainer}>
          <Text> Substantivo </Text>
          <RadioButton value="opcao1" />
        </View>
        <View style={styles.radioContainer}>
          <Text> Adjetivo </Text>
          <RadioButton value="opcao2" />
        </View>
        <View style={styles.radioContainer}>
          <Text> Advérbio </Text>
          <RadioButton value="opcao3" />
        </View>
      </RadioButton.Group>

      <Text style={styles.label}> Questão 6 - Qual é o plural da palavra "caderno"? </Text>
      <RadioButton.Group onValueChange={setPortSelectedOption2} value={portSelectedOption2}>
        <View style={styles.radioContainer}>
          <Text> Cadernos </Text>
          <RadioButton value="opcao1" />
        </View>
        <View style={styles.radioContainer}>
          <Text> Caderna </Text>
          <RadioButton value="opcao2" />
        </View>
        <View style={styles.radioContainer}>
          <Text> Cadernas </Text>
          <RadioButton value="opcao3" />
        </View>
      </RadioButton.Group>

      <Text style={styles.label}> Questão 7 - Complete a frase: "O sol brilha ___ céu." </Text>
      <TextInput
        style={styles.input}
        value={portText1}
        onChangeText={setPortText1}
        placeholder="Resposta"
      />

      <Text style={styles.label}> Questão 8 - Qual é a função do pronome na frase: "Ela viu o carro dele"? </Text>
      <TextInput
        style={styles.input}
        value={portText2}
        onChangeText={setPortText2}
        placeholder="Resposta"
      />  

      <Button title="Questões de Química" onPress={handleSubmit} />
    </View>
    </ScrollView>
  );
}

function QuimScreen({ route, navigation }) {
  const { mathResultado,  bioResultado, portResultado } = route.params;

  const [quimResultado, setQuimResultado] = useState(0);
  const [quimPickerValue1, setQuimPickerValue1] = useState('');
  const [quimPickerValue2, setQuimPickerValue2] = useState('');
  const [quimCheckbox1, setQuimCheckbox1] = useState(false);
  const [quimCheckbox2, setQuimCheckbox2] = useState(false);
  const [quimCheckbox3, setQuimCheckbox3] = useState(false);
  const [quimCheckbox4, setQuimCheckbox4] = useState(false);
  const [quimCheckbox5, setQuimCheckbox5] = useState(false);
  const [quimCheckbox6, setQuimCheckbox6] = useState(false);
  const [quimSelectedOption1, setQuimSelectedOption1] = useState('');
  const [quimSelectedOption2, setQuimSelectedOption2] = useState('');
  const [quimText1, setQuimText1] = useState('');
  const [quimText2, setQuimText2] = useState('');

  const handleSubmit = () => {
     let newQuimResultado = 0;

    newQuimResultado += quimPickerValue1 === 'picker1' ? 1 : 0;
    newQuimResultado += quimPickerValue2 === 'picker3' ? 1 : 0;
    newQuimResultado += quimCheckbox2 ? 1 : 0;
    newQuimResultado += quimCheckbox5 ? 1 : 0;
    newQuimResultado += quimSelectedOption1 === 'opcao1' ? 1 : 0;
    newQuimResultado += quimSelectedOption2 === 'opcao1' ? 1 : 0;
    newQuimResultado += quimText1.toLowerCase() === 'elemento químico' ? 1 : 0;
    newQuimResultado += quimText2.toLowerCase() === 'sol' ? 1 : 0;

    setQuimResultado(newQuimResultado);

    navigation.navigate('Resultado', { mathResultado, bioResultado, portResultado,quimResultado});
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.label}> Questão 1 - O que é matéria? </Text>
      <Picker
        selectedValue={quimPickerValue1}
        style={styles.picker}
        onValueChange={(itemValue) => setQuimPickerValue1(itemValue)}
      >
        <Picker.Item label="Selecione uma opção" value="" />
        <Picker.Item label="Tudo que ocupa espaço e tem massa" value="picker1" />
        <Picker.Item label="Apenas sólidos" value="picker2" />
        <Picker.Item label="Apenas líquidos" value="picker3" />
      </Picker>

      <Text style={styles.label}> Questão 2 - Qual é o estado físico da água a 0 °C? </Text>
      <Picker
        selectedValue={quimPickerValue2}
        style={styles.picker}
        onValueChange={(itemValue) => setQuimPickerValue2(itemValue)}
      >
        <Picker.Item label="Selecione uma opção" value="" />
        <Picker.Item label="Líquido" value="picker1" />
        <Picker.Item label="Gasoso" value="picker2" />
        <Picker.Item label="Sólido" value="picker3" />
      </Picker>

      <Text style={styles.label}> Questão 3 - O que acontece quando o gelo derrete? </Text>
      <CheckBox
        title="Ele se transforma em vapor"
        checked={quimCheckbox1}
        onPress={() => setQuimCheckbox1(!quimCheckbox1)}
      />
      <CheckBox
        title="Ele se transforma em água"
        checked={quimCheckbox2}
        onPress={() => setQuimCheckbox2(!quimCheckbox2)}
      />
      <CheckBox
        title="Ele desaparece"
        checked={quimCheckbox3}
        onPress={() => setQuimCheckbox3(!quimCheckbox3)}
      />

      <Text style={styles.label}> Questão 4 - Qual é o processo de passar do estado gasoso para o líquido? </Text>
      <CheckBox
        title="Evaporação"
        checked={quimCheckbox4}
        onPress={() => setQuimCheckbox4(!quimCheckbox4)}
      />
      <CheckBox
        title="Condensação"
        checked={quimCheckbox5}
        onPress={() => setQuimCheckbox5(!quimCheckbox5)}
      />
      <CheckBox
        title="Solidificação"
        checked={quimCheckbox6}
        onPress={() => setQuimCheckbox6(!quimCheckbox6)}
      />

      <Text style={styles.label}> Questão 5 - Qual é a fórmula química da água? </Text>
      <RadioButton.Group onValueChange={setQuimSelectedOption1} value={quimSelectedOption1}>
        <View style={styles.radioContainer}>
          <Text> H₂O </Text>
          <RadioButton value="opcao1" />
        </View>
        <View style={styles.radioContainer}>
          <Text> CO₂ </Text>
          <RadioButton value="opcao2" />
        </View>
        <View style={styles.radioContainer}>
          <Text> O₂ </Text>
          <RadioButton value="opcao3" />
        </View>
      </RadioButton.Group>

      <Text style={styles.label}> Questão 6 - Qual dos seguintes é um exemplo de mistura? </Text>
      <RadioButton.Group onValueChange={setQuimSelectedOption2} value={quimSelectedOption2}>
        <View style={styles.radioContainer}>
          <Text> Cadernos </Text>
          <RadioButton value="opcao1" />
        </View>
        <View style={styles.radioContainer}>
          <Text> Caderna </Text>
          <RadioButton value="opcao2" />
        </View>
        <View style={styles.radioContainer}>
          <Text> Cadernas </Text>
          <RadioButton value="opcao3" />
        </View>
      </RadioButton.Group>

      <Text style={styles.label}> Questão 7 - O que é um elemento químico? </Text>
      <TextInput
        style={styles.input}
        value={quimText1}
        onChangeText={setQuimText1}
        placeholder="Resposta"
      />

      <Text style={styles.label}> Questão 8 - Qual é a principal fonte de energia para os seres vivos? </Text>
      <TextInput
        style={styles.input}
        value={quimText2}
        onChangeText={setQuimText2}
        placeholder="Resposta"
      />  

      <Button title="Enviar" onPress={handleSubmit} />
    </View>
    </ScrollView>
  );
}

function ResultScreen({ route }) {
  const { mathResultado, bioResultado, portResultado, quimResultado } = route.params;

  const totalAcertos = mathResultado + bioResultado + portResultado + quimResultado;

  const totalPerguntas = 8;

  const porcentagemTotal = ((totalAcertos / (totalPerguntas * 4)) * 100).toFixed(2);

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Resultados</Text>
      
      <Text style={styles.resultText}>Matemática: {mathResultado} acertos</Text>
      <Text style={styles.resultText}>Biologia: {bioResultado} acertos</Text>
      <Text style={styles.resultText}>Português: {portResultado} acertos</Text>
      <Text style={styles.resultText}>Química: {quimResultado} acertos</Text>

      <Text style={styles.totalText}>Total de acertos: {totalAcertos} de {totalPerguntas * 4}</Text>
      <Text style={styles.totalText}>Porcentagem total: {porcentagemTotal}%</Text>

      <Button title="Voltar" onPress={() => navigation.navigate('Home')} />
</View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Form">
      <Stack.Screen name="Matematica" component={MathScreen} />
      <Stack.Screen name="Biologia" component={BioScreen} />
      <Stack.Screen name="Portugues" component={PortScreen} />
      <Stack.Screen name="Quimica" component={QuimScreen} />
      <Stack.Screen name="Resultado" component={ResultScreen} />
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  }
});
