import React from 'react';
import {Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import {Container, TitleInput, InputForm, BtnSubmitForm, TxtSubmitForm} from './styles'

export default function Orcamento() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={{flexGrow:1}}>
      <Container>

        <TitleInput>Nome</TitleInput>
        <InputForm placeholder="Nome completo" autoCorrect={false}/>

        <TitleInput>Email</TitleInput>
        <InputForm placeholder="Digite seu email" autoCorrect={false}/>

        <TitleInput>Telefone</TitleInput>
        <InputForm placeholder="(xx)xxxxx-xxxx" autoCorrect={false}/>

        <TitleInput>WatsApp</TitleInput>
        <InputForm placeholder="(xx)xxxxx-xxxx" autoCorrect={false}/>

        <TitleInput>Projeto</TitleInput>
        <InputForm placeholder="Fale sobre o projeto" autoCorrect={false}/>

        <BtnSubmitForm>
          <TxtSubmitForm>
            Cadastrar
          </TxtSubmitForm>
        </BtnSubmitForm>
        
      </Container>
    </ScrollView>
    
  );
}
