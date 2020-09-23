import React from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Icon,
  Button,
} from "native-base";
import { StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
import Maps from "./Maps";

function Detail({ job }) {
  const moveList = () => {
    Actions.pop();
  };

  return (
    <Container>
      <Header>
        <Left style={{ flexDirection: "row", alignItems: "center" }}>
          <Button onPress={moveList} transparent>
            <Icon name="arrow-back" style={{ marginRight: 10 }} />
            <Text>List</Text>
          </Button>
        </Left>
        <Body></Body>
      </Header>
      <Content>
        <Card>
          <CardItem header>
            <Text>{job.CMPNY_NM}</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text style={styles.text}>{job.DTY_CN}</Text>
              <Text style={styles.text}>{job.HOPE_WAGE}</Text>
              <Text style={styles.text}>{job.BASS_ADRES_CN}</Text>
            </Body>
          </CardItem>
          <CardItem footer>
            <Text>위치보기</Text>
          </CardItem>
        </Card>
      </Content>
      <Maps address={job.MNGR_INSTT_NM} />
    </Container>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 15,
    marginBottom: 15,
  },
});

export default Detail;
